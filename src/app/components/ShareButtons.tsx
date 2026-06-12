"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { trackEvent } from "../../lib/analytics";

interface Props {
  url: string;
  title: string;
  postId?: string;
  category?: string;
}

export default function ShareButtons({ url, title, postId, category }: Props) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
      trackEvent("share_click", {
        page_type: "media_post",
        post_id: postId,
        post_title: title,
        category,
        position: "detail_share",
        share_type: "copy",
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      trackEvent("share_click", {
        page_type: "media_post",
        post_id: postId,
        post_title: title,
        category,
        position: "detail_share",
        share_type: "copy",
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-t border-gray-100 mt-6">
      <span className="text-xs text-[#64748B] mr-1">この記事をシェア</span>

      {/* Copy link */}
      <button
        onClick={copyUrl}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-xs text-[#475569] hover:bg-[#FFF5EB] transition-colors"
      >
        {copied ? <Check size={12} className="text-[#059669]" /> : <Copy size={12} />}
        {copied ? "コピーしました" : "URLをコピー"}
      </button>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent("share_click", {
            page_type: "media_post",
            post_id: postId,
            post_title: title,
            category,
            position: "detail_share",
            share_type: "x",
          });
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-xs text-[#475569] hover:bg-[#FFF5EB] transition-colors"
      >
        <span className="font-bold text-[#0F172A] text-[10px]">𝕏</span>
        Xでシェア
      </a>

      {/* LINE */}
      <a
        href={`https://line.me/R/msg/text?${encodedTitle}%0A${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          trackEvent("share_click", {
            page_type: "media_post",
            post_id: postId,
            post_title: title,
            category,
            position: "detail_share",
            share_type: "line",
          });
        }}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F8FAFC] border border-gray-200 text-xs text-[#475569] hover:bg-[#FFF5EB] transition-colors"
      >
        <ExternalLink size={12} />
        LINEで送る
      </a>
    </div>
  );
}
