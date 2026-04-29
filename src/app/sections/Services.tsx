"use client";

import { motion } from "framer-motion";
import { Brain, FileCheck, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI導入コンサルティング",
    description:
      "現場の業務フローを分析し、最適なAIツール（議事録自動化、チャットボット等）の選定から定着支援まで一貫して対応します。導入後も定着状況を追跡し、使われ続ける体制を作ります。",
    features: ["業務フロー分析", "ツール選定・比較", "導入支援・定着化"],
  },
  {
    icon: FileCheck,
    title: "業務効率化支援",
    description:
      "看護師13年の経験に基づき、現場の視点で業務プロセスを見直し、契約書管理やマニュアル整備など具体的な改善を実施します。数値で効果を測定し、改善サイクルを回します。",
    features: ["業務プロセス改善", "契約書テンプレート化", "マニュアル整備"],
  },
  {
    icon: MessageCircle,
    title: "医療通訳・人材育成",
    description:
      "英語での医療通訳サービスと、スタッフ育成プログラムの構築を支援。インバウンド医療対応の人材基盤を強化し、現場が自走できる仕組みを作ります。",
    features: ["医療通訳（英語）", "スタッフ育成プログラム", "多言語対応支援"],
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
          提供する3つのサービス
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
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  isEven ? "" : "lg:direction-rtl"
                }`}
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
                  {/* Placeholder for service image */}
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
