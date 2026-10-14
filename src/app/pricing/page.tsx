import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Footer from "../components/Footer";
import HomeMotion from "../components/HomeMotion";
import Navigation from "../components/Navigation";
import TrackedLink from "../components/TrackedLink";
import {
  businessPlans,
  personalPlans,
  siteContacts,
} from "../../lib/site-data";
import { SITE_URL } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "料金・支援内容",
  description:
    "Yazirusiの業務改善支援と個人向けAIサポート。AI活用相談60分5,000円、AI実践・開発サポート90分10,000円（税込）。お申し込みの前に30分無料相談で、合う進め方を整理します。",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "料金・支援内容｜Yazirusi",
    description:
      "法人・事業所向けの業務改善支援と、個人向けAI活用セッションをご案内します。まずは30分無料相談から。",
    url: "/pricing",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/images/og-yazirusi.jpg", width: 1200, height: 630, alt: "Yazirusiの料金・支援内容" }],
  },
};

const questions = [
  {
    question: "相談したら、必ず依頼する必要がありますか？",
    answer:
      "いいえ。最初の30分は無料で、困りごとと支援できる範囲を一緒に確認します。相談だけでも大丈夫です。LINEの友だち追加や無料相談だけで、料金が発生することはありません。有料サポートは、内容と料金をご確認いただいてからのお申し込みです。",
  },
  {
    question: "相談と実践・開発サポートは、どう選べばよいですか？",
    answer:
      "使うAIや進め方を決めたい方は60分5,000円の相談、画面を共有して一緒に操作・設定・試作を進めたい方は90分10,000円の実践・開発サポートがおすすめです。相談だけのご利用もできます。",
  },
  {
    question: "以前購入したセッションや回数券はどうなりますか？",
    answer:
      "購入済みのセッション・回数券・継続契約は、購入時にお約束した時間・料金・期限などの条件を維持します。新しく購入する際は新プランを選べます。継続契約の変更は更新時にご相談します。",
  },
  {
    question: "表示料金より高くなることはありますか？",
    answer:
      "法人向け支援は、対象業務、連携するサービス、利用人数などによって変わります。作業を始める前に対応範囲と料金をご提示します。",
  },
  {
    question: "支払い方法や時期は、いつ確認できますか？",
    answer:
      "無料相談済みの方は、このページの各プランから決済画面へ進めます。お支払い後、公式LINEへ購入時のお名前と候補日時を2〜3つお送りください。金城から日時と参加リンクをご案内します。購入だけでは日時は確定しません。",
  },
  {
    question: "有料のAIや外部サービスが必要ですか？",
    answer:
      "現在使っている環境を優先し、必要のないツール導入は勧めません。有料サービスが必要な場合は、費用と理由を事前に説明します。",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yazirusi",
  url: `${SITE_URL}/pricing`,
  areaServed: ["沖縄県", "日本"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "料金・支援内容",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "個人向けAIサポート",
        itemListElement: personalPlans.map((plan) => ({
          "@type": "Offer",
          priceCurrency: "JPY",
          price: plan.priceAmount,
          itemOffered: {
            "@type": "Service",
            name: plan.name,
            description: `${plan.detail}・税込${plan.price}。利用期限は${plan.note}。${plan.fit}${plan.boundary}`,
          },
        })),
      },
      {
        "@type": "OfferCatalog",
        name: "法人・事業所向け",
        itemListElement: businessPlans.map((plan) => ({
          "@type": "Offer",
          priceCurrency: "JPY",
          price: plan.priceAmount,
          itemOffered: {
            "@type": "Service",
            name: plan.name,
            description: plan.description,
          },
        })),
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <HomeMotion>
        <main className="pricing-page">
          <section className="pricing-hero">
            <div className="home-shell pricing-hero__grid">
              <div data-reveal>
                <p className="home-kicker">Pricing &amp; support</p>
                <h1>
                  できることと、
                  <br />
                  料金の目安。
                </h1>
              </div>
              <div className="pricing-hero__intro" data-reveal>
                <p className="pricing-hero__summary">
                  <span>必要な範囲を、一緒に整理してから始めます。</span>
                  <span>法人向けは、内容に合わせて組み立てます。</span>
                  <span>初めての方は30分無料相談、相談済みの方は下のプランからお申し込み。</span>
                </p>
                <div className="pricing-jump-links">
                  <a href="#business">
                    法人・事業所向け
                    <ArrowDown aria-hidden="true" size={16} />
                  </a>
                  <a href="#personal">
                    個人向け
                    <ArrowDown aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="business" className="pricing-section pricing-business">
            <div className="home-shell">
              <div className="pricing-section__heading" data-reveal>
                <p className="home-kicker">For business</p>
                <div>
                  <h2>法人・事業所向け</h2>
                  <p>
                    業務を整理し、改善方法を一緒に考えます。社内で作れるよう方法をお伝えすることも、必要な仕組みを私が構築することもできます。
                  </p>
                </div>
              </div>

              <div className="pricing-business__plans">
                {businessPlans.map((plan) => (
                  <article key={plan.name} data-reveal>
                    <div className="pricing-plan__top">
                      <h3>{plan.name}</h3>
                      <p>
                        <span>料金目安</span>
                        <strong>{plan.price}</strong>
                      </p>
                    </div>
                    <p className="pricing-plan__description">{plan.description}</p>
                    <ul>
                      {plan.items.map((item) => (
                        <li key={item}>
                          <Check aria-hidden="true" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {plan.examples && (
                      <div className="pricing-plan__examples">
                        <span>対応例</span>
                        <ul>
                          {plan.examples.map((example) => (
                            <li key={example}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
              </div>

              <div className="pricing-note" data-reveal>
                <p>
                  「対応例」は固定の商品名ではありません。現在の業務と課題を確認し、必要な支援範囲を組み立てます。
                </p>
                <span>支払い方法と時期は、お申し込み前にご案内します。外部サービスの利用料や機器代が必要な場合は、別途事前にご案内します。</span>
              </div>
              <TrackedLink
                href={siteContacts.lineOfficial}
                eventName="contact_cta_click"
                eventParams={{ page_type: "pricing", position: "pricing_business", cta_target: "line_free_consultation" }}
                target="_blank"
                rel="noopener noreferrer"
                className="home-button home-button--light pricing-section__cta"
              >
                LINEで30分無料相談を予約
                <ArrowUpRight aria-hidden="true" size={17} />
              </TrackedLink>
            </div>
          </section>

          <section id="personal" className="pricing-section pricing-personal">
            <div className="home-shell">
              <div className="pricing-section__heading" data-reveal>
                <p className="home-kicker">For individuals</p>
                <div>
                  <h2>個人向けAIサポート</h2>
                  <p>
                    あなたの仕事や生活に合わせて、実際に使えるAIの取り入れ方を一対一で整理します。
                  </p>
                </div>
              </div>

              <p className="pricing-personal__intro" data-reveal>
                方針を決める相談と、一緒に手を動かす実践支援。必要な方を1回から選べます。オンライン・税込です。
              </p>
              <div className="support-plans" data-reveal>
                {personalPlans.map((plan) => (
                  <article id={plan.id} className="support-plan" key={plan.id}>
                    <p className="support-plan__fit">{plan.fit}</p>
                    <h3>{plan.name}</h3>
                    <p className="support-plan__price"><strong>{plan.price}</strong><span>税込／{plan.detail}</span></p>
                    <ul>{plan.includes.map((item) => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul>
                    <p className="support-plan__boundary">{plan.boundary}</p>
                    <p className="support-plan__expiry">利用期限：{plan.note}</p>
                    {plan.paymentUrl ? (
                      <TrackedLink className="home-button home-button--green" href={plan.paymentUrl} eventName="contact_cta_click" eventParams={{ page_type: "pricing", position: plan.id, cta_target: "payment" }}>
                        {plan.name}を購入する <ArrowUpRight aria-hidden="true" size={17} />
                      </TrackedLink>
                    ) : (
                      <p>お申し込みは公式LINEへご連絡ください。</p>
                    )}
                  </article>
                ))}
              </div>
              <div id="purchase-flow" className="support-purchase-flow" data-reveal>
                <h3>相談済みの方のお申し込み</h3>
                <ol><li>内容・料金・利用条件を確認し、上の購入ボタンからお支払い。</li><li>公式LINEへ、購入時のお名前と希望日時を2〜3つ送信。</li><li>金城から日時とオンライン参加リンクをご案内します。</li></ol>
                <p>購入だけでは日時は確定しません。初めての方は、購入前に30分無料相談をご利用ください。</p>
                <TrackedLink href={siteContacts.lineOfficial} className="home-button home-button--light" target="_blank" rel="noopener noreferrer">公式LINEで日程を調整する <ArrowUpRight aria-hidden="true" size={17} /></TrackedLink>
              </div>
              <p className="pricing-personal__intro" data-reveal>
                日程変更は前日までに公式LINEへご連絡ください。急病などは当日もご相談いただけます。当面キャンセル料はありません。
              </p>
              <p className="pricing-personal__intro" data-reveal>
                購入済みのセッション・回数券・継続契約は、購入時の時間・料金・期限などの条件を維持します。継続的な支援は個別にご相談ください。
              </p>
              <TrackedLink href={siteContacts.lineOfficial} eventName="contact_cta_click" eventParams={{ page_type: "pricing", position: "pricing_personal", cta_target: "line_free_consultation" }} target="_blank" rel="noopener noreferrer" className="home-button home-button--green pricing-section__cta">
                初めての方：30分無料相談を予約 <ArrowUpRight aria-hidden="true" size={17} />
              </TrackedLink>
            </div>
          </section>

          <section className="pricing-section pricing-faq">
            <div className="home-shell pricing-faq__grid">
              <div data-reveal>
                <p className="home-kicker">Before you start</p>
                <h2>料金についての確認事項</h2>
              </div>
              <div className="pricing-faq__list" data-reveal>
                {questions.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="pricing-contact">
            <div className="home-shell pricing-contact__inner" data-reveal>
              <div>
                <p className="home-kicker">Free consultation</p>
                <h2>まずは、状況を聞かせてください。</h2>
                <p>
                  公式LINEを友だち追加し、「予約」と送ると、30分無料相談の日程をご案内します。相談だけでも大丈夫です。今の困りごとと、次にできることを一緒に整理しましょう。
                </p>
              </div>
              <TrackedLink
                href={siteContacts.lineOfficial}
                eventName="contact_cta_click"
                eventParams={{ page_type: "pricing", position: "pricing_footer", cta_target: "line_free_consultation" }}
                target="_blank"
                rel="noopener noreferrer"
                className="home-button home-button--green"
              >
                LINEで30分無料相談を予約
                <ArrowUpRight aria-hidden="true" size={17} />
              </TrackedLink>
              <Link href="/" className="pricing-back-link">
                ホームへ戻る
              </Link>
            </div>
          </section>
        </main>
      </HomeMotion>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
