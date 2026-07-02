import type { Metadata } from "next";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-xi-eight-33.vercel.app"),
  title: "金城竜弥｜AI活用アドバイザー / 仕組みづくり / キャリア相談",
  description: "AIの使い方、Googleや予約導線の整理、キャリア相談まで。看護の現場ベースで、使える形に整えます。",
  keywords: ["金城竜弥", "看護師", "AIコンサルタント", "キャリアコンサルタント", "沖縄", "医療", "地方創生"],
  authors: [{ name: "金城竜弥" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "金城竜弥｜AI活用アドバイザー / 仕組みづくり / キャリア相談",
    description: "AIの使い方、Googleや予約導線の整理、キャリア相談まで。看護の現場ベースで、使える形に整えます。",
    url: "/",
    siteName: "金城竜弥",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/images/okinawa-sea.jpg", alt: "金城竜弥 ポートフォリオサイト" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "金城竜弥｜AI活用アドバイザー / 仕組みづくり / キャリア相談",
    description: "AIの使い方、Googleや予約導線の整理、キャリア相談まで。看護の現場ベースで、使える形に整えます。",
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
