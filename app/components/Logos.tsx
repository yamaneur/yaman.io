const logos = [
  { file: "logo-01.png", alt: "سوالف بزنس" },
  { file: "logo-02.png", alt: "العربية" },
  { file: "logo-03.png", alt: "هارفارد بزنس ريفيو" },
  { file: "logo-04.png", alt: "ذا ستيج" },
  { file: "logo-07.png", alt: "ثمانية" },
  { file: "logo-08.png", alt: "webook.com" },
  { file: "logo-09.png", alt: "الهيئة السعودية للسياحة" },
  { file: "logo-10.png", alt: "السعودية" },
  { file: "logo-11.png", alt: "نُسُك" },
];

export default function Logos() {
  return (
    <div className="bg-white border-t border-[#E5E5E5] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Desktop: evenly spaced single row */}
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

        {/* Mobile: continuous auto-scrolling marquee */}
        <div className="sm:hidden overflow-hidden">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div key={`${logo.file}-${i}`} className="shrink-0 px-6">
                <img
                  src={`/images/logos/individual/${logo.file}`}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-10 w-auto object-contain grayscale opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
