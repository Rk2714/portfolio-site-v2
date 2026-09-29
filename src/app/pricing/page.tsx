import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Footer from "../components/Footer";
import HomeMotion from "../components/HomeMotion";
import Navigation from "../components/Navigation";
import {
  businessPlans,
  siteContacts,
} from "../../lib/site-data";
import { SITE_URL } from "../../lib/site-config";

export const metadata: Metadata = {
  title: "料金・支援内容",
  description:
    "Yazirusiの法人・事業所向け支援内容と、個人向けAI活用セッションのご案内。お申し込みの前に30分無料相談を行います。",
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
  },
};

const questions = [
  {
    question: "相談したら、必ず依頼する必要がありますか？",
    answer:
      "いいえ。最初の30分は無料相談として、困りごとの概要を伺い、Yazirusiでできることをご説明します。必要な場合のみ、相談後にLINEで支援内容をご案内します。",
  },
  {
    question: "表示料金より高くなることはありますか？",
    answer:
      "法人向け支援は、対象業務、連携するサービス、利用人数などによって変わります。作業を始める前に対応範囲と料金をご提示します。",
  },
  {
    question: "分割払いはできますか？",
    answer:
      "はい。複数回のAI伴走プランや法人向け支援は、分割払いにも対応しています。支払回数や時期は、お申し込み前にご相談ください。",
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
                  <span>お申し込みの前に、30分無料相談を行います。</span>
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
                <span>分割払いにも対応しています。外部サービスの利用料や機器代が必要な場合は、別途事前にご案内します。</span>
              </div>
              <a
                href={siteContacts.lineOfficial}
                target="_blank"
                rel="noopener noreferrer"
                className="home-button home-button--light pricing-section__cta"
              >
                LINEで30分無料相談を予約
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
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

              <p className="pricing-personal__note" data-reveal>
                最初に30分無料相談で、今の仕事や困りごとを伺います。単発・4回・8回のサポートは、相談を終えてから公式LINEで個別にご案内します。
              </p>
              <a
                href={siteContacts.lineOfficial}
                target="_blank"
                rel="noopener noreferrer"
                className="home-button home-button--green pricing-section__cta"
              >
                LINEで30分無料相談を予約
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
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
                  公式LINEで「予約」と送ると、30分無料相談の日程をご案内します。困りごとの概要を伺い、必要な支援は相談後に個別にご案内します。
                </p>
              </div>
              <a
                href={siteContacts.lineOfficial}
                target="_blank"
                rel="noopener noreferrer"
                className="home-button home-button--green"
              >
                LINEで30分無料相談を予約
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
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
