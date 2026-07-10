"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (!isHome) {
        window.location.assign("/" + href);
        return;
      }
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navBaseClass = scrolled ? "bg-white/95 backdrop-blur border-b border-[#dedbd6]" : "bg-white/90 backdrop-blur";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBaseClass}`}>
      <div className="max-w-[1080px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="flex flex-col leading-tight transition-opacity hover:opacity-75"
          >
            <span className="text-[18px] font-extrabold text-[#3E2A1F]">金城 竜弥</span>
            <span className="hidden text-[12px] text-[#a0a09c] sm:block">医療・介護現場の業務改善 / Yazirusi</span>
          </Link>

          <div className="hidden md:flex items-center gap-[10px]">
            {navItems.map((item) =>
              item.href.startsWith("#") && isHome ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-[#3E2A1F] transition-colors hover:bg-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-[#3E2A1F] transition-colors hover:bg-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            className="md:hidden rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-2 text-[#3E2A1F]"
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
            className="md:hidden bg-white border-b border-[#dedbd6]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.href.startsWith("#") && isHome ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="block rounded-[4px] px-3 py-2 text-sm font-bold text-[#7b7b78] hover:bg-[#fef5f0] hover:text-[#3E2A1F]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="block rounded-[4px] px-3 py-2 text-sm font-bold text-[#7b7b78] hover:bg-[#fef5f0] hover:text-[#3E2A1F]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
