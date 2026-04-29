const posts = [
  {
    id: 1,
    category: "استراتيجية الذكاء الاصطناعي",
    title: "هرم القيمة بالذكاء الاصطناعي للمنظمات",
    excerpt:
      "إطار عمل من ثلاث مراحل لتبني الذكاء الاصطناعي: الكفاءة التشغيلية ← تعزيز الإيرادات ← الميزة التنافسية.",
    readTime: "٧ دقائق",
    href: "https://yaman.io",
  },
  {
    id: 2,
    category: "المنتجات",
    title: "سيكولوجية المنتج",
    excerpt:
      "أول كتاب إلكتروني عربي يطبّق مبادئ علم النفس على المنتجات الرقمية. دليل عملي لبناء منتجات تفهم الإنسان.",
    readTime: "كتاب",
    href: "https://yaman.io",
    isFeatured: true,
  },
  {
    id: 3,
    category: "قيادة المنتجات",
    title: "لماذا يفشل معظم قادة المنتجات في بيئات الشركات الناشئة",
    excerpt:
      "الفجوة بين نظرية إدارة المنتجات وواقع بناء المنتجات في السعودية والخليج — وكيف تتجاوزها.",
    readTime: "٥ دقائق",
    href: "https://yaman.io",
  },
  {
    id: 4,
    category: "الذكاء الاصطناعي",
    title: "من يملك الذكاء الاصطناعي داخل الشركة؟",
    excerpt:
      "نقاش حول التنظيم الداخلي لمبادرات الذكاء الاصطناعي: هل تعيشها كوحدة مستقلة أم تدمجها في كل فريق؟",
    readTime: "٦ دقائق",
    href: "https://yaman.io",
  },
  {
    id: 5,
    category: "السوق السعودي",
    title: "بناء المنتجات للمستخدم السعودي",
    excerpt:
      "خصوصيات السلوك الرقمي في السعودية، وكيف يختلف بناء المنتجات للسوق المحلي عن المعايير العالمية.",
    readTime: "٨ دقائق",
    href: "https://yaman.io",
  },
  {
    id: 6,
    category: "قيادة المنتجات",
    title: "الفرق بين مدير المنتج ورئيس المنتجات",
    excerpt:
      "التحول من تنفيذ الميزات إلى قيادة الاستراتيجية — متى وكيف ولماذا يصبح هذا الانتقال ضرورياً.",
    readTime: "٤ دقائق",
    href: "https://yaman.io",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28 border-t border-[#E5E5E5]" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <h2 id="blog-heading" className="font-serif-display font-black text-3xl sm:text-4xl mb-3">
              الكتابة والأفكار
            </h2>
            <p className="text-[#666] text-base leading-relaxed">
              استكشاف الذكاء الاصطناعي والمنتجات ومستقبل البناء في العالم العربي.
            </p>
          </div>
          <a
            href="https://yaman.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity shrink-0 min-h-[44px]"
          >
            <span>كل المقالات</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group border border-[#E5E5E5] rounded-2xl p-5 hover:bg-[#F5F5F5] transition-colors flex flex-col ${
                post.isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="inline-block text-xs font-medium border border-[#E5E5E5] rounded-full px-3 py-1 text-[#666] mb-4 self-start">
                {post.category}
              </span>
              <h3 className="font-bold text-base leading-snug mb-2 group-hover:opacity-70 transition-opacity">
                {post.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#999]">
                <span>{post.readTime}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="rotate-[225deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
