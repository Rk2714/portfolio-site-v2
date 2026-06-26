"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  instagram?: string;
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
          {works.map((work, index) => (
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

              <div className="md:col-span-3 flex items-center justify-end gap-3">
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                  >
                    詳しく見る
                    <ExternalLink size={12} />
                  </a>
                )}
                {work.instagram && (
                  <a
                    href={work.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D97706] font-medium hover:gap-2 transition-all"
                  >
                    Instagramで見る
                    <ExternalLink size={12} />
                  </a>
                )}
                {!work.link && !work.instagram && (
                  <span className="text-xs text-[#64748B]">対応実績あり</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
