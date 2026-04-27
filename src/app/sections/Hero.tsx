"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface Profile {
  name?: string;
  title?: string;
  heroTagline1?: string;
  heroTagline2?: string;
  heroDescription?: string;
}

export default function Hero({ profile }: { profile?: Profile | null }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/stethoscope.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0F172A]/75" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-sm mb-6"
        >
          看護師13年の経験 × AI導入コンサルタント
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
        >
          医療現場の業務を<br />
          <span className="text-[#2563EB]">AIで効率化</span>します
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto"
        >
          13年の看護師経験を活かし、現場の課題を理解した上でAI導入を支援。
          議事録自動化、業務フロー改善、オンライン診療の構築まで、医療特化のコンサルティングを提供します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 bg-[#2563EB] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            無料相談はこちら
          </a>
          <a
            href="#works"
            onClick={(e) => { e.preventDefault(); document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            実績を見る
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/40 hover:text-white transition-colors"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}