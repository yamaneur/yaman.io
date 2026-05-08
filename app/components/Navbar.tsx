"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "كيف اشتغل", href: "#how-i-work" },
  { label: "كتب وأدوات", href: "#books-tools" },
  { label: "اللقاءات", href: "#media" },
  { label: "المدونة", href: "https://yaman.io" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[#E5E5E5]" : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="hover:opacity-80 transition-opacity flex items-center"
          aria-label="يمان العرضي - الرئيسية"
        >
          <img
            src="/images/yamaneur-logo.png"
            alt="يمان العرضي"
            style={{ height: 36, width: 36, objectFit: "contain", borderRadius: 8 }}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 font-sans-arabic font-medium text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:opacity-60 transition-opacity py-1">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#ask-ai"
          className="hidden md:inline-flex items-center gap-2 bg-black text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-[#333] transition-colors min-h-[44px]"
        >
          <span>يمان بوت</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 border-b border-[#E5E5E5]" : "max-h-0"} bg-white`}>
        <ul className="px-4 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-3 font-medium text-base border-b border-[#F5F5F5] last:border-0 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#ask-ai"
              onClick={closeMenu}
              className="block w-full text-center bg-black text-white py-3 rounded-full font-medium text-sm min-h-[44px] flex items-center justify-center gap-2"
            >
              <span>يمان بوت</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
