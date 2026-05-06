const credentials = [
  { label: "الريال الأول", detail: "كتاب — دار تشكيل" },
  { label: "سيكولوجية المنتجات الرقمية", detail: "كتاب — نشر مجاناً 2023" },
  { label: "هارفارد بزنس ريفيو العربية", detail: "3 مقالات منشورة" },
  { label: "قناة العربية أعمال", detail: "ظهور إعلامي" },
  { label: "سوالف بزنس، مختلف، ذا ستيج", detail: "بودكاست وظهورات" },
  { label: "+20 مشروع ناشئ", detail: "مسرعة الأدب والنشر، سحابة الإمام" },
  { label: "+60 مقال", detail: "yaman.io — 2023–2025" },
  { label: "19,000+ متابع", detail: "X وLinkedIn" },
];

// Placeholder stories — Yaman to replace with real narratives in his voice
const stories = [
  {
    id: 1,
    text: "مؤسس كان يبني منتج SaaS للمشتريات B2B — وكان عالقاً في إيجاد الشريك التقني الصح. ساعدته في الوصول إلى ثلاثة مرشحين من الشبكة مباشرة. تحرك المشروع.",
  },
  {
    id: 2,
    text: "شركة ناشئة لفحص المرشحين وتوظيفهم — منتج قوي، لكن بدون أول عميل. ربطتهم بشركة ناشئة سريعة النمو كانت تحتاج تحديداً ما يقدمونه. أُغلقت الصفقة الأولى.",
  },
  {
    id: 3,
    // Placeholder for the most important story — direction challenge
    text: "[القصة الثالثة — قريباً: قصة حيث تحدى يمان الاتجاه كله وغيّر مسار المؤسس.]",
    placeholder: true,
  },
];

import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function Proof() {
  return (
    <Section id="proof" fullWidth ariaLabelledBy="proof-heading">
      <SectionHeader
        id="proof-heading"
        eyebrow="الأثر والمسار"
        title="الدليل"
        description="قصص من المؤسسين الذين عملت معهم — وملخص المسار المهني الذي يدعم ما أقدمه."
      />

      {/* Layer 1 — Founder Stories */}
      <div className="mb-16 lg:mb-20">
        <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-6">
          قصص مؤسسين
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`border border-[#E5E5E5] rounded-2xl overflow-hidden transition-colors hover:border-[#CCC] ${
                story.placeholder ? "text-[#BBB] italic" : "text-[#222]"
              }`}
            >
              {/* Story thumbnail */}
              <div className="h-2 bg-[#E5E5E5] group-hover:bg-[#CCC] transition-colors" />
              <div className="p-6 lg:p-8 leading-[1.9] text-sm sm:text-base">
                <p>{story.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layer 2 — Credentials */}
      <div>
        <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-6">
          المصداقية
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
          {credentials.map((c) => (
            <div key={c.label} className="flex flex-col gap-1 py-4 border-b border-[#F5F5F5]">
              <span className="font-sans-arabic font-medium text-sm text-black">
                {c.label}
              </span>
              <span className="text-xs text-[#999]">{c.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
