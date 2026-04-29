"use client";

import { motion } from "framer-motion";

const defaultSkillCategories = [
  {
    title: "医療・ヘルスケア",
    skills: [
      { name: "看護師業務", level: 13, unit: "年" },
      { name: "オンライン診療支援", level: 3, unit: "年" },
      { name: "訪問看護・薬配送", level: 3, unit: "年" },
      { name: "医療通訳（英語）", level: 5, unit: "年" },
    ],
  },
  {
    title: "テクノロジー",
    skills: [
      { name: "AI導入コンサル", level: 2, unit: "年" },
      { name: "Next.js / TypeScript", level: 1, unit: "年" },
      { name: "HTML / CSS / JS", level: 2, unit: "年" },
      { name: "システム構築支援", level: 2, unit: "年" },
    ],
  },
  {
    title: "ビジネス・マネジメント",
    skills: [
      { name: "キャリアコンサル", level: 3, unit: "年" },
      { name: "スタッフ育成", level: 5, unit: "年" },
      { name: "マニュアル整備", level: 5, unit: "年" },
      { name: "PR・広報", level: 3, unit: "年" },
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
            { title: string; skills: { name: string; level: number; unit: string }[] }
          > = {};
          skills.forEach((s) => {
            const cat = s.category || "その他";
            if (!grouped[cat]) {
              grouped[cat] = { title: cat, skills: [] };
            }
            if (s.name) {
              grouped[cat].skills.push({
                name: s.name,
                level: s.level || 0,
                unit: s.unit || "年",
              });
            }
          });
          return Object.values(grouped);
        })()
      : defaultSkillCategories;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          3領域を横断する専門性
        </h2>
        <p className="text-sm text-[#475569] mb-14 max-w-xl leading-[1.8]">
          医療現場の課題を理解し、テクノロジーとビジネスの視点から解決策を提案します。
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="text-sm font-bold text-[#0F172A] mb-4 pb-2 border-b border-[#0F172A]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-xs text-[#334155]"
                  >
                    {skill.name}
                    <span className="text-[#94A3B8]">
                      {skill.level}
                      {skill.unit}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200">
          <h3 className="text-sm font-bold text-[#0F172A] mb-4">言語</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#0F172A] text-white text-xs">
              日本語（母語）
            </span>
            <span className="px-3 py-1.5 bg-white border border-gray-200 text-xs text-[#334155]">
              英語（医療通訳レベル）
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
