"use client";

import { motion } from "framer-motion";
import { Clock, Puzzle, TrendingDown } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: Clock,
    title: "人手不足が深刻化",
    description:
      "看護師不足により、記録業務や事務作業に追われ、本来の患者ケアに時間が割けない現場が増えています。残業の常態化がスタッフの離職を加速させています。",
  },
  {
    num: "02",
    icon: Puzzle,
    title: "AI導入の壁",
    description:
      "AIツールの導入を検討しても、どれを選べばよいか、現場にどう定着させるかが分からず手が止まっています。技術者と現場の認識のずれが導入失敗の原因になります。",
  },
  {
    num: "03",
    icon: TrendingDown,
    title: "効果が見えない",
    description:
      "IT投資をしても「現場で使われない」「期待した効果が出ない」という課題に直面しています。導入後のフォローがないため、ツールが形骸化していきます。",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left sticky header */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              Problem
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
              医療現場が
              <br />
              抱える3つの課題
            </h2>
          </div>

          {/* Right list */}
          <div className="lg:col-span-8 space-y-10">
            {problems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 pb-10 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="shrink-0">
                  <span className="text-3xl font-bold text-gray-200">
                    {item.num}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 flex items-center gap-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
