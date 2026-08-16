import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/noto-serif-jp";
import "./globals.css";
import AnalyticsProvider from "./components/AnalyticsProvider";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-site-xi-eight-33.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yazirusi｜金城竜弥 / RYUYA KINJO",
    template: "%s｜Yazirusi",
  },
  description:
    "法人・事業所の業務改善と、個人に合ったAI活用を支援するYazirusi。無理なく続けられる仕組みと使い方を一緒に整えます。",
  authors: [{ name: "金城竜弥", url: siteUrl }],
  creator: "金城竜弥",
  publisher: "Yazirusi",
  category: "business",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF5" },
    { media: "(prefers-color-scheme: dark)", color: "#0D2E28" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
