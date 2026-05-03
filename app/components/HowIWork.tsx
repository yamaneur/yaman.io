export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="how-heading"
            className="font-serif-display font-black text-3xl sm:text-4xl mb-12"
          >
            كيف أعمل
          </h2>

          <div className="space-y-10 text-base sm:text-lg text-[#222] leading-[1.9]">
            {/* Paragraph 1 — What working together looks like */}
            <p>
              لا أقدم استشارات بالساعة ولا خدمات بالفاتورة. أعمل مع مؤسسين في مرحلة التحقق —
              أفكر معهم في الفكرة، أتحدى الافتراضات، وأفتح لهم باب الشخص الصح في الوقت الصح.
              أحياناً هذا شريك تقني. أحياناً أول عميل. أحياناً مجرد سؤال يغير الاتجاه كله.
            </p>

            {/* Paragraph 2 — Scale proof */}
            <p>
              رأيت من قرب كيف تبدو الفكرة قبل أن تصبح منتجاً بـ ٢ مليار ريال GMV،
              وكيف ينمو المنتج من ٥٠٠ ألف مستخدم إلى ٧ مليون في سنة واحدة.
              وأنا الآن جزء من بناء منظومة تنقل تخدم ١٤ مليون راكب.
              هذا بالضبط ما يجعلني أعرف متى تكون على الطريق الصح — ومتى لا.
            </p>

            {/* Paragraph 3 — Selectivity */}
            <p className="font-medium">
              أعمل مع عدد محدود من المؤسسين في كل مرحلة.
              أنا انتقائي — وأتوقع منك نفس الشيء.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#222] transition-colors min-h-[44px]"
            >
              <span>تحدث معي</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
