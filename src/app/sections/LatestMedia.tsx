"use client";

import { motion } from "framer-motion";
import { Mic, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { MediaPost } from "../../lib/media-data";
import TrackedLink from "../components/TrackedLink";

export default function LatestMedia({ posts }: { posts: MediaPost[] }) {
  const latest = posts.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="pencil-section pencil-container space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6"
        >
          <div className="space-y-[10px]">
            <p className="pencil-eyebrow">Media</p>
            <h2 className="pencil-title">最新のラジオエピソード</h2>
            <p className="pencil-body max-w-5xl">
              ラジオやブログは、活動の空気が伝わる場所にします。最新の話題だけでなく、なぜそれをやっているのかも残していきます。
            </p>
          </div>
          <Link href="/media" className="pencil-button pencil-button-secondary hidden shrink-0 md:inline-flex">
            すべて見る
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid gap-[18px] md:grid-cols-3">
          {latest.map((post, index) => {
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-[16px] border border-[#dedbd6] bg-white p-[22px] transition-colors hover:border-[#e8e5df]"
              >
                <TrackedLink
                  href={`/media/${post.id}`}
                  eventName="media_card_click"
                  eventParams={{
                    page_type: "home",
                    post_id: post.id,
                    post_title: post.title,
                    category: post.category,
                    position: "latest_media",
                  }}
                  className="flex h-full flex-col gap-4"
                >
                  <span className="w-fit rounded-[4px] border border-[#111111] bg-[#111111] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white">
                    {post.categoryLabel}
                  </span>
                  <p className="text-[12px] font-bold tracking-[0.8px] text-[#a0a09c]">{post.date}</p>
                  <h3 className="text-[20px] font-black leading-[27px] text-[#111111] transition-opacity group-hover:opacity-70">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-[14px] leading-[24px] text-[#7b7b78]">
                    {post.excerpt || "最新更新をすぐに見つけられるよう、タイトル・日付・カテゴリの順で整理しています。"}
                  </p>
                  <span className="pencil-button pencil-button-secondary w-fit">聴く / 読む</span>
                  <div className="mt-auto h-[150px] overflow-hidden rounded-[14px] bg-[#faf9f6]">
                    {post.thumbnail ? (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[#a0a09c]">
                        <Mic size={32} />
                      </div>
                    )}
                  </div>
                </TrackedLink>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:hidden"
        >
          <Link href="/media" className="pencil-button pencil-button-secondary">
            すべての更新を見る
            <ArrowRight size={14} />
          </Link>
        </motion.div>
        <div className="h-px bg-[#dedbd6]" />
      </div>
    </section>
  );
}
