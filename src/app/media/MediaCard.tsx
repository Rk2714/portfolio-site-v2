"use client";

import { useState } from "react";
import { Check, ChevronRight, Copy, ExternalLink, Mic, Radio, Tag } from "lucide-react";
import type { MediaPost } from "../../lib/media-data";
import { trackEvent } from "../../lib/analytics";
import TrackedLink from "../components/TrackedLink";

interface Props {
  post: Pick<MediaPost, "id" | "title" | "excerpt" | "category" | "categoryLabel" | "date" | "thumbnail">;
}

export default function MediaCard({ post }: Props) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://portfolio-site-xi-eight-33.vercel.app/media/${post.id}`;
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(shareUrl);
  const catColor =
    post.category === "radio"
      ? "#2563EB"
      : post.category === "guest"
        ? "#059669"
        : post.category === "appear"
          ? "#D97706"
          : "#64748B";
  const CatIcon =
    post.category === "radio" ? Radio : post.category === "guest" ? Mic : post.category === "appear" ? ExternalLink : Tag;

  const copyShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    trackEvent("share_click", {
      page_type: "media_list",
      post_id: post.id,
      post_title: post.title,
      category: post.category,
      position: "media_list_card",
      share_type: "copy",
    });

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="group bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <TrackedLink
        href={`/media/${post.id}`}
        eventName="media_card_click"
        eventParams={{
          page_type: "media_list",
          post_id: post.id,
          post_title: post.title,
          category: post.category,
          position: "media_list_grid",
        }}
        className="block hover:-translate-y-1 transition-transform duration-300"
      >
        <div className="aspect-video bg-[#FFF5EB] overflow-hidden relative">
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
          <h2 className="text-base md:text-lg font-bold text-[#0F172A] mb-2 group-hover:opacity-70 transition-opacity leading-snug line-clamp-2">
            {post.title}
          </h2>
          <p className="text-xs text-[#475569] leading-[1.8] mb-3 line-clamp-3">{post.excerpt}</p>
          <span className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2" style={{ color: catColor }}>
            続きを読む
            <ChevronRight size={12} />
          </span>
        </div>
      </TrackedLink>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-gray-100 bg-[#FCFCFD]">
        <p className="text-xs text-[#64748B]">この回をそのまま共有できます。</p>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("share_click", {
                page_type: "media_list",
                post_id: post.id,
                post_title: post.title,
                category: post.category,
                position: "media_list_card",
                share_type: "x",
              });
            }}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 bg-white text-xs font-medium text-[#475569] hover:bg-[#FFF8F0] transition-colors"
          >
            <span className="font-bold text-[#0F172A] text-[10px]">𝕏</span>
            Xでシェア
          </a>
          <a
            href={`https://line.me/R/msg/text?${encodedTitle}%0A${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("share_click", {
                page_type: "media_list",
                post_id: post.id,
                post_title: post.title,
                category: post.category,
                position: "media_list_card",
                share_type: "line",
              });
            }}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 bg-white text-xs font-medium text-[#475569] hover:bg-[#FFF8F0] transition-colors"
          >
            <ExternalLink size={12} />
            LINEで送る
          </a>
          <button
            type="button"
            onClick={copyShareUrl}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-200 bg-white text-xs font-medium text-[#475569] hover:bg-[#FFF8F0] transition-colors"
          >
            {copied ? <Check size={12} className="text-[#059669]" /> : <Copy size={12} />}
            {copied ? "コピーしました" : "URLコピー"}
          </button>
        </div>
      </div>
    </article>
  );
}
