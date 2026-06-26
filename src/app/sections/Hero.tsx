"use client";

import { motion } from "framer-motion";
import { trackEvent } from "../../lib/analytics";

interface Profile {
  name?: string;
  title?: string;
  heroTagline1?: string;
  heroTagline2?: string;
  heroDescription?: string;
}

export default function Hero({ profile }: { profile?: Profile | null }) {
  const tagline1 = profile?.heroTagline1 || "「どうするとよくなるか」";
  const tagline2 = profile?.heroTagline2 || "で立ち止まったら、相談してほしい。";
  const description =
    profile?.heroDescription ||
    "現場をよくしたい、でも人手も時間もない——。15年の看護師経験とDX・AIの知見で、あなたの「やりたい」を仕組みでカタチにします。出退勤・在庫・案件管理のシステム構築からAI人材育成まで、現場目線で対応。";
  const profileName = profile?.name || "金城 竜弥";
  const profileTitle = profile?.title || "看護師 / DX・業務改善パートナー / ラジオパーソナリティ";

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-[#64748B] mb-6 tracking-wider"
            >
              看護師15年 / DX・業務改善 / AI人材育成 / 沖縄県中城村
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-[#0F172A] leading-[1.25] mb-8"
            >
              {tagline1}
              <br />
              <span className="text-[#64748B]">{tagline2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#475569] leading-[1.8] mb-10 max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] bg-[#FFF5EB] relative overflow-hidden group">
              <img
                src="/images/okinawa-sea.jpg"
                alt="沖縄"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
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
    </section>
  );
}
