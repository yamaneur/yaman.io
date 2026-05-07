"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";

const articles = [
  {
    id: 1,
    title: "هرم القيمة بالذكاء الاصطناعي للمنظمات",
    description: "إطار عمل من ثلاث مراحل لتبني الذكاء الاصطناعي: الكفاءة التشغيلية ← تعزيز الإيرادات ← الميزة التنافسية.",
    readTime: "٧ دقائق",
    category: "استراتيجية",
    href: "https://yaman.io",
    image: "/images/articles/strategy.svg",
  },
  {
    id: 2,
    title: "سيكولوجية المنتج",
    description: "أول كتاب إلكتروني عربي يطبّق مبادئ علم النفس على المنتجات الرقمية. دليل عملي لبناء منتجات تفهم الإنسان.",
    readTime: "كتاب",
    category: "المنتجات",
    href: "https://yaman.io",
    image: "/images/articles/product.svg",
  },
  {
    id: 3,
    title: "لماذا يفشل معظم قادة المنتجات في بيئات الشركات الناشئة",
    description: "الفجوة بين نظرية إدارة المنتجات وواقع بناء المنتجات في السعودية والخليج — وكيف تتجاوزها.",
    readTime: "٥ دقائق",
    category: "قيادة",
    href: "https://yaman.io",
    image: "/images/articles/leadership.svg",
  },
  {
    id: 4,
    title: "من يملك الذكاء الاصطناعي داخل الشركة؟",
    description: "نقاش حول التنظيم الداخلي لمبادرات الذكاء الاصطناعي: هل تعيشها كوحدة مستقلة أم تدمجها في كل فريق؟",
    readTime: "٦ دقائق",
    category: "الذكاء الاصطناعي",
    href: "https://yaman.io",
    image: "/images/articles/ai.svg",
  },
  {
    id: 5,
    title: "بناء المنتجات للمستخدم السعودي",
    description: "خصوصيات السلوك الرقمي في السعودية، وكيف يختلف بناء المنتجات للسوق المحلي عن المعايير العالمية.",
    readTime: "٨ دقائق",
    category: "السوق",
    href: "https://yaman.io",
    image: "/images/articles/market.svg",
  },
];

export default function Writing() {
  return (
    <Section id="writing" fullWidth ariaLabelledBy="writing-heading">
      <SectionHeader
        id="writing-heading"
        title="المقالات"
        action={
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
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:bg-[#F5F5F5] hover:border-[#CCC] transition-all flex flex-col"
          >
            <div className="relative aspect-[16/9] bg-[#FAFAFA] border-b border-[#E5E5E5] overflow-hidden">
              <img
                src={article.image}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="p-5 lg:p-6 flex flex-col flex-1">
              <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] mb-3 self-start bg-white">
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
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
