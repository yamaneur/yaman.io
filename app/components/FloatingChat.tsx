"use client";

import { useState, useRef, useEffect } from "react";

const suggestedQuestions = [
  "كيف يساعد يمان المؤسسين في مرحلة ما قبل التمويل؟",
  "ما الفرق بين التحقق الحقيقي من الفكرة والمزيف؟",
  "ما نوع المؤسسين الذين يعمل معهم يمان؟",
  "ما أبرز ما بناه يمان وما النتائج التي حققها؟",
  "كيف يبدو العمل مع يمان بشكل عملي؟",
];

const MAX_REQUESTS = 10;
const SESSION_KEY = "yaman_ai_requests";

function getRequestCount() {
  try { return parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10); }
  catch { return 0; }
}
function incrementRequestCount() {
  try {
    const next = getRequestCount() + 1;
    sessionStorage.setItem(SESSION_KEY, String(next));
    return next;
  } catch { return 1; }
}

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestsUsed, setRequestsUsed] = useState(0);
  const [hovered, setHovered] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setRequestsUsed(getRequestCount()); }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;
    if (getRequestCount() >= MAX_REQUESTS) {
      setError("وصلت إلى الحد الأقصى للجلسة. تواصل مع يمان مباشرة عبر hello@yaman.io");
      return;
    }
    setLoading(true);
    setResponse("");
    setError("");
    setRequestsUsed(incrementRequestCount());
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, mode: "ask" }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "فشل الطلب");
      }
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("لا يوجد بيانات");
      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value, { stream: true }).split("\n")) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) { fullText += parsed.text; setResponse(fullText); }
            } catch { /* skip */ }
          }
        }
      }
    } catch (err) {
      setError(`${err instanceof Error ? err.message : "خطأ"} — تواصل عبر hello@yaman.io`);
    } finally {
      setLoading(false);
      setTimeout(() => responseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    }
  };

  const reset = () => { setInput(""); setResponse(""); setError(""); };
  const copyResponse = async () => {
    if (response) await navigator.clipboard.writeText(response).catch(() => null);
  };

  return (
    <>
      {/* ── Floating button ── */}
      <div
        className="fixed bottom-6 left-6 z-[1000]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Ripple rings — hidden when open or hovered */}
        {!open && !hovered && (
          <>
            <span
              className="absolute inset-0 rounded-full bg-black pointer-events-none"
              style={{ animation: "ripplePing 2s ease-out infinite" }}
            />
            <span
              className="absolute inset-0 rounded-full bg-black pointer-events-none"
              style={{ animation: "ripplePing 2s ease-out 0.8s infinite" }}
            />
          </>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="كلّم يمان بوت"
          className="relative w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
        >
          {open ? (
            /* X icon when open */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          ) : (
            /* Chat bubble icon */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Backdrop (mobile) ── */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[998] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ── Chat panel ── */}
      {open && (
        <div
          ref={panelRef}
          className={[
            "fixed z-[999] bg-white shadow-2xl flex flex-col overflow-hidden",
            // Mobile: full-width slide-up drawer
            "bottom-0 left-0 right-0 rounded-t-3xl max-h-[88vh]",
            // Desktop: bottom-left modal
            "lg:bottom-[96px] lg:left-6 lg:right-auto lg:w-[420px] lg:h-[640px] lg:rounded-2xl lg:max-h-none",
          ].join(" ")}
        >
          {/* Header */}
          <div className="shrink-0 px-5 pt-5 pb-4 border-b border-[#F0F0F0]">
            <div className="inline-flex items-center gap-2 border border-[#E5E5E5] rounded-full px-3 py-1.5 text-xs font-medium text-[#666] mb-3">
              <span>✦</span>
              <span>نموذج ذكاء اصطناعي بس يستاهل التجربة</span>
            </div>
            <h2 className="font-serif-display font-black text-2xl leading-tight">
              كلّم يمان بوت
            </h2>
            <p className="text-xs text-[#666] mt-1 leading-relaxed">
              نموذج ذكاء اصطناعي مدرّب للإجابة عليك والتحقق إذا يمان يقدر يفيدك أم لا
            </p>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {/* Suggested questions */}
            {!response && !loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); ask(q); }}
                    disabled={loading}
                    className="text-xs font-medium border border-[#E5E5E5] bg-white rounded-xl px-3 py-2.5 hover:bg-[#F5F5F5] hover:border-black transition-colors disabled:opacity-40 min-h-[44px] text-start leading-snug"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Response */}
            {(response || loading || error) && (
              <div ref={responseRef} className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px]">✦</span>
                  </div>
                  <p className="text-xs font-bold text-[#999] uppercase tracking-wider">يمان AI</p>
                </div>
                {error ? (
                  <p className="text-xs text-[#666] leading-relaxed">{error}</p>
                ) : (
                  <div className="text-sm leading-[1.9] whitespace-pre-wrap">
                    {response}
                    {loading && <span className="cursor-blink inline-block w-0.5 h-4 bg-black ms-0.5 align-middle" aria-hidden="true" />}
                  </div>
                )}
                {response && !loading && (
                  <div className="flex gap-2 mt-4 pt-3 border-t border-[#E5E5E5]">
                    <button onClick={copyResponse} className="flex items-center gap-1 text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1.5 hover:bg-[#F5F5F5] transition-colors">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      <span>نسخ</span>
                    </button>
                    <button onClick={reset} className="flex items-center gap-1 text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1.5 hover:bg-[#F5F5F5] transition-colors">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.8"/></svg>
                      <span>سؤال جديد</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="shrink-0 px-5 pb-5 pt-3 border-t border-[#F0F0F0]">
            <form onSubmit={(e) => { e.preventDefault(); ask(input); }}>
              <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden focus-within:border-black transition-colors">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(input); } }}
                  placeholder="اسألني أي شيء..."
                  rows={2}
                  maxLength={500}
                  dir="rtl"
                  className="w-full px-4 pt-3 pb-1 text-sm resize-none focus:outline-none leading-relaxed bg-transparent"
                  aria-label="اكتب سؤالك"
                />
                <div className="flex items-center justify-between px-4 pb-3 gap-3">
                  <span className="text-xs text-[#999]">{MAX_REQUESTS - requestsUsed} متبقية</span>
                  <button
                    type="submit"
                    disabled={loading || !input.trim() || requestsUsed >= MAX_REQUESTS}
                    className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5"
                  >
                    {loading ? (
                      <><span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>يكتب...</span></>
                    ) : (
                      <span>أرسل</span>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Social links */}
            <div className="flex justify-center gap-5 mt-3">
              <a href="https://www.linkedin.com/in/yamaneur/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#999] hover:text-black transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>لينكد إن</span>
              </a>
              <a href="https://x.com/yamaneur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[#999] hover:text-black transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                <span>إكس</span>
              </a>
              <a href="mailto:hello@yaman.io" className="flex items-center gap-1.5 text-xs text-[#999] hover:text-black transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>البريد</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
