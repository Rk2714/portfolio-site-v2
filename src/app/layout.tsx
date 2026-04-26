import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "金城竜弥 | 看護師 × AIコンサルタント × キャリアコンサルタント",
  description: "沖縄を拠点に、医療とテクノロジーの架け橋となる活動をしています。看護師13年、AIコンサルタント、キャリアコンサルタントとして多面的に活動。",
  keywords: ["金城竜弥", "看護師", "AIコンサルタント", "キャリアコンサルタント", "沖縄", "医療", "地方創生"],
  authors: [{ name: "金城竜弥" }],
  openGraph: {
    title: "金城竜弥 | 看護師 × AIコンサルタント × キャリアコンサルタント",
    description: "沖縄を拠点に、医療とテクノロジーの架け橋となる活動をしています。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
