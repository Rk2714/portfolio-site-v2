"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const workImages: Record<string, string> = {
  "ヌチマース号": "/images/hero-medical.jpg",
  "コトマース": "/images/stethoscope.jpg",
  "AI導入支援": "/images/circuit.jpg",
  "PersonaSight": "/images/hero-tech.jpg",
  "キッズゲームコレクション": "/images/business.jpg",
  "契約書管理システム": "/images/hero-medical.jpg",
};

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export default function Works({ works }: { works: WorkItem[] }) {
  return (
    <section id="works" className="bg-[#0A0A0F] py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#FF4D00] mb-6">
            Selected Works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            医療とテクノロジーの<br className="hidden md:block" />交差点で生まれる価値
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={workImages[work.title] || "/images/hero-tech.jpg"}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/50 mb-3">
                  {work.category}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF4D00] transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed line-clamp-3">
                  {work.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white/0 group-hover:text-white/80 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase">View Project</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
