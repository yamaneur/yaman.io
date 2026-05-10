"use client";

import { useEffect, useState } from "react";
import { useChatPopup } from "./ChatContext";

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex gap-1.5 items-center bg-[#F5F5F5] rounded-2xl px-4 py-3">
        <span className="dot-typing" />
        <span className="dot-typing" style={{ animationDelay: "0.2s" }} />
        <span className="dot-typing" style={{ animationDelay: "0.4s" }} />
      </div>
    </div>
  );
}

function ChatBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div
        className="bg-[#F5F5F5] text-black text-sm leading-relaxed"
        style={{ borderRadius: 16, padding: "12px 16px", maxWidth: "80%" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function ChatPopup() {
  const { open, close } = useChatPopup();
  const [phase, setPhase] = useState<"idle" | "typing" | "bubble1" | "bubble2">("idle");

  useEffect(() => {
    if (!open) { setPhase("idle"); return; }
    setPhase("typing");
    const t1 = setTimeout(() => setPhase("bubble1"), 1500);
    const t2 = setTimeout(() => setPhase("bubble2"), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[998]" onClick={close} />

      {/* Popup */}
      <div
        className={[
          "fixed z-[999] bg-white flex flex-col overflow-hidden animate-popup-enter",
          "bottom-0 left-0 right-0 rounded-t-2xl h-[70vh]",
          "md:bottom-[96px] md:left-6 md:right-auto md:w-[360px] md:h-[480px] md:rounded-2xl",
        ].join(" ")}
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
      >
        {/* Header */}
        <div className="shrink-0 bg-black text-white px-4 py-3 flex items-center justify-between">
          <button
            onClick={close}
            aria-label="إغلاق"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <span className="font-bold text-base">يمان بوت</span>
        </div>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3" dir="rtl">
          {phase === "typing" && <TypingIndicator />}

          {(phase === "bubble1" || phase === "bubble2") && (
            <ChatBubble>
              <span className="text-2xl block mb-1">🛠️</span>
              جالس أجهزلكم شيء رهيب هنا — يمان بوت قريباً، بس استنوا يستاهل 😄
            </ChatBubble>
          )}

          {phase === "bubble2" && (
            <ChatBubble>
              <p className="mb-3">تبيون تتنبّهون لما يجهز؟ تابعوني على إكس 👇</p>
              <a
                href="https://x.com/yamaneur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#222] transition-colors"
              >
                تابع @yamaneur ←
              </a>
            </ChatBubble>
          )}
        </div>

        {/* Disabled input */}
        <div className="shrink-0 px-4 pb-5 pt-3 border-t border-[#F0F0F0]">
          <div className="flex gap-2 items-center bg-[#F5F5F5] rounded-2xl px-4 py-3">
            <input
              disabled
              placeholder="البوت قيد التجهيز..."
              dir="rtl"
              className="flex-1 bg-transparent text-sm text-[#999] placeholder-[#999] outline-none cursor-not-allowed"
            />
            <button
              disabled
              className="w-8 h-8 rounded-full bg-[#CCC] flex items-center justify-center cursor-not-allowed shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
