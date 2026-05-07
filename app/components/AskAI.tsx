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

function getRequestCount(): number {
  try { return parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10); }
  catch { return 0; }
}

function incrementRequestCount(): number {
  try {
    const next = getRequestCount() + 1;
    sessionStorage.setItem(SESSION_KEY, String(next));
    return next;
  } catch { return 1; }
}

export default function AskAI() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestsUsed, setRequestsUsed] = useState(0);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setRequestsUsed(getRequestCount()); }, []);

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
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split("\n")) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) { fullText += parsed.text; setResponse(fullText); }
            } catch { /* skip malformed */ }
          }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "حدث خطأ غير متوقع";
      setError(`${msg} — تواصل عبر hello@yaman.io`);
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
    <section id="ask-ai" className="py-20 sm:py-24 lg:py-32 border-t border-[#E5E5E5] bg-[#FAFAFA]" aria-labelledby="ask-ai-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 border border-[#E5E5E5] bg-white rounded-full px-4 py-2 text-xs font-medium text-[#666] mb-6">
            <span>✦</span>
            <span>نموذج ذكاء اصطناعي بس يستاهل التجربة</span>
          </div>
          <h2 id="ask-ai-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-3">
            كلّم يمان بوت
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            نموذج ذكاء اصطناعي مدرّب للإجابة عليك والتحقق إذا يمان يقدر يفيدك أم لا
          </p>
        </div>

        {/* Suggested questions — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => { setInput(q); ask(q); }}
              disabled={loading}
              className="text-sm font-medium border border-[#E5E5E5] bg-white rounded-xl px-4 py-3 hover:bg-[#F5F5F5] hover:border-black transition-colors disabled:opacity-40 min-h-[44px] text-start"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={(e) => { e.preventDefault(); ask(input); }} className="mb-6">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden focus-within:border-black transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(input); } }}
              placeholder="اسألني أي شيء..."
              rows={4}
              maxLength={500}
              dir="rtl"
              className="w-full p-5 text-sm resize-none focus:outline-none leading-relaxed bg-transparent"
              aria-label="اكتب سؤالك"
            />
            <div className="flex items-center justify-between px-5 pb-4 gap-3">
              <span className="text-xs text-[#999]">{MAX_REQUESTS - requestsUsed} أسئلة متبقية</span>
              <button
                type="submit"
                disabled={loading || !input.trim() || requestsUsed >= MAX_REQUESTS}
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors min-h-[44px] flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>يكتب يمان...</span>
                  </>
                ) : (
                  <span>أرسل</span>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Social links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          <a
            href="https://www.linkedin.com/in/yamaneur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666] hover:text-black transition-colors min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>لينكد إن</span>
          </a>
          <a
            href="https://x.com/yamaneur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#666] hover:text-black transition-colors min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>إكس</span>
          </a>
          <a
            href="mailto:hello@yaman.io"
            className="flex items-center gap-2 text-sm text-[#666] hover:text-black transition-colors min-h-[44px]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>البريد الإلكتروني</span>
          </a>
        </div>

        {/* Response */}
        {(response || loading || error) && (
          <div ref={responseRef} className="bg-white border border-[#E5E5E5] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0">
                <span className="text-white text-xs">✦</span>
              </div>
              <p className="text-xs font-bold text-[#999] uppercase tracking-wider">يمان AI</p>
            </div>

            {error ? (
              <p className="text-sm text-[#666] leading-relaxed">{error}</p>
            ) : (
              <div className="text-sm leading-[2] whitespace-pre-wrap">
                {response}
                {loading && <span className="cursor-blink inline-block w-0.5 h-4 bg-black ms-0.5 align-middle" aria-hidden="true" />}
              </div>
            )}

            {response && !loading && (
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#E5E5E5]">
                <button
                  onClick={copyResponse}
                  className="flex items-center gap-1.5 text-xs font-medium border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  <span>نسخ الإجابة</span>
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-xs font-medium border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.8"/></svg>
                  <span>سؤال جديد</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
