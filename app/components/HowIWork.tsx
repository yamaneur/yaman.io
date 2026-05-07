import Section from "./Section";
import SectionHeader from "./SectionHeader";

const stories = [
  {
    id: 1,
    text: "مؤسس كان يبني منتج SaaS للمشتريات B2B — وكان عالقاً في إيجاد الشريك التقني الصح. ساعدته في الوصول إلى ثلاثة مرشحين من الشبكة مباشرة. تحرك المشروع.",
  },
  {
    id: 2,
    text: "شركة ناشئة لفحص المرشحين وتوظيفهم — منتج قوي، لكن بدون أول عميل. ربطتهم بشركة ناشئة سريعة النمو كانت تحتاج تحديداً ما يقدمونه. أُغلقت الصفقة الأولى.",
  },
];

export default function HowIWork() {
  return (
    <Section id="how-i-work" fullWidth ariaLabelledBy="how-heading">
      <SectionHeader
        id="how-heading"
        title="كيف أساعد المؤسسين؟"
      />

      <div className="text-base sm:text-lg text-[#222] leading-[1.9] mb-12 overflow-hidden">
        <p className="lg:whitespace-nowrap">
          أعمل مع مؤسسين في مرحلة التحقق، أفكر معهم، أتحدى الافتراضات، وأوصلهم بعملاء وشركاء يناسبونهم.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="border border-[#E5E5E5] rounded-2xl overflow-hidden transition-colors hover:border-[#CCC] text-[#222]"
          >
            <div className="h-2 bg-[#E5E5E5]" />
            <div className="p-6 lg:p-8 leading-[1.9] text-sm sm:text-base">
              <p>{story.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#ask-ai"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#222] transition-colors min-h-[44px]"
        >
          <span>كلّم يمان بوت</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </Section>
  );
}
