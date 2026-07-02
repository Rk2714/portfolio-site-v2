"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mic } from "lucide-react";
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
    <article className="group overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-[22px] transition-colors duration-300 hover:border-[#D7E0EA]">
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
        className="flex flex-col gap-4"
      >
        <span className="w-fit rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white">
          {post.categoryLabel}
        </span>
        <p className="text-[12px] font-bold tracking-[0.8px] text-[#64748B]">{post.date}</p>
        <h2 className="line-clamp-2 text-[20px] font-black leading-[27px] text-[#0F172A] transition-opacity group-hover:opacity-70">
          {post.title}
        </h2>
        <p className="line-clamp-3 text-[14px] leading-[24px] text-[#475569]">{post.excerpt}</p>
        <span className="pencil-button pencil-button-secondary w-fit">聴く / 読む</span>
        <div className="h-[150px] overflow-hidden rounded-[14px] bg-[#F8FAFC]">
          {post.thumbnail ? (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[#CBD5E1]">
              <Mic size={32} />
            </div>
          )}
        </div>
      </TrackedLink>

      <div className="mt-5 flex flex-col gap-3 border-t border-[#E2E8F0] pt-4 sm:flex-row sm:items-center sm:justify-between">
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
            className="inline-flex items-center justify-center gap-1.5 rounded-[4px] border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-bold text-[#475569] transition-colors hover:bg-[#FFF8F0]"
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
            className="inline-flex items-center justify-center gap-1.5 rounded-[4px] border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-bold text-[#475569] transition-colors hover:bg-[#FFF8F0]"
          >
            <ExternalLink size={12} />
            LINEで送る
          </a>
          <button
            type="button"
            onClick={copyShareUrl}
            className="inline-flex items-center justify-center gap-1.5 rounded-[4px] border border-[#E2E8F0] bg-white px-3 py-2 text-xs font-bold text-[#475569] transition-colors hover:bg-[#FFF8F0]"
          >
            {copied ? <Check size={12} className="text-[#059669]" /> : <Copy size={12} />}
            {copied ? "コピーしました" : "URLコピー"}
          </button>
        </div>
      </div>
    </article>
  );
}
