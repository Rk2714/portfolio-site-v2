"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url || !ref.current) return;
    // Instagramの埋め込みスクリプトを読み込み
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Instagramの埋め込みを再処理
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      // クリーンアップ
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div ref={ref} className="my-4 flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "1px solid #e8e8e8",
          borderRadius: "3px",
          boxShadow: "none",
          display: "block",
          margin: "0 auto",
          maxWidth: "540px",
          width: "100%",
        }}
      />
    </div>
  );
}
