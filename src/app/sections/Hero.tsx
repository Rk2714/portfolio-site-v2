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
  { label: "AIの使い方", meta: "まずここ" },
  { label: "仕組み構築", meta: "必要なら" },
  { label: "働き方相談", meta: "余白から" },
];

const stats = [
  { value: "30分", label: "無料相談" },
  { value: "60分", label: "AI活用セッション" },
  { value: "¥3,000", label: "キャンペーン価格" },
];

export default function Hero({ profile }: { profile?: Profile | null }) {
  const [imgError, setImgError] = useState(false);
  const tagline1 = profile?.heroTagline1 || "AIの使い方を、";
  const tagline2 = profile?.heroTagline2 || "仕事に合わせて教えます。";
  const description =
    profile?.heroDescription ||
    "相談だけでも、仕組みづくりでも。看護の現場で育った感覚をベースに、AI・Google・予約導線を、無理なく使える形に整えます。";
  const profileName = profile?.name || "金城 竜弥";
  const profileTitle = profile?.title || "AI活用アドバイザー / 仕組みづくり / キャリア相談";

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
              AIの使い方相談 / 仕組みづくり / 沖縄県中城村
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 max-w-[860px] text-[42px] font-black leading-[1.05] text-[#0F172A] sm:text-[54px]"
            >
              {tagline1}
              <br />
              仕事に合わせて
              <br />
              教えます。
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
                  <span className="text-[11px] font-bold text-[#64748B]">{badge.meta}</span>
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
                className="pencil-button pencil-button-secondary justify-center"
              >
                相談内容を先に見る
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid max-w-[860px] gap-[10px] sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[#E2E8F0] bg-white p-[18px]">
                  <p className="text-[20px] font-black text-[#0F172A]">{stat.value}</p>
                  <p className="mt-1 text-[12px] leading-[18px] text-[#64748B]">{stat.label}</p>
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
            <div className="border border-[#E2E8F0] bg-[#FCF9F5] p-[14px]">
              <div className="relative h-[250px] overflow-hidden bg-[#E2E8F0]">
              {!imgError ? (
                <img
                  src="/images/headshot.png"
                  alt="金城 竜弥"
                  onError={() => setImgError(true)}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#0F172A]">
                    <span className="text-4xl font-bold text-white">RK</span>
                </div>
              )}
              </div>
              <p className="mt-3 text-[12px] leading-[18px] text-[#64748B]">
                差し替え予定: プロフィール写真 / 仕事中の自然な写真
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[10px]">
              {["AI相談", "構築", "キャリア"].map((label) => (
                <div key={label} className="border border-[#E2E8F0] bg-white p-[14px]">
                  <p className="text-[13px] font-black text-[#0F172A]">{label}</p>
                  <p className="mt-1 text-[11px] text-[#64748B]">対応</p>
              </div>
              ))}
            </div>

            <div className="border border-[#E2E8F0] bg-[#0F172A] p-[18px] text-white">
              <p className="mb-2 text-[12px] font-bold tracking-[1.2px] text-white/70">PROFILE</p>
              <p className="text-[15px] font-black">{profileName}</p>
              <p className="mt-1 text-[12px] leading-[19px] text-white/70">{profileTitle}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mx-auto h-px max-w-[1312px] bg-[#E2E8F0]" />
    </section>
  );
}
