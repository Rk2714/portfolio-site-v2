"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "DX導入の相談から導入まで、どのくらいの期間がかかりますか？",
    a: "規模によりますが、ヒアリングから計画策定まで2〜4週間、導入支援は1〜3ヶ月程度が目安です。小規模なものであれば1週間程度で完了することもあります。",
  },
  {
    q: "医療以外の業種でも依頼できますか？",
    a: "はい、医療現場はもちろん、一般企業、個人事業主、小規模チームのDX環境構築も対応しています。",
  },
  {
    q: "AI人材育成の講座はどのような内容ですか？",
    a: "現場で即使えるレベルを目指し、AIツールの基本操作から業務への応用までをカバーします。参加者の業種やレベルに合わせてカスタマイズします。",
  },
  {
    q: "オンラインでの相談も可能ですか？",
    a: "はい、全国どこからでもオンライン相談が可能です。ZoomやGoogle Meetで対応しています。初回相談は無料です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
          よくある質問
        </h2>

        <div className="max-w-3xl space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 last:border-b">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between py-5 text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="text-sm font-medium text-[#0F172A] pr-6">
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#64748B] shrink-0 mt-0.5 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#475569] leading-[1.8]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
