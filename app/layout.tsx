import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "يمان العرضي — رائد أعمال، قيادي منتجات، مستثمر ملائكي",
  description:
    "قائد منتجات ومستشار تحول ذكاء اصطناعي يساعد الشركات في الخليج على بناء منتجات مستقبلية. مؤسس مشارك في لاندسكيب ورئيس المنتجات في ثمانية",
  keywords: "يمان العرضي، قائد منتجات، ذكاء اصطناعي، تحول رقمي، السعودية، ثمانية، لاندسكيب",
  openGraph: {
    title: "يمان العرضي — رائد أعمال، قيادي منتجات، مستثمر ملائكي",
    description:
      "قائد منتجات ومستشار تحول ذكاء اصطناعي يساعد الشركات في الخليج على بناء منتجات مستقبلية.",
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
              jobTitle: "رائد أعمال، قيادي منتجات، مستثمر ملائكي",
              worksFor: [
                { "@type": "Organization", name: "ثمانية" },
                { "@type": "Organization", name: "لاندسكيب" },
              ],
              url: "https://yaman.io",
              sameAs: [
                "https://linkedin.com/in/yamanalordi",
                "https://yaman.io",
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
