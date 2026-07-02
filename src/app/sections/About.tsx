"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { careerTimeline } from "../../lib/site-data";

interface Profile {
  name?: string;
  title?: string;
  bio?: string;
  location?: string;
  imageUrl?: string;
}

export default function About({ profile }: { profile?: Profile | null }) {
  const bio =
    profile?.bio ||
    "看護の現場から始まって、AI、Google、予約導線、発信、地域活動まで。やってきたことは散らばって見えるけど、全部『仕事を少し楽にする』ためにつながっています。";
  const location = profile?.location || "沖縄県中城村";

  return (
    <section id="about" className="bg-white">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">About</p>
          <h2 className="pencil-title max-w-6xl">
            看護の現場がベース。いろいろ転々としてきたから、相談に乗れることがある。
          </h2>
          <p className="pencil-body max-w-5xl">
            最初からAIの人だったわけではありません。看護の現場をベースに、働く場所や役割をいろいろ経験してきました。だからAIの話も、きれいな理論より「いまの仕事でどう使えるか」から考えます。
          </p>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[420px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[18px] border border-[#E2E8F0] bg-[#FCF9F5] p-[18px]"
          >
            <div className="h-[380px] overflow-hidden rounded-[16px] bg-[#E2E8F0]">
              {profile?.imageUrl ? (
                <img
                  src={profile.imageUrl}
                  alt={profile.name || "金城竜弥"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src="/images/business.jpg"
                  alt="金城竜弥"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <p className="mt-3 text-[12px] leading-[18px] text-[#64748B]">
              差し替え予定: 看護ベース / 転々とした経歴が伝わる写真
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-[18px]"
          >
            <p className="text-[16px] leading-[29px] text-[#475569]">{bio}</p>

            <div className="flex flex-wrap gap-3">
              <span className="pencil-chip bg-white">看護ベース</span>
              <span className="pencil-chip bg-white">AI活用</span>
              <span className="pencil-chip bg-white">ラジオ / 子ども食堂</span>
            </div>

            <Link
              href="/media"
              className="pencil-button pencil-button-secondary"
            >
              ラジオパーソナリティとしてのメディア活動を見る
              <ArrowRight size={13} />
            </Link>

            <div className="flex items-center gap-2 text-[#475569]">
              <MapPin size={14} />
              <span className="text-sm">{location}在住</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-t border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">15年</p>
                <p className="text-xs text-[#64748B] mt-1">看護師・現場経験</p>
              </div>
              <div className="border-t border-[#0F172A] pt-4">
                <p className="text-xl font-bold text-[#0F172A]">50名+</p>
                <p className="text-xs text-[#64748B] mt-1">AI人材育成</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="pencil-eyebrow">Career</p>
            <h3 className="mt-[10px] text-[24px] font-black text-[#0F172A]">ここまでの流れ</h3>
          </motion.div>

          <div className="space-y-0">
            {careerTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid gap-2 border-b border-[#E2E8F0] py-4 md:grid-cols-[120px_220px_1fr]"
              >
                <p className="text-[13px] font-bold text-[#D78256]">{item.year}</p>
                <h4 className="text-[16px] font-black text-[#0F172A]">{item.title}</h4>
                <p className="text-[14px] leading-[24px] text-[#475569]">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-px bg-[#E2E8F0]" />
      </div>
    </section>
  );
}
