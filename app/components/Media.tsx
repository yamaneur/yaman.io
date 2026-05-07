import Section from "./Section";
import SectionHeader from "./SectionHeader";

const mediaCards = [
  {
    id: "arabiya",
    type: "مقابلة تلفزيونية",
    title: "العربية أعمال",
    subtitle: "كيف تختبر فكرتك الريادية قبل أن تبني أي شيء",
    href: "https://mobile.x.com/yamaneur/status/1814009433837756922",
    photo: "/images/media/alarabia.jpg",
    cta: "شاهد المقابلة",
  },
  {
    id: "swalif",
    type: "بودكاست",
    title: "سوالف بزنس",
    subtitle: "من الفكرة إلى العميل الأول — رحلة التحقق الحقيقية",
    href: "https://www.youtube.com/watch?v=PfTqG0vkVqo",
    photo: "/images/media/swalif-business.jpg",
    cta: "استمع للحلقة",
  },
  {
    id: "the-stage",
    type: "بودكاست",
    title: "ذا ستيج",
    subtitle: "بناء المنتجات الرقمية وفهم سلوك المستخدم العربي",
    href: "https://www.youtube.com/watch?v=sxcUxMjzlvE",
    photo: "/images/media/the-stage.jpg",
    cta: "استمع للحلقة",
  },
  {
    id: "mukhtalif",
    type: "بودكاست",
    title: "مختلف",
    subtitle: "التحقق من السوق وأخطاء المؤسسين في المراحل الأولى",
    href: "https://www.youtube.com/@mukhtalif",
    photo: "/images/media/ghulaf.jpg",
    cta: "استمع للحلقة",
  },
];

export default function Media() {
  return (
    <Section id="media" fullWidth ariaLabelledBy="media-heading">
      <SectionHeader
        id="media-heading"
        title="لقاءات تفيدك كمؤسس في البدايات"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5" role="list" aria-label="لقاءات إعلامية">
        {mediaCards.map((item) => (
          <div key={item.id} role="listitem">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:border-[#CCC] transition-all flex flex-col"
              aria-label={item.title}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={item.photo}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] bg-white">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-serif-display font-black text-xl leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                  {item.subtitle}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:opacity-60 transition-opacity">
                  <span>{item.cta}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
