"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "../../lib/analytics";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
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

  const navBaseClass = scrolled ? "bg-white/95 backdrop-blur border-b border-[#E2E8F0]" : "bg-white/90 backdrop-blur";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBaseClass}`}>
      <div className="max-w-[1312px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="flex flex-col leading-tight transition-opacity hover:opacity-75"
          >
            <span className="text-[18px] font-extrabold text-[#0F172A]">金城 竜弥</span>
            <span className="hidden text-[12px] text-[#64748B] sm:block">AIの使い方を教える人 / 仕組み構築も対応</span>
          </Link>

          <div className="hidden md:flex items-center gap-[10px]">
            {navItems.map((item) =>
              item.href.startsWith("#") && isHome ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-[#0F172A] transition-colors hover:bg-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                  className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-[#0F172A] transition-colors hover:bg-white"
                >
                  {item.label}
                </Link>
              )
            )}
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
                className="rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white transition-colors hover:bg-[#1E293B]"
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
                className="rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white transition-colors hover:bg-[#1E293B]"
              >
                無料相談
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            className="md:hidden rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-2 text-[#0F172A]"
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
            className="md:hidden bg-white border-b border-[#E2E8F0]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) =>
                item.href.startsWith("#") && isHome ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="block rounded-[4px] px-3 py-2 text-sm font-bold text-[#334155] hover:bg-[#FFF8F0] hover:text-[#0F172A]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="block rounded-[4px] px-3 py-2 text-sm font-bold text-[#334155] hover:bg-[#FFF8F0] hover:text-[#0F172A]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/#contact"
                className="mt-2 block rounded-[4px] bg-[#0F172A] px-4 py-3 text-center text-sm font-bold text-white"
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
