"use client";

import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function IconShell({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {children}
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="3" />
      <path d="M8 3.5v4M16 3.5v4M3.5 10h17" />
      <path d="M7 13h3M7 16h3M14 13h3" />
    </IconShell>
  );
}

export function IconMic(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M6.5 11a5.5 5.5 0 0 0 11 0" />
      <path d="M12 15.5V20" />
      <path d="M8.5 20h7" />
    </IconShell>
  );
}

export function IconArticle(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 8.5h8M8 12h8M8 15.5h5" />
    </IconShell>
  );
}

export function IconChat(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M4.5 6.5h15v9h-6l-4.5 3v-3h-4.5z" />
      <path d="M8 10h8M8 12.5h5" />
    </IconShell>
  );
}

export function IconPin(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M12 20s5-4.5 5-9a5 5 0 0 0-10 0c0 4.5 5 9 5 9z" />
      <circle cx="12" cy="11" r="1.7" />
    </IconShell>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M9 7.5 17 12 9 16.5z" />
      <circle cx="12" cy="12" r="8.5" />
    </IconShell>
  );
}

export function IconCard(props: IconProps) {
  return (
    <IconShell {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="3" />
      <path d="M3.5 10h17" />
      <path d="M7 14h3" />
    </IconShell>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M5.5 12.5 10 17l8.5-10" />
    </IconShell>
  );
}

export function PortfolioMark(props: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 35c7-10 17-15 24-15-4 3-7 7-8 11 4 1 7 3 8 7-8-1-16 0-24 5 1-4 0-6 0-8z" fill="currentColor" />
    </svg>
  );
}

export function DividerWave(props: IconProps) {
  return (
    <svg viewBox="0 0 1440 64" fill="none" {...props}>
      <path d="M0 32C120 8 240 8 360 32s240 24 360 0 240-24 360 0 240 24 360 0 120-24 120-24v56H0z" fill="currentColor" />
    </svg>
  );
}

export function PodcastWaveform(props: IconProps) {
  return (
    <svg viewBox="0 0 96 32" fill="none" {...props}>
      <path d="M4 16h8M18 10v12M32 6v20M46 12v8M60 4v24M74 10v12M88 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LabelChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#0F172A]">
      {children}
    </span>
  );
}

export function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold tracking-[0.18em] text-[#64748B] uppercase">{eyebrow}</p>
      <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] text-[#0F172A] md:text-4xl">{title}</h2>
      {body ? <p className="max-w-3xl text-sm leading-7 text-[#475569] md:text-base">{body}</p> : null}
    </div>
  );
}

export function ActionButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) {
  const styles =
    variant === "primary"
      ? "bg-[#0F172A] text-white border-[#0F172A]"
      : "bg-white text-[#0F172A] border-[#E2E8F0]";
  return (
    <span className={`inline-flex items-center rounded-[4px] border px-4 py-3 text-sm font-semibold ${styles}`}>
      {children}
    </span>
  );
}
