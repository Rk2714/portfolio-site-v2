import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrainingInquiry from "../components/TrainingInquiry";
import { TRAINING_FAQ, TRAINING_OFFERS, TRAINING_TOPICS } from "../../lib/training-data";
import { SITE_URL } from "../../lib/site-config";
import "./training.css";

export const metadata: Metadata = {
  title: "2名からのAI・PC研修｜沖縄・オンライン",
  description: "ChatGPT・Gemini・Claudeの活用からPC基本操作・仕事の効率化まで。Yazirusi代表の金城竜弥が2名から支援します。オンライン・訪問対応、5名まで同一料金。スタート記念価格は90分27,500円、120分44,000円（税込・1組）。",
  alternates: { canonical: "/training" },
  openGraph: {
    title: "2名からのAI・PC研修｜Yazirusi",
    description: "AIも、PCの基本も。毎日の仕事に合わせて学ぶ少人数研修。オンライン・訪問に対応します。",
    url: "/training", type: "website", locale: "ja_JP",
    images: [{ url: "/images/og-yazirusi.jpg", width: 1200, height: 630, alt: "Yazirusi代表 金城竜弥のAI・PC研修" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/training#service`,
  name: "AI・PC研修",
  serviceType: "少人数向けのAI活用・PC操作・仕事の効率化研修",
  url: `${SITE_URL}/training`,
  description: "2名から受付。5名まで同一料金。オンライン・訪問対応。ChatGPT・Gemini・Claudeなどの活用とPC基本操作を、参加者の仕事に合わせて学びます。",
  provider: { "@type": "Organization", name: "Yazirusi", url: SITE_URL },
  areaServed: { "@type": "Country", name: "日本" },
  offers: TRAINING_OFFERS.map(offer => ({
    "@type": "Offer", name: `${offer.name} スタート記念価格`,
    url: `${SITE_URL}/training#${offer.id}`,
    price: offer.price, priceCurrency: "JPY",
    description: `${offer.minutes}分・2〜5名・1組あたり税込。事前打合せ、配布資料、当日の質疑を含む。出張交通費・有料ツール・個別制作は別途。`,
  })),
};

export default function TrainingPage() {
  return <>
    <Navigation />
    <main className="training-page">
      <section className="training-hero home-shell" aria-labelledby="training-title">
        <div>
          <p className="training-kicker">Yazirusi / 少人数のAI・PC研修</p>
          <h1 id="training-title">いつもの仕事に、<br /><em>使える学びを。</em></h1>
          <p className="training-lead">AIを触ってみたい。PC作業をもっと楽にしたい。<br />その一歩から、仕事に合わせて一緒に進めます。</p>
          <ul className="training-tags"><li>2名から受付</li><li>5名まで同一料金</li><li>オンライン・訪問</li></ul>
          <a className="training-button" href="#training-plans">研修内容と料金を見る <span aria-hidden="true">↓</span></a>
        </div>
        <aside className="training-path" aria-label="研修で進める3つのステップ">
          <p className="training-kicker">今日の学びを、次の仕事へ</p>
          <ol>
            <li><span>01</span><div><strong>困っている仕事を選ぶ</strong><p>文章・表・ファイル整理など、身近な作業から。</p></div></li>
            <li><span>02</span><div><strong>一緒に操作してみる</strong><p>今の経験に合わせて、ゆっくり試します。</p></div></li>
            <li><span>03</span><div><strong>確かめて、自分で使う</strong><p>結果の確認と直し方まで練習します。</p></div></li>
          </ol>
          <p className="training-small">実践研修の進め方の例。テーマは事前に相談して決めます。</p>
        </aside>
      </section>

      <section className="training-section home-shell" aria-labelledby="training-topics-title">
        <p className="training-kicker">学べること</p><h2 id="training-topics-title">道具からでも、<br />仕事の困りごとからでも。</h2>
        <div className="training-topics">{TRAINING_TOPICS.map(topic => <article key={topic.number}><span>{topic.number}</span><div><h3>{topic.title}</h3><p>{topic.description}</p><p className="training-small">{topic.examples}</p></div></article>)}</div>
        <div className="training-creative"><h3>画像・動画・デザインの活用もご相談ください。</h3><p>クリエイティブ分野は、ご希望と難易度を確認し、対応範囲と追加料金を個別にご案内します。その他のAIツールも、使いたい内容をお聞かせください。</p></div>
      </section>

      <section id="training-plans" className="training-section training-plans home-shell" aria-labelledby="training-plans-title">
        <p className="training-kicker">スタート記念価格 / 1組あたり・税込</p><h2 id="training-plans-title">2名でも、5名でも。<br />同じ料金で学べます。</h2>
        <p>6名以上は人数と内容に応じてお見積りします。オンライン・訪問のどちらもご相談いただけます。</p>
        <div className="training-cards">{TRAINING_OFFERS.map(offer => <article id={offer.id} key={offer.id}>
          <p className="training-kicker">{offer.minutes}分 / 2〜5名</p><h3>{offer.name}</h3><p>{offer.description}</p>
          <p className="training-price"><strong>{offer.price.toLocaleString("ja-JP")}</strong><span>円（税込・1組）</span></p>
          <p className="training-outcome">{offer.outcome}</p>
          <TrainingInquiry plan={`${offer.name} ${offer.minutes}分・2〜5名（1組 ${offer.price.toLocaleString("ja-JP")}円・税込）を希望します。`} />
        </article>)}</div>
        <div className="training-included"><div><h3>料金に含むもの</h3><p>事前打合せ30分1回、既存教材の選定・軽微な例の調整、配布資料、当日の質疑。</p></div><div><h3>別途ご相談するもの</h3><p>訪問交通費・必要な宿泊費、有料ツール、専用教材の新規制作、PCやアカウントの個別整備、システム開発、研修後の継続支援。</p></div></div>
      </section>

      <section className="training-host home-shell" aria-labelledby="training-host-title">
        <Image src="/images/kinjo-working.webp" alt="Yazirusi代表・講師の金城竜弥" width={600} height={450} sizes="(max-width: 760px) 100vw, 40vw" />
        <div><p className="training-kicker">講師について</p><h2 id="training-host-title">金城 竜弥<span>Yazirusi代表 / 看護師経験 約15年</span></h2><p>医療・介護をはじめとする現場での経験をもとに、業務の整理とAIの活用を支援しています。操作の不安や経験の違いを伺い、普段の仕事で試せる内容に整えます。</p><Link className="training-text-link" href="/#profile">プロフィールを見る →</Link></div>
      </section>

      <section className="training-section home-shell" aria-labelledby="training-faq-title">
        <p className="training-kicker">受講前の確認</p><h2 id="training-faq-title">よくあるご質問</h2>
        <div className="training-faq">{TRAINING_FAQ.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="training-contact home-shell" aria-labelledby="training-contact-title">
        <div><p className="training-kicker">内容が決まっていなくても大丈夫です</p><h2 id="training-contact-title">「この作業、楽になる？」<br />からご相談ください。</h2><p>人数・希望時期・オンラインか訪問かを伺い、研修内容をご提案します。</p></div>
        <TrainingInquiry />
      </section>
      <nav className="training-related home-shell" aria-label="関連する支援"><Link href="/pricing">1名で利用する個別セッション →</Link><Link href="/radio">金城が参加するラジオを聴く →</Link></nav>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
