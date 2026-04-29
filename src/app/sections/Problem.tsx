"use client";

import { motion } from "framer-motion";
import { Clock, Puzzle, TrendingDown, Users, Monitor, GraduationCap } from "lucide-react";

const problemsA = [
  {
    num: "01",
    title: "人手不足が深刻化",
    description: "看護師不足により、記録業務や事務作業に追われ、本来の患者ケアに時間が割けない。残業の常態化がスタッフの離職を加速させている。",
  },
  {
    num: "02",
    title: "DX導入が定着しない",
    description: "ツールを導入しても現場が使いこなせず、結局従来の業務に逆戻り。IT業者と現場の認識のずれが、投資を無駄にしている。",
  },
  {
    num: "03",
    title: "効果が見えない",
    description: "システム導入後のフォローがなく、ツールが形骸化。どの業務が改善されたか分からず、次の投資に繋がらない。",
  },
];

const problemsB = [
  {
    num: "04",
    title: "人材育成が追いつかない",
    description: "AIツールが増えても、使いこなせる人材がいない。教育担当の負担が増え、現場は混乱している。",
  },
  {
    num: "05",
    title: "システムがバラバラ",
    description: "出退勤・在庫・案件管理が別システムで、連携が取れない。エクセルで補完する作業が増え、逆に非効率になっている。",
  },
  {
    num: "06",
    title: "Google環境が使えていない",
    description: "Google Workspaceを導入しても、カレンダー連携や予約管理、権限設定が中途半端。個人事業主や小規模チームほど放置されている。",
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
            現場が抱える課題
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
