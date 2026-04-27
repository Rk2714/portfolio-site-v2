"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
  unit: string;
}

interface SkillData {
  category?: string;
  categoryColor?: string;
  skills?: SkillItem[];
}

export default function Skills({ skills }: { skills?: SkillData[] }) {
  const categories = skills && skills.length > 0 ? skills : [];

  // Group by category
  const grouped: Record<string, SkillData[]> = {};
  categories.forEach((s) => {
    const cat = s.category || "Other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(s);
  });

  const categoryKeys = Object.keys(grouped);

  return (
    <section id="skills" className="bg-[#FAFAFA] py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#FF4D00] mb-6">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0F] leading-tight">
            医療・テクノロジー・<br className="hidden md:block" />ビジネスの3領域を横断
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {categoryKeys.map((category, catIndex) => {
            const items = grouped[category];
            const color = items[0]?.categoryColor || "#0A0A0F";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3 className="text-lg font-bold text-[#0A0A0F] tracking-wide">
                    {category}
                  </h3>
                </div>

                <div className="space-y-8">
                  {items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline mb-3">
                        <span className="text-base font-medium text-[#0A0A0F]">
                          {item.skills?.[0]?.name || ""}
                        </span>
                        <span className="text-sm text-[#A1A1AA]">
                          {item.skills?.[0]?.level}{item.skills?.[0]?.unit}
                        </span>
                      </div>
                      <div className="h-[2px] bg-[#E4E4E7] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${Math.min(
                              ((item.skills?.[0]?.level || 0) / 15) * 100,
                              100
                            )}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + idx * 0.1 }}
                          className="h-full"
                          style={{ backgroundColor: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Language */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-[#E4E4E7]"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-[#A1A1AA] tracking-[0.2em] uppercase mb-2">Language</p>
              <p className="text-xl font-bold text-[#0A0A0F]">日本語</p>
              <p className="text-sm text-[#52525B] mt-1">母語</p>
            </div>
            <div>
              <p className="text-xs text-[#A1A1AA] tracking-[0.2em] uppercase mb-2">Language</p>
              <p className="text-xl font-bold text-[#0A0A0F]">English</p>
              <p className="text-sm text-[#52525B] mt-1">医療レベル（通訳可能）</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
