"use client";

import { motion } from "framer-motion";

const defaultSkillCategories = [
  {
    title: "医療・ヘルスケア",
    skills: [
      { name: "小児科" },
      { name: "内科" },
      { name: "消化器" },
      { name: "泌尿器" },
      { name: "訪問看護" },
      { name: "オンライン診療" },
      { name: "看護師業務 15年" },
    ],
  },
  {
    title: "DX・システム構築",
    skills: [
      { name: "出退勤管理" },
      { name: "在庫管理" },
      { name: "案件管理" },
      { name: "Google環境構築" },
      { name: "ツール連携" },
    ],
  },
  {
    title: "AI・人材育成",
    skills: [
      { name: "AI講師" },
      { name: "講座設計" },
      { name: "現場定着型育成" },
      { name: "マニュアル整備" },
      { name: "50名+ 育成実績" },
    ],
  },
];

interface SkillData {
  category?: string;
  categorycolor?: string;
  name?: string;
  level?: number;
  unit?: string;
}

export default function Skills({ skills }: { skills?: SkillData[] }) {
  const categories =
    skills && skills.length > 0
      ? (() => {
          const grouped: Record<
            string,
            { title: string; skills: { name: string }[] }
          > = {};
          skills.forEach((s) => {
            const cat = s.category || "その他";
            if (!grouped[cat]) {
              grouped[cat] = { title: cat, skills: [] };
            }
            if (s.name) {
              grouped[cat].skills.push({
                name: s.name,
              });
            }
          });
          return Object.values(grouped);
        })()
      : defaultSkillCategories;

  // 医療・ヘルスケアを最優先に抽出
  const primaryCategory = categories.find((c) => c.title.includes("医療")) || categories[0];
  const otherCategories = categories.filter((c) => c.title !== primaryCategory.title);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          専門性
        </h2>
        <p className="text-sm text-[#475569] mb-14 max-w-xl leading-[1.8]">
          15年の臨床経験とDX・AIの知見を組み合わせ、現場の課題を解決します。
        </p>

        {/* 最重要カテゴリー：横長カード */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-8 bg-[#FFF8F0] border border-gray-100"
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                {primaryCategory.title}
              </h3>
              <p className="text-sm text-[#64748B]">
                15年の臨床経験を活かした、現場目線の支援
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-3">
                {primaryCategory.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-white border border-gray-200 text-sm text-[#334155]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 残り2カテゴリー：2カラム */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="p-6 bg-white border border-gray-100"
            >
              <h3 className="text-sm font-bold text-[#0F172A] mb-4 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-[#FFF8F0] text-xs text-[#334155]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-gray-100">
          <h3 className="text-sm font-bold text-[#0F172A] mb-4">言語</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0F172A] text-white text-xs">
              日本語（母語）
            </span>
            <span className="px-3 py-1.5 bg-[#FFF8F0] border border-gray-200 text-xs text-[#334155]">
              英語（医療プロジェクト対応）
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
