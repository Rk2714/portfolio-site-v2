import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  MapPin,
  Mic2,
  Play,
  Radio,
  UsersRound,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrackedLink from "../components/TrackedLink";
import { getAllMediaFromCMS, getSafeYouTubeEmbedUrl, type MediaPost } from "../../lib/media-data";
import "./radio-refresh.css";

export const metadata: Metadata = {
  title: "FM21 いえろーかっし〜｜ラジオ番組",
  description:
    "FM21『いえろーかっし〜』の番組ページ。沖縄の医療、健康、働き方、地域活動を、現場で動くゲストと一緒に掘り下げます。放送回の要点やアーカイブも掲載しています。",
  alternates: { canonical: "/radio" },
  openGraph: {
    title: "FM21 いえろーかっし〜｜ラジオ番組",
    description:
      "沖縄の医療、健康、働き方、地域活動を、現場で動く人の言葉から届けます。",
    url: "/radio",
    type: "website",
    locale: "ja_JP",
  },
};

const themes = [
  {
    icon: HeartPulse,
    title: "医療・健康",
    text: "制度や肩書きだけでは見えない、現場で働く人の経験を聞きます。",
  },
  {
    icon: UsersRound,
    title: "働き方・キャリア",
    text: "転機、迷い、挑戦。ゲスト自身の言葉から、働くことを考えます。",
  },
  {
    icon: MapPin,
    title: "沖縄・地域",
    text: "沖縄で続く活動や、地域を少し良くする取り組みを紹介します。",
  },
];

