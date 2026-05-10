"use client";

import { useState } from "react";
import { useChatPopup } from "./ChatContext";

export default function FloatingChat() {
  const { open, toggle } = useChatPopup();
  const [hovered, setHovered] = useState(false);

  return (
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
        onClick={toggle}
        aria-label="يمان بوت"
        className="relative w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
