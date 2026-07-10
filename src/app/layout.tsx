import type { Metadata } from "next";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-xi-eight-33.vercel.app"),
  title: "金城竜弥｜ラジオアーカイブ / いえろーかっし〜",
  description: "FM21「いえろーかっし〜」のアーカイブ。医療、働き方、地域活動をテーマにしたラジオ番組です。",
  keywords: ["金城竜弥", "いえろーかっし〜", "FM21", "ラジオ", "沖縄"],
  authors: [{ name: "金城竜弥" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "金城竜弥｜ラジオアーカイブ / いえろーかっし〜",
    description: "FM21「いえろーかっし〜」のアーカイブ。医療、働き方、地域活動をテーマにしたラジオ番組です。",
    url: "/",
    siteName: "金城竜弥 ラジオアーカイブ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/headshot.png", alt: "金城竜弥" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "金城竜弥｜ラジオアーカイブ / いえろーかっし〜",
    description: "FM21「いえろーかっし〜」のアーカイブ。医療、働き方、地域活動をテーマにしたラジオ番組です。",
    images: ["/images/headshot.png"],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
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
