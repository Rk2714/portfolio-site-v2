"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
  { label: "プロフィール", href: "#about" },
  { label: "スキル", href: "#skills" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className={`text-sm font-bold tracking-wider transition-colors ${scrolled ? "text-[#0F172A]" : "text-white"}`}
          >
            KINJO RYUYA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-[#475569] hover:text-[#2563EB]" : "text-white/80 hover:text-white"}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="px-5 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              無料相談
            </a>
          </div>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-[#0F172A]" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-base font-medium text-[#334155] hover:text-[#2563EB] py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="block text-center px-5 py-3 bg-[#2563EB] text-white font-medium rounded-lg"
              >
                無料相談
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}