function EpisodeActions({ post }: { post: MediaPost }) {
  const embedUrl = getSafeYouTubeEmbedUrl(post.youtubeUrl);
  const watchUrl = embedUrl
    ? `https://www.youtube.com/watch?v=${new URL(embedUrl).pathname.split("/").pop()}`
    : null;

  return (
    <div className="radio-episode-actions">
      {watchUrl && (
        <TrackedLink
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${post.title}をYouTubeで聴く（新しいタブ）`}
          eventName="media_card_click"
          eventParams={{ page_type: "media_list", post_id: post.id, category: post.category, position: "radio_listen" }}
          className="radio-button radio-button--primary"
        >
          <Play size={15} aria-hidden="true" />
          YouTubeで聴く
          <ArrowUpRight size={16} aria-hidden="true" />
        </TrackedLink>
      )}
      <TrackedLink
        href={`/media/${post.id}`}
        aria-label={`${post.title}の放送内容を読む`}
        eventName="media_card_click"
        eventParams={{ page_type: "media_list", post_id: post.id, category: post.category, position: "radio_read" }}
        className="radio-read-link"
      >
        <BookOpen size={16} aria-hidden="true" />
        放送内容を読む
        <ArrowRight size={16} aria-hidden="true" />
      </TrackedLink>
    </div>
  );
}

export default async function RadioPage() {
  const posts = await getAllMediaFromCMS();
  const episodes = posts.filter(
    (post) =>
      post.category === "radio" ||
      (post.category === "guest" && post.title.includes("いえろーかっし")),
  );
  const [latestEpisode, ...pastEpisodes] = episodes;

  return (
    <>
      <Navigation />
      <main className="radio-page radio-refresh">
        <section className="radio-hero">
          <div className="home-shell radio-hero__grid">
            <div className="radio-hero__copy">
              <p className="radio-eyebrow">
                <Radio aria-hidden="true" size={16} /> FM21 RADIO PROGRAM
              </p>
              <h1>
                イエロー
                <br />
                かっし〜
              </h1>
              <p className="radio-hero__catch">
                沖縄で動く人の、
                <br />
                そのままの声を届ける。
              </p>
              <p className="radio-hero__lead">
                医療、健康、働き方、地域活動。
                <br />
                現場で挑戦するゲストを迎え、経験や想いを一緒に掘り下げます。
              </p>
              <div className="radio-hero__actions">
                <a href={latestEpisode ? "#episodes" : "#archive"} className="radio-button radio-button--primary">
                  {latestEpisode ? "最新の放送回へ" : "放送一覧へ"} <ArrowRight aria-hidden="true" size={18} />
                </a>
                {pastEpisodes.length > 0 && <a href="#archive" className="radio-text-link">過去の放送から選ぶ</a>}
              </div>
            </div>

            <div className="radio-hero__visual" aria-label="番組の放送アーカイブ">
              {latestEpisode ? (
                <Image
                  src={latestEpisode.thumbnail}
                  alt={`${latestEpisode.title}のYouTubeサムネイル`}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 48vw"
                />
              ) : (
                <div className="radio-hero__fallback">
                  <Mic2 aria-hidden="true" />
                  <span>FM21</span>
                </div>
              )}
              <div className="radio-hero__onair">
                <span>放送アーカイブ</span>
                <strong>FM21</strong>
                {latestEpisode && <time dateTime={latestEpisode.date}>{latestEpisode.date}</time>}
              </div>
            </div>
          </div>
        </section>

        {latestEpisode && (
          <section id="episodes" className="radio-latest">
            <div className="home-shell">
              <div className="radio-section-heading">
                <div>
                  <p className="radio-eyebrow">LATEST EPISODE</p>
                  <h2>最新の放送回</h2>
                </div>
                <time dateTime={latestEpisode.date}>{latestEpisode.date}</time>
              </div>
              <article className="radio-featured" aria-labelledby="latest-episode-title">
                <Link href={`/media/${latestEpisode.id}`} className="radio-featured__image" aria-label={`${latestEpisode.title}の放送内容を読む`}>
                  <Image
                    src={latestEpisode.thumbnail}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 900px) 92vw, 54vw"
                  />
                </Link>
                <div className="radio-featured__copy">
                  <span>{latestEpisode.categoryLabel}</span>
                  <h3 id="latest-episode-title"><Link href={`/media/${latestEpisode.id}`}>{latestEpisode.title.replace("いえろーかっし～ FM21｜", "")}</Link></h3>
                  <p>{latestEpisode.excerpt}</p>
                  <EpisodeActions post={latestEpisode} />
                </div>
              </article>
            </div>
          </section>
        )}

        <section className="radio-intro">
          <div className="home-shell radio-intro__grid">
            <div>
              <p className="radio-eyebrow">ABOUT THE PROGRAM</p>
              <h2>専門家ではなく、<br />一人の人として話す時間。</h2>
            </div>
            <div>
              <p>
                すごい実績だけを聞く番組ではありません。今の仕事にたどり着くまでの迷いや、現場で感じている課題、これから実現したいことまで伺います。
              </p>
              <p>
                聞いた人が「こんな働き方もある」「自分も一歩動いてみよう」と思える、近い距離の対話を大切にしています。
              </p>
            </div>
          </div>
        </section>

        <section className="radio-themes">
          <div className="home-shell">
            <div className="radio-section-heading">
              <div>
                <p className="radio-eyebrow">TOPICS</p>
                <h2>番組で話していること</h2>
              </div>
            </div>
            <div className="radio-themes__grid">
              {themes.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="archive" className="radio-archive">
          <div className="home-shell">
            <div className="radio-section-heading">
              <div>
                <p className="radio-eyebrow">ARCHIVE</p>
                <h2>これまでの放送</h2>
                  <p className="radio-archive__note">気になるテーマから、聴く・読む。</p>
              </div>
              <Link href="/media">読みもの・出演情報も見る <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            {pastEpisodes.length > 0 ? (
              <div className="radio-archive__grid">
                {pastEpisodes.map((post) => (
                  <article key={post.id} className="radio-archive-card" aria-labelledby={`episode-${post.id}`}>
                    <Link className="radio-archive-card__image" href={`/media/${post.id}`} aria-label={`${post.title}の放送内容を読む`}>
                      <Image src={post.thumbnail} alt="" fill unoptimized sizes="(max-width: 600px) 90vw, (max-width: 1050px) 45vw, 30vw" />
                    </Link>
                    <div className="radio-archive-card__body">
                      <div className="radio-archive-card__meta"><time dateTime={post.date}>{post.date}</time><span>{post.categoryLabel}</span></div>
                      <h3 id={`episode-${post.id}`}><Link href={`/media/${post.id}`}>{post.title.replace("いえろーかっし～ FM21｜", "")}</Link></h3>
                      <p>{post.excerpt}</p>
                      <EpisodeActions post={post} />
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="radio-empty">過去の放送回は、順次こちらへ追加します。</p>
            )}
          </div>
        </section>

        <section className="radio-contact">
          <div className="home-shell radio-contact__inner">
            <div>
              <p className="radio-eyebrow">GUEST &amp; CONTACT</p>
              <h2>番組で聞いてみたい話が、あります。</h2>
              <p>
                沖縄で続けている活動、現場での工夫、これから挑戦したいこと。ゲスト出演や取材のご相談を受け付けています。
              </p>
            </div>
            <TrackedLink
              href="mailto:ryuyakinjo@yazirusi.com?subject=ラジオ出演・取材について"
              eventName="contact_cta_click"
              eventParams={{
                page_type: "media_list",
                page_path: "/radio",
                position: "radio_footer",
                cta_target: "email",
              }}
              className="radio-button radio-button--light"
            >
              出演・取材について連絡する
              <ArrowRight size={18} aria-hidden="true" />
            </TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
