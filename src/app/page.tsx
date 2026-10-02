import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Bot,
  Check,
  CircleHelp,
  ClipboardCheck,
  FlaskConical,
  LayoutDashboard,
  ListTree,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  RefreshCw,
  Wrench,
} from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomeMotion from "./components/HomeMotion";
import TrackedLink from "./components/TrackedLink";
import {
  careerTimeline,
  siteContacts,
  siteProfile,
} from "../lib/site-data";
import { SITE_URL } from "../lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Yazirusi｜中小企業・医療介護現場の業務改善支援" },
  description:
    "紙・Excel・LINEに分かれた業務の整理と、個人に合うAI活用を支援するYazirusi。何から始めるか決まっていなくても大丈夫です。まずは公式LINEから30分無料相談へ。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yazirusi｜その手作業を、今の会社に合う仕組みへ。",
    description:
      "今の仕事やAIの困りごとを、30分無料相談で一緒に整理します。相談だけでも大丈夫です。公式LINEから日程をご案内します。",
    url: "/",
    type: "website",
    locale: "ja_JP",
    images: [{ url: "/images/og-yazirusi.jpg", width: 1200, height: 630, alt: "業務改善の相談を聞くYazirusi代表 金城竜弥" }],
  },
};

const concerns = [
  { icon: RefreshCw, text: "同じ情報を、何度も入力している" },
  { icon: CircleHelp, text: "売上や入金を、すぐ確認できない" },
  { icon: ListTree, text: "資料や情報の保存場所がバラバラ" },
  { icon: Wrench, text: "改善したいけれど、何から始めるか分からない" },
];

const steps = [
  { number: "01", title: "話す", text: "困りごとや、今の仕事の流れを伺います。", icon: MessageCircle },
  { number: "02", title: "見える化", text: "入力・確認・共有の流れを整理します。", icon: ListTree },
  { number: "03", title: "方法を選ぶ", text: "今の環境に合う改善方法を提案します。", icon: FlaskConical },
  { number: "04", title: "つくり、残す", text: "作り方をお伝えするか、必要な仕組みを私が構築します。", icon: ClipboardCheck },
];

const improvementOptions = [
  {
    icon: ListTree,
    title: "業務を整理する",
    text: "紙・Excel・LINEなどに分かれた情報と、仕事の流れを見える形にします。",
    examples: "業務フロー / 保存場所 / 運用ルール",
  },
  {
    icon: RefreshCw,
    title: "今ある道具をつなぐ",
    text: "新しい仕組みを増やす前に、現在のツールで減らせる手間を探します。",
    examples: "転記 / 集計 / 通知 / 共有",
  },
  {
    icon: Boxes,
    title: "必要な仕組みをつくる",
    text: "既製品で合わない部分は、仕事に合わせた小さな業務システムにします。",
    examples: "作り方を支援 / 必要なら私が構築",
  },
];

const consultationSteps = [
  { number: "01", title: "LINEで日程を確認", description: "公式LINEを友だち追加し、「予約」と送ってください。無料相談の日程をご案内します。", icon: MessageCircle },
  { number: "02", title: "30分で一緒に整理", description: "今の困りごと、取り組む優先順位、Yazirusiで支援できる範囲を確認します。", icon: MessagesSquare },
  { number: "03", title: "必要な方へ個別にご提案", description: "相談後にLINEで支援内容と料金をご案内します。内容を確認してから、お申し込みを決められます。", icon: ClipboardCheck },
];

const consultationQuestions = [
  {
    question: "何を相談するか、まだまとまっていません。",
    answer: "「同じ入力が多い」「AIを仕事に使ってみたい」など、今気になっていることからで大丈夫です。30分で状況を伺い、次に取り組めそうなことを一緒に整理します。依頼書や資料を作る必要はありません。",
  },
  {
    question: "AIをほとんど使ったことがなくても大丈夫ですか？",
    answer: "大丈夫です。今使っている道具や、やってみたいことを伺うところから始めます。相談のために有料のAIを契約する必要はありません。",
  },
  {
    question: "無料相談の後、必ず申し込む必要がありますか？",
    answer: "いいえ。相談だけでも大丈夫です。LINEの友だち追加や無料相談だけで、料金が発生することはありません。有料の支援が必要な場合は、内容と料金を確認してからお申し込みいただきます。",
  },
  {
    question: "無料相談と有料サポートは、何が違いますか？",
    answer: "無料相談は、困りごとと支援できる範囲を確認する時間です。実際にAIを使いながら取り組む個人向けサポートは1回60分。法人の業務改善や仕組みづくりは、必要な範囲を相談後に個別にご提案します。",
  },
];

