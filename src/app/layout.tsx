import type { Metadata } from "next";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-xi-eight-33.vercel.app"),
  title: "金城竜弥｜看護師14年の現場経験でDX・人材育成・地域活動を支援",
  description: "看護師14年の臨床経験を持つDX・業務改善パートナー金城竜弥。AI人材育成、業務効率化、Google環境構築、子ども食堂運営など、医療×地域×テクノロジーで現場を支援します。",
  keywords: ["金城竜弥", "看護師", "AIコンサルタント", "キャリアコンサルタント", "沖縄", "医療", "地方創生"],
  authors: [{ name: "金城竜弥" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "金城竜弥｜看護師14年の現場経験でDX・人材育成・地域活動を支援",
    description: "看護師14年の臨床経験を持つDX・業務改善パートナー。AI人材育成、業務効率化、Google環境構築、子ども食堂運営など、医療×地域×テクノロジーで現場を支援します。",
    url: "/",
    siteName: "金城竜弥",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/okinawa-sea.jpg", alt: "金城竜弥 ポートフォリオサイト｜医療×ラジオ×AI×地域" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "金城竜弥｜看護師14年の現場経験でDX・人材育成・地域活動を支援",
    description: "看護師14年の臨床経験を持つDX・業務改善パートナー。AI人材育成、業務効率化、Google環境構築、子ども食堂運営など、医療×地域×テクノロジーで現場を支援します。",
    images: ["/images/okinawa-sea.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
