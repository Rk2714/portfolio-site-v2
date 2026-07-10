"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "金城さんは現場の看護師視点を持ちながら、IT側の話も理解できる稀有な存在です。導入後の定着率がこれまでと全然違います。",
    name: "医療機関 院長",
    detail: "システム環境構築・業務効率化",
  },
  {
    text: "AI講座を50名規模で実施していただきました。若手からベテランまで、現場で使えるレベルまで育成できました。",
    name: "企業 人事ご担当者",
    detail: "AI人材育成・講座設計",
  },
  {
    text: "アナログからデジタルに変わって、作業時間が5分の1になりました。システム化の効果を実感しています。",
    name: "ご相談者様",
    detail: "業務効率化・システム環境構築",
  },
  {
    text: "金城さんと話すたびにAIの使い方がとても勉強になります。仕事に生かすAIとして、視野が広がりました。AIにもいろんな種類があることがわかったのも大きいです。",
    name: "ご相談者様",
    detail: "AI活用法診断・キャリア相談",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-[#a0a09c] tracking-wider mb-3">
          Voice
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
          導入先からの声
        </h2>
        <p className="text-sm text-[#7b7b78] mb-12 max-w-xl leading-[1.8]">
          実際に支援させていただいた方々の声を紹介します。
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 border border-gray-200 rounded-[24px]"
            >
              <p className="text-sm text-[#7b7b78] leading-[1.8] mb-8">
                「{t.text}」
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#111111]">{t.name}</p>
                  <p className="text-xs text-[#a0a09c] mt-1">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
