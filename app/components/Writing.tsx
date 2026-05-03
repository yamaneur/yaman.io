"use client";

import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "هرم القيمة بالذكاء الاصطناعي للمنظمات",
    description: "إطار عمل من ثلاث مراحل لتبني الذكاء الاصطناعي: الكفاءة التشغيلية ← تعزيز الإيرادات ← الميزة التنافسية.",
    readTime: "٧ دقائق",
    category: "استراتيجية",
    href: "https://yaman.io",
  },
  {
    id: 2,
    title: "سيكولوجية المنتج",
    description: "أول كتاب إلكتروني عربي يطبّق مبادئ علم النفس على المنتجات الرقمية. دليل عملي لبناء منتجات تفهم الإنسان.",
    readTime: "كتاب",
    category: "المنتجات",
    href: "https://yaman.io",
  },
  {
    id: 3,
    title: "لماذا يفشل معظم قادة المنتجات في بيئات الشركات الناشئة",
    description: "الفجوة بين نظرية إدارة المنتجات وواقع بناء المنتجات في السعودية والخليج — وكيف تتجاوزها.",
    readTime: "٥ دقائق",
    category: "قيادة",
    href: "https://yaman.io",
  },
  {
    id: 4,
    title: "من يملك الذكاء الاصطناعي داخل الشركة؟",
    description: "نقاش حول التنظيم الداخلي لمبادرات الذكاء الاصطناعي: هل تعيشها كوحدة مستقلة أم تدمجها في كل فريق؟",
    readTime: "٦ دقائق",
    category: "الذكاء الاصطناعي",
    href: "https://yaman.io",
  },
  {
    id: 5,
    title: "بناء المنتجات للمستخدم السعودي",
    description: "خصوصيات السلوك الرقمي في السعودية، وكيف يختلف بناء المنتجات للسوق المحلي عن المعايير العالمية.",
    readTime: "٨ دقائق",
    category: "السوق",
    href: "https://yaman.io",
  },
];

export default function Writing() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="writing" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="writing-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 id="writing-heading" className="font-serif-display font-black text-3xl sm:text-4xl">
            المقالات
          </h2>
          <a
            href="https://yaman.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity min-h-[44px]"
          >
            <span>كل المقالات</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E5E5E5] rounded-2xl p-5 hover:bg-[#F5F5F5] transition-colors flex flex-col"
            >
              <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] mb-4 self-start">
                {article.category}
              </span>
              <h3 className="font-bold text-base leading-snug mb-2 group-hover:opacity-70 transition-opacity">
                {article.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-xs text-[#999]">
                <span>{article.readTime}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-[225deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border border-[#E5E5E5] rounded-2xl p-6 lg:p-8 max-w-xl">
          <p className="text-sm text-[#666] leading-relaxed mb-5">
            أكتب عن بناء الشركات الناشئة بشكل واقعي — بدون ضجيج. مرتين في الشهر.
          </p>
          {submitted ? (
            <p className="text-sm font-medium text-black">شكراً — سأراك في البريد ✦</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                required
                dir="rtl"
                className="flex-1 border border-[#E5E5E5] rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-black transition-colors min-h-[44px]"
                aria-label="بريدك الإلكتروني"
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#222] transition-colors min-h-[44px] shrink-0"
              >
                اشترك
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
