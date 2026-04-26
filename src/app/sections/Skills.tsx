"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Brain,
  Users,
  Globe,
  Code,
  FileText,
  MessageCircle,
  HeartPulse,
  Truck,
  GraduationCap,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  {
    title: "医療・ヘルスケア",
    color: "#0066CC",
    skills: [
      { icon: Stethoscope, name: "看護師業務", level: 13, unit: "年" },
      { icon: HeartPulse, name: "オンライン診療支援", level: 3, unit: "年" },
      { icon: Truck, name: "訪問看護・薬配送", level: 3, unit: "年" },
      { icon: Globe, name: "医療通訳（英語）", level: 5, unit: "年" },
    ],
  },
  {
    title: "テクノロジー",
    color: "#FF6B35",
    skills: [
      { icon: Brain, name: "AI導入コンサル", level: 2, unit: "年" },
      { icon: Code, name: "Next.js / TypeScript", level: 1, unit: "年" },
      { icon: Code, name: "HTML / CSS / JS", level: 2, unit: "年" },
      { icon: Brain, name: "システム構築支援", level: 2, unit: "年" },
    ],
  },
  {
    title: "ビジネス・マネジメント",
    color: "#1A1A2E",
    skills: [
      { icon: Users, name: "キャリアコンサル", level: 3, unit: "年" },
      { icon: GraduationCap, name: "スタッフ育成", level: 5, unit: "年" },
      { icon: FileText, name: "マニュアル整備", level: 5, unit: "年" },
      { icon: MessageCircle, name: "PR・広報", level: 3, unit: "年" },
    ],
  },
];

const languages = [
  { name: "日本語", level: "母語" },
  { name: "英語", level: "医療レベル（通訳可能）" },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">Skills</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto">
          医療・テクノロジー・ビジネスの3領域を横断するスキルセットです。
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
            className="bg-[#FAFBFC] rounded-2xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${category.color}15` }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E]">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <skill.icon className="w-4 h-4 text-[#6B7280]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-[#1A1A2E]">
                        {skill.name}
                      </span>
                      <span className="text-xs text-[#6B7280]">
                        {skill.level}{skill.unit}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((skill.level / 15) * 100, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#0066CC] to-[#1A1A2E] rounded-2xl p-8 text-white"
      >
        <h3 className="text-xl font-bold mb-6">Language Skills</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{lang.name}</span>
                <span className="text-sm text-white/70">{lang.level}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
