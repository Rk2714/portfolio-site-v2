"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

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
  const bio =
    profile?.bio ||
    "看護師として13年の臨床経験を持ち、キャリアコンサルタントとして医療従事者の支援、AIコンサルタントとして地域政策部でシステム導入を行うなど、多面的に活動しています。沖縄を拠点に「ヌチマース号」などの医療MaaS事業に参画し、地方創生とグローバル医療の両面から社会貢献を目指しています。";
  const location = profile?.location || "沖縄県中城村";

  return (
    <section id="about" className="bg-white py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/okinawa-sea.jpg"
                alt="Okinawa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF4D00] flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-4xl font-bold">13</p>
                <p className="text-xs tracking-[0.2em] uppercase mt-1">Years</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#FF4D00] mb-6">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0F] leading-tight mb-8">
              {name}
            </h2>
            <p className="text-base md:text-lg text-[#52525B] leading-relaxed mb-8">
              {bio}
            </p>

            <div className="flex items-center gap-2 text-[#52525B] mb-10">
              <MapPin size={16} strokeWidth={1.5} />
              <span className="text-sm tracking-wide">{location}</span>
            </div>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-[#0A0A0F]">13年</p>
                <p className="text-xs text-[#A1A1AA] mt-1 tracking-wide">看護師経験</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A0A0F]">沖縄</p>
                <p className="text-xs text-[#A1A1AA] mt-1 tracking-wide">活動拠点</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#0A0A0F]">複数</p>
                <p className="text-xs text-[#A1A1AA] mt-1 tracking-wide">AI導入現場</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
