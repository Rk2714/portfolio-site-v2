"use client";

import { motion } from "framer-motion";
import { trackEvent } from "../../lib/analytics";

const services = [
  {
    chip: "無料",
    title: "30分無料 現場整理",
    body: "記録、連絡、ファイル、データ活用。今どこで詰まっているかを一緒に整理します。まだ具体的に決まっていなくても大丈夫です。",
    features: ["現場のつまずきを整理", "無料 / 初回の入口"],
    cta: "無料で相談する",
    href: "https://calendar.app.google/wJsV5mJhXuLQmBnS6",
    dark: false,
  },
  {
    chip: "60分 ¥3,000",
    title: "60分 業務改善セッション",
    body: "AIやGoogleまわりを一緒に触りながら、現場の記録・連絡・情報整理に合わせた使い方を作ります。",
    features: ["通常 ¥5,000 → キャンペーン ¥3,000", "PayPay / クレジット対応"],
    cta: "60分で試す",
    href: "https://calendar.app.google/pR1qA4hqeMkX8kSj7",
    dark: true,
  },
  {
    chip: "構築",
    title: "情報共有・運用設計",
    body: "SlackかLINE WORKSか、Google Driveをどう使うか。議事録・ファイル・連絡ルールを現場が迷わない形に整えます。",
    features: ["Google Drive / 議事録", "連絡ルール / 運用整理"],
    cta: "構築を相談する",
    href: "#contact",
    dark: false,
  },
  {
    chip: "働き方",
    title: "働き方・個人活動の相談",
    body: "キャリア相談、ラジオ、地域活動も金城竜弥の大切な軸です。必要な方には、働き方や次の動きも現実的に整理します。",
    features: ["キャリアの棚卸し", "働き方や次の動きの整理"],
    cta: "働き方も相談する",
    href: "#contact",
    dark: false,
    warm: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fef5f0]">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">Services</p>
          <h2 className="pencil-title">現場改善を入口に。人柄と活動も伝わるように。</h2>
          <p className="pencil-body max-w-5xl">
            医療・介護現場の業務改善を中心に、AI活用、情報共有設計、キャリア相談、ラジオ・地域活動まで。仕事と人柄の両方が伝わるように整理しています。
          </p>
        </div>

        <div className="rounded-[14px] border border-[#dedbd6] bg-white p-[18px_22px]">
          <p className="text-[12px] font-black text-[#f4511e]">相談の流れ</p>
          <p className="mt-[6px] text-[18px] font-black text-[#111111]">
            現場を見る → 流れを整理する → 必要ならAIやGoogleで整える
          </p>
          <p className="mt-[6px] text-[14px] leading-[22px] text-[#7b7b78]">
            入口は軽く、中心は現場で使える運用設計。ラジオや地域活動は、人柄と信頼が伝わる個人活動として残します。
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
                  ? "border-[#3E2A1F] bg-[#3E2A1F]"
                  : service.warm
                    ? "border-[#dedbd6] bg-[#fef5f0]"
                    : "border-[#e8e5df] bg-white"
              }`}
            >
              <span
                className={`rounded-[4px] border px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] ${
                  service.dark
                    ? "border-white bg-white text-[#111111]"
                    : service.warm
                      ? "border-[#3E2A1F] bg-[#3E2A1F] text-white"
                      : "border-[#dedbd6] bg-white text-[#111111]"
                }`}
              >
                {service.chip}
              </span>
              <h3 className={`text-[22px] font-black ${service.dark ? "text-white" : "text-[#111111]"}`}>
                {service.title}
              </h3>
              <p className={`text-[14px] leading-[25px] ${service.dark ? "text-[#a0a09c]" : "text-[#7b7b78]"}`}>
                {service.body}
              </p>
              <div className={`space-y-1 text-[13px] leading-[21px] ${service.dark ? "text-[#a0a09c]" : "text-[#7b7b78]"}`}>
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
                    ? "border-white bg-white text-[#111111] hover:bg-[#fef5f0]"
                    : service.warm
                      ? "border-[#3E2A1F] bg-[#3E2A1F] text-white hover:bg-[#d43d0e]"
                      : "border-[#dedbd6] bg-white text-[#111111] hover:bg-[#fef5f0]"
                }`}
              >
                {service.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <div className="h-px bg-[#dedbd6]" />
      </div>
    </section>
  );
}
