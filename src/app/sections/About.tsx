"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { careerTimeline } from "../../lib/site-data";

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
    "看護師15年の現場経験を武器に、DX・AI・人材育成で「現場のよくしたい」を実現するパートナー。システム構築からAI講座、ラジオ発信まで。現場に立つ人の気持ちを忘れずに、改善を続けています。";
  const location = profile?.location || "沖縄県中城村";

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top: Photo + Bio */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
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
            <p className="text-sm text-[#475569] leading-[1.9] mb-4">{bio}</p>

            <div className="mb-8">
              <a
                href="/media"
                className="inline-flex items-center gap-2 text-sm text-[#2563EB] font-medium hover:gap-3 transition-all"
              >
                ラジオパーソナリティとしてのメディア活動を見る
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[#475569] mb-10">
              <MapPin size={14} />
              <span className="text-sm">{location}在住</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-t-2 border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">15年</p>
                <p className="text-xs text-[#64748B] mt-1">看護師・現場経験</p>
              </div>
              <div className="border-t-2 border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">50名+</p>
                <p className="text-xs text-[#64748B] mt-1">AI人材育成</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Career Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              Career
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-[#0F172A]">
              ここに至るまでの道のり
            </h3>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] md:left-6 top-0 bottom-0 w-0.5 bg-[#D97706]/30" />

            <div className="space-y-10">
              {careerTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-14 md:pl-16"
                >
                  {/* Circle marker */}
                  <div className="absolute left-[10px] md:left-[18px] top-1 w-[18px] h-[18px] rounded-full bg-[#D97706] border-4 border-white shadow z-10" />

                  {/* Year badge */}
                  <div className="inline-block px-3 py-1 bg-[#D97706]/10 text-[#D97706] text-xs font-bold rounded-full mb-2">
                    {item.year}
                  </div>

                  <h4 className="text-base md:text-lg font-bold text-[#0F172A] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
