"use client";

const items = [
  "システム環境構築",
  "出退勤管理",
  "在庫管理",
  "案件管理システム",
  "ツール連携",
  "Googleセットアップ",
  "カレンダー予約管理",
  "AI活用講座",
  "業務効率化",
  "医療プロジェクト",
  "現場育成",
  "マニュアル整備",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <section className="py-6 bg-[#0F172A] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((text, i) => (
          <span
            key={i}
            className="text-sm font-medium text-white/40 mx-6 shrink-0 flex items-center gap-6"
          >
            {text}
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </section>
  );
}
