"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "法人向け", href: "/#business" },
  { label: "個人向け", href: "/#personal" },
  { label: "相談できること", href: "/#support-options" },
  { label: "支援例", href: "/#case-study" },
  { label: "料金", href: "/pricing" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileNavRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !mobileNavRef.current) return;
      const links = Array.from(
        mobileNavRef.current.querySelectorAll<HTMLAnchorElement>("a"),
      );
      const first = menuButtonRef.current;
      const last = links.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyboard);
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="home-shell site-header__inner">
        <Link href="/" className="site-brand" aria-label="金城竜弥 ホーム">
          <strong>Yazirusi</strong>
          <span>金城竜弥 / RYUYA KINJO</span>
        </Link>

        <nav className="site-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="site-nav__cta">
            30分無料相談
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="site-menu-button"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav
          ref={mobileNavRef}
          id="mobile-navigation"
          className="site-mobile-nav"
          aria-label="モバイルナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="site-mobile-nav__cta"
            onClick={() => setIsOpen(false)}
          >
            30分無料相談
          </Link>
        </nav>
      )}
    </header>
  );
}
