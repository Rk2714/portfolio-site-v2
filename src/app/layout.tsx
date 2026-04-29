import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "金城竜弥｜看護師15年の現場経験でDX・業務改善を支援",
  description: "看護師15年の臨床経験を持つDX・業務改善パートナー金城竜弥。AI人材育成、業務効率化、Google環境構築、医療プロジェクト支援を提供します。",
  keywords: ["金城竜弥", "看護師", "AIコンサルタント", "キャリアコンサルタント", "沖縄", "医療", "地方創生"],
  authors: [{ name: "金城竜弥" }],
  openGraph: {
    title: "金城竜弥｜看護師15年の現場経験でDX・業務改善を支援",
    description: "看護師15年の臨床経験を持つDX・業務改善パートナー。AI人材育成、業務効率化、Google環境構築を提供します。",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
