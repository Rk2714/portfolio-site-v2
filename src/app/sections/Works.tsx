"use client";

import { motion } from "framer-motion";
import { Stethoscope, Globe, Brain, Gamepad2, FileText, Briefcase } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  "医療MaaS事業": Stethoscope,
  "関西圏医療支援": Globe,
  "テクノロジー": Brain,
  "Webアプリケーション": Brain,
  "Webゲーム": Gamepad2,
  "業務効率化": FileText,
};

const colorMap: Record<string, string> = {
  "医療MaaS事業": "#0066CC",
  "関西圏医療支援": "#FF6B35",
  "テクノロジー": "#0066CC",
  "Webアプリケーション": "#1A1A2E",
  "Webゲーム": "#FF6B35",
  "業務効率化": "#0066CC",
};

interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export default function Works({ works }: { works: WorkItem[] }) {
  return (
    <SectionWrapper id="works" className="bg-[#FAFBFC]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">Works</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto">
          医療現場からテクノロジーまで、多様な分野での実績をご紹介します。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work, index) => {
          const Icon = iconMap[work.category] || Briefcase;
          const color = colorMap[work.category] || "#0066CC";
          return (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#0066CC]/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${color}10` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <span className="text-xs font-medium text-[#6B7280] bg-[#FAFBFC] px-3 py-1 rounded-full">
                  {work.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#0066CC] transition-colors">
                {work.title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                {work.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
