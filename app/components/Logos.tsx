const row1 = [
  { file: "logo-01.png", alt: "سوالف بزنس" },
  { file: "logo-02.png", alt: "العربية" },
  { file: "logo-03.png", alt: "هارفارد بزنس ريفيو" },
  { file: "logo-04.png", alt: "ذا ستيج" },
  { file: "logo-05.png", alt: "صفر لواحد" },
  { file: "logo-06.png", alt: "مختلف" },
];

const row2 = [
  { file: "logo-07.png", alt: "ثمانية" },
  { file: "logo-08.png", alt: "webook.com" },
  { file: "logo-09.png", alt: "الهيئة السعودية للسياحة" },
  { file: "logo-10.png", alt: "السعودية" },
  { file: "logo-11.png", alt: "نُسُك" },
  { file: "logo-12.png", alt: "رياضة للجميع" },
];

function LogoRow({ logos, label }: { logos: typeof row1; label: string }) {
  return (
    <div>
      <p className="text-sm text-[#666] font-medium text-start mb-6"
         style={{ fontFamily: "'Thmanyah Sans', sans-serif", fontWeight: 500 }}>
        {label}
      </p>

      {/* Desktop: evenly spaced row */}
      <div className="hidden sm:flex items-center justify-between gap-8">
        {logos.map((logo) => (
          <img
            key={logo.file}
            src={`/images/logos/individual/${logo.file}`}
            alt={logo.alt}
            loading="lazy"
            className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
          />
        ))}
      </div>

      {/* Mobile: horizontal scroll with snap */}
      <div className="flex sm:hidden gap-8 overflow-x-auto snap-x snap-mandatory pb-2"
           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {logos.map((logo) => (
          <div key={logo.file} className="snap-center shrink-0">
            <img
              src={`/images/logos/individual/${logo.file}`}
              alt={logo.alt}
              loading="lazy"
              className="h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Logos() {
  return (
    <div className="bg-white border-t border-[#E5E5E5] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12">
        <LogoRow logos={row1} label="أبرز لقاءاتي الإعلامية" />
        <LogoRow logos={row2} label="جهات عملت معها" />
      </div>
    </div>
  );
}
