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
    <section className="guest-feature-transcript">
      <div className="guest-feature-shell">
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
          <summary className="guest-feature-transcript__summary">
            <div>
              <FileText size={16} aria-hidden="true" />
              <h2>フル文字起こし</h2>
            </div>
            <span className="group-open:hidden">開く</span>
            <span className="hidden group-open:block">閉じる</span>
          </summary>
          <div className="guest-feature-transcript__body">
            <div>
              <p>{transcript}</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
