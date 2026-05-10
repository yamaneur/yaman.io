"use client";

import { useState, useEffect } from "react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── Floating button ── */}
      <div
        className="fixed bottom-6 left-6 z-[1000]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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
          aria-label="يمان بوت"
          className="relative w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
            </svg>
          )}
        </button>
      </div>

      {/* ── Coming Soon Modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white w-full max-w-sm text-center"
            style={{ borderRadius: 24, padding: "40px 32px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="إغلاق"
              className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors text-[#999] hover:text-black"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Icon */}
            <div className="text-5xl mb-5 leading-none">🛠️</div>

            {/* Title */}
            <h2 className="font-serif-display font-black text-xl leading-snug mb-3">
              جالس أجهزلكم شيء رهيب هنا
            </h2>

            {/* Subtitle */}
            <p className="text-sm text-[#666] leading-relaxed mb-8">
              يمان بوت قريباً — بس استنوا، يستاهل
            </p>

            {/* Notify CTA */}
            <a
              href="https://x.com/yamaneur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#222] transition-colors"
            >
              <span>تبيون تتنبّهون لما يجهز؟</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
