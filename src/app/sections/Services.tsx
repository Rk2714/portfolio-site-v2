"use client";

import { motion } from "framer-motion";
import { Monitor, GraduationCap, Settings, Sparkles } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "システム環境構築",
    description: "出退勤・在庫・案件管理システムの選定・導入、Google環境セットアップ。現場の業務フローを分析し、無駄を削減します。",
    features: ["出退勤・在庫・案件管理システム", "Google環境セットアップ・予約管理"],
  },
  {
    icon: GraduationCap,
    title: "AI活用講座",
    description: "AIツールの使い方講座の設計・実施。現場で使えるレベルまで育成し、教育担当の負担を減らします。50名規模の実績があります。",
    features: ["AI使い方講座設計・実施", "50名規模の育成実績"],
  },
  {
    icon: Settings,
    title: "業務効率化",
    description: "15年の現場経験を活かし、業務フローを見直します。エクセルでの補完作業をシステム化し、本業に集中できる環境を作ります。",
    features: ["業務フロー分析・改善", "契約書テンプレート化・マニュアル整備"],
  },
  {
    icon: Sparkles,
    title: "AI活用法診断",
    description: "AIを仕事に使っているけど「これで合ってる？」と感じている方へ。60分でAI活用を診断し、改善ステップをお伝えします。",
    features: ["60分 ¥3,000 / 30分無料お試しあり", "AI活用の現状診断＋改善アドバイス", "次のアクションが明確になる"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-16">
          4つのサービス
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-100"
            >
              <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center mb-5">
                <service.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#475569] leading-[1.7] mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-[#334155]"
                  >
                    <span className="w-1 h-1 bg-[#0F172A]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
