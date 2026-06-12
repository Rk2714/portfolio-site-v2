"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { trackEvent } from "../../lib/analytics";

interface Props {
  text: string;
  postId: string;
  postTitle: string;
  category: string;
  guestName: string;
}

export default function GuestShareSnippet({ text, postId, postTitle, category, guestName }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const input = document.createElement("textarea");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    trackEvent("share_click", {
      page_type: "media_post",
      post_id: postId,
      post_title: postTitle,
      category,
      position: "guest_share_snippet",
      share_type: "copy",
      guest_name: guestName,
    });

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-5 border border-[#E2E8F0] bg-white p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-wider text-[#64748B] mb-2">紹介用テキスト</p>
          <p className="text-sm leading-[1.8] text-[#334155] whitespace-pre-wrap">{text}</p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex shrink-0 items-center justify-center gap-1.5 border border-gray-200 bg-[#F8FAFC] px-3 py-2 text-xs font-medium text-[#475569] hover:bg-[#FFF8F0] transition-colors"
        >
          {copied ? <Check size={12} className="text-[#059669]" /> : <Copy size={12} />}
          {copied ? "コピーしました" : "紹介文をコピー"}
        </button>
      </div>
    </div>
  );
}
