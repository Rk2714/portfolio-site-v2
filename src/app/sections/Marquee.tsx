"use client";

const items = [
  "AI導入コンサルティング",
  "業務効率化支援",
  "医療通訳",
  "スタッフ育成",
  "オンライン診療構築",
  "議事録自動化",
  "契約書テンプレート化",
  "マニュアル整備",
  "キャリアコンサルティング",
  "多言語対応支援",
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
