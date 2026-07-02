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
  const imageMap = ["/images/hero-tech.jpg", "/images/profile-workspace.jpg", "/images/business.jpg", "/images/okinawa-sea.jpg"];

  return (
    <section id="works" className="bg-white">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">Works</p>
          <h2 className="pencil-title">導入実績</h2>
          <p className="pencil-body max-w-5xl">
            数字で盛るより、何を整えて、どこまで自走できるようにしたかを見せます。AI導入、講座、業務改善、地域活動を同じ目線で整理します。
          </p>
        </div>

        <div className="grid gap-[18px] md:grid-cols-2">
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group flex flex-col items-start gap-4 rounded-[16px] border border-[#E2E8F0] p-[22px_24px_26px] transition-colors hover:border-[#D7E0EA] ${
                index % 2 === 1 ? "bg-[#FCF9F5]" : "bg-white"
              }`}
            >
              <span className="pencil-chip bg-[#FFF8F0]">{work.category}</span>
              <h3 className="text-[22px] font-black leading-tight text-[#0F172A]">{work.title}</h3>

              <p className="text-[14px] leading-[25px] text-[#475569]">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {work.link && (
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pencil-button pencil-button-secondary"
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
                    className="pencil-button pencil-button-secondary"
                  >
                    Instagramで見る
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <div className="mt-auto h-[148px] w-full overflow-hidden rounded-[14px] bg-[#E2E8F0]">
                <img
                  src={imageMap[index % imageMap.length]}
                  alt=""
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.article>
          ))}
        </div>
        <div className="h-px bg-[#E2E8F0]" />
      </div>
    </section>
  );
}
