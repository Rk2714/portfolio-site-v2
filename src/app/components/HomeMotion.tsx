"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const isMobile = window.matchMedia("(max-width: 760px)").matches;
        const heroLines =
          gsap.utils.toArray<HTMLElement>("[data-hero-line]");
        const heroItems =
          gsap.utils.toArray<HTMLElement>("[data-hero-item]");
        const heroKicker = root.current?.querySelector("[data-hero-kicker]");
        const heroPortrait =
          root.current?.querySelector("[data-hero-portrait]");

        if (heroLines.length > 0) {
          const heroTimeline = gsap.timeline({
            defaults: { ease: "power2.out" },
          });

          if (heroKicker) {
            heroTimeline.fromTo(
              heroKicker,
              { autoAlpha: 0, y: isMobile ? 8 : 12 },
              { autoAlpha: 1, y: 0, duration: 0.42 },
            );
          }

          heroTimeline
            .fromTo(
              heroLines,
              { autoAlpha: 0, y: isMobile ? 16 : 26 },
              {
                autoAlpha: 1,
                y: 0,
                duration: isMobile ? 0.52 : 0.68,
                stagger: 0.09,
              },
              "-=0.22",
            )
            .fromTo(
              heroItems,
              { autoAlpha: 0, y: isMobile ? 8 : 14 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.42,
                stagger: 0.07,
              },
              "-=0.28",
            );

          if (heroPortrait) {
            heroTimeline.fromTo(
              heroPortrait,
              {
                autoAlpha: 0,
                y: isMobile ? 12 : 20,
                scale: isMobile ? 1.01 : 1.025,
              },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: isMobile ? 0.58 : 0.78,
              },
              isMobile ? "-=0.2" : "-=0.62",
            );
          }
        }

        const revealElements =
          gsap.utils.toArray<HTMLElement>("[data-reveal]");

        revealElements.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.32 : 0.42,
              ease: "power1.out",
              scrollTrigger: {
                trigger: element,
                start: "top 90%",
                once: true,
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
