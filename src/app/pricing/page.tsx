import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, MessageCircle, PencilRuler } from "lucide-react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PricingViewer from "../components/PricingViewer";
import { SUPPORT_PRODUCTS, SUPPORT_SERVICES } from "../../lib/support-catalog";
import { siteContacts } from "../../lib/site-data";
import { SITE_URL } from "../../lib/site-config";
import "./pricing-refresh.css";

export const metadata: Metadata = {
  title: "料金・支援内容",
  description: "AI活用相談は60分5,000円、実践・開発サポートは90分10,000円。個人・法人共通、税込。単発・4回・8回から選べます。初めての方はLINEから30分無料相談へ。",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "料金・支援内容｜Yazirusi",
    description: "方針を整理する60分と、一緒に手を動かす90分。必要な支援を、必要な回数から。",
    url: "/pricing", type: "website", locale: "ja_JP",
    images: [{ url: "/images/og-yazirusi.jpg", width: 1200, height: 630, alt: "Yazirusiの料金・支援内容" }],
  },
};
const questions = [
  ["初めてですが、どちらのプランを選べばよいですか？", "まずは30分無料相談で、困りごとと支援の相性を確認します。方針を整理したい方には60分の相談、操作・設定・試作を一緒に進めたい方には90分の実践をご案内します。無料相談だけのご利用でも構いません。"],
  ["実践・開発では、完成したものを受け取れますか？", "今回のゴールを事前に決め、90分の中で制作を進めます。時間内に仕上がったプロンプト・設定・小さなプログラムなどはお渡しできます。完成の保証や時間外制作、完成までの開発代行は別見積です。"],
  ["法人の担当者は交代できますか？", "購入責任者からお知らせいただき、金城が初回確認した登録メンバーでパックを共有できます。各回の参加者は1名です。個人の購入分は共有できません。複数人への研修や組織全体への導入は別途ご相談ください。"],
  ["以前購入したセッションや回数券はどうなりますか？", "購入済みのセッション・回数券・継続契約は、購入時の時間・料金・期限を維持します。新しい条件への一括変更は行いません。残回数や日程は公式LINEからお問い合わせください。"],
  ["回数パックの途中解約はできますか？", "未利用分をパックの1回単価で返金し、解約手数料はかかりません。金城が利用状況を確認して返金手続きを行います。相談用と実践用の回数は交換できません。"],
  ["外部サービスの費用は含まれますか？", "今お使いの環境を優先します。有料AI、外部サービス、機器などが必要な場合は、その費用と理由を事前にご案内します。"],
  ["日程の変更・キャンセルはできますか？", "日程変更は前日までに公式LINEへご連絡ください。急病などは当日もご相談いただけます。当面キャンセル料はありません。"],
];
const schema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", name: "Yazirusi", url: `${SITE_URL}/pricing`,
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "個人・法人共通のAI支援",
    itemListElement: SUPPORT_PRODUCTS.map(p => ({
      "@type": "Offer", priceCurrency: "JPY", price: p.price,
      itemOffered: { "@type": "Service", name: `${SUPPORT_SERVICES[p.service].name} ${p.pack}回`, description: `${p.minutes}分×${p.pack}回・税込${p.price}円・購入から${p.expiryMonths}か月。${SUPPORT_SERVICES[p.service].description}` },
    })),
  },
};

export default function PricingPage() {
  return <>
    <Navigation />
    <main className="pricing-page pricing-refresh">
      <section className="pr-hero">
        <div className="home-shell pr-hero__grid">
          <div>
            <p className="pr-eyebrow">料金・支援内容</p>
            <h1>必要な支援を、<br /><span>必要な回数から。</span></h1>
            <p className="pr-hero__copy">方針を整理する60分。<br />一緒に手を動かす90分。<br className="pr-mobile-break" />今の課題に合わせて選べます。</p>
            <div className="pr-hero__tags"><span>個人・法人共通</span><span>オンライン</span><span>すべて税込</span></div>
            <a href="#plans" className="pr-text-link">料金と内容を比べる <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <aside className="pr-first-step" aria-label="初めての方へのご案内">
            <span className="pr-first-step__label">初めての方へ</span>
            <MessageCircle size={30} strokeWidth={1.4} aria-hidden="true" />
            <h2>迷ったら、<br />30分の無料相談から。</h2>
            <p>困りごとと、支援できる範囲を一緒に整理します。プランを決めてから相談する必要はありません。</p>
            <a className="pr-button pr-button--dark" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer">LINEで無料相談 <ArrowRight size={18} aria-hidden="true" /></a>
            <small>友だち追加・無料相談で料金は発生しません。</small>
          </aside>
        </div>
      </section>

      <PricingViewer />

      <section className="pr-start home-shell" aria-labelledby="start-title">
        <div className="pr-section-heading"><p className="pr-eyebrow">ご利用の流れ</p><h2 id="start-title">内容を確かめてから、<br className="pr-mobile-break" />お申し込み。</h2><p>相談から当日のご案内まで、公式LINEでやり取りします。</p></div>
        <ol className="pr-steps">
          {[
            ["01", "まずは無料相談", "初めての方は30分で、課題と支援の相性を確認します。"],
            ["02", "内容・料金を確認", "支援内容と回数を決め、お支払い方法をご案内します。"],
            ["03", "LINEで日程を調整", "ご希望の日時を伺い、日時と参加リンクをご案内します。"],
            ["04", "オンラインで実施", "相談の方針メモや、時間内で作ったものを共有します。"],
          ].map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}
        </ol>
        <div className="pr-existing"><div><strong>すでにご購入いただいている方へ</strong><p>購入時の条件はそのままです。日程・残回数は公式LINEへお問い合わせください。</p></div><a href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer">LINEで日程を相談 <ArrowRight size={17} aria-hidden="true" /></a></div>
      </section>

      <section className="pr-custom home-shell" aria-labelledby="custom-title">
        <div className="pr-custom__icon"><PencilRuler size={36} strokeWidth={1.4} aria-hidden="true" /></div>
        <div><p className="pr-eyebrow">制作・研修・組織への導入</p><h2 id="custom-title">まとまったご依頼は、<br />対応範囲から一緒に。</h2><p>完成までのシステム制作、外部サービスとの連携、複数人への研修は、業務と対応範囲を確認してお見積もりします。</p><ul><li><Check size={16} aria-hidden="true" />業務の整理と要件確認</li><li><Check size={16} aria-hidden="true" />制作・導入する範囲の合意</li><li><Check size={16} aria-hidden="true" />料金と進め方の事前提示</li></ul></div>
        <a className="pr-button pr-button--outline" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer">LINEで支援範囲を相談 <ArrowRight size={17} aria-hidden="true" /></a>
      </section>

      <section className="pr-faq home-shell" aria-labelledby="faq-title">
        <div className="pr-section-heading"><p className="pr-eyebrow">ご利用前の確認</p><h2 id="faq-title">よくあるご質問</h2></div>
        <div className="pr-faq__items">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="pr-contact"><div className="home-shell"><p className="pr-eyebrow">まずは今の困りごとから</p><h2>何を頼めるか、<br />話してから決めましょう。</h2><p>必要な支援と、次に取り組むことを一緒に整理します。</p><a className="pr-button pr-button--dark" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer">LINEで30分無料相談 <ArrowRight size={18} aria-hidden="true" /></a><Link className="pr-back" href="/">ホームへ戻る</Link></div></section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
