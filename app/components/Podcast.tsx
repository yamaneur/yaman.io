const episodes = [
  {
    id: 1,
    show: "سوالف بزنس",
    showEn: "Sawalif Business",
    topic: "المنتجات وتحول الذكاء الاصطناعي في الشركات الناشئة السعودية",
    color: "#000",
    initials: "سب",
    href: "#",
  },
  {
    id: 2,
    show: "هارفارد بزنس ريفيو العربية",
    showEn: "HBR Arabia",
    topic: "استراتيجية المنتج وأطر الابتكار",
    color: "#111",
    initials: "HBR",
    href: "#",
  },
  {
    id: 3,
    show: "العربية",
    showEn: "Al Arabiya",
    topic: "الذكاء الاصطناعي في الأعمال والاقتصاد الرقمي",
    color: "#222",
    initials: "AR",
    href: "#",
  },
  {
    id: 4,
    show: "صفر واحد",
    showEn: "Safar Wahid",
    topic: "ريادة الأعمال التقنية ورحلة الشركات الناشئة",
    color: "#1a1a1a",
    initials: "٠١",
    href: "#",
  },
  {
    id: 5,
    show: "مختلف",
    showEn: "Mukhtalif",
    topic: "مستقبل المنتجات والذكاء الاصطناعي",
    color: "#0d0d0d",
    initials: "مخ",
    href: "#",
  },
  {
    id: 6,
    show: "مدير الحلقة",
    showEn: "Mudeer Al-Halaqah",
    topic: "قيادة المنتجات وبناء الفرق",
    color: "#181818",
    initials: "مح",
    href: "#",
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="podcast-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 id="podcast-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-3">
            البودكاست والتحدث العام
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            محادثات حول المنتجات والذكاء الاصطناعي ومستقبل البناء في العالم العربي.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on tablet+ */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 snap-x-mandatory"
          role="list"
          aria-label="حلقات البودكاست"
        >
          {episodes.map((ep) => (
            <div
              key={ep.id}
              role="listitem"
              className="snap-start shrink-0 w-[260px] md:w-auto"
            >
              <a
                href={ep.href}
                className="group flex flex-col border border-[#E5E5E5] rounded-2xl overflow-hidden hover:shadow-sm transition-shadow h-full"
                aria-label={`استمع إلى ${ep.show}: ${ep.topic}`}
              >
                {/* Artwork */}
                <div
                  className="h-32 flex items-center justify-center text-white text-2xl font-black font-serif-display"
                  style={{ backgroundColor: ep.color }}
                  aria-hidden="true"
                >
                  {ep.initials}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 bg-white">
                  <p className="font-bold text-sm mb-1 leading-tight">{ep.show}</p>
                  <p className="text-[10px] text-[#999] mb-2">{ep.showEn}</p>
                  <p className="text-xs text-[#666] leading-relaxed flex-1">{ep.topic}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium group-hover:opacity-60 transition-opacity">
                    <span>استمع</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 shrink-0" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
