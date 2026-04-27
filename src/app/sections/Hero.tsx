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
  const tagline1 = profile?.heroTagline1 || "Nurse";
  const tagline2 = profile?.heroTagline2 || "AI Consultant";
  const tagline3 = profile?.title || "Career Consultant";

  const handleScroll = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-tech.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm font-medium tracking-[0.3em] uppercase text-white/60 mb-8"
        >
          Okinawa, Japan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8"
        >
          <span className="block">{tagline1}</span>
          <span className="block mt-2 text-[#FF4D00]">{tagline2}</span>
          <span className="block mt-2 text-white/40">{tagline3}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 bg-[#FF4D00] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-none hover:bg-[#E04400] transition-all duration-300"
          >
            View Works
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border border-white/30 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#0A0A0F] transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScroll}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
      >
        <ArrowDown size={20} strokeWidth={1} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
