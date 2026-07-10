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
    "看護・訪問看護・オンライン診療の現場で、記録、連絡、情報共有、データ活用にまつわるつまずきを見てきました。ラジオや地域活動も含めて、人と現場に次の一歩をつくることを大切にしています。";
  const location = profile?.location || "沖縄県中城村";

  return (
    <section id="about" className="bg-white">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">About</p>
          <h2 className="pencil-title max-w-6xl">
            看護の現場がベース。いろいろなつまずきを見てきたから、相談に乗れることがある。
          </h2>
          <p className="pencil-body max-w-5xl">
            最初からAIの人だったわけではありません。看護、訪問看護、オンライン診療、地域活動の中で、現場がつまずく場面をたくさん見てきました。だからAIの話も、きれいな理論より「いまの現場でどう使えるか」から考えます。
          </p>
        </div>

        <div className="grid items-start gap-7 lg:grid-cols-[420px_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[18px] border border-[#dedbd6] bg-[#fef5f0] p-[18px]"
          >
            <div className="h-[380px] overflow-hidden rounded-[16px] bg-[#dedbd6]">
              {profile?.imageUrl ? (
                <img
                  src={profile.imageUrl}
                  alt={profile.name || "金城竜弥"}
                  className="h-full w-full object-contain"
                />
              ) : (
                <img
                  src="/images/headshot.png"
                  alt="金城竜弥"
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            <p className="mt-3 text-[12px] leading-[18px] text-[#a0a09c]">
              看護・医療介護・地域活動をベースに、現場に合う形を一緒に考えます
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-[18px]"
          >
            <p className="text-[16px] leading-[29px] text-[#7b7b78]">{bio}</p>

            <div className="flex flex-wrap gap-3">
              <span className="pencil-chip bg-white">看護ベース</span>
              <span className="pencil-chip bg-white">情報整理 / AI活用</span>
              <span className="pencil-chip bg-white">ラジオ / 子ども食堂</span>
            </div>

            <Link
              href="/media"
              className="pencil-button pencil-button-secondary"
            >
              ラジオパーソナリティとしてのメディア活動を見る
              <ArrowRight size={13} />
            </Link>

            <div className="flex items-center gap-2 text-[#7b7b78]">
              <MapPin size={14} />
              <span className="text-sm">{location}在住。現場へも伺います。</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-t border-[#111111] pt-4">
                <p className="text-xl font-bold text-[#111111]">約15年</p>
                <p className="text-xs text-[#a0a09c] mt-1">看護師・現場経験</p>
              </div>
              <div className="border-t border-[#111111] pt-4">
                <p className="text-xl font-bold text-[#111111]">50名+</p>
                <p className="text-xs text-[#a0a09c] mt-1">AI人材育成</p>
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
            <h3 className="mt-[10px] text-[24px] font-black text-[#111111]">ここまでの流れ</h3>
          </motion.div>

          <div className="space-y-0">
            {careerTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid gap-2 border-b border-[#dedbd6] py-4 md:grid-cols-[120px_220px_1fr]"
              >
                <p className="text-[13px] font-bold text-[#f4511e]">{item.year}</p>
                <h4 className="text-[16px] font-black text-[#111111]">{item.title}</h4>
                <p className="text-[14px] leading-[24px] text-[#7b7b78]">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-px bg-[#dedbd6]" />
      </div>
    </section>
  );
}
