"use client";

import { useState } from "react";

const roles = [
  {
    id: "thmanyah",
    company: "ثمانية",
    companyEn: "Thmanyah",
    role: "رئيس قسم المنتجات",
    period: "٢٠٢٥ – الآن",
    highlights: [
      "قاد نمو المنصة من ٥٠٠ ألف إلى ٣ مليون مستخدم في شهرين",
      "يبني استراتيجية تحول الذكاء الاصطناعي لزيادة الإيرادات والتميز التنافسي",
      "يقود رؤية المنتج عبر تقاطع المحتوى والتكنولوجيا",
    ],
    aiContext:
      "في ثمانية، لا أعمل فقط على الخصائص — أنا أعيد تصور كيف يمكن لأحد أكبر شركات المحتوى العربي أن يتحول إلى منصة تقنية مدعومة بالذكاء الاصطناعي. الانتقال من ٥٠٠ ألف إلى ٣ مليون مستخدم في شهرين لم يكن صدفة — كان نتاج رهانات استراتيجية واضحة على اكتشاف المحتوى وتجربة المستخدم وتوافق المنتج مع السوق.",
  },
  {
    id: "landscape",
    company: "لاندسكيب",
    companyEn: "Landscape",
    role: "شريك مؤسس",
    period: "٢٠٢٤ – الآن",
    highlights: [
      "يقود الابتكار بالذكاء الاصطناعي مع عملاء من المؤسسات والمكاتب العائلية",
      "يبني خرائط طريق مستقبلية للذكاء الاصطناعي والمشاريع التجريبية",
      "يشكّل فرص إيرادات ومحتوى جديدة في المشهد التقني السعودي",
    ],
    aiContext:
      "لاندسكيب هو رهاني الشخصي على مستقبل تحول الذكاء الاصطناعي في السعودية. أعمل مع مؤسسات ومكاتب عائلية لمساعدتها على تجاوز ضجيج الذكاء الاصطناعي إلى تطبيقات حقيقية وقابلة للقياس. ليس بيع حلولاً — بل بناء رؤية مستقبلية واضحة ثم تنفيذ مشاريع تجريبية تثبت القيمة قبل التوسع.",
  },
  {
    id: "webook",
    company: "ويبوك",
    companyEn: "Webook",
    role: "رئيس قسم المنتجات",
    period: "٢٠٢٢ – ٢٠٢٥",
    highlights: [
      "قاد مبادرات لإنشاء والتحقق من مصادر إيرادات وقطاعات جديدة",
      "أشرف على الاستراتيجية التجارية والشراكات وبناء الفريق",
      "جزء من الفريق الذي حقق أكثر من ٢ مليار ريال سعودي إجمالي قيمة المعاملات",
    ],
    aiContext:
      "ويبوك كانت حوضاً لاختبار النظريات في الحجم. عملنا على بناء طبقات إيرادات متعددة — منتجات B2B، شراكات مؤسسية مع روح السعودية ونسك — وكان التحدي الحقيقي هو الموازنة بين النمو السريع وبناء أساس مستدام. الوصول إلى ٢ مليار ريال في إجمالي قيمة المعاملات كان علامة فارقة تتحدث عن نفسها.",
  },
  {
    id: "uxbert",
    company: "UXBERT Labs",
    companyEn: "UXBERT Labs",
    role: "قائد فريق الاستكشاف",
    period: "٢٠١٩ – ٢٠٢١",
    highlights: [
      "قاد تطوير المنتجات الداخلية وبناء المشاريع المؤسسية",
      "تعاون مع جهات شبه حكومية لتطوير حلول رقمية",
      "اكتسب خبرة عميقة في بناء المنتجات من الصفر",
    ],
    aiContext:
      "UXBERT كانت مدرستي في بناء المنتجات الحقيقية. عملت بالتوازي على مشاريع متعددة في مراحل مختلفة — من الفكرة إلى الإطلاق — وهذا علّمني كيف أفكر في الأولويات والمقايضات عندما تكون الموارد محدودة والتوقعات عالية.",
  },
];

function RoleCard({ role }: { role: typeof roles[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="border border-[#E5E5E5] rounded-2xl p-6 hover:bg-[#F5F5F5] transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E5E5E5] flex items-center justify-center shrink-0 text-xs font-bold text-[#666]">
            {role.companyEn.charAt(0)}
          </div>
          <div>
            <h3 className="font-sans-arabic font-bold text-base leading-tight">{role.role}</h3>
            <p className="text-[#666] text-sm">{role.company}</p>
          </div>
        </div>
        <span className="text-xs text-[#666] font-medium border border-[#E5E5E5] rounded-full px-3 py-1 self-start shrink-0">
          {role.period}
        </span>
      </div>

      <ul className="space-y-2 mb-4">
        {role.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#444] leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity min-h-[44px] -ms-1 ps-1"
        aria-expanded={expanded}
        aria-controls={`ai-context-${role.id}`}
      >
        <span>{expanded ? "إخفاء السياق" : "سياق إضافي من الذكاء الاصطناعي"}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <div
        id={`ai-context-${role.id}`}
        className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-64 mt-4" : "max-h-0"}`}
      >
        <div className="bg-white border border-[#E5E5E5] rounded-xl p-4 text-sm text-[#444] leading-[1.9]">
          <p className="text-[10px] font-bold text-[#999] uppercase tracking-wider mb-2">
            ✦ السياق الكامل
          </p>
          <p>{role.aiContext}</p>
        </div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2
            id="experience-heading"
            className="font-serif-display font-black text-3xl sm:text-4xl mb-3"
          >
            رحلة 10 سنوات في ريادة الأعمال
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            كل دور يتضمن سياقاً قابلاً للاستعلام — القصة الحقيقية خلف النقاط.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
