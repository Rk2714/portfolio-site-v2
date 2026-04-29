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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className={`text-sm font-bold tracking-wider transition-colors ${
              scrolled ? "text-[#0F172A]" : "text-white"
            }`}
          >
            金城竜弥
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm transition-colors ${
                  scrolled
                    ? "text-[#475569] hover:text-[#0F172A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className={`px-4 py-2 text-sm font-bold transition-colors ${
                scrolled
                  ? "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                  : "bg-white text-[#0F172A] hover:bg-white/90"
              }`}
            >
              無料相談
            </a>
          </div>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-[#0F172A]" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-sm font-medium text-[#334155] hover:text-[#0F172A] py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="block text-center px-4 py-3 bg-[#0F172A] text-white text-sm font-bold mt-2"
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
