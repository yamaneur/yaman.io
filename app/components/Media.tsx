const mediaItems = [
  {
    name: "العربية أعمال",
    href: "https://mobile.x.com/yamaneur/status/1814009433837756922",
    initials: "AR",
  },
  {
    name: "هارفارد بزنس ريفيو العربية",
    href: "https://www.linkedin.com/in/yamaneur/",
    initials: "HBR",
  },
  {
    name: "سوالف بزنس",
    href: "https://www.youtube.com/watch?v=PfTqG0vkVqo",
    initials: "سب",
  },
  {
    name: "ذا ستيج",
    href: "https://www.youtube.com/watch?v=sxcUxMjzlvE",
    initials: "TS",
  },
  {
    name: "مختلف",
    href: "https://www.youtube.com/watch?v=Q2010p10H9c",
    initials: "مخ",
  },
  {
    name: "صفر لواحد",
    href: "#",
    initials: "٠١",
  },
];

export default function Media() {
  return (
    <section id="media" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="media-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="media-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-12">
          ظهوراتي الإعلامية
        </h2>

        {/* Logo row — horizontal scroll on mobile, wrap on desktop */}
        <div
          className="flex gap-4 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible snap-x-mandatory"
          role="list"
          aria-label="وسائل الإعلام"
        >
          {mediaItems.map((item) => (
            <div key={item.name} role="listitem" className="snap-start shrink-0">
              <a
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center border border-[#E5E5E5] rounded-2xl w-36 h-24 hover:border-black hover:bg-[#F5F5F5] transition-all"
                aria-label={item.name}
              >
                {/* Logo placeholder — replace with <img> when logo files are provided */}
                <span className="font-serif-display font-black text-lg text-[#999] group-hover:text-black transition-colors">
                  {item.initials}
                </span>
                <span className="text-[10px] text-[#BBB] group-hover:text-[#666] transition-colors mt-1 text-center px-2 leading-tight">
                  {item.name}
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#999]">
          ضع مؤشر الفأرة على الشعار للانتقال إلى الحلقة أو المقال
        </p>
      </div>
    </section>
  );
}
