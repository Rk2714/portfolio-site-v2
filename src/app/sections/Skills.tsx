"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Brain, Users, Globe, Code, FileText,
  MessageCircle, HeartPulse, Truck, GraduationCap, Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Brain, Users, Globe, Code, FileText,
  MessageCircle, HeartPulse, Truck, GraduationCap, Briefcase,
};

const defaultSkillCategories = [
  {
    title: "医療・ヘルスケア",
    color: "#2563EB",
    skills: [
      { name: "看護師業務", level: 13, unit: "年", iconName: "Stethoscope" },
      { name: "オンライン診療支援", level: 3, unit: "年", iconName: "HeartPulse" },
      { name: "訪問看護・薬配送", level: 3, unit: "年", iconName: "Truck" },
      { name: "医療通訳（英語）", level: 5, unit: "年", iconName: "Globe" },
    ],
  },
  {
    title: "テクノロジー",
    color: "#0D9488",
    skills: [
      { name: "AI導入コンサル", level: 2, unit: "年", iconName: "Brain" },
      { name: "Next.js / TypeScript", level: 1, unit: "年", iconName: "Code" },
      { name: "HTML / CSS / JS", level: 2, unit: "年", iconName: "Code" },
      { name: "システム構築支援", level: 2, unit: "年", iconName: "Brain" },
    ],
  },
  {
    title: "ビジネス・マネジメント",
    color: "#1E3A5F",
    skills: [
      { name: "キャリアコンサル", level: 3, unit: "年", iconName: "Users" },
      { name: "スタッフ育成", level: 5, unit: "年", iconName: "GraduationCap" },
      { name: "マニュアル整備", level: 5, unit: "年", iconName: "FileText" },
      { name: "PR・広報", level: 3, unit: "年", iconName: "MessageCircle" },
    ],
  },
];

interface SkillData {
  category?: string;
  categorycolor?: string;
  name?: string;
  level?: number;
  unit?: string;
  iconname?: string;
}

export default function Skills({ skills }: { skills?: SkillData[] }) {
  const categories = skills && skills.length > 0
    ? (() => {
        const grouped: Record<string, { title: string; color: string; skills: { name: string; level: number; unit: string; iconName: string }[] }> = {};
        skills.forEach((s) => {
          const cat = s.category || "その他";
          if (!grouped[cat]) {
            grouped[cat] = { title: cat, color: s.categorycolor || "#2563EB", skills: [] };
          }
          if (s.name) {
            grouped[cat].skills.push({
              name: s.name,
              level: s.level || 0,
              unit: s.unit || "年",
              iconName: s.iconname || "Briefcase",
            });
          }
        });
        return Object.values(grouped);
      })()
    : defaultSkillCategories;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-[#2563EB] mb-3">スキル</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          3領域を横断する専門性
        </h2>
        <p className="text-base text-[#475569] mb-12 max-w-2xl">
          医療現場の課題を理解し、テクノロジーとビジネスの視点から解決策を提案します。
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                <h3 className="text-base font-bold text-[#0F172A]">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.iconName] || Briefcase;
                  const percent = Math.min((skill.level / 15) * 100, 100);
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#64748B]" />
                          <span className="text-sm font-medium text-[#0F172A]">{skill.name}</span>
                        </div>
                        <span className="text-xs text-[#64748B]">{skill.level}{skill.unit}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ backgroundColor: category.color, width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#0F172A] rounded-xl p-8">
          <h3 className="text-lg font-bold text-white mb-6">言語スキル</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex justify-between items center">
                <span className="text-white font-medium">日本語</span>
                <span className="text-white/60 text-sm">母語</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">英語</span>
                <span className="text-white/60 text-sm">医療通訳レベル</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}