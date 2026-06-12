"use client";

import { motion } from "framer-motion";

const problems = [
  {
    num: "01",
    title: "人手不足が深刻化",
    description: "看護師不足で事務作業に時間を取られ、本来の患者ケアに集中しにくい。残業が常態化し、離職リスクが上がっている。",
  },
  {
    num: "02",
    title: "DX導入が定着しない",
    description: "ツールを導入しても現場が使いこなせず、従来運用へ逆戻り。IT担当と現場の認識のずれで、投資対効果が見えにくい。",
  },
  {
    num: "03",
    title: "システムがバラバラ",
    description: "出退勤・在庫・案件管理が分断され、データがつながらない。エクセル補完が増えて、逆に非効率になっている。",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
            Problem
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
            こんな課題に直面していませんか
          </h2>
        </div>

        <div className="space-y-10 max-w-3xl">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 pb-10 border-b border-gray-100 last:border-0 last:pb-0"
            >
              <span className="text-3xl font-bold text-gray-200 shrink-0">{item.num}</span>
              <div>
                <h4 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h4>
                <p className="text-sm text-[#475569] leading-[1.8]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
