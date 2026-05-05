import Section from "./Section";
import SectionHeader from "./SectionHeader";

const mediaCards = [
  {
    name: "العربية أعمال",
    href: "https://mobile.x.com/yamaneur/status/1814009433837756922",
    logo: "/images/media/al-arabiya.svg",
    photo: "/images/media/alarabia.jpg",
  },
  {
    name: "سوالف بزنس",
    href: "https://www.youtube.com/watch?v=PfTqG0vkVqo",
    logo: "/images/media/swalif.svg",
    photo: "/images/media/swalif-business.jpg",
  },
  {
    name: "ذا ستيج",
    href: "https://www.youtube.com/watch?v=sxcUxMjzlvE",
    logo: "/images/media/the-stage.svg",
    photo: "/images/media/the-stage.jpg",
  },
];

export default function Media() {
  return (
    <Section id="media" fullWidth ariaLabelledBy="media-heading">
      <SectionHeader
        id="media-heading"
        eyebrow="الظهور"
        title="ظهوراتي الإعلامية"
        description="مقابلات، بودكاست، وكتابات — حيث أشارك ما أتعلمه مع المؤسسين."
      />

      <div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        role="list"
        aria-label="وسائل الإعلام"
      >
        {mediaCards.map((item) => (
          <div key={item.name} role="listitem">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-black transition-all"
              aria-label={item.name}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3 border-t border-[#E5E5E5] group-hover:border-black transition-colors">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  className="h-6 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-30 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
