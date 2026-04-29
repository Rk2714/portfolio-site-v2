"use client";

import { motion } from "framer-motion";
import { Monitor, GraduationCap, Settings, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "DX環境構築",
    description: "出退勤管理、在庫管理、案件管理システムの選定・導入、ツール連携、Google Workspaceセットアップまで。現場の業務フローを分析し、無駄を削減する環境を作ります。個人事業主から中小チームまで対応します。",
    features: ["出退勤・在庫・案件管理システム", "ツール連携・自動化", "Google環境セットアップ", "カレンダー予約管理構築"],
  },
  {
    icon: GraduationCap,
    title: "AI人材育成・講師",
    description: "AIツールの使い方講座の設計・実施。現場で使えるレベルまで育成し、教育担当の負担を減らします。50名規模の育成実績があり、医療従事者から企業スタッフまで幅広く対応します。",
    features: ["AI使い方講座設計・実施", "現場定着型育成プログラム", "50名規模の育成実績", "医療・非医療両対応"],
  },
  {
    icon: Settings,
    title: "業務効率化コンサル",
    description: "15年の現場経験を活かし、医療機関・企業・個人事業主の業務フローを見直します。エクセルでの補完作業をシステム化し、本業に集中できる環境を作ります。",
    features: ["業務フロー分析", "システム選定・導入支援", "契約書テンプレート化", "マニュアル整備"],
  },
  {
    icon: HeartPulse,
    title: "医療プロジェクト支援",
    description: "沖縄・京都・大阪・北海道の医療プロジェクトに参画。現場の育成・環境構築・業務改善を行います。コトマース、ヌチマースなどの医療事業において、現場目線での環境整備を担当しています。",
    features: ["沖縄・京都・大阪・北海道", "現場育成・環境構築", "業務改善・マニュアル化", "オンライン診療支援"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-16">
          4つのサービス
        </h2>

        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="w-12 h-12 bg-[#0F172A] flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-[1.8] mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-[#334155]"
                      >
                        <span className="w-1 h-1 bg-[#0F172A]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`aspect-[16/10] bg-[#E2E8F0] ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center text-[#94A3B8] text-xs">
                    [サービスイメージ]
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
