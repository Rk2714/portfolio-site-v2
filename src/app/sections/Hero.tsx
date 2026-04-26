"use client";

import { motion } from "framer-motion";
import { ChevronDown, Stethoscope, Brain, Users } from "lucide-react";

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052a3] to-[#1A1A2E]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-white/70 font-medium">看護師</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-white/70 font-medium">AIコンサル</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-white/70 font-medium">キャリア支援</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          看護師 × AIコンサルタント
          <br />
          <span className="text-[#FF6B35]">× キャリアコンサルタント</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          医療とテクノロジーの架け橋に。
          <br className="hidden sm:block" />
          地方創生からグローバル医療まで、多面的に活動しています。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScroll("#works")}
            className="px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-xl hover:bg-[#e55a2b] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#FF6B35]/25"
          >
            実績を見る
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
          >
            お問い合わせ
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => handleScroll("#about")}
            className="text-white/50 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
