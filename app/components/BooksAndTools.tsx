import Section from "./Section";
import SectionHeader from "./SectionHeader";

const items = [
  {
    id: "al-riyal-al-awwal",
    type: "كتاب",
    title: "الريال الأول",
    description: "ثلاث خطوات للتحقق بكفاءة من مشروعك الريادي — قبل أن تنفق وقتاً أو مالاً على شيء لم يثبت بعد.",
    publisher: "دار تشكيل",
    image: "/images/books/book-alriyalawal.png",
    bg: "#C8871A",
    href: "https://www.linkedin.com/posts/yamaneur_%D9%82%D8%A8%D9%84-%D8%A3%D8%B4%D9%87%D8%B1-%D8%B7%D8%A8%D8%B9%D8%AA-%D9%87%D8%B0%D9%87-%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9-%D9%85%D9%86-%D9%83%D8%AA%D8%A7%D8%A8%D9%8A-%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D9%85-activity-7420737412735234048-kY8w?utm_source=share&utm_medium=member_desktop&rcm=ACoAABpQfW8BM4PCUPsedV7Ug2D0Rd-5uv7TK3E",
    cta: "ينشر قريبًا",
    soon: true,
  },
  {
    id: "sikulujiyat-al-muntajat",
    type: "كتاب",
    title: "سيكولوجية المنتجات الرقمية",
    description: "عشرة مفاهيم من علم النفس تساعدك على بناء تجربة مستخدم تُفهم كيف يفكر الإنسان وكيف يتخذ قراراته.",
    publisher: "نشر مجاناً — 2023",
    image: "/images/books/book-psychology.PNG",
    bg: "#0D1035",
    href: "https://x.com/yamaneur/status/1730527723074830753",
    cta: "حمّل مجاناً",
    soon: false,
  },
  {
    id: "tjreeb",
    type: "أداة",
    title: "تجريب",
    description: "أداة تساعدك في بناء خطة تحقق لمشروعك الريادي — في الميدان، مع العملاء الحقيقيين.",
    image: "/images/books/tool-tjreeb.png",
    bg: "#F0EEFF",
    href: "https://tjreeb.com/",
    cta: "جرّب الأداة",
    soon: false,
  },
];

export default function BooksAndTools() {
  return (
    <Section id="books-tools" fullWidth ariaLabelledBy="books-tools-heading">
      <SectionHeader
        id="books-tools-heading"
        title="كتب وأدوات للمؤسسين"
        description="ما أنتجته لمساعدة المؤسسين على التحقق من أفكارهم وبناء منتجاتهم بشكل أكثر ذكاءً."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:border-[#CCC] transition-all flex flex-col"
          >
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ backgroundColor: item.bg }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
            </div>
            <div className="p-5 lg:p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] bg-white">
                  {item.type}
                </span>
                {item.soon && (
                  <span className="inline-block text-xs font-bold bg-black text-white rounded-full px-3 py-1">
                    قريبًا
                  </span>
                )}
                {"publisher" in item && item.publisher && (
                  <span className="text-xs text-[#BBB]">{item.publisher}</span>
                )}
              </div>
              <h3 className="font-serif-display font-black text-xl leading-tight mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium group-hover:opacity-60 transition-opacity">
                <span>{item.cta}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
