"use client";

import { motion } from "framer-motion";
import { Users, Monitor } from "lucide-react";

const problemsA = [
  {
    num: "01",
    title: "人手不足が深刻化",
    description: "看護師不足により、記録業務や事務作業に時間を取られ、本来の患者ケアに集中しにくい。結果として残業が常態化し、離職リスクも上がっている。",
  },
  {
    num: "02",
    title: "DX導入が定着しない",
    description: "ツールを導入しても現場が使いこなせず、従来運用へ逆戻りしやすい。IT担当と現場の認識のずれで、投資対効果が見えにくくなる。",
  },
  {
    num: "03",
    title: "効果が見えない",
    description: "導入後の運用設計と振り返りが不足し、ツールが形骸化しやすい。どの業務が何分削減されたか見えず、次の改善につながらない。",
  },
];

const problemsB = [
  {
    num: "04",
    title: "人材育成が追いつかない",
    description: "AIツールが増えても、使いこなせる人材が不足しやすい。教育担当の負担が集中し、現場の運用ルールが揺らぎやすい。",
  },
  {
    num: "05",
    title: "システムがバラバラ",
    description: "出退勤・在庫・案件管理が分断され、データがつながらない。エクセル補完が増えて入力重複と確認漏れが発生しやすくなる。",
  },
  {
    num: "06",
    title: "Google環境が使えていない",
    description: "Google Workspaceを導入しても、カレンダー連携・予約管理・権限設計が不十分なまま止まりやすい。小規模チームほど設計不在で機能を使い切れない。",
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
            医療現場はもちろん、企業・個人事業主も
            <br className="hidden md:block" />
            こんな課題に直面していませんか
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-6 pb-2 border-b border-[#0F172A] flex items-center gap-2">
              <Monitor size={14} />
              医療現場
            </h3>
            <div className="space-y-8">
              {problemsA.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-2xl font-bold text-gray-200 shrink-0">{item.num}</span>
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#475569] leading-[1.8]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#0F172A] mb-6 pb-2 border-b border-[#0F172A] flex items-center gap-2">
              <Users size={14} />
              企業・個人事業主・チーム
            </h3>
            <div className="space-y-8">
              {problemsB.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-2xl font-bold text-gray-200 shrink-0">{item.num}</span>
                  <div>
                    <h4 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h4>
                    <p className="text-sm text-[#475569] leading-[1.8]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
