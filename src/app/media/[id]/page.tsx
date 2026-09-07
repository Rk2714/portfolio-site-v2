import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  Clock3,
  ExternalLink,
  Globe,
  Mail,
  Mic2,
  Play,
  Share2,
  UserRound,
} from "lucide-react";
import {
  getMediaByIdFromCMS,
  getAllMediaFromCMS,
  getAllMediaPosts,
  getSafeYouTubeEmbedUrl,
  type MediaPost,
} from "../../../lib/media-data";
import { hosts } from "../../../lib/site-data";
import { SITE_URL } from "../../../lib/site-config";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ShareButtons from "../../components/ShareButtons";
import ViewCounter from "../../components/ViewCounter";
import TrackedLink from "../../components/TrackedLink";
import TranscriptSection from "../../components/TranscriptSection";

interface Props {
  params: Promise<{ id: string }>;
}

type Guest = NonNullable<MediaPost["guests"]>[number];

const GENERIC_SUMMARY_WORDS = /オープニング|パーソナリティ|ありがとうございました|前半|後半|曲「/;

export async function generateStaticParams() {
  const cmsPosts = await getAllMediaFromCMS();
  const staticPosts = getAllMediaPosts();
  const allPosts = cmsPosts.length > 0 ? cmsPosts : staticPosts;
  return allPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getMediaByIdFromCMS(id);
  if (!post) return { title: "Not Found" };

  const canonicalUrl = `/media/${post.id}`;
  const socialImage = post.thumbnail || "/images/okinawa-sea.jpg";

  return {
    title: `${post.title}｜メディア活動・金城竜弥`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "金城竜弥",
      locale: "ja_JP",
      type: "article",
      publishedTime: `${post.date}T00:00:00+09:00`,
      authors: ["金城竜弥"],
      images: [{ url: socialImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [socialImage],
    },
  };
}

function getWatchUrl(embedUrl: string | null, time?: string): string | null {
  if (!embedUrl) return null;
  const videoId = embedUrl.match(/\/embed\/([^?]+)/)?.[1];
  if (!videoId) return null;
  if (!time) return `https://www.youtube.com/watch?v=${videoId}`;

  const [minutes, seconds] = time.split(":").map(Number);
  if (!Number.isFinite(minutes) || !Number.isFinite(seconds)) return null;
  return `https://www.youtube.com/watch?v=${videoId}&t=${minutes * 60 + seconds}`;
}

function getHighlights(post: MediaPost, guest?: Guest) {
  const preferred = guest?.highlightTimes
    ?.map((time) => post.summary.find((item) => item.time === time))
    .filter((item): item is MediaPost["summary"][number] => Boolean(item));

  if (preferred && preferred.length > 0) return preferred.slice(0, 3);
  return post.summary.filter((item) => !GENERIC_SUMMARY_WORDS.test(item.text)).slice(0, 3);
}

function splitHighlightText(text: string) {
  const [titlePart, ...detailParts] = text.split("——");
  const title = titlePart.replace(/^[^：:]+[：:]\s*/, "").trim();
  return {
    title: title || text,
    detail: detailParts.join("——").trim(),
  };
}

export default async function MediaPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getMediaByIdFromCMS(id);
  if (!post) notFound();

  const guest = post.guests?.[0];
  const guestName = guest?.name || (post.category === "radio" ? "FM21" : post.categoryLabel);
  const guestRole = guest?.role || post.categoryLabel;
  const guestQuote = guest?.quote || post.quotes[0] || "";
  const guestImage = guest?.image || post.thumbnail;
  const youtubeEmbedUrl = getSafeYouTubeEmbedUrl(post.youtubeUrl);
  const watchUrl = getWatchUrl(youtubeEmbedUrl);
  const highlights = getHighlights(post, guest);
  const recommendedFor = guest?.recommendedFor?.slice(0, 4) || post.tags.slice(0, 4);
  const guestLinks = guest?.links || [];

  return (
    <>
      <Navigation />
      <main className="guest-feature-page">
        <section className="guest-feature-hero">
          <div className="guest-feature-shell guest-feature-hero__grid">
            <div className="guest-feature-hero__copy">
              <Link href="/media" className="guest-feature-back">
                <ChevronLeft size={14} aria-hidden="true" />
                メディア一覧へ
              </Link>

              <div className="guest-feature-meta">
                <span>GUEST / {post.categoryLabel}</span>
                <span>{post.date}</span>
              </div>

              <h1>{guestName}</h1>
              <p className="guest-feature-role">{guestRole}</p>

              {guestQuote && <blockquote className="guest-feature-hero__quote">{guestQuote}</blockquote>}

              <div className="guest-feature-hero__actions">
                {watchUrl && (
                  <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="guest-feature-button">
                    <Play size={15} fill="currentColor" aria-hidden="true" />
                    この回を聴く
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}
                <span className="guest-feature-hero__note">FM21『いえろーかっし～』</span>
              </div>

              <div className="guest-feature-hero__share">
                <ViewCounter postId={post.id} />
                <ShareButtons
                  url={`${SITE_URL}/media/${post.id}`}
                  title={post.title}
                  postId={post.id}
                  category={post.category}
                />
              </div>
            </div>

            <figure className="guest-feature-hero__media">
              {guestImage ? (
                <img src={guestImage} alt={`${guestName}の出演写真`} />
              ) : (
                <div className="guest-feature-image-fallback" aria-label="写真は準備中です">
                  <Mic2 size={42} aria-hidden="true" />
                  <span>PHOTO / SOON</span>
                </div>
              )}
              <figcaption>
                <span>FM21 / RADIO GUEST</span>
                <span>{post.date}</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="guest-feature-info" aria-label="この回の概要">
          <div className="guest-feature-shell guest-feature-info__grid">
            <div>
              <span>EPISODE</span>
              <strong>{post.date}</strong>
            </div>
            <div>
              <span>CHAPTERS</span>
              <strong>{highlights.length ? `${highlights.length}つ` : "動画で聴く"}</strong>
            </div>
            <div>
              <span>GUEST</span>
              <strong>{guestName}</strong>
            </div>
            <div>
              <span>TOPIC</span>
              <strong>{guestRole}</strong>
            </div>
          </div>
        </section>

        <section id="highlights" className="guest-feature-section guest-feature-story">
          <div className="guest-feature-shell guest-feature-story__grid">
            <div className="guest-feature-section-intro">
              <p className="guest-feature-eyebrow">HIGHLIGHTS / VIDEO CHAPTERS</p>
              <h2>
                ゲストの話を
                <br />
                3つの場面で。
              </h2>
              <p>
                気になる見出しを選ぶと、動画のその場面へ。まずは声を聴いて、もっと知りたくなったら活動先へ進めます。
              </p>
              <span className="guest-feature-marker">各項目から動画の該当箇所へ</span>
            </div>

            <div className="guest-feature-chapters">
              {highlights.length > 0 ? (
                highlights.map((item, index) => {
                  const itemUrl = getWatchUrl(youtubeEmbedUrl, item.time);
                  const copy = splitHighlightText(item.text);
                  const content = (
                    <>
                      <span className="guest-feature-chapter-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="guest-feature-chapter-copy">
                        <small>{item.time} / VIDEO CHAPTER</small>
                        <strong>{copy.title}</strong>
                        {copy.detail && <span>{copy.detail}</span>}
                      </span>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </>
                  );

                  return itemUrl ? (
                    <a key={`${item.time}-${index}`} href={itemUrl} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <div key={`${item.time}-${index}`} className="guest-feature-chapter guest-feature-chapter--static">
                      {content}
                    </div>
                  );
                })
              ) : (
                <p className="guest-feature-empty">この回の見どころは動画でご覧いただけます。</p>
              )}
            </div>
          </div>
        </section>

        {guestQuote && (
          <section className="guest-feature-quote">
            <div className="guest-feature-shell guest-feature-quote__grid">
              <div className="guest-feature-quote__main">
                <span className="guest-feature-quote-mark">“</span>
                <blockquote>{guestQuote}</blockquote>
              </div>
              <aside className="guest-feature-listen">
                <p className="guest-feature-eyebrow">LISTEN TO THE EPISODE</p>
                <p>{post.excerpt || post.theme || "ゲストの言葉を、そのままの声で。"}</p>
                {watchUrl && (
                  <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="guest-feature-button guest-feature-button--yellow">
                    YouTubeで聴く
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </aside>
            </div>
          </section>
        )}

        {guest && (
          <section id="guest-profile" className="guest-feature-section guest-feature-profile">
            <div className="guest-feature-shell guest-feature-profile__grid">
              <div className="guest-feature-profile__media">
                {guestImage ? <img src={guestImage} alt={`${guestName}のプロフィール写真`} /> : <UserRound size={42} aria-hidden="true" />}
              </div>
              <div className="guest-feature-profile__copy">
                <p className="guest-feature-eyebrow">ABOUT THE GUEST</p>
                <h2>{guestName}</h2>
                <p className="guest-feature-role">{guestRole}</p>
                {guest.bio && <p className="guest-feature-profile__bio">{guest.bio}</p>}

                {recommendedFor.length > 0 && (
                  <ul className="guest-feature-profile__tags">
                    {recommendedFor.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}

                {guestLinks.length > 0 && (
                  <div className="guest-feature-links">
                    {guestLinks.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label.toLowerCase().includes("instagram") ? <Share2 size={16} aria-hidden="true" /> : <Globe size={16} aria-hidden="true" />}
                        {link.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {post.summary.length > 0 && (
          <section className="guest-feature-details">
            <div className="guest-feature-shell">
              <details>
                <summary>
                  <span><Clock3 size={16} aria-hidden="true" />時間付きの内容一覧</span>
                  <span>詳しく見る <ArrowUpRight size={14} aria-hidden="true" /></span>
                </summary>
                <div className="guest-feature-details__list">
                  {post.summary.map((item) => {
                    const itemUrl = getWatchUrl(youtubeEmbedUrl, item.time);
                    const content = (
                      <>
                        <time>{item.time}</time>
                        <span>{item.text}</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </>
                    );
                    return itemUrl ? (
                      <a key={`${item.time}-${item.text}`} href={itemUrl} target="_blank" rel="noopener noreferrer">{content}</a>
                    ) : (
                      <div key={`${item.time}-${item.text}`}>{content}</div>
                    );
                  })}
                </div>
              </details>
            </div>
          </section>
        )}

        {post.transcript && (
          <TranscriptSection
            transcript={post.transcript}
            postId={post.id}
            postTitle={post.title}
            category={post.category}
          />
        )}

        {post.hostIds && post.hostIds.length > 0 && (
          <section className="guest-feature-hosts">
            <div className="guest-feature-shell">
              <p className="guest-feature-eyebrow">HOSTS</p>
              <div className="guest-feature-hosts__grid">
                {post.hostIds.map((hostId) => {
                  const host = hosts[hostId];
                  if (!host) return null;
                  return (
                    <div key={hostId}>
                      <Mic2 size={18} aria-hidden="true" />
                      <strong>{host.name}</strong>
                      <span>{host.role}</span>
                      {host.links?.map((link) => (
                        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                          <Camera size={13} aria-hidden="true" />{link.label}
                        </a>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <section className="guest-feature-contact">
          <div className="guest-feature-shell guest-feature-contact__inner">
            <div>
              <p className="guest-feature-eyebrow">CONTACT</p>
              <h2>出演・取材のご相談は、まず一度。</h2>
              <p>ラジオへのゲスト出演や取材・対談のご依頼は、メールまたはInstagramのDMで受け付けています。</p>
            </div>
            <div className="guest-feature-contact__actions">
              <TrackedLink
                href="mailto:ryuyakinjo@yazirusi.com"
                eventName="contact_cta_click"
                eventParams={{ page_type: "media_post", post_id: post.id, post_title: post.title, category: post.category, position: "media_post_footer", cta_target: "email" }}
                className="guest-feature-button"
              >
                <Mail size={15} aria-hidden="true" />メールで連絡する<ArrowUpRight size={15} aria-hidden="true" />
              </TrackedLink>
              <TrackedLink
                href="https://instagram.com/ryuyakinjo"
                target="_blank"
                rel="noopener noreferrer"
                eventName="contact_cta_click"
                eventParams={{ page_type: "media_post", post_id: post.id, post_title: post.title, category: post.category, position: "media_post_footer", cta_target: "instagram" }}
                className="guest-feature-text-link"
              >
                <Share2 size={15} aria-hidden="true" />Instagram DM<ArrowUpRight size={15} aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
