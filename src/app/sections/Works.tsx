"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const workData: Record<string, { metric: string; metricLabel: string; link?: string }> = {
  "DX環境構築（複数社）": { metric: "10社+", metricLabel: "導入実績" },
  "出退勤・在庫管理システム": { metric: "3社", metricLabel: "構築済み" },
  "案件管理システム": { metric: "2社", metricLabel: "運用中" },
  "Google環境セットアップ": { metric: "5社+", metricLabel: "導入支援" },
  "AI人材育成プログラム": { metric: "50名", metricLabel: "育成実績" },
  "コトマース・ヌチマース": { metric: "4エリア", metricLabel: "沖縄・京都・大阪・北海道" },
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
          DX環境構築、AI人材育成、業務効率化、医療プロジェクトの4領域で、現場と向き合いながら成果を出しています。
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
                <div className="md:col-span-5">
                  <span className="text-xs text-[#64748B] mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {work.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-sm text-[#475569] leading-[1.7]">
                    {work.description}
                  </p>
                </div>

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
