"use client";

import { useEffect, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { ArrowRight, Check, Compass, Wrench } from "lucide-react";
import { SUPPORT_PACKS, SUPPORT_SERVICES, parseSupportSelection, supportProduct, type SupportAudience, type SupportService, type SupportPack } from "../../lib/support-catalog";
import { siteContacts } from "../../lib/site-data";

const lineAccountId = "@914fukjd";
const subscribeToDevice = () => () => {};
const lineAppAvailable = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const lineAppServerSnapshot = () => false;
const yen = (value: number) => value.toLocaleString("ja-JP");
export default function PricingViewer() {
  const [selection, setSelection] = useState({ audience: "personal" as SupportAudience, service: "consultation" as SupportService, pack: 1 as SupportPack });
  const lineAppSupported = useSyncExternalStore(subscribeToDevice, lineAppAvailable, lineAppServerSnapshot);
  const [copyStatus, setCopyStatus] = useState("");
  useEffect(() => {
    const read = () => setSelection(parseSupportSelection(window.location.search, window.location.hash));
    read();
    window.addEventListener("popstate", read);
    window.addEventListener("hashchange", read);
    return () => { window.removeEventListener("popstate", read); window.removeEventListener("hashchange", read); };
  }, []);
  function choose(update: Partial<typeof selection>) {
    const next = { ...selection, ...update };
    setSelection(next);
    setCopyStatus("");
    const url = new URL(window.location.href);
    url.searchParams.set("audience", next.audience);
    url.searchParams.set("service", next.service);
    url.searchParams.set("pack", String(next.pack));
    url.hash = next.audience;
    window.history.pushState({}, "", url);
  }
  function tabKey(event: KeyboardEvent<HTMLButtonElement>, audience: SupportAudience) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? "personal" : event.key === "End" ? "business" : audience === "personal" ? "business" : "personal";
    choose({ audience: next });
    document.getElementById(`support-tab-${next}`)?.focus();
  }
  const { audience, pack, service } = selection;
  const selected = supportProduct(service, pack);
  const inquiryText = `有料プランについて相談したいです。\n${audience === "business" ? "法人・事業所" : "個人"}での利用を希望します。\n${SUPPORT_SERVICES[service].name} ${selected.minutes}分 × ${pack}回（${yen(selected.price)}円・税込）\n対応内容と日程を相談させてください。`;
  // LINE documents oaMessage for iOS/Android; desktop keeps the existing add-friend URL.
  const inquiryUrl = lineAppSupported ? `https://line.me/R/oaMessage/${encodeURIComponent(lineAccountId)}/?${encodeURIComponent(inquiryText)}` : siteContacts.lineOfficial;
  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiryText);
      setCopyStatus("相談文をコピーしました。LINEへ貼り付けてお送りください。");
    } catch {
      setCopyStatus("コピーできませんでした。LINEへ支援名と回数をお知らせください。");
    }
  }
  return <section id="plans" className="pr-plans home-shell" aria-label="料金・プランを選ぶ">
    <div className="pr-plan-top"><div><p className="pr-eyebrow">2つの支援から選ぶ</p><h2>考える時間と、<br className="pr-mobile-break" />進める時間。</h2></div><p>個人・法人で料金は共通です。<br />継続して取り組む場合は回数パックも選べます。</p></div>
    <div className="pr-audience" role="tablist" aria-label="ご利用の対象">
      {(["personal", "business"] as const).map(value => <button key={value} id={`support-tab-${value}`} type="button" role="tab" aria-selected={audience === value} aria-controls="support-plans" tabIndex={audience === value ? 0 : -1} onClick={() => choose({ audience: value })} onKeyDown={event => tabKey(event, value)}>{value === "personal" ? "個人の方" : "法人・事業所の方"}</button>)}
    </div>
    <div role="tabpanel" id="support-plans" aria-labelledby={`support-tab-${audience}`}>
      <p className="pr-audience-copy">{audience === "personal" ? "仕事や日常の情報整理、AIの使い方、自分に合うツールづくりに。" : "帳票・集計・業務フローなど、担当者と一緒に現場の改善を進めます。"}</p>
      <fieldset className="pr-packs"><legend>ご利用回数</legend><div>{SUPPORT_PACKS.map(value => <label key={value}><input type="radio" name="support-pack" checked={pack === value} onChange={() => choose({ pack: value })} /><span><strong>{value === 1 ? "単発" : `${value}回パック`}</strong><small>{value === 1 ? "まずは1回から" : `${value === 4 ? "10" : "15"}％引き`}</small></span></label>)}</div></fieldset>
      <div className="pr-cards">
        {(["consultation", "practice"] as const).map(value => {
          const info = SUPPORT_SERVICES[value], product = supportProduct(value, pack), chosen = service === value, Icon = value === "consultation" ? Compass : Wrench;
          return <article key={value} className={`pr-card ${chosen ? "pr-card--selected" : ""}`}>
            <div className="pr-card__top"><span className="pr-card__icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><span className="pr-card__duration">1回 {info.minutes}分</span></div>
            <p className="pr-card__eyebrow">{value === "consultation" ? "方針を整理したい方へ" : "一緒に手を動かしたい方へ"}</p>
            <h3>{info.name}</h3>
            <p className="pr-card__description">{info.description}</p>
            <div className="pr-price"><strong>{yen(product.price)}<span>円</span></strong><span>税込 / {pack === 1 ? "1回" : `${pack}回分`}</span></div>
            <p className="pr-unit">{pack === 1 ? "必要なテーマを、1回から。" : `1回あたり ${yen(product.price / pack)}円（税込）`}</p>
            {pack !== 1 && <p className="pr-saving">単発{pack}回の合計から {yen(info.singlePrice * pack - product.price)}円お得</p>}
            <dl><div><dt>持ち帰れるもの</dt><dd>{info.deliverable}</dd></div><div><dt>利用期限</dt><dd>購入から{product.expiryMonths}か月</dd></div></dl>
            <p className="pr-card__boundary">{info.boundary}</p>
            <button type="button" className={`pr-button ${chosen ? "pr-button--dark" : "pr-button--outline"}`} aria-pressed={chosen} onClick={() => choose({ service: value })}>{chosen ? <><Check size={17} aria-hidden="true" />選択中</> : <>この支援を選ぶ <ArrowRight size={17} aria-hidden="true" /></>}</button>
          </article>;
        })}
      </div>
      {audience === "business" && <aside className="pr-business-note"><strong>法人パックは、登録した担当者で共有できます。</strong><p>各回の参加者は1名。購入責任者からお知らせいただき、金城が初回確認した担当者が交代して利用できます。複数人への研修・組織全体への導入は別見積です。</p></aside>}
      <div className="pr-selection"><div aria-live="polite" aria-atomic="true"><p className="pr-selection__label">選択中のプラン</p><h3>{SUPPORT_SERVICES[service].name}</h3><p>{selected.minutes}分 × {pack}回 <span>／</span> <strong>{yen(selected.price)}円（税込）</strong></p><small>購入から{selected.expiryMonths}か月。相談と実践の回数は交換できません。</small></div><div className="pr-selection__action"><a className="pr-button pr-button--dark" href={inquiryUrl} target="_blank" rel="noopener noreferrer">LINEでこのプランを相談 <ArrowRight size={17} aria-hidden="true" /></a><button type="button" className="pr-copy-inquiry" onClick={copyInquiry}>相談文をコピー</button><p>{lineAppSupported ? "選んだプランを相談文に入れてLINEを開きます。内容を確認して送信してください。" : "相談文をコピーして、LINEへ貼り付けてお送りください。"}<br />内容・日程を確認してからお申し込みいただけます。</p><p className="pr-copy-status" role="status">{copyStatus}</p></div></div>
    </div>
  </section>;
}
