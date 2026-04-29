"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "AI導入の相談から導入まで、どのくらいの期間がかかりますか？",
    a: "規模によりますが、ヒアリングから導入計画の策定まで2〜4週間、実際の導入支援は1〜3ヶ月程度が目安です。まずは無料相談でお気軽にご相談ください。",
  },
  {
    q: "医療以外の業種でも依頼できますか？",
    a: "医療現場に特化したサービスを提供しています。医療機関、介護施設、健康保険組合、自治体の健康政策部門などが主な対象です。",
  },
  {
    q: "AIツールの選定はどのように進めますか？",
    a: "現場の業務フローをヒアリングし、課題を特定した上で、最適なツールを3〜5つ程度提案します。導入後の定着支援まで一貫して対応します。",
  },
  {
    q: "看護師経験はコンサルティングにどう活きますか？",
    a: "臨床現場の課題を理解した上で提案できるのが最大の強みです。現場の視点を持たないIT業者とは異なり、実際の業務フローに基づいた現実的な改善策を提供します。",
  },
  {
    q: "オンラインでの相談も可能ですか？",
    a: "はい、全国どこからでもオンライン相談が可能です。ZoomやGoogle Meetで対応しています。初回相談は無料です。",
  },
  {
    q: "費用の目安を教えてください",
    a: "プロジェクトの規模によって異なります。まずは無料相談でご要望をお聞かせください、お見積もりを提示します。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
          よくある質問
        </h2>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 last:border-b">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between py-5 text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text-sm font-medium text-[#0F172A] pr-6">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#64748B] shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#475569] leading-[1.8]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
