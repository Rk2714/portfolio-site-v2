"use client";

/**
 * Instagram埋め込みコンポーネント
 * 
 * Instagramのpublic oEmbed APIを使ってHTMLを取得し表示する。
 * 従来のblockquote + embed.js方式はInstagramが非推奨化したため、
 * 公式oEmbed API（https://instaembed.vercel.app 等）を経由して
 * iframe表示する方式に変更。
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
            // 最終手段: iframe直接埋め込み
            if (mounted.current) setError(true);
          });
      });

    return () => {
      mounted.current = false;
    };
  }, [url, caption, maxWidth]);

  // oEmbed APIが取得できなかった場合のフォールバック
  if (error) {
    // URLからIDを抽出してiframeで埋め込み
    const match = url.match(/\/p\/([^/?]+)/);
    const postId = match ? match[1] : null;
    if (postId) {
      return (
        <div className="my-4 flex justify-center">
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed/${caption ? "captioned/" : ""}`}
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="max-w-full rounded-lg shadow-sm"
            style={{ maxWidth: maxWidth }}
          />
        </div>
      );
    }
    return (
      <div className="my-4 p-4 bg-[#FFF8F0] border border-gray-200 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#2563EB] font-medium hover:underline"
        >
          Instagramで見る ↗
        </a>
      </div>
    );
  }

  if (!embedHtml) {
    return (
      <div className="my-4 flex justify-center">
        <div className="w-full max-w-[540px] h-[400px] bg-gray-50 animate-pulse rounded-lg flex items-center justify-center">
          <span className="text-xs text-[#94A3B8]">読み込み中...</span>
        </div>
      </div>
    );
  }

  // oEmbedから返ってきたHTMLをdangerouslySetInnerHTMLで挿入
  return (
    <div
      className="my-4 flex justify-center"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
