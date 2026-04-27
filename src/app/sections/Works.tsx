"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const workData: Record<string, { metric: string; metricLabel: string; link?: string }> = {
  "ヌチマース号": { metric: "24時間", metricLabel: "対応体制", link: "https://nuchimaas.com" },
  "コトマース": { metric: "2拠点", metricLabel: "展開中", link: "https://cotomas.com" },
  "AI導入支援": { metric: "30%", metricLabel: "業務時間削減" },
  "PersonaSight": { metric: "1,000人", metricLabel: "ペルソナ検証", link: "https://personasight.com" },
  "契約書管理システム": { metric: "7名分", metricLabel: "テンプレート化" },
};

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export default function Works({ works }: { works: WorkItem[] }) {
  return (
    <section id="works" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-[#2563EB] mb-3">実績</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          導入実績とケーススタディ
        </h2>
        <p className="text-base text-[#475569] mb-12 max-w-2xl">
          医療MaaS、AI導入、業務効率化の3領域で実績を積んでいます。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => {
            const data = workData[work.title];
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl border border-gray-100 hover:border-[#2563EB]/20 hover:shadow-lg transition-all p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-[#2563EB] bg-[#2563EB]/5 px-3 py-1 rounded-full">
                    {work.category}
                  </span>
                  {data && (
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#0F172A]">{data.metric}</p>
                      <p className="text-xs text-[#64748B]">{data.metricLabel}</p>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {work.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed mb-4">
                  {work.description}
                </p>

                {data?.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#2563EB] font-medium hover:gap-2 transition-all"
                  >
                    詳しく見る
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}