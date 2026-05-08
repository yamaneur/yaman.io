import Section from "./Section";

const channels = [
  {
    label: "لينكد إن",
    href: "https://linkedin.com/in/yamanadnan",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    newTab: true,
  },
  {
    label: "إكس",
    href: "https://x.com/yamaneur",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    newTab: true,
  },
  {
    label: "البريد الإلكتروني",
    href: "mailto:hello@yaman.io",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    newTab: false,
  },
];

export default function Contact() {
  return (
    <Section id="contact" ariaLabelledBy="contact-heading">
      <div className="flex flex-col items-center text-center">
        <h2
          id="contact-heading"
          className="font-serif-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-12 lg:mb-16"
        >
          تواصل معي
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.newTab ? "_blank" : undefined}
              rel={ch.newTab ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-3 w-full sm:w-auto border border-[#E5E5E5] rounded-2xl bg-white text-black transition-all duration-200 hover:bg-[#F5F5F5] hover:shadow-md"
              style={{ padding: "32px 40px" }}
            >
              {ch.icon}
              <span className="font-medium text-base">{ch.label}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
