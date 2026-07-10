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
  { label: "現場改善", meta: "医療介護" },
  { label: "情報整理", meta: "記録・連絡" },
  { label: "個人活動", meta: "ラジオ・地域" },
];

const stats = [
  { value: "約15年", label: "看護・現場経験" },
  { value: "Yazirusi", label: "業務改善支援" },
  { value: "FM21", label: "ラジオ・地域発信" },
];

export default function Hero({ profile }: { profile?: Profile | null }) {
  const [imgError, setImgError] = useState(false);
  const tagline1 = profile?.heroTagline1 || "医療・介護の現場に、";
  const tagline2 = profile?.heroTagline2 || "次の一歩をつくります。";
  const description =
    profile?.heroDescription ||
    "訪問看護、病棟、オンライン診療、地域活動。いろいろな現場で見てきたつまずきをもとに、記録・連絡・情報共有・AI活用を、現場に合わせて整えます。";
  const profileName = profile?.name || "金城 竜弥";
  const profileTitle = profile?.title || "医療・介護現場の業務改善パートナー / Yazirusi 代表";

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-[88px]"
    >
      <div className="pencil-section pencil-container relative z-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pencil-eyebrow mb-5"
            >
              金城竜弥の紹介ページ / Yazirusi代表 / 沖縄県中城村
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 max-w-[860px] text-[42px] font-black leading-[1.05] text-[#111111] sm:text-[54px]"
            >
              {tagline1}
              <br />
              {tagline2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pencil-body mb-5 max-w-[860px]"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex flex-wrap gap-[10px]"
            >
              {badges.map((badge) => (
                <span key={badge.label} className="pencil-chip">
                  <span>{badge.label}</span>
                  <span className="text-[11px] font-bold text-[#a0a09c]">{badge.meta}</span>
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-5 flex flex-col gap-3 sm:flex-row"
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
                className="pencil-button justify-center"
              >
                現場改善を相談する
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: "hero_secondary",
                    cta_target: "about_section",
                  });
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="pencil-button pencil-button-secondary justify-center"
              >
                金城竜弥について見る
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid max-w-[860px] gap-[10px] sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[#dedbd6] bg-white p-[18px]">
                  <p className="text-[20px] font-black text-[#111111]">{stat.value}</p>
                  <p className="mt-1 text-[12px] leading-[18px] text-[#a0a09c]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="border border-[#dedbd6] bg-[#fef5f0] p-[14px]">
              <div className="relative h-[380px] overflow-hidden bg-[#dedbd6] rounded-[8px]">
              {!imgError ? (
                <img
                  src="/images/headshot.png"
                  alt="金城 竜弥"
                  onError={() => setImgError(true)}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                />
              ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#3E2A1F]">
                    <span className="text-4xl font-bold text-white">RK</span>
                </div>
              )}
              </div>
              <p className="mt-3 text-[12px] leading-[18px] text-[#a0a09c]">
                医療・介護現場の業務改善とAI活用を支援しています
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[10px]">
              {["現場改善", "AI活用", "地域活動"].map((label) => (
                <div key={label} className="border border-[#dedbd6] bg-white p-[14px]">
                  <p className="text-[13px] font-black text-[#111111]">{label}</p>
                  <p className="mt-1 text-[11px] text-[#a0a09c]">対応</p>
              </div>
              ))}
            </div>

            <div className="border border-[#dedbd6] bg-[#3E2A1F] p-[18px] text-white">
              <p className="mb-2 text-[12px] font-bold tracking-[1.2px] text-white/70">PROFILE</p>
              <p className="text-[15px] font-black">{profileName}</p>
              <p className="mt-1 text-[12px] leading-[19px] text-white/70">{profileTitle}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mx-auto h-px max-w-[1312px] bg-[#dedbd6]" />
    </section>
  );
}
