"use client";

import { motion } from "framer-motion";
import { trackEvent } from "../../lib/analytics";
import { useState } from "react";

interface Profile {
  name?: string;
  title?: string;
  heroTagline1?: string;
  heroTagline2?: string;
  heroDescription?: string;
}

const badges = [
  { emoji: "🩺", label: "医療ケア", sub: "15年" },
  { emoji: "📡", label: "ラジオ発信", sub: "FM21" },
  { emoji: "🤖", label: "AI活用", sub: "" },
  { emoji: "🏘️", label: "地域コミュニティ", sub: "" },
];

export default function Hero({ profile }: { profile?: Profile | null }) {
  const [imgError, setImgError] = useState(false);
  const tagline1 = profile?.heroTagline1 || "「どうするとよくなるか」";
  const tagline2 = profile?.heroTagline2 || "で立ち止まったら、相談してほしい。";
  const description =
    profile?.heroDescription ||
    "15年看護師やってきて、AIもシステムもキャリア相談も、「現場の不便」をどうにかするためにやってます。難しい話は抜きで、まずはお茶でも飲みながら話しませんか？";
  const profileName = profile?.name || "金城 竜弥";
  const profileTitle = profile?.title || "看護師 / AI活用アドバイザー / キャリアの相談所 / ラジオパーソナリティ";

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left Column — Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-[#64748B] mb-4 tracking-wider"
            >
              看護師15年 / AI活用アドバイザー / キャリアの相談所 / 沖縄県中城村
            </motion.p>

            {/* 4 Pillar Badges */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#0077B6]/5 text-[#0077B6] border border-[#0077B6]/20 rounded-full"
                >
                  <span>{badge.emoji}</span>
                  <span>{badge.label}</span>
                  {badge.sub && (
                    <span className="text-[10px] opacity-60">（{badge.sub}）</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-[1.25] mb-8"
            >
              {tagline1}
              <br />
              <span className="text-[#64748B]">{tagline2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-[#475569] leading-[1.8] mb-10 max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://calendar.app.google/wJsV5mJhXuLQmBnS6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: "hero_primary",
                    cta_target: "calendar",
                  });
                }}
                className="inline-block px-8 py-3.5 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors text-center"
              >
                30分無料相談を予約する
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: "hero_secondary",
                    cta_target: "contact_section",
                  });
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block px-8 py-3.5 border border-gray-200 text-[#0F172A] text-sm font-bold hover:bg-[#FFF8F0] transition-colors text-center"
              >
                現場をよくしたい方、ご相談ください
              </a>
            </motion.div>
          </div>

          {/* Right Column — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] bg-[#FFF5EB] relative overflow-hidden group">
              {!imgError ? (
                <img
                  src="/images/headshot.png"
                  alt="金城 竜弥"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
                  <span className="text-white text-4xl font-bold">RK</span>
                </div>
              )}

              {/* Profile overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0077B6] flex items-center justify-center text-white text-xs font-bold">
                    RK
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-sm font-bold">{profileName}</p>
                    <p className="text-[#64748B] text-xs">{profileTitle}</p>
                  </div>
                </div>
              </div>

              {/* Decorative arrow */}
              <div className="absolute top-4 left-4 text-[#D97706]/20 text-6xl font-bold leading-none pointer-events-none select-none">
                ↗
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-4 right-4 flex flex-col gap-2"
              >
                <div className="bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
                  <p className="text-lg font-bold text-[#D97706]">15年</p>
                  <p className="text-[10px] text-[#64748B] leading-tight">現場経験</p>
                </div>
                <div className="bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
                  <p className="text-lg font-bold text-[#D97706]">50名+</p>
                  <p className="text-[10px] text-[#64748B] leading-tight">育成実績</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider absolute bottom-0 left-0 right-0 w-full leading-none pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
            fill="#FFF8F0"
          />
        </svg>
      </div>
    </section>
  );
}
