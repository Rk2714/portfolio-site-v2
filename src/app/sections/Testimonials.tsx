"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "金城さんは現場の看護師視点を持ちながら、IT側の話も理解できる稀有な存在です。導入後の定着率がこれまでと全然違います。",
    name: "クリニック院長",
    detail: "システム環境構築・業務効率化",
  },
  {
    text: "AI講座を50名規模で実施していただきました。若手からベテランまで、現場で使えるレベルまで育成できました。",
    name: "企業 人事担当",
    detail: "AI人材育成・講座設計",
  },
  {
    text: "アナログからデジタルに変わって、作業時間が5分の1になりました。システム化の効果を実感しています。",
    name: "ノリト様",
    detail: "業務効率化・システム環境構築",
  },
  {
    text: "金城さんと話すたびにAIの使い方がとても勉強になります。仕事に生かすAIとして、視野が広がりました。AIにもいろんな種類があることがわかったのも大きいです。",
    name: "相談者様",
    detail: "AI活用法診断・キャリア相談",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Voice
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          導入先からの声
        </h2>
        <p className="text-sm text-[#475569] mb-12 max-w-xl leading-[1.8]">
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
              className="bg-white p-8 border border-gray-100"
            >
              <p className="text-sm text-[#334155] leading-[1.8] mb-8">
                「{t.text}」
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-[#64748B] mt-1">{t.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
