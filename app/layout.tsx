import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "يمان العرضي",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
  description:
    "يمان العرضي — شريك استراتيجي لمؤسسي ما قبل التمويل. يجمع بين التفكير في التحقق من الفكرة والوصول المباشر إلى الشبكة الصحيحة في السعودية والخليج",
  keywords: "يمان العرضي، شركات ناشئة، التحقق من الفكرة، ما قبل التمويل، السعودية، ريادة الأعمال",
  openGraph: {
    title: "يمان العرضي — شريك المؤسسين في مرحلة التحقق والتوسع",
    description:
      "شريك استراتيجي لمؤسسي ما قبل التمويل. يجمع بين التفكير في التحقق من الفكرة والوصول المباشر إلى الشبكة الصحيحة في السعودية والخليج.",
    locale: "ar_SA",
    type: "profile",
  },
  other: {
    "og:profile:first_name": "يمان",
    "og:profile:last_name": "العرضي",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="alternate" hrefLang="ar" href="https://yaman.io/" />
        <link rel="alternate" hrefLang="x-default" href="https://yaman.io/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "يمان العرضي",
              alternateName: "Yaman Alordi",
              jobTitle: "شريك المؤسسين في مرحلة التحقق والتوسع",
              url: "https://yaman.io",
              sameAs: [
                "https://linkedin.com/in/yamaneur",
                "https://x.com/yamaneur",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
