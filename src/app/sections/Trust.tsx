"use client";

import { motion } from "framer-motion";

const trustItems = [
  { value: "15年", label: "看護師・現場経験" },
  { value: "50名+", label: "AI人材育成実績" },
  { value: "4エリア", label: "医療プロジェクト（沖縄・京都・大阪・北海道）" },
];

export default function Trust() {
  return (
    <section className="py-12 md:py-16 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-left"
            >
              <p className="text-2xl md:text-4xl font-bold text-white mb-1">
                {item.value}
              </p>
              <p className="text-xs md:text-sm text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
