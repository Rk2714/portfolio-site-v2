"use client";

import { motion } from "framer-motion";

const defaultSkillCategories = [
  {
    title: "DX・システム構築",
    skills: [
      { name: "出退勤管理", level: 3, unit: "社" },
      { name: "在庫管理", level: 2, unit: "社" },
      { name: "案件管理", level: 2, unit: "社" },
      { name: "Google環境構築", level: 5, unit: "社" },
      { name: "ツール連携", level: 4, unit: "社" },
    ],
  },
  {
    title: "AI・人材育成",
    skills: [
      { name: "AI講師", level: 50, unit: "名" },
      { name: "講座設計", level: 5, unit: "年" },
      { name: "現場定着型育成", level: 3, unit: "年" },
      { name: "マニュアル整備", level: 5, unit: "年" },
    ],
  },
  {
    title: "医療・現場支援",
    skills: [
      { name: "看護師業務", level: 15, unit: "年" },
      { name: "医療プロジェクト", level: 4, unit: "エリア" },
      { name: "現場育成", level: 5, unit: "年" },
      { name: "業務改善", level: 5, unit: "年" },
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
          専門性
        </h2>
        <p className="text-sm text-[#475569] mb-14 max-w-xl leading-[1.8]">
          DX環境構築、AI人材育成、医療現場支援の3領域で、現場の課題を解決します。
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-xs text-[#334555]"
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
            <span className="px-3 py-1.5 bg-white border border-gray-200 text-xs text-[#334555]">
              英語（医療プロジェクト対応）
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
