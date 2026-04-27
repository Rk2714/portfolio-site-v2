"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Profile {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  imageUrl?: string;
}

export default function About({ profile }: { profile?: Profile | null }) {
  const bio =
    profile?.bio ||
    "看護師として13年の臨床経験を持ち、その後AIコンサルタントとして医療現場への技術導入を支援しています。オール日本リノベーション地域政策部での経験を活かし、議事録自動化ツールの導入から契約書管理システムの構築まで、現場の課題を技術で解決します。";
  const location = profile?.location || "沖縄県中城村";

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center text-white">
                <p className="text-7xl font-bold mb-2">RK</p>
                <p className="text-sm text-white/60">金城竜弥</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2563EB] text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="text-xs font-medium">看護師13年 / AIコンサルタント</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold text-[#2563EB] mb-3">プロフィール</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-2">
              現場を知るからこそ、<br />最適な解決策を提案できます
            </h2>
            <p className="text-base text-[#475569] leading-relaxed mt-6 mb-8">{bio}</p>

            <div className="flex items-center gap-2 text-[#475569] mb-8">
              <MapPin size={16} />
              <span className="text-sm">{location}在住</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <p className="text-2xl font-bold text-[#0F172A]">13年</p>
                <p className="text-xs text-[#64748B] mt-1">看護師経験</p>
              </div>
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <p className="text-2xl font-bold text-[#0F172A]">3施設</p>
                <p className="text-xs text-[#64748B] mt-1">AI導入実績</p>
              </div>
              <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                <p className="text-2xl font-bold text-[#0F172A]">50名+</p>
                <p className="text-xs text-[#64748B] mt-1">育成支援</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}