const practiceResults = [
  {
    label: "請求書作成",
    before: "15〜20分",
    after: "5分以内",
    description: "過去履歴との照合と最終確認までを含む、1枚あたりの作業時間です。",
  },
  {
    label: "会計・領収書整理",
    before: "年間43〜60時間",
    after: "年間15時間未満",
    description: "年末に集中していた整理を月末へ分散し、書類探しや入力の中断を減らしました。",
  },
  {
    label: "プレゼン資料作成",
    before: "ほぼ丸1日",
    after: "約1時間",
    description: "約15分でひな形を作り、内容確認と修正を加えて仕上げています。",
  },
];

const practiceTools = [
  "出退勤・労務管理Webアプリ",
  "FAX送付状作成アプリ",
  "売上確認ダッシュボード",
  "マニュアル作成フロー",
  "チャットツールと業務データの連携",
];

const timeline = careerTimeline.filter((item) => !item.year.startsWith("2026"));

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: siteProfile.name,
      url: SITE_URL,
      image: `${SITE_URL}/images/kinjo-working.webp`,
      jobTitle: siteProfile.title,
      address: { "@type": "PostalAddress", addressRegion: "沖縄県", addressCountry: "JP" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Yazirusi",
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: ["沖縄県", "日本"],
      email: siteContacts.email,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "はじめの相談",
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: "JPY",
            price: 0,
            itemOffered: { "@type": "Service", name: "初回30分無料相談", description: "困りごとと支援できる範囲を確認し、必要な場合に相談後に個別提案します。" },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navigation />
      <HomeMotion>
        <main className="workshop-home">
          <section className="workshop-hero" aria-labelledby="home-title">
            <div className="home-shell workshop-hero__grid">
              <div className="workshop-hero__copy">
                <p className="workshop-eyebrow" data-hero-kicker>沖縄 / 業務整理・仕組みづくり</p>
                <h1 id="home-title">
                  <span className="workshop-hero__line" data-hero-line>業務の</span>
                  <span className="workshop-hero__line" data-hero-line><em>「困った」</em>を、</span>
                  <span className="workshop-hero__line workshop-hero__line--last" data-hero-line>まず話せる人。</span>
                </h1>
                <p className="workshop-hero__statement" data-hero-item>
                  何を変えればいいか分からない。<br />その段階から、一緒に整理します。
                </p>
                <p className="workshop-hero__lead" data-hero-item>
                  <span>紙、Excel、請求、売上管理。今ある仕事を伺います。</span>
                  <span>無理なく続く方法を考え、必要なら仕組みをつくります。</span>
                  <span>今あるもので足りるなら、むやみに増やしません。</span>
                </p>
                <div className="workshop-hero__actions" data-hero-item>
                  <TrackedLink className="workshop-hero__primary" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer" eventName="contact_cta_click" eventParams={{ page_type: "home", position: "home_hero", cta_target: "line_free_consultation" }}>LINEで30分無料相談を予約 <ArrowRight size={18} aria-hidden="true" /></TrackedLink>
                  <a className="workshop-text-link workshop-text-link--secondary" href="#consultation-flow">相談の流れを見る <ArrowRight size={18} aria-hidden="true" /></a>
                </div>
                <p className="workshop-hero__reassurance" data-hero-item>相談だけでも大丈夫です。友だち追加や無料相談で、料金は発生しません。</p>
              </div>
              <div className="workshop-hero__visual" data-hero-item>
                <figure>
                  <Image
                    src="/images/kinjo-working.webp"
                    alt="ノートを開き、業務の相談を聞く金城竜弥"
                    fill
                    priority
                    sizes="(max-width: 760px) 100vw, 48vw"
                  />
                </figure>
                <div className="workshop-hero__caption">
                  <strong>金城竜弥 / Yazirusi</strong>
                  <span>話を聞き、今の仕事に合う方法を考えます。</span>
                </div>
                <p className="workshop-hero__vertical">現場で起きていることを、<br />一緒にほどき、整え、動き出す。</p>
                <span className="workshop-hero__index" aria-hidden="true">01—</span>
              </div>
            </div>
            <div className="home-shell workshop-hero__note" data-hero-item>
              <strong>まとまった依頼書は必要ありません。</strong>
              <span>何を変えるか決まっていない状態から、ご相談いただけます。</span>
            </div>
          </section>

          <section className="workshop-trust" aria-labelledby="trust-title">
            <div className="home-shell workshop-trust__grid">
              <div data-reveal><p className="workshop-eyebrow">Why Yazirusi</p><h2 id="trust-title">現場と運営、<br />両方の事情を踏まえて考えます。</h2></div>
              <div data-reveal><p>看護、在宅医療、オンライン診療の運営に携わってきました。現場の使いやすさだけでなく、組織として続けられるかまで考えて整理します。</p><ul><li>医療・介護現場での実務経験</li><li>オンライン診療の運営経験</li><li>相談から試作、運用整理まで対応</li></ul></div>
            </div>
          </section>

          <section id="audience" className="workshop-audience home-shell" aria-label="対象別の相談入口">
            <article id="business" className="workshop-audience__item workshop-audience__item--business" data-reveal>
              <p>法人・事業所の方</p>
              <h2>忙しい現場でも続けられる、<br />業務の仕組みを。</h2>
              <ul><li>業務と情報の流れを整理する</li><li>今ある道具をつなぎ、手作業を減らす</li><li>必要に応じて小さな仕組みをつくる</li></ul>
              <div><Link href="/pricing#business">法人向け支援を見る <ArrowRight size={18} /></Link><TrackedLink href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer" eventName="contact_cta_click" eventParams={{ page_type: "home", position: "home_business", cta_target: "line_free_consultation" }}>LINEで30分無料相談を予約</TrackedLink></div>
            </article>
            <article id="personal" className="workshop-audience__item workshop-audience__item--personal" data-reveal>
              <p>個人の方</p>
              <h2>自分の仕事に合うAIを、<br />一緒に使える形へ。</h2>
              <ul><li>実際の仕事や生活で一緒に試す</li><li>迷ったところをその場で整理</li><li>繰り返し使える自分用の型へ</li></ul>
              <div><Link href="/pricing#personal">個人向け支援を見る <ArrowRight size={18} /></Link><TrackedLink href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer" eventName="contact_cta_click" eventParams={{ page_type: "home", position: "home_personal", cta_target: "line_free_consultation" }}>LINEで30分無料相談を予約</TrackedLink></div>
            </article>
          </section>

          <section className="workshop-concerns home-shell" aria-labelledby="concerns-title">
            <div data-reveal><p className="workshop-eyebrow">First conversation</p><h2 id="concerns-title">こんな状態から、<br />相談できます。</h2></div>
            <div className="workshop-concerns__list">
              {concerns.map(({ icon: Icon, text }) => <article key={text} data-reveal><Icon aria-hidden="true" /><p>{text}</p></article>)}
            </div>
          </section>

          <section id="support-options" className="workshop-options" aria-labelledby="options-title">
            <div className="home-shell">
              <header data-reveal>
                <div><p className="workshop-eyebrow">Choose what fits</p><h2 id="options-title">いきなりシステムを<br />入れるとは限りません。</h2></div>
                <p>話を聞いたうえで、今の会社に負担が少なく、効果が見込める方法から選びます。</p>
              </header>
              <div className="workshop-options__grid">
                {improvementOptions.map(({ icon: Icon, title, text, examples }, index) => (
                  <article key={title} data-reveal>
                    <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                    <h3>{title}</h3><p>{text}</p><small>{examples}</small>
                  </article>
                ))}
              </div>
              <p className="workshop-options__note" data-reveal>社内で作れるよう方法をお伝えすることも、必要な仕組みを私が構築することもできます。</p>
            </div>
          </section>

          <section id="process" className="workshop-process">
            <div className="home-shell workshop-process__grid">
              <div className="workshop-process__intro" data-reveal>
                <p className="workshop-eyebrow">How we work</p>
                <h2>話すところから、<br />使い続けられる形まで。</h2>
                <p>技術ありきではなく、今の仕事と人に合う方法を選びます。</p>
              </div>
              <div className="workshop-process__visual" data-reveal>
                <div className="workshop-process__start"><span>START</span><strong>まずは今の仕事を聞く</strong><small>まとまった依頼書は必要ありません</small></div>
                <ol className="workshop-process__journey">
                  {steps.map(({ number, title, text, icon: Icon }) => <li key={number}><div><Icon aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></li>)}
                </ol>
                <div className="workshop-process__goal"><Check aria-hidden="true" /><span>GOAL</span><strong>現場で続く仕組み</strong><small>作り方の支援・構築・運用ルール</small></div>
              </div>
            </div>
          </section>

          <section id="case-study" className="workshop-case workshop-results" aria-labelledby="case-title">
            <div className="home-shell">
              <header data-reveal>
                <div><p className="workshop-eyebrow">Practice & operation</p><span>実践・運用事例</span></div>
                <div>
                  <p>言うだけではなく、自分の仕事でも試しています。</p>
                  <h2 id="case-title">実際に運用している、<br />業務改善の事例。</h2>
                  <p>請求、会計、売上管理、資料作成など、日々の業務を整理し、仕組みを作って運用しています。</p>
                </div>
              </header>
              <div className="workshop-results__grid">
                {practiceResults.map((item) => (
                  <article key={item.label} data-reveal>
                    <p>{item.label}</p>
                    <div><span>{item.before}</span><ArrowRight aria-hidden="true" /><strong>{item.after}</strong></div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
              <div className="workshop-results__built" data-reveal>
                <div><p className="workshop-eyebrow">What I have built</p><h3>こんな仕組みも、<br />実際に作っています。</h3></div>
                <ul>{practiceTools.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
              </div>
              <div className="workshop-case__note" data-reveal><Check aria-hidden="true" /><p>Yazirusiおよび金城自身の事業・業務で実際に運用している事例です。数値は改善前の作業時間と現在の運用時間から算出しています。</p></div>
            </div>
          </section>

          <section className="workshop-practice" aria-labelledby="practice-title">
            <div className="home-shell workshop-practice__grid">
              <div data-reveal>
                <p className="workshop-eyebrow">Advanced practice</p>
                <h2 id="practice-title">高度な方法も、<br />必要なときだけ。</h2>
                <p>自社では、決済・請求・売上・案件・会議記録をAIと連携し、必要な情報を確認できる環境を運用しています。Slack・Google Chat・LINEなど、普段使うチャットツールから確認や指示ができる形も検討できます。</p>
              </div>
              <div className="workshop-practice__visual" data-reveal>
                <div><LayoutDashboard aria-hidden="true" /><span>決済・請求・売上</span></div>
                <div><Boxes aria-hidden="true" /><span>案件・会議・資料</span></div>
                <div className="workshop-practice__message"><MessagesSquare aria-hidden="true" /><span>Slack・Google Chat・LINEなど、普段使うチャットから確認・指示</span></div>
                <div className="workshop-practice__hub"><Bot aria-hidden="true" /><strong>必要に応じて<br />AIで連携</strong></div>
                <p>まずは整理や小さな改善から。外部からの操作や高度なAI連携は、権限と安全性を確認したうえで必要な場合に扱います。</p>
              </div>
            </div>
          </section>

          <section id="profile" className="workshop-profile">
            <div className="home-shell workshop-profile__grid">
              <div data-reveal>
                <p className="workshop-eyebrow">About me</p>
                <h2>教えるより、<br />一緒に考える。</h2>
                <div className="workshop-profile__person">
                  <figure>
                    <Image src="/images/headshot.webp" alt="Yazirusi代表 金城竜弥" fill sizes="112px" />
                  </figure>
                  <div><strong>金城竜弥</strong><span>Yazirusi代表</span></div>
                </div>
                <p>看護の現場だけでなく、オンライン診療の運営にも携わった経験から、現場の困りごとと、運営側が考える継続性の両方を見ながら整理します。</p>
              </div>
              <ol>{timeline.map((item) => <li key={`${item.year}-${item.title}`} data-reveal><time>{item.year}</time><div><h3>{item.title}</h3><p>{item.subtitle}</p>{item.href && item.linkLabel ? <a className="workshop-profile__timeline-link" href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <ArrowRight size={14} aria-hidden="true" /></a> : null}</div></li>)}</ol>
            </div>
          </section>

          <section id="projects" className="workshop-community">
            <div className="home-shell"><div data-reveal><p className="workshop-eyebrow">Community</p><h2>仕事の外でも、<br />地域とつながる。</h2></div><div className="workshop-community__links"><Link href="/radio">FM21 ラジオ <ArrowRight size={18} /></Link><a href="https://530-kodomo-shokudo.vercel.app/" target="_blank" rel="noreferrer">530子ども食堂 <ArrowRight size={18} /></a></div></div>
          </section>

          <section id="consultation-flow" className="workshop-consultation" aria-labelledby="consultation-title">
            <div className="home-shell">
              <div className="workshop-consultation__heading"><p className="workshop-eyebrow">Before we start</p><h2 id="consultation-title">30分で、困りごとと<br />次の一歩を整理。</h2><p>「どこから手をつけるか」「どこまで頼めるか」を一緒に確認する無料相談です。必要な支援や回数は、話してから考えましょう。</p></div>
              <ul className="workshop-consultation__reassurance" aria-label="無料相談について">
                <li><Check size={18} aria-hidden="true" />オンライン・30分</li>
                <li><Check size={18} aria-hidden="true" />相談料 0円</li>
                <li><Check size={18} aria-hidden="true" />自動で料金は発生しません</li>
              </ul>
              <ol className="workshop-consultation__steps" role="list">
                {consultationSteps.map(({ number, title, description, icon: Icon }) => (
                  <li key={number}>
                    <div className="workshop-consultation__step-marker"><span>STEP {number}</span><Icon size={26} aria-hidden="true" /></div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ol>
              <div className="workshop-consultation__action">
                <p>相談だけでも大丈夫です。<br />まずはLINEで「予約」とお送りください。</p>
                <TrackedLink className="workshop-consultation__cta" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer" eventName="contact_cta_click" eventParams={{ page_type: "home", position: "home_consultation_flow", cta_target: "line_free_consultation" }}>LINEで30分無料相談を予約 <ArrowRight size={18} aria-hidden="true" /></TrackedLink>
              </div>
            </div>
          </section>

          <section className="pricing-section pricing-faq" aria-labelledby="consultation-faq-title">
            <div className="home-shell pricing-faq__grid">
              <div data-reveal><p className="workshop-eyebrow">Before you book</p><h2 id="consultation-faq-title">相談前に、<br />よくある質問。</h2></div>
              <div className="pricing-faq__list" data-reveal>
                {consultationQuestions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
              </div>
            </div>
          </section>

          <section id="contact" className="workshop-contact">
            <div className="home-shell workshop-contact__inner" data-reveal>
              <MessagesSquare aria-hidden="true" />
              <div><p className="workshop-eyebrow">Contact</p><h2>まずは、30分の<br />無料相談から。</h2><p>公式LINEを友だち追加し、「予約」と送ってください。無料相談の日程をご案内します。相談だけでも大丈夫です。有料の支援は、内容と料金を確認してからお申し込みいただけます。</p></div>
              <div><TrackedLink className="workshop-contact__cta" href={siteContacts.lineOfficial} target="_blank" rel="noopener noreferrer" eventName="contact_cta_click" eventParams={{ page_type: "home", position: "home_footer", cta_target: "line_free_consultation" }}>LINEで30分無料相談を予約 <ArrowRight size={18} /></TrackedLink><a href={`mailto:${siteContacts.email}`}><Mail size={17} />{siteContacts.email}</a><span><MapPin size={17} />{siteContacts.location}</span></div>
            </div>
          </section>
        </main>
      </HomeMotion>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
