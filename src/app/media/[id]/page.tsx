import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMediaByIdFromCMS, getAllMediaFromCMS, getAllMediaPosts } from "../../../lib/media-data";
import { hosts } from "../../../lib/site-data";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ShareButtons from "../../components/ShareButtons";
import InstagramEmbed from "../../components/InstagramEmbed";
import ViewCounter from "../../components/ViewCounter";
import LinkCard from "../../components/LinkCard";
import TrackedLink from "../../components/TrackedLink";
import TranscriptSection from "../../components/TranscriptSection";
import {
  Radio,
  Mic,
  Tag,
  ChevronLeft,
  Clock,
  Quote,
  ExternalLink,
  User,
  Mail,
  Globe,
  Camera,
  TvMinimalPlay,
  Link2,
  FileText,
  Target,
  ArrowRight,
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

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
    alternates: {
      canonical: canonicalUrl,
    },
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

export default async function MediaPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getMediaByIdFromCMS(id);
  if (!post) notFound();

  const CategoryIcon =
    post.category === "radio" ? Radio : post.category === "guest" ? Mic : post.category === "appear" ? ExternalLink : Tag;

  return (
    <>
      <Navigation />
      <main className="bg-white">

        {/* ============================== */}
        {/* RADIO DETAIL Section (Hero)     */}
        {/* ============================== */}
        <section className="bg-white pt-[88px]">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            {/* Breadcrumb */}
            <Link
              href="/media"
              className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors mb-8"
            >
              <ChevronLeft size={14} />
              メディア一覧に戻る
            </Link>

            {/* RADIO DETAIL Header */}
            <div className="flex items-center gap-1 mb-2">
              <span className="pencil-eyebrow">
                {post.category === "radio" ? "Radio" : post.categoryLabel} / {post.date}
              </span>
            </div>

            <h1 className="text-[30px] font-black leading-[1.12] text-[#0F172A] mb-4">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-[14px] leading-[1.68] text-[#475569] max-w-2xl mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Detail Hero Grid */}
            <div className="flex flex-col md:flex-row gap-7 pb-12">
              {/* Left: Detail Copy */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Category Pill */}
                <span className="inline-flex items-center gap-2 rounded-[4px] border border-[#0F172A] bg-white px-3 py-2 text-xs font-bold text-[#0F172A] w-fit">
                  <CategoryIcon size={12} />
                  {post.categoryLabel}
                </span>

                {/* Detail Meta */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-[4px] border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#64748B]">
                    {post.date}
                  </span>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[4px] border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-[11px] font-bold text-[#64748B]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Theme / Description */}
                {post.theme && (
                  <p className="text-[14px] leading-[1.7] text-[#475569]">
                    {post.theme}
                  </p>
                )}

                {/* View Counter + Share */}
                <div className="mt-2">
                  <ViewCounter postId={post.id} />
                </div>
                <ShareButtons
                  url={`https://portfolio-site-xi-eight-33.vercel.app/media/${post.id}`}
                  title={post.title}
                  postId={post.id}
                  category={post.category}
                />
              </div>

              {/* Right: YouTube Player */}
              {post.youtubeUrl && (
                <div className="w-full md:w-[340px] flex-shrink-0">
                  <div className="aspect-video md:aspect-[340/200] bg-[#F8FAFC] overflow-hidden rounded-[4px] border border-[#E2E8F0]">
                    <iframe
                      src={post.youtubeUrl}
                      title={post.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* 要点 Section + Point Grid       */}
        {/* ============================== */}
        {post.guests && post.guests.length > 0 && post.guests[0].takeaways && post.guests[0].takeaways.length > 0 && (
          <section className="bg-white">
            <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
              {/* 要点 Header */}
              <div className="mb-6">
                <p className="pencil-eyebrow mb-2">POINTS</p>
                <h2 className="text-[34px] font-black leading-[1.12] text-[#0F172A]">
                  この回のポイント
                </h2>
              </div>

              {/* Point Grid */}
              <div className="grid md:grid-cols-2 gap-[18px]">
                {post.guests[0].takeaways.slice(0, 4).map((item, i) => {
                  const icons = [User, Quote, Target, Radio];
                  const Icon = icons[i] || FileText;
                  return (
                    <div
                      key={i}
                      className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3"
                    >
                      <Icon size={18} className="text-[#0F172A]" />
                      <p className="text-[15px] leading-[1.7] text-[#475569]">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* ゲストの声 Section (Quotes)     */}
        {/* ============================== */}
        {post.quotes.length > 0 && (
          <section className="bg-white">
            <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
              <div className="mb-6">
                <p className="pencil-eyebrow mb-2">GUEST VOICE</p>
                <h2 className="text-[28px] font-black leading-[1.12] text-[#0F172A]">
                  ゲストの声
                </h2>
                <p className="text-[15px] leading-[1.7] text-[#475569] mt-2">
                  この回で印象に残る言葉を、短く引用して残しておく部分です。
                </p>
              </div>

              <div className="space-y-5">
                {post.quotes.slice(0, 4).map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-2 border-[#0F172A] pl-5 py-1"
                  >
                    <p className="text-[15px] leading-[1.75] text-[#475569] font-medium">
                      {quote}
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* 公開導線 Grid (YouTube + Instagram + SNS) */}
        {/* ============================== */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            <div className="mb-6">
              <p className="pencil-eyebrow mb-2">LINKS</p>
              <h2 className="text-[32px] font-black leading-[1.12] text-[#0F172A]">
                公開導線
              </h2>
              <p className="text-[15px] leading-[1.65] text-[#475569] mt-2">
                この回の動画・SNS投稿・関連リンクをまとめています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-[18px]">
              {/* YouTubeサムネ */}
              {post.youtubeUrl && (
                <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3">
                  <TvMinimalPlay size={20} className="text-[#0F172A]" />
                  <p className="text-[18px] font-black text-[#0F172A]">YouTube</p>
                  <p className="text-[14px] leading-[1.7] text-[#475569] flex-1">
                    ラジオ本編はYouTubeで視聴できます。
                  </p>
                  <a
                    href={post.youtubeUrl.replace("/embed/", "/watch?v=")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[4px] border border-[#E2E8F0] bg-white px-3 py-2.5 text-xs font-bold text-[#0F172A] hover:bg-[#FFF8F0] transition-colors mt-auto"
                  >
                    <ExternalLink size={12} />
                    聴く
                  </a>
                </div>
              )}

              {/* Instagram埋め込み */}
              {post.guests &&
                post.guests.length > 0 &&
                post.guests[0].instagramPost && (
                  <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3 overflow-hidden">
                    <Camera size={20} className="text-[#0F172A]" />
                    <p className="text-[18px] font-black text-[#0F172A]">Instagram</p>
                    <p className="text-[14px] leading-[1.7] text-[#475569]">
                      ゲストの投稿をInstagramで見る。
                    </p>
                    <div className="w-full">
                      <InstagramEmbed url={post.guests[0].instagramPost} />
                    </div>
                  </div>
                )}

              {/* SNSリンク */}
              {post.guests &&
                post.guests.length > 0 &&
                post.guests[0].links &&
                post.guests[0].links.length > 0 && (
                  <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3">
                    <Link2 size={20} className="text-[#0F172A]" />
                    <p className="text-[18px] font-black text-[#0F172A]">
                      リンク
                    </p>
                    <p className="text-[14px] leading-[1.7] text-[#475569]">
                      ゲストのSNS・関連サイト。
                    </p>
                    <div className="flex flex-col gap-2 mt-auto">
                      {post.guests[0].links.slice(0, 3).map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-[4px] border border-[#E2E8F0] bg-white px-3 py-2.5 text-xs font-bold text-[#0F172A] hover:bg-[#FFF8F0] transition-colors"
                        >
                          <ExternalLink size={12} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* 公開メモ Grid (要約 + 対象 + 外部導線) */}
        {/* ============================== */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            <div className="mb-6">
              <p className="pencil-eyebrow mb-2">MEMO</p>
              <h2 className="text-[34px] font-black leading-[1.12] text-[#0F172A]">
                公開メモ
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#475569] mt-2">
                この回の要約・対象・導線をひとまとめに。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-[18px]">
              {/* 要約 */}
              <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3">
                <FileText size={18} className="text-[#0F172A]" />
                <p className="text-[18px] font-black text-[#0F172A]">要約</p>
                <p className="text-[14px] leading-[1.7] text-[#475569]">
                  {post.excerpt || post.theme || "この回の詳細を要約しています。"}
                </p>
              </div>

              {/* 対象 */}
              <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3">
                <Target size={18} className="text-[#0F172A]" />
                <p className="text-[18px] font-black text-[#0F172A]">対象</p>
                <ul className="space-y-1.5">
                  {post.guests &&
                  post.guests.length > 0 &&
                  post.guests[0].recommendedFor &&
                  post.guests[0].recommendedFor.length > 0
                    ? post.guests[0].recommendedFor.slice(0, 5).map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[14px] leading-[1.7] text-[#475569]"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0F172A] flex-shrink-0" />
                          {item}
                        </li>
                      ))
                    : post.tags.slice(0, 5).map((tag, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[14px] leading-[1.7] text-[#475569]"
                        >
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0F172A] flex-shrink-0" />
                          #{tag}
                        </li>
                      ))}
                </ul>
              </div>

              {/* 外部導線 */}
              <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3">
                <Globe size={18} className="text-[#0F172A]" />
                <p className="text-[18px] font-black text-[#0F172A]">外部導線</p>
                <p className="text-[14px] leading-[1.7] text-[#475569] flex-1">
                  この回に関するお問い合わせ・ゲスト出演依頼はこちら。
                </p>
                <TrackedLink
                  href="mailto:ryuyakinjo@gmail.com"
                  eventName="contact_cta_click"
                  eventParams={{
                    page_type: "media_post",
                    post_id: post.id,
                    post_title: post.title,
                    category: post.category,
                    position: "memo_section",
                    cta_target: "email",
                  }}
                  className="inline-flex items-center gap-2 rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-3 py-2.5 text-xs font-bold text-white hover:bg-[#1E293B] transition-colors mt-auto"
                >
                  <Mail size={12} />
                  メールで連絡
                </TrackedLink>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== */}
        {/* Summary with Timestamps          */}
        {/* ============================== */}
        {post.summary.length > 0 && (
          <section className="bg-white">
            <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-8">
                <Clock size={16} className="text-[#0F172A]" />
                <h2 className="text-lg font-bold text-[#0F172A]">
                  内容要約
                </h2>
              </div>
              <div className="space-y-0">
                {post.summary.map((item, index) => (
                  <a
                    key={index}
                    href={`${post.youtubeUrl?.replace("/embed/", "/watch?v=")}&t=${
                      parseInt(item.time.split(":")[0]!) * 60 +
                      parseInt(item.time.split(":")[1]!)
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 py-4 border-b border-[#E2E8F0] hover:bg-[#FFF8F0] transition-colors px-2 -mx-2"
                  >
                    <span className="flex-shrink-0 w-14 text-xs font-mono text-[#0F172A] bg-[#F8FAFC] border border-[#E2E8F0] px-2 py-1 text-center mt-0.5">
                      {item.time}
                    </span>
                    <span className="text-sm text-[#475569] leading-relaxed group-hover:text-[#0F172A] transition-colors">
                      {item.text}
                    </span>
                    <ExternalLink
                      size={12}
                      className="flex-shrink-0 text-[#CBD5E1] group-hover:text-[#94A3B8] mt-1 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* Full Transcript                  */}
        {/* ============================== */}
        {post.transcript && (
          <TranscriptSection
            transcript={post.transcript}
            postId={post.id}
            postTitle={post.title}
            category={post.category}
          />
        )}

        {/* ============================== */}
        {/* Guest Section (Name / Bio)       */}
        {/* ============================== */}
        {post.guests && post.guests.length > 0 && (
          <section className="bg-white">
            <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-8">
                <User size={16} className="text-[#0F172A]" />
                <h2 className="text-lg font-bold text-[#0F172A]">
                  ゲスト
                </h2>
              </div>
              <div className="space-y-8">
                {post.guests.map((guest, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 p-[22px] rounded-[4px] border border-[#E2E8F0] bg-white">
                    {/* Guest Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F8FAFC] flex-shrink-0 overflow-hidden rounded-[4px] border border-[#E2E8F0]">
                      {guest.image ? (
                        <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                          <User size={32} />
                        </div>
                      )}
                    </div>

                    {/* Guest Info */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-base font-black text-[#0F172A]">{guest.name}</h3>
                        <p className="text-xs text-[#64748B]">{guest.role}</p>
                      </div>

                      {guest.bio && (
                        <p className="text-sm text-[#475569] leading-[1.8] mb-4">{guest.bio}</p>
                      )}

                      {guest.links && guest.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {guest.links.map((link, i) => (
                            <LinkCard
                              key={i}
                              label={link.label}
                              url={link.url}
                              eventName="guest_link_click"
                              eventParams={{
                                page_type: "media_post",
                                post_id: post.id,
                                post_title: post.title,
                                category: post.category,
                                position: "guest_section",
                                guest_name: guest.name,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* Hosts / Personalities            */}
        {/* ============================== */}
        {post.hostIds && post.hostIds.length > 0 && (
          <section className="bg-white">
            <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-8">
                <Mic size={16} className="text-[#0F172A]" />
                <h2 className="text-lg font-bold text-[#0F172A]">
                  パーソナリティ
                </h2>
              </div>
              <div className="space-y-8">
                {post.hostIds.map((id) => {
                  const host = hosts[id];
                  if (!host) return null;
                  return (
                    <div
                      key={id}
                      className="flex flex-col md:flex-row gap-6 md:gap-8 p-[22px] rounded-[4px] border border-[#E2E8F0] bg-white"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F8FAFC] flex-shrink-0 overflow-hidden rounded-[4px] border border-[#E2E8F0]">
                        {host.image ? (
                          <img src={host.image} alt={host.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                            <User size={32} />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <h3 className="text-base font-black text-[#0F172A]">{host.name}</h3>
                          <p className="text-xs text-[#64748B]">{host.role}</p>
                        </div>
                        {host.links && host.links.length > 0 && (
                          <div className="flex flex-wrap gap-3">
                            {host.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-[#0F172A] hover:opacity-70 transition-colors"
                              >
                                <Camera size={12} />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ============================== */}
        {/* Bottom CTA                       */}
        {/* ============================== */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto text-center border-b border-[#E2E8F0]">
            <p className="pencil-eyebrow mb-3">CONTACT</p>
            <h2 className="text-xl md:text-2xl font-black text-[#0F172A] mb-4">
              ゲスト出演・取材依頼
            </h2>
            <p className="text-sm text-[#475569] leading-[1.8] mb-8 max-w-xl mx-auto">
              ラジオへのゲスト出演や、取材・対談のご依頼はメールまたはInstagramのDMで受け付けています。
              お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink
                href="mailto:ryuyakinjo@gmail.com"
                eventName="contact_cta_click"
                eventParams={{
                  page_type: "media_post",
                  post_id: post.id,
                  post_title: post.title,
                  category: post.category,
                  position: "media_post_footer",
                  cta_target: "email",
                }}
                className="pencil-button"
              >
                <Mail size={14} />
                メールで連絡する
              </TrackedLink>
              <TrackedLink
                href="https://instagram.com/ryuyakinjo"
                target="_blank"
                rel="noopener noreferrer"
                eventName="contact_cta_click"
                eventParams={{
                  page_type: "media_post",
                  post_id: post.id,
                  post_title: post.title,
                  category: post.category,
                  position: "media_post_footer",
                  cta_target: "instagram",
                }}
                className="pencil-button pencil-button-secondary"
              >
                <Globe size={14} />
                Instagram DM
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
