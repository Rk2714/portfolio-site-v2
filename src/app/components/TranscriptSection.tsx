"use client";

import { FileText } from "lucide-react";
import { trackEvent } from "../../lib/analytics";

interface Props {
  transcript: string;
  postId: string;
  postTitle: string;
  category: string;
}

export default function TranscriptSection({ transcript, postId, postTitle, category }: Props) {
  return (
    <section className="py-16 md:py-20 bg-[#fef5f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <details
          className="group"
          onToggle={(event) => {
            if (!event.currentTarget.open) {
              return;
            }

            trackEvent("transcript_open", {
              page_type: "media_post",
              post_id: postId,
              post_title: postTitle,
              category,
              position: "transcript_section",
              transcript_state: "open",
            });
          }}
        >
          <summary className="flex items-center justify-between cursor-pointer list-none py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-[#111111]" />
              <h2 className="text-lg font-bold text-[#111111]">フル文字起こし</h2>
            </div>
            <span className="text-xs text-[#a0a09c] group-open:hidden">開く</span>
            <span className="text-xs text-[#a0a09c] hidden group-open:block">閉じる</span>
          </summary>
          <div className="pt-6 pb-2">
            <div className="bg-white border border-gray-200 p-6 md:p-8">
              <p className="text-sm text-[#7b7b78] leading-[1.9] whitespace-pre-wrap">{transcript}</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
