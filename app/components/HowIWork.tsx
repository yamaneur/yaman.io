"use client";

import Section from "./Section";
import SectionHeader from "./SectionHeader";

const services = [
  {
    id: "validation",
    title: "التحقق من السوق",
    description: "أساعدك تختبر مشروعك في السوق مع عملاء حقيقيين",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <path d="M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    id: "clients",
    title: "الوصول للعملاء الأوائل",
    description: "أساعدك توصل لعملاء محتملين تعرض وتحقق معهم",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: "partners",
    title: "إيجاد الشركاء المناسبين",
    description: "أساعدك تلاقي الشريك التقني أو التجاري اللي يكمّلك",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    id: "investment",
    title: "الاستثمار",
    description: "أستثمر مع مشاريع منتقاه بعناية أو أوصّلك بمستثمرين ملائكيين",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
];

export default function HowIWork() {
  return (
    <Section id="how-i-work" fullWidth ariaLabelledBy="how-heading">
      <SectionHeader
        id="how-heading"
        title="كيف أشتغل مع المؤسسين؟"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-[#E5E5E5] rounded-2xl p-6 lg:p-8 hover:border-[#CCC] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F5F5] flex items-center justify-center mb-5 text-[#222]">
              {service.icon}
            </div>
            <h3 className="font-serif-display font-black text-lg leading-tight mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

    </Section>
  );
}
