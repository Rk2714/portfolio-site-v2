"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "../../lib/analytics";

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

  const navBaseClass = scrolled
    ? "bg-white/95 backdrop-blur border-b border-gray-100"
    : "bg-transparent";

  const textClass = scrolled
    ? "text-[#475569] hover:text-[#0F172A]"
    : isHome
    ? "text-white/70 hover:text-white"
    : "text-[#475569] hover:text-[#0F172A]";

  const logoClass = scrolled
    ? "text-[#0F172A]"
    : isHome
    ? "text-white"
    : "text-[#0F172A]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBaseClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className={`text-sm font-bold tracking-wider transition-colors ${logoClass}`}
          >
             金城竜弥 <span className="text-[#D97706]">↑</span>
           </Link>

          <div className="hidden md:flex items-center gap-6">
            {isHome && navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm transition-colors ${textClass}`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/media"
              className={`text-sm transition-colors ${textClass}`}
            >
              メディア
            </Link>
          </div>

          <div className="hidden md:block">
            {isHome ? (
              <a
                href="#contact"
                onClick={(e) => {
                  trackEvent("contact_cta_click", {
                    page_type: isHome ? "home" : "other",
                    position: "navigation_desktop",
                    cta_target: "contact_section",
                  });
                  handleClick(e, "#contact");
                }}
                className={`px-4 py-2 text-sm font-bold transition-colors ${
                  scrolled
                    ? "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                    : "bg-white text-[#0F172A] hover:bg-white/90"
                }`}
              >
                無料相談
              </a>
            ) : (
              <Link
                href="/#contact"
                onClick={() => {
                  trackEvent("contact_cta_click", {
                    page_type: "other",
                    position: "navigation_desktop",
                    cta_target: "contact_section",
                  });
                }}
                className="px-4 py-2 text-sm font-bold bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors"
              >
                無料相談
              </Link>
            )}
          </div>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-[#0F172A]" : isHome ? "text-white" : "text-[#0F172A]"}`}
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
              {isHome && navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="block text-sm font-medium text-[#334155] hover:text-[#0F172A] py-2"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/media"
                className="block text-sm font-medium text-[#334155] hover:text-[#0F172A] py-2"
                onClick={() => setIsOpen(false)}
              >
                メディア
              </Link>
              <Link
                href="/#contact"
                className="block text-center px-4 py-3 bg-[#0F172A] text-white text-sm font-bold mt-2"
                onClick={() => {
                  trackEvent("contact_cta_click", {
                    page_type: isHome ? "home" : "other",
                    position: "navigation_mobile",
                    cta_target: "contact_section",
                  });
                  setIsOpen(false);
                }}
              >
                無料相談
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
