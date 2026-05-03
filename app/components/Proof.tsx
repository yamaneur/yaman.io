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

export default function Proof() {
  return (
    <section id="proof" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="proof-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="proof-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-14">
          الدليل
        </h2>

        {/* Layer 1 — Founder Stories */}
        <div className="mb-16">
          <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-8">
            قصص مؤسسين
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className={`border border-[#E5E5E5] rounded-2xl p-6 leading-[1.9] text-sm sm:text-base ${
                  story.placeholder ? "text-[#BBB] italic" : "text-[#222]"
                }`}
              >
                <p>{story.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2 — Credentials */}
        <div>
          <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-8">
            المصداقية
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {credentials.map((c) => (
              <div key={c.label} className="flex items-baseline gap-3 py-2 border-b border-[#F5F5F5]">
                <span className="font-sans-arabic font-medium text-sm text-black shrink-0">
                  {c.label}
                </span>
                <span className="text-xs text-[#999]">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
