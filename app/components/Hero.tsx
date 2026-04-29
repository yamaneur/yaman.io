"use client";

import { useEffect, useRef } from "react";

const socialLinks = [
  {
    label: "لينكد إن",
    href: "https://www.linkedin.com/in/yamaneur/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/yamaneur",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "البريد الإلكتروني",
    href: "mailto:hello@yaman.io",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "المدونة",
    href: "https://yaman.io",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".stagger-item").forEach((child, i) => {
            (child as HTMLElement).style.animationDelay = `${i * 100}ms`;
            child.classList.add("animate-fade-slide-up");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center pt-16"
      aria-labelledby="hero-name"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Name */}
          <h1
            id="hero-name"
            className="stagger-item opacity-0 font-serif-display font-black text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.1] mb-4"
          >
            يمان العرضي
          </h1>

          {/* Title */}
          <p className="stagger-item opacity-0 font-serif-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#333] mb-6 leading-tight">
            رائد أعمال، قيادي منتجات، مستثمر ملائكي
          </p>

          {/* Bio */}
          <p className="stagger-item opacity-0 text-base sm:text-lg text-[#444] mb-8 max-w-xl leading-[1.9]">
            أساعد الشركات على بناء منتجات مستقبلية من خلال دمج الذكاء الاصطناعي في
            الاستراتيجية والعمليات والمشاريع
          </p>

          {/* CTA */}
          <div className="stagger-item opacity-0 flex flex-col sm:flex-row items-start gap-4 mb-12">
            <a
              href="#ask-ai"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-[#222] transition-colors min-h-[44px] relative"
            >
              <span>✦</span>
              <span>تحدّث مع يمان AI</span>
              <span className="absolute -top-2 -start-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">
                جديد
              </span>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border border-[#E5E5E5] px-6 py-3 rounded-full font-medium hover:bg-[#F5F5F5] transition-colors min-h-[44px]"
            >
              <span>الخبرات</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Social links */}
          <div className="stagger-item opacity-0 flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-[#666] hover:text-black transition-colors min-h-[44px]"
              >
                {social.icon}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
