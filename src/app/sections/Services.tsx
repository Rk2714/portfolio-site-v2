"use client";

import { motion } from "framer-motion";
import { trackEvent } from "../../lib/analytics";

const services = [
  {
    chip: "無料",
    title: "30分無料相談",
    body: "何に困っているか、AIで何ができそうかを整理します。まだ具体的に決まっていなくても大丈夫です。",
    features: ["AIでできそうなことを整理", "無料 / 初回の入口"],
    cta: "無料で相談する",
    href: "https://calendar.app.google/wJsV5mJhXuLQmBnS6",
    dark: false,
  },
  {
    chip: "60分 ¥3,000",
    title: "60分AI活用セッション",
    body: "ChatGPTやAIツールを一緒に触りながら、仕事に合わせた使い方をその場で作ります。",
    features: ["通常 ¥5,000 → キャンペーン ¥3,000", "PayPay / クレジット対応"],
    cta: "60分で試す",
    href: "https://calendar.app.google/pR1qA4hqeMkX8kSj7",
    dark: true,
  },
  {
    chip: "構築",
    title: "AI/Google/予約の仕組みづくり",
    body: "AIを使い始めたあと、必要ならGoogle環境、予約導線、情報整理、テンプレート化まで整えます。",
    features: ["Google環境 / 予約導線", "テンプレート化 / 運用整理"],
    cta: "構築を相談する",
    href: "#contact",
    dark: false,
  },
  {
    chip: "働き方",
    title: "キャリア・働き方相談",
    body: "AIや仕組み化で空いた時間を、次の働き方を考える時間にもできます。看護経験をベースに現実的に整理します。",
    features: ["キャリアの棚卸し", "働き方や次の動きの整理"],
    cta: "働き方も相談する",
    href: "#contact",
    dark: false,
    warm: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FFF8F0]">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">Services</p>
          <h2 className="pencil-title">まずAIの使い方。必要なら構築まで。</h2>
          <p className="pencil-body max-w-5xl">
            まずはAIの使い方を、仕事に合わせて一緒に触ります。そこで必要が見えたら、Google環境・予約導線・情報整理などの構築まで対応します。
          </p>
        </div>

        <div className="rounded-[14px] border border-[#E2E8F0] bg-white p-[18px_22px]">
          <p className="text-[12px] font-black text-[#D78256]">相談の流れ</p>
          <p className="mt-[6px] text-[18px] font-black text-[#0F172A]">
            30分で整理 → 60分で一緒に触る → 必要なら構築
          </p>
          <p className="mt-[6px] text-[14px] leading-[22px] text-[#475569]">
            入口は軽く、中心は実務で使えるAI活用。キャリア相談は、その先の選択肢として置いています。
          </p>
        </div>

        <div className="grid gap-[18px] lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`flex flex-col items-start gap-[14px] rounded-[16px] border p-6 ${
                service.dark
                  ? "border-[#0F172A] bg-[#0F172A]"
                  : service.warm
                    ? "border-[#E2E8F0] bg-[#FCF9F5]"
                    : "border-[#D7E0EA] bg-white"
              }`}
            >
              <span
                className={`rounded-[4px] border px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] ${
                  service.dark
                    ? "border-white bg-white text-[#0F172A]"
                    : service.warm
                      ? "border-[#0F172A] bg-[#0F172A] text-white"
                      : "border-[#E2E8F0] bg-white text-[#0F172A]"
                }`}
              >
                {service.chip}
              </span>
              <h3 className={`text-[22px] font-black ${service.dark ? "text-white" : "text-[#0F172A]"}`}>
                {service.title}
              </h3>
              <p className={`text-[14px] leading-[25px] ${service.dark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                {service.body}
              </p>
              <div className={`space-y-1 text-[13px] leading-[21px] ${service.dark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
                {service.features.map((feature) => (
                  <p key={feature}>・{feature}</p>
                ))}
              </div>
              <a
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={(event) => {
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: `services_${index + 1}`,
                    cta_target: service.href.startsWith("http") ? "calendar" : "contact_section",
                  });
                  if (service.href.startsWith("#")) {
                    event.preventDefault();
                    document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`mt-auto rounded-[10px] border px-[18px] py-[14px] text-[14px] font-black transition-colors ${
                  service.dark
                    ? "border-white bg-white text-[#0F172A] hover:bg-[#FFF8F0]"
                    : service.warm
                      ? "border-[#0F172A] bg-[#0F172A] text-white hover:bg-[#1E293B]"
                      : "border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#FFF8F0]"
                }`}
              >
                {service.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <div className="h-px bg-[#E2E8F0]" />
      </div>
    </section>
  );
}
