import Section from "./Section";
import SectionHeader from "./SectionHeader";

const mediaCards = [
  {
    id: "swalif",
    title: "لماذا تفشل المشاريع الناشئة",
    subtitle: "بودكاست سوالف بزنس — إذاعة ثمانية",
    href: "https://www.youtube.com/watch?v=PfTqG0vkVqo",
    thumb: "https://img.youtube.com/vi/PfTqG0vkVqo/hqdefault.jpg",
    type: "بودكاست",
    cta: "استمع للحلقة",
  },
  {
    id: "ghulaf",
    title: "كيف تبني منتج يحتاجه العميل",
    subtitle: "بودكاست غلاف — إذاعة مختلف",
    href: "https://www.youtube.com/watch?v=Q2010p10H9c&t=4s",
    thumb: "https://img.youtube.com/vi/Q2010p10H9c/hqdefault.jpg",
    type: "بودكاست",
    cta: "استمع للحلقة",
  },
  {
    id: "the-stage",
    title: "كيف تنمو الشركات الناشئة",
    subtitle: "بودكاست ماركتيت — The Stage",
    href: "https://www.youtube.com/watch?v=sxcUxMjzlvE",
    thumb: "https://img.youtube.com/vi/sxcUxMjzlvE/hqdefault.jpg",
    type: "بودكاست",
    cta: "استمع للحلقة",
  },
  {
    id: "arabiya",
    title: "أبرز مشاكل الشركات الناشئة",
    subtitle: "العربية Business — مقابلة تلفزيونية",
    href: "https://www.youtube.com/watch?v=R_bOSk0owXo",
    thumb: "https://img.youtube.com/vi/R_bOSk0owXo/hqdefault.jpg",
    type: "مقابلة",
    cta: "شاهد المقابلة",
  },
];

export default function Media() {
  return (
    <Section id="media" fullWidth ariaLabelledBy="media-heading">
      <SectionHeader
        id="media-heading"
        title="تجارب عايشتها وحكيتها"
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
                  src={item.thumb}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </div>
                </div>
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
                    <path d="M5 12h14M12 5l7 7-7 7"/>
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
