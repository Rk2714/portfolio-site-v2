"use client";

import { motion } from "framer-motion";
import { MapPin, Stethoscope, Brain, Users, Heart, Globe } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const defaultCareers = [
  {
    icon: Stethoscope,
    title: "看護師（13年）",
    description: "臨床現場で13年の経験を積み、患者ケアから医療チームマネジメントまで幅広く従事。",
  },
  {
    icon: Brain,
    title: "AIコンサルタント",
    description: "オール日本リノベーション地域政策部にて、医療現場へのAI導入・システム構築を支援。",
  },
  {
    icon: Users,
    title: "キャリアコンサルタント",
    description: '"看護師を守る人がいない"という課題から、医療従事者のキャリア支援を開始。',
  },
];

const defaultStats = [
  { icon: Heart, label: "看護師経験", value: "13年" },
  { icon: Globe, label: "拠点", value: "沖縄県中城村" },
  { icon: Brain, label: "AI導入支援", value: "複数現場" },
];

interface Profile {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  imageUrl?: string;
  available?: boolean;
}

export default function About({ profile }: { profile?: Profile | null }) {
  const name = profile?.name || "金城 竜弥 / Kinjo Ryuya";
  const title = profile?.title || "看護師 × AIコンサルタント × キャリアコンサルタント";
  const bio =
    profile?.bio ||
    "看護師として13年の臨床経験を持ち、キャリアコンサルタントとして医療従事者の支援、AIコンサルタントとして地域政策部でシステム導入を行うなど、多面的に活動しています。沖縄を拠点に「ヌチマース号」などの医療MaaS事業に参画し、地方創生とグローバル医療の両面から社会貢献を目指しています。";
  const location = profile?.location || "沖縄県中城村";
  const available = profile?.available !== false;
  const imageUrl = profile?.imageUrl;

  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {imageUrl ? (
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-3xl bg-gradient-to-br from-[#0066CC] to-[#1A1A2E] flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-bold text-white">RK</span>
              </div>
            )}
            {available && (
              <div className="absolute -bottom-4 -right-4 md:right-auto md:-left-4 bg-[#FF6B35] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                Available for Work
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-2">
            About Me
          </h2>
          <p className="text-[#FF6B35] font-semibold mb-6">{name}</p>

          <div className="flex items-center gap-2 text-[#6B7280] mb-6">
            <MapPin size={18} />
            <span className="text-sm">{location}</span>
          </div>

          <p className="text-[#6B7280] leading-relaxed mb-8">{bio}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {defaultStats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-[#FAFBFC] rounded-xl">
                <stat.icon className="w-6 h-6 text-[#0066CC] mx-auto mb-2" />
                <p className="text-lg font-bold text-[#1A1A2E]">{stat.value}</p>
                <p className="text-xs text-[#6B7280]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {defaultCareers.map((career, index) => (
          <motion.div
            key={career.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-[#FAFBFC] rounded-2xl border border-gray-100 hover:border-[#0066CC]/20 hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066CC]/10 flex items-center justify-center mb-4">
              <career.icon className="w-6 h-6 text-[#0066CC]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{career.title}</h3>
            <p className="text-sm text-[#6B7280] leading-relaxed">{career.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
