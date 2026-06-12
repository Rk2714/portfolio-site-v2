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
        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
            <Link href="/media" className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">
              <ChevronLeft size={14} />
              メディア一覧に戻る
            </Link>
          </div>
        </div>

        {/* Hero / Video */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Date & Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-[#94A3B8]">{post.date}</span>
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full ${
                  post.category === "radio"
                    ? "bg-[#2563EB]/10 text-[#2563EB]"
                    : post.category === "guest"
                    ? "bg-[#059669]/10 text-[#059669]"
                    : post.category === "appear"
                    ? "bg-[#D97706]/10 text-[#D97706]"
                    : "bg-[#64748B]/10 text-[#64748B]"
                }`}
              >
                <CategoryIcon size={11} />
                {post.categoryLabel}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight mb-8">
              {post.title}
            </h1>

            {/* YouTube Embed */}
            {post.youtubeUrl && (
              <div className="aspect-video bg-[#FFF5EB] mb-10 overflow-hidden">
                <iframe
                  src={post.youtubeUrl}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#FFF8F0] border border-gray-200 text-xs text-[#475569]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* View Counter */}
            <div className="mb-6">
              <ViewCounter postId={post.id} />
            </div>

            {/* Share */}
            <ShareButtons
              url={`https://portfolio-site-xi-eight-33.vercel.app/media/${post.id}`}
              title={post.title}
              postId={post.id}
              category={post.category}
            />
          </div>
        </section>

        {/* Theme */}
        {post.theme && (
          <section className="py-12 bg-[#FFF8F0] border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  post.category === "radio" ? "bg-[#2563EB]" : post.category === "guest" ? "bg-[#059669]" : post.category === "appear" ? "bg-[#D97706]" : "bg-[#0F172A]"
                }`}>
                  <Radio size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-1 tracking-wider">
                    この回のテーマ
                  </p>
                  <p className="text-base md:text-lg font-bold text-[#0F172A] leading-relaxed">
                    {post.theme}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Summary with Timestamps */}
        {post.summary.length > 0 && (
          <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Clock size={16} className="text-[#0F172A]" />
              <h2 className="text-lg font-bold text-[#0F172A]">
                内容要約
              </h2>
            </div>
            <div className="space-y-0 border-t border-gray-100">
              {post.summary.map((item, index) => (
                <a
                  key={index}
                  href={`${post.youtubeUrl?.replace("/embed/", "/watch?v=")}&t=${
                    parseInt(item.time.split(":")[0]!) * 60 +
                    parseInt(item.time.split(":")[1]!)
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 py-5 border-b border-gray-100 hover:bg-[#FFF8F0] transition-colors px-2 -mx-2"
                >
                  <span className="flex-shrink-0 w-14 text-xs font-mono text-[#2563EB] bg-[#EFF6FF] px-2 py-1 text-center mt-0.5">
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

        {/* Quotes */}
        {post.quotes.length > 0 && (
          <section className="py-16 bg-[#0F172A]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-2 mb-8">
                <Quote size={16} className="text-white" />
                <h2 className="text-lg font-bold text-white">
                  ピックアップ
                </h2>
              </div>
              <div className="space-y-6">
                {post.quotes.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-2 border-[#2563EB] pl-5 py-1"
                  >
                    <p className="text-base md:text-lg text-white leading-relaxed font-medium">
                      {quote}
                    </p>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Full Transcript */}
        {post.transcript && (
          <TranscriptSection
            transcript={post.transcript}
            postId={post.id}
            postTitle={post.title}
            category={post.category}
          />
        )}

        {/* Guests */}
        {post.guests && post.guests.length > 0 && (
          <section className="py-16 md:py-20 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-2 mb-10">
                <User size={16} className="text-[#0F172A]" />
                <h2 className="text-lg font-bold text-[#0F172A]">
                  ゲスト紹介
                </h2>
              </div>
              <div className="space-y-8">
                {post.guests.map((guest, index) => (
                  <div key={index} className="p-6 bg-[#FFF8F0] border border-gray-100">
                    {(() => {
                      const guestQuote = guest.quote || post.quotes[0];
                      const guestTakeaways = guest.takeaways?.length ? guest.takeaways : post.summary.slice(2, 5).map((item) => item.text);
                      return (
                        <>
                          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Guest Image */}
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFF5EB] flex-shrink-0 overflow-hidden">
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
                                <h3 className="text-base font-bold text-[#0F172A]">{guest.name}</h3>
                                <p className="text-xs text-[#64748B]">{guest.role}</p>
                              </div>

                              {guestQuote && (
                                <div className="mb-5 border-l-2 border-[#D97706] bg-white px-4 py-3">
                                  <p className="text-xs font-bold tracking-wider text-[#64748B] mb-2">ゲストのひとこと</p>
                                  <p className="text-sm font-medium leading-[1.8] text-[#0F172A]">{guestQuote}</p>
                                </div>
                              )}

                              <div className="grid gap-4 md:grid-cols-2 mb-5">
                                {guestTakeaways.length > 0 && (
                                  <div className="border border-[#E2E8F0] bg-white p-4">
                                    <p className="text-xs font-bold tracking-wider text-[#64748B] mb-3">この回でわかること</p>
                                    <div className="space-y-2">
                                      {guestTakeaways.map((item, takeawayIndex) => (
                                        <div key={takeawayIndex} className="flex items-start gap-2">
                                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D97706] flex-shrink-0" />
                                          <p className="text-sm leading-[1.7] text-[#334155]">{item}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {guest.recommendedFor && guest.recommendedFor.length > 0 && (
                                  <div className="border border-[#E2E8F0] bg-white p-4">
                                    <p className="text-xs font-bold tracking-wider text-[#64748B] mb-3">こんな方に届く回です</p>
                                    <div className="space-y-2">
                                      {guest.recommendedFor.map((item, recommendedIndex) => (
                                        <div key={recommendedIndex} className="flex items-start gap-2">
                                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
                                          <p className="text-sm leading-[1.7] text-[#334155]">{item}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              <p className="text-sm text-[#475569] leading-[1.8] mb-4">{guest.bio}</p>

                              {guest.links && guest.links.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {guest.links.map((link, i) => {
                                    const l = link.label;
                                    const isInsta = l.includes("Instagram");

                                    if (isInsta) {
                                      const username = link.url.match(/instagram\.com\/([^\/?#]+)/)?.[1] || "";
                                      return (
                                        <TrackedLink
                                          key={i}
                                          href={link.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          eventName="guest_link_click"
                                          eventParams={{
                                            page_type: "media_post",
                                            post_id: post.id,
                                            post_title: post.title,
                                            category: post.category,
                                            position: "guest_section",
                                            guest_name: guest.name,
                                            link_label: link.label,
                                          }}
                                          className="inline-flex items-center gap-2 px-4 py-3 bg-[#E1306C] text-white text-sm font-bold hover:bg-[#C62E5F] transition-all shadow-sm"
                                        >
                                          <Camera size={16} />
                                          @{username}
                                        </TrackedLink>
                                      );
                                    }

                                    return (
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
                                    );
                                  })}
                                </div>
                              )}

                      {/* Instagram post embed */}
                              {guest.instagramPost && (
                                <div className="mt-4">
                                  <InstagramEmbed url={guest.instagramPost} />
                                </div>
                              )}

                      {/* Highlights */}
                              {guest.highlights && guest.highlights.length > 0 && (
                                <div className="mt-4 p-4 bg-[#FFF8F0] border border-gray-200">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {guest.highlights.map((h, i) => (
                                      <div key={i} className="flex items-start gap-2">
                                        <span className="text-base flex-shrink-0">{h.emoji}</span>
                                        <span className="text-xs text-[#475569] leading-relaxed">{h.text}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hosts / Personalities */}
        {post.hostIds && post.hostIds.length > 0 && (
          <section className="py-16 md:py-20 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-2 mb-10">
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
                      className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 bg-[#FFF8F0] border border-gray-100"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FFF5EB] flex-shrink-0 overflow-hidden">
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
                          <h3 className="text-base font-bold text-[#0F172A]">{host.name}</h3>
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
                                className="inline-flex items-center gap-1 text-xs text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
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

        {/* Bottom CTA */}
        <section className="py-16 md:py-20 bg-[#0F172A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs text-[#64748B] mb-3 tracking-wider">
              CONTACT
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              ゲスト出演・取材依頼
            </h2>
            <p className="text-sm text-[#94A3B8] leading-[1.8] mb-8 max-w-xl mx-auto">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0F172A] text-sm font-bold hover:bg-[#FFF5EB] transition-colors"
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
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#334155] text-white text-sm font-bold hover:border-[#475569] transition-colors"
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
