"use client";

import { useState, useRef, useEffect } from "react";

const suggestedQuestions = [
  "ما الذي يميز يمان عن قادة المنتجات الآخرين؟",
  "ما هي أعمال الذكاء الاصطناعي التي نفذها يمان فعلياً؟",
  "هل عمل يمان مع عملاء مؤسسيين في السعودية؟",
  "ما نوع الأدوار التي لا يناسب يمان؟",
  "أخبرني عن رحلة يمان في الشركات الناشئة",
];

const MAX_REQUESTS = 10;
const SESSION_KEY = "yaman_ai_requests";

function getRequestCount(): number {
  try {
    return parseInt(sessionStorage.getItem(SESSION_KEY) || "0", 10);
  } catch {
    return 0;
  }
}

function incrementRequestCount(): number {
  try {
    const next = getRequestCount() + 1;
    sessionStorage.setItem(SESSION_KEY, String(next));
    return next;
  } catch {
    return 1;
  }
}

export default function AskAI() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestsUsed, setRequestsUsed] = useState(0);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRequestsUsed(getRequestCount());
  }, []);

  const ask = async (question: string) => {
    if (!question.trim() || loading) return;

    const used = getRequestCount();
    if (used >= MAX_REQUESTS) {
      setError("وصلت إلى الحد الأقصى للجلسة (١٠ أسئلة). تواصل عبر hello@yaman.io لمحادثة مباشرة.");
      return;
    }

    setLoading(true);
    setResponse("");
    setError("");
    const count = incrementRequestCount();
    setRequestsUsed(count);

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
        const lines = chunk.split("\n");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                fullText += parsed.text;
                setResponse(fullText);
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "حدث خطأ غير متوقع";
      setError(`الذكاء الاصطناعي غير متاح حالياً. ${msg}. تواصل عبر hello@yaman.io`);
    } finally {
      setLoading(false);
      setTimeout(() => responseRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const handleSuggestion = (q: string) => {
    setInput(q);
    ask(q);
  };

  const copyResponse = async () => {
    if (response) {
      await navigator.clipboard.writeText(response).catch(() => null);
    }
  };

  const reset = () => {
    setInput("");
    setResponse("");
    setError("");
  };

  return (
    <section
      id="ask-ai"
      className="py-20 lg:py-28 border-t border-[#E5E5E5] bg-[#FAFAFA]"
      aria-labelledby="ask-ai-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-[#E5E5E5] bg-white rounded-full px-4 py-2 text-xs font-medium text-[#666] mb-6">
            <span>✦</span>
            <span>مدعوم بـ Claude من Anthropic</span>
          </div>
          <h2
            id="ask-ai-heading"
            className="font-serif-display font-black text-3xl sm:text-4xl mb-4"
          >
            اسأل الذكاء الاصطناعي عني
          </h2>
          <p className="text-[#666] text-base max-w-xl mx-auto leading-relaxed">
            إجابات مبنية على عملي وتفكيري وخلفيتي الفعلية — وليس أوهاماً
          </p>
        </div>

        {/* Suggested Questions */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSuggestion(q)}
              disabled={loading}
              className="text-xs font-medium border border-[#E5E5E5] bg-white rounded-full px-4 py-2 hover:bg-[#F5F5F5] hover:border-black transition-colors disabled:opacity-40 min-h-[44px]"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden focus-within:border-black transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  ask(input);
                }
              }}
              placeholder='ما هي خبرة يمان في تحول الذكاء الاصطناعي؟ — أو — هل يمان مناسب لدور رئيس المنتجات في شركة Series B؟'
              rows={4}
              maxLength={500}
              dir="rtl"
              className="w-full p-5 text-sm resize-none focus:outline-none leading-relaxed bg-transparent"
              aria-label="اكتب سؤالك عن يمان"
            />
            <div className="flex items-center justify-between px-5 pb-4 gap-3">
              <span className="text-xs text-[#999]">
                {input.length}/٥٠٠ • {MAX_REQUESTS - requestsUsed} أسئلة متبقية
              </span>
              <button
                type="submit"
                disabled={loading || !input.trim() || requestsUsed >= MAX_REQUESTS}
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors min-h-[44px] flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>جارٍ التفكير...</span>
                  </>
                ) : (
                  <>
                    <span>إرسال</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Response */}
        {(response || loading || error) && (
          <div
            ref={responseRef}
            className="bg-white border border-[#E5E5E5] rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center shrink-0">
                <span className="text-white text-xs">✦</span>
              </div>
              <p className="text-xs font-bold text-[#999] uppercase tracking-wider">
                ردّ الذكاء الاصطناعي
              </p>
            </div>

            {error ? (
              <p className="text-sm text-[#666] leading-relaxed">{error}</p>
            ) : (
              <div className="text-sm leading-[2] whitespace-pre-wrap">
                {response}
                {loading && (
                  <span
                    className="cursor-blink inline-block w-0.5 h-4 bg-black ms-0.5 align-middle"
                    aria-hidden="true"
                  />
                )}
              </div>
            )}

            {/* Action buttons */}
            {response && !loading && (
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#E5E5E5]">
                <button
                  onClick={copyResponse}
                  className="flex items-center gap-1.5 text-xs font-medium border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                  <span>نسخ الإجابة</span>
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-1.5 text-xs font-medium border border-[#E5E5E5] rounded-full px-4 py-2 hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.8"/>
                  </svg>
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
