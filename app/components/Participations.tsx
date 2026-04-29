const participations = [
  { id: 1, event: "Startup Weekend Riyadh", role: "محكم", year: "٢٠٢٣" },
  { id: 2, event: "KAUST Innovation", role: "مرشد", year: "٢٠٢٣" },
  { id: 3, event: "Misk Innovation", role: "متحدث", year: "٢٠٢٢" },
  { id: 4, event: "500 Global Demo Day", role: "محكم", year: "٢٠٢٣" },
  { id: 5, event: "STV Accelerator", role: "مرشد", year: "٢٠٢٢" },
  { id: 6, event: "Flat6Labs", role: "مرشد للشركات الناشئة", year: "٢٠٢٢" },
  { id: 7, event: "منتدى مستقبل التقنية", role: "متحدث", year: "٢٠٢٣" },
  { id: 8, event: "مسرعة بكر", role: "محكم", year: "٢٠٢٣" },
  { id: 9, event: "أثر للقيادة", role: "مدرب", year: "٢٠٢٢" },
  { id: 10, event: "منتدى ريادة الأعمال العربي", role: "متحدث ورئيس جلسة", year: "٢٠٢١" },
];

// Placeholder colors for photo slots (will be replaced with actual photos)
const bgColors = [
  "#F0F0F0", "#E8E8E8", "#EBEBEB", "#EDEDED",
  "#F2F2F2", "#E5E5E5", "#EFEFEF", "#E9E9E9",
  "#F0F0F0", "#EAEAEA",
];

export default function Participations() {
  return (
    <section id="participations" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="participations-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 id="participations-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-3">
            المساهمات والمجتمع
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            إرشاد المؤسسين وتحكيم البرامج وبناء الجيل القادم من رواد الأعمال.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-10">
          {participations.map((item, i) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-default"
              style={{ backgroundColor: bgColors[i % bgColors.length] }}
              role="img"
              aria-label={`${item.event} — ${item.role} ${item.year}`}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <div className="w-10 h-10 rounded-full bg-[#D0D0D0] mb-2 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="m21 15-5-5L5 21"/>
                  </svg>
                </div>
                <p className="text-[10px] text-[#999] leading-tight">{item.event}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center">
                <p className="text-white text-xs font-bold leading-tight mb-1">{item.event}</p>
                <p className="text-white/80 text-[10px]">{item.role}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{item.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#666] text-sm mb-4">
            مهتم بأن أكون محكماً أو مرشداً في برنامجك؟
          </p>
          <a
            href="mailto:hello@yaman.io"
            className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors min-h-[44px]"
          >
            <span>تواصل معي</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
