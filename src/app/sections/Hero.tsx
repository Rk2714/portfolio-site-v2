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
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left text block */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs text-white/50 mb-6 tracking-wider"
            >
              看護師13年 / AI導入コンサルタント / 沖縄県中城村
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white leading-[1.25] mb-8"
            >
              医療現場にAIを導入する。
              <br />
              <span className="text-white/60">現場の看護師が、実務の課題と向き合う。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-white/60 leading-[1.8] mb-10 max-w-xl"
            >
              13年の臨床経験を活かし、現場の業務フローを分析。議事録自動化、契約書管理、オンライン診療構築など、医療機関の実務効率化を支援します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-8 py-3.5 bg-white text-[#0F172A] text-sm font-bold hover:bg-white/90 transition-colors"
              >
                無料相談を申し込む
              </a>
              <a
                href="#works"
                onClick={(e) => { e.preventDefault(); document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-sm text-white/70 hover:text-white transition-colors link-underline"
              >
                導入実績を見る
              </a>
            </motion.div>
          </div>

          {/* Right visual block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] bg-[#1E293B] relative overflow-hidden">
              <img
                src="/images/stethoscope.jpg"
                alt="医療現場"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F172A] to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-white text-xs font-bold">
                    RK
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">金城 竜弥</p>
                    <p className="text-white/50 text-xs">看護師 / AIコンサルタント</p>
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
