"use client";

/**
 * Instagram埋め込みコンポーネント
 * 
 * Instagramのpublic oEmbed APIを使ってHTMLを取得し表示する。
 * 従来のblockquote + embed.js方式はInstagramが非推奨化したため、
 * 公式oEmbed APIを経由してiframe表示する方式に変更。
 * 
 * 参考: https://developers.facebook.com/docs/instagram/oembed
 */

import { useEffect, useState, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
  caption?: boolean;
  maxWidth?: number;
}

export default function InstagramEmbed({
  url,
  caption = false,
  maxWidth = 540,
}: InstagramEmbedProps) {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const mounted = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url) return;
    mounted.current = true;

    // oEmbed APIから埋め込みHTMLを取得
    const apiUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(
      url
    )}&maxwidth=${maxWidth}&hidecaption=${caption ? "false" : "true"}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`oEmbed API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (mounted.current && data.html) {
          setEmbedHtml(data.html);
        }
      })
      .catch(() => {
        // oembed.com fallback (CORS回避用プロキシ)
        const fallbackUrl = `https://oembed.com/providers/instagram?url=${encodeURIComponent(
          url
        )}&format=json`;
        fetch(fallbackUrl)
          .then((res) => res.json())
          .then((data) => {
            if (mounted.current && data.html) {
              setEmbedHtml(data.html);
            } else {
              setError(true);
            }
          })
          .catch(() => {
            if (mounted.current) setError(true);
          });
      });

    return () => {
      mounted.current = false;
    };
  }, [url, caption, maxWidth]);

  // InstagramのoEmbed HTMLをパースしてwidth/heightを制限する
  useEffect(() => {
    if (!embedHtml || !containerRef.current) return;
    const container = containerRef.current;
    // oEmbedから返ってくるiframeのwidth属性を制限
    const iframe = container.querySelector("iframe");
    if (iframe) {
      iframe.style.maxWidth = "100%";
      iframe.style.width = "100%";
      iframe.style.height = "auto";
    }
  }, [embedHtml]);

  // oEmbed APIが取得できなかった場合のフォールバック
  if (error) {
    const match = url.match(/\/p\/([^/?]+)/);
    const postId = match ? match[1] : null;
    if (postId) {
      return (
        <div className="flex justify-center w-full">
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed/${caption ? "captioned/" : ""}`}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="max-w-full rounded-lg shadow-sm"
            style={{ maxWidth: "100%" }}
          />
        </div>
      );
    }
    return (
      <div className="p-3 bg-[#FFF8F0] border border-gray-200 text-center rounded">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#2563EB] font-medium hover:underline"
        >
          Instagramで見る ↗
        </a>
      </div>
    );
  }

  if (!embedHtml) {
    return (
      <div className="flex justify-center w-full">
        <div className="w-full h-[300px] bg-gray-50 animate-pulse rounded flex items-center justify-center">
          <span className="text-xs text-[#94A3B8]">読み込み中...</span>
        </div>
      </div>
    );
  }

  // oEmbedから返ってきたHTMLをdangerouslySetInnerHTMLで挿入
  return (
    <div
      ref={containerRef}
      className="flex justify-center w-full overflow-hidden [&_iframe]:!max-w-full [&_iframe]:!w-full"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
