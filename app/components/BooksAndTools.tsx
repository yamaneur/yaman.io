import Section from "./Section";
import SectionHeader from "./SectionHeader";

const books = [
  {
    id: "al-riyal-al-awwal",
    type: "كتاب",
    title: "الريال الأول",
    description: "ثلاث خطوات للتحقق بكفاءة من مشروعك الريادي — قبل أن تنفق وقتاً أو مالاً على شيء لم يثبت بعد.",
    publisher: "دار تشكيل",
    image: "/images/books/book-alriyalawal.png",
    bg: "#C8871A",
    href: "https://yaman.io",
    cta: "اقرأ الكتاب",
  },
  {
    id: "sikulujiyat-al-muntajat",
    type: "كتاب",
    title: "سيكولوجية المنتجات الرقمية",
    description: "عشرة مفاهيم من علم النفس تساعدك على بناء تجربة مستخدم تُفهم كيف يفكر الإنسان وكيف يتخذ قراراته.",
    publisher: "نشر مجاناً — 2023",
    image: "/images/books/book-psychology.PNG",
    bg: "#0D1035",
    href: "https://yaman.io",
    cta: "حمّل مجاناً",
  },
];

const tools = [
  {
    id: "tjreeb",
    type: "أداة",
    title: "تجريب",
    description: "أداة تساعدك في بناء خطة تحقق لمشروعك الريادي — في الميدان، مع العملاء الحقيقيين.",
    image: "/images/books/tool-tjreeb.png",
    href: "https://yaman.io",
    cta: "جرّب الأداة",
  },
];

export default function BooksAndTools() {
  return (
    <Section id="books-tools" fullWidth ariaLabelledBy="books-tools-heading">
      <SectionHeader
        id="books-tools-heading"
        eyebrow="المنتجات المعرفية"
        title="الكتب والأدوات"
        description="ما أنتجته لمساعدة المؤسسين على التحقق من أفكارهم وبناء منتجاتهم بشكل أكثر ذكاءً."
      />

      {/* Books */}
      <div className="mb-10">
        <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-5">
          الكتب
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {books.map((book) => (
            <a
              key={book.id}
              href={book.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:border-[#CCC] transition-all flex flex-col"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: book.bg }}
              >
                <img
                  src={book.image}
                  alt={`غلاف كتاب ${book.title}`}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-5 lg:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] bg-white">
                    {book.type}
                  </span>
                  <span className="text-xs text-[#BBB]">{book.publisher}</span>
                </div>
                <h3 className="font-serif-display font-black text-xl leading-tight mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                  {book.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:opacity-60 transition-opacity">
                  <span>{book.cta}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <p className="text-xs font-bold text-[#999] uppercase tracking-wider mb-5">
          الأدوات
        </p>
        <div className="flex flex-col gap-4 lg:gap-5">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:border-[#CCC] hover:bg-[#FAFAFA] transition-all flex flex-col sm:flex-row"
            >
              <div className="relative sm:w-80 lg:w-96 shrink-0 aspect-[16/9] sm:aspect-auto overflow-hidden bg-[#F0EEFF]">
                <img
                  src={tool.image}
                  alt={`صورة أداة ${tool.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-5 lg:p-8 flex flex-col justify-center flex-1">
                <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] mb-3 self-start bg-white">
                  {tool.type}
                </span>
                <h3 className="font-serif-display font-black text-2xl lg:text-3xl leading-tight mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-5 max-w-md">
                  {tool.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:opacity-60 transition-opacity">
                  <span>{tool.cta}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
