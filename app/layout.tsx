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
    "أساعد المؤسسين يختبروا السوق ويوصلوا للعملاء الأوائل",
  keywords: "يمان العرضي، شركات ناشئة، التحقق من الفكرة، ما قبل التمويل، السعودية، ريادة الأعمال",
  openGraph: {
    title: "يمان العرضي",
    description: "أساعد المؤسسين يختبروا السوق ويوصلوا للعملاء الأوائل",
    url: "https://yaman.io",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "يمان العرضي",
    description: "أساعد المؤسسين يختبروا السوق ويوصلوا للعملاء الأوائل",
    images: ["/images/og-image.png"],
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
