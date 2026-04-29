"use client";

import { motion } from "framer-motion";

interface Profile {
  name?: string;
  title?: string;
  heroTagline1?: string;
  heroTagline2?: string;
  heroDescription?: string;
}

export default function Hero({ profile }: { profile?: Profile | null }) {
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
              医療現場の課題を、
              <br />
              <span className="text-[#64748B]">DXと人材育成で解決する。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-[#475569] leading-[1.8] mb-10 max-w-xl"
            >
              15年の臨床経験を活かし、医療機関を中心に企業・個人事業主・チームの業務改善も支援。
              出退勤・在庫・案件管理のシステム構築、Google環境セットアップ、AI人材育成（50名規模）まで、現場目線で対応します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-block px-8 py-3.5 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors"
              >
                まずはあなたの現場を聞かせてください
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] bg-[#F1F5F9] relative overflow-hidden">
              <img
                src="/images/okinawa-sea.jpg"
                alt="沖縄"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0F172A] flex items-center justify-center text-white text-xs font-bold">
                    RK
                  </div>
                  <div>
                    <p className="text-[#0F172A] text-sm font-bold">金城 竜弥</p>
                    <p className="text-[#64748B] text-xs">看護師 / DX・業務改善パートナー / ラジオパーソナリティ</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
