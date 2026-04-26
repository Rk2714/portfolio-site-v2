"use client";

import { motion } from "framer-motion";
import { ExternalLink, Stethoscope, Globe, Brain, Gamepad2, FileText } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const works = [
  {
    icon: Stethoscope,
    title: "ヌチマース号",
    category: "医療MaaS事業",
    description: "沖縄発・観光客向け24時間医療支援サービス。看護師がホテルに訪問し、医師とのオンライン診療をサポート。薬の配送まで一貫して提供。",
    tags: ["看護師訪問", "オンライン診療", "薬配送", "インバウンド医療"],
    color: "#0066CC",
  },
  {
    icon: Globe,
    title: "コトマース",
    category: "関西圏医療支援",
    description: "京都・大阪でのインバウンド医療支援「インターナショナルクリニック京都・大阪」として展開。多言語対応の医療サービスを提供。",
    tags: ["京都", "大阪", "多言語対応", "オンライン診療"],
    color: "#FF6B35",
  },
  {
    icon: Brain,
    title: "AI導入支援",
    category: "テクノロジー",
    description: "医療現場へのAI議事録サービス（Leexi）導入支援、業務効率化コンサルティング。契約書管理システムの構築なども実施。",
    tags: ["AI議事録", "業務効率化", "システム構築", "コンサルティング"],
    color: "#0066CC",
  },
  {
    icon: Brain,
    title: "PersonaSight",
    category: "Webアプリケーション",
    description: "多角的ペルソナ視点のビジネスアイデア検証アプリ。Next.js + TypeScript + Tailwind CSSで開発。1,000人の仮想ペルソナからフィードバックを収集。",
    tags: ["Next.js", "TypeScript", "AI", "ビジネス検証"],
    color: "#1A1A2E",
  },
  {
    icon: Gamepad2,
    title: "キッズゲームコレクション",
    category: "Webゲーム",
    description: "3-6歳向け10種類のミニゲーム集。HTML/CSS/JavaScriptで実装し、Vercelでデプロイ。広告収益化を想定した設計。",
    tags: ["HTML/CSS/JS", "子供向け", "ゲーム", "Vercel"],
    color: "#FF6B35",
  },
  {
    icon: FileText,
    title: "契約書管理システム",
    category: "業務効率化",
    description: "スタッフ7名分の契約書テンプレート化・管理業務。業務委託契約の分類（統括オペレーター/現場ディレクター/運営オペレーター）を設計。",
    tags: ["契約管理", "テンプレート化", "業務委託", "法務支援"],
    color: "#0066CC",
  },
];

export default function Works() {
  return (
    <SectionWrapper id="works" className="bg-[#FAFBFC]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">Works</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto">
          医療現場からテクノロジーまで、多様な分野での実績をご紹介します。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#0066CC]/10 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${work.color}10` }}
              >
                <work.icon className="w-6 h-6" style={{ color: work.color }} />
              </div>
              <span className="text-xs font-medium text-[#6B7280] bg-[#FAFBFC] px-3 py-1 rounded-full">
                {work.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#0066CC] transition-colors">
              {work.title}
            </h3>

            <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
              {work.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#0066CC] bg-[#0066CC]/5 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
