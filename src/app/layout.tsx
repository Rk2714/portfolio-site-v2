import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "金城竜弥｜看護師13年の経験で医療現場にAIを導入する",
  description: "看護師13年の臨床経験を持つAI導入コンサルタント金城竜弥。医療現場の業務効率化、AI議事録導入支援、キャリアコンサルティングを提供します。",
  keywords: ["金城竜弥", "看護師", "AIコンサルタント", "キャリアコンサルタント", "沖縄", "医療", "地方創生"],
  authors: [{ name: "金城竜弥" }],
  openGraph: {
    title: "金城竜弥｜看護師13年の経験で医療現場にAIを導入する",
    description: "看護師13年の臨床経験を持つAI導入コンサルタント。医療現場の業務効率化、AI議事録導入支援を提供します。",
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
