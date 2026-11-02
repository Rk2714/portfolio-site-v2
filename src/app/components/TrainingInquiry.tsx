"use client";

import { useState, useSyncExternalStore } from "react";
import { siteContacts } from "../../lib/site-data";

const subscribe = () => () => {};
const mobileSnapshot = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const serverSnapshot = () => false;

export default function TrainingInquiry({ plan }: { plan?: string }) {
  const mobile = useSyncExternalStore(subscribe, mobileSnapshot, serverSnapshot);
  const [status, setStatus] = useState("");
  const message = [
    "AI・PC研修について相談したいです。",
    plan || "内容と研修プランから相談したいです。",
    "参加人数：",
    "オンライン／訪問：",
    "希望時期：",
    "扱いたい仕事・ツール：",
  ].join("\n");
  const href = mobile
    ? `https://line.me/R/oaMessage/${encodeURIComponent("@914fukjd")}/?${encodeURIComponent(message)}`
    : siteContacts.lineOfficial;
  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus("相談文をコピーしました。LINEへ貼り付けてご記入ください。");
    } catch {
      setStatus("コピーできませんでした。LINEへ人数と希望内容をお知らせください。");
    }
  }
  return <div className="training-inquiry">
    <a className="training-button" href={href} target="_blank" rel="noopener noreferrer">LINEで研修を相談 <span aria-hidden="true">↗</span></a>
    <button type="button" className="training-copy" onClick={copy}>相談文をコピー</button>
    <p className="training-small">{mobile ? "相談文を入れてLINEを開きます。内容を確認して送信してください。" : "相談文をコピーして、LINEへ貼り付けてお送りください。"}<br />相談だけでお申し込みやお支払いは発生しません。</p>
    <p className="training-small" role="status">{status}</p>
  </div>;
}
