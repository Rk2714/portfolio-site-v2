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
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Works
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          導入実績
        </h2>
        <p className="text-sm text-[#475569] mb-14 max-w-xl leading-[1.8]">
          医療MaaS、AI導入、業務効率化の3領域で、現場と向き合いながら成果を出してきました。
        </p>

        <div className="space-y-6">
          {works.map((work, index) => {
            const data = workData[work.title];
            return (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group grid md:grid-cols-12 gap-6 items-center border-t border-gray-100 pt-6"
              >
                {/* Left info */}
                <div className="md:col-span-5">
                  <span className="text-xs text-[#64748B] mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {work.title}
                  </h3>
                </div>

                {/* Center desc */}
                <div className="md:col-span-4">
                  <p className="text-sm text-[#475569] leading-[1.7]">
                    {work.description}
                  </p>
                </div>

                {/* Right metric + link */}
                <div className="md:col-span-3 flex items-center justify-between gap-4">
                  {data && (
                    <div>
                      <p className="text-2xl font-bold text-[#0F172A]">
                        {data.metric}
                      </p>
                      <p className="text-xs text-[#64748B]">{data.metricLabel}</p>
                    </div>
                  )}
                  {data?.link ? (
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                    >
                      詳しく見る
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="shrink-0 text-xs text-[#94A3B8]">非公開</span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
