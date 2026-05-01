"use client";

import { motion } from "framer-motion";
import { Mic, Radio, ExternalLink, Tag, ChevronRight, ArrowRight } from "lucide-react";
import type { MediaPost } from "../../lib/media-data";

export default function LatestMedia({ posts }: { posts: MediaPost[] }) {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              Media
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              最新のラジオエピソード
            </h2>
          </div>
          <a
            href="/media"
            className="hidden md:inline-flex items-center gap-1 text-sm text-[#2563EB] font-medium hover:gap-2 transition-all"
          >
            すべて見る
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((post, index) => {
            const catColor = post.category === "radio" ? "#2563EB" : post.category === "guest" ? "#059669" : post.category === "appear" ? "#D97706" : "#64748B";
            const CatIcon = post.category === "radio" ? Radio : post.category === "guest" ? Mic : post.category === "appear" ? ExternalLink : Tag;
            return (
              <motion.a
                key={post.id}
                href={`/media/${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-[#F1F5F9] overflow-hidden relative">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                      <Mic size={32} />
                    </div>
                  )}
                  <div
                    className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-bold"
                    style={{ color: catColor }}
                  >
                    <CatIcon size={11} />
                    {post.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur text-xs text-white/80">
                    {post.date}
                  </div>
                </div>

                <div className="p-5">
                  <div className="w-8 h-1 mb-3 rounded-full" style={{ backgroundColor: catColor }} />
                  <h3 className="text-sm md:text-base font-bold text-[#0F172A] mb-2 group-hover:opacity-70 transition-opacity leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-[1.7] mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                    style={{ color: catColor }}
                  >
                    聴く
                    <ChevronRight size={12} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <a
            href="/media"
            className="inline-flex items-center gap-1 text-sm text-[#2563EB] font-medium"
          >
            すべてのエピソードを見る
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
