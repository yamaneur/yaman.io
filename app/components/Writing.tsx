import Section from "./Section";
import SectionHeader from "./SectionHeader";

const articles = [
  {
    id: "fourfallacies",
    title: "أعذار يحبّها المؤسسين ويكرهها السوق",
    description: "أفكار تبدو منطقية حتى تواجه اختبار السوق الأول",
    href: "https://yaman.io/post/fourfallacies",
    image: "https://r2-bucket.thmanyah.com/cdn-cgi/image/width=800/media/2025/representation-person-carrying-burden.jpg",
  },
  {
    id: "ignoreusers",
    title: "متى ينبغي أن تتجاهل عميلك؟",
    description: "حالتين لا تأخذ طلبات وردود أفعالك عميلك فيها على محمل الجد.",
    href: "https://yaman.io/post/ignoreusers",
    image: "https://r2-bucket.thmanyah.com/media/2025491491e8-aa1c-4a27-af12-ffbd54a6592e.jpeg",
  },
  {
    id: "gofast",
    title: "لا تهرب من الكف الأول",
    description: "لماذا يتأخر رواد الأعمال في النزول للسوق؟",
    href: "https://yaman.io/post/gofast",
    image: "https://r2-bucket.thmanyah.com/media/2025d7d01277-cc24-478e-8ddf-82b0babab67c.jpeg",
  },
];

export default function Writing() {
  return (
    <Section id="writing" fullWidth ariaLabelledBy="writing-heading">
      <SectionHeader
        id="writing-heading"
        title="المقالات"
        action={
          <a
            href="https://yaman.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity min-h-[44px]"
          >
            <span>كل المقالات</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        }
        eyebrow="تدوينات مفيدة للمؤسسين"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#E5E5E5] rounded-2xl overflow-hidden hover:border-[#CCC] transition-all flex flex-col"
          >
            <div className="relative aspect-[16/9] bg-[#FAFAFA] overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-5 lg:p-6 flex flex-col flex-1">
              <h3 className="font-serif-display font-black text-lg leading-snug mb-2 group-hover:opacity-70 transition-opacity">
                {article.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1 mb-4">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium group-hover:opacity-60 transition-opacity">
                <span>اقرأ المقال</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
