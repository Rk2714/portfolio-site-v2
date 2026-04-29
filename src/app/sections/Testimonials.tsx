"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "金城さんは現場の看護師視点を持ちながら、IT側の話も理解できる稀有な存在です。導入後の定着率がこれまでと全然違います。",
    name: "某クリニック 院長",
    detail: "AI議事録サービス導入支援",
  },
  {
    text: "契約書管理のテンプレート化で、毎月かかっていた2時間の作業が15分に短縮されました。現場の声をしっかり聞いてくれるのが信頼できます。",
    name: "医療法人 管理部長",
    detail: "業務効率化コンサルティング",
  },
  {
    text: "スタッフ育成のマニュアルを作っていただきました。若手の定着率が上がり、教育担当の負担も大幅に減りました。",
    name: "介護施設 施設長",
    detail: "マニュアル整備・スタッフ育成",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
          Voice
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
          導入先からの声
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-[#0F172A]">{t.name}</p>
                <p className="text-xs text-[#64748B] mt-1">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
