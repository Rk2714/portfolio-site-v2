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
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] bg-[#E2E8F0] relative">
              {profile?.imageUrl ? (
                <img
                  src={profile.imageUrl}
                  alt={profile.name || "金城竜弥"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#94A3B8]">
                  <span className="text-6xl font-bold text-[#CBD5E1]">RK</span>
                  <span className="text-xs mt-2">金城竜弥</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 lg:pt-8"
          >
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              About
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 leading-snug">
              現場を知るからこそ、
              <br />
              最適な解決策を提案できる
            </h2>
            <p className="text-sm text-[#475569] leading-[1.9] mb-8">{bio}</p>

            <div className="flex items-center gap-2 text-[#475569] mb-10">
              <MapPin size={14} />
              <span className="text-sm">{location}在住</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="border-t-2 border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">13年</p>
                <p className="text-xs text-[#64748B] mt-1">看護師経験</p>
              </div>
              <div className="border-t-2 border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">3施設</p>
                <p className="text-xs text-[#64748B] mt-1">AI導入実績</p>
              </div>
              <div className="border-t-2 border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">50名+</p>
                <p className="text-xs text-[#64748B] mt-1">育成支援</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
