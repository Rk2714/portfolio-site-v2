import { notFound } from "next/navigation";
import { getMediaByIdFromCMS, getAllMediaFromCMS, getAllMediaPosts } from "../../../lib/media-data";
import { hosts } from "../../../lib/site-data";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ShareButtons from "../../components/ShareButtons";
import {
  Radio,
  Mic,
  Tag,
  ChevronLeft,
  Clock,
  Quote,
  FileText,
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

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = await getMediaByIdFromCMS(id);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title}｜メディア活動・金城竜弥`,
    description: post.excerpt,
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
            <a
              href="/media"
              className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              <ChevronLeft size={14} />
              メディア一覧に戻る
            </a>
          </div>
        </div>

        {/* Hero / Video */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Date & Category */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-[#94A3B8]">{post.date}</span>
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium ${
                  post.category === "radio"
                    ? "text-[#2563EB]"
                    : post.category === "guest"
                    ? "text-[#059669]"
                    : post.category === "appear"
                    ? "text-[#D97706]"
                    : "text-[#64748B]"
                }`}
              >
                <CategoryIcon size={12} />
                {post.categoryLabel}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight mb-8">
              {post.title}
            </h1>

            {/* YouTube Embed */}
            {post.youtubeUrl && (
              <div className="aspect-video bg-[#F1F5F9] mb-10 overflow-hidden">
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
                    className="px-3 py-1 bg-[#F8FAFC] border border-gray-200 text-xs text-[#475569]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share */}
            <ShareButtons url={`https://portfolio-site-xi-eight-33.vercel.app/media/${post.id}`} title={post.title} />
          </div>
        </section>

        {/* Theme */}
        {post.theme && (
          <section className="py-12 bg-[#FAFAFA] border-y border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  className="group flex items-start gap-4 py-5 border-b border-gray-100 hover:bg-[#FAFAFA] transition-colors px-2 -mx-2"
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
          <section className="py-16 md:py-20 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#0F172A]" />
                    <h2 className="text-lg font-bold text-[#0F172A]">
                      フル文字起こし
                    </h2>
                  </div>
                  <span className="text-xs text-[#64748B] group-open:hidden">
                    開く
                  </span>
                  <span className="text-xs text-[#64748B] hidden group-open:block">
                    閉じる
                  </span>
                </summary>
                <div className="pt-6 pb-2">
                  <div className="bg-white border border-gray-200 p-6 md:p-8">
                    <p className="text-sm text-[#475569] leading-[1.9] whitespace-pre-wrap">
                      {post.transcript}
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>
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
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 bg-[#FAFAFA] border border-gray-100"
                  >
                    {/* Guest Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F1F5F9] flex-shrink-0 overflow-hidden">
                      {guest.image ? (
                        <img
                          src={guest.image}
                          alt={guest.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                          <User size={32} />
                        </div>
                      )}
                    </div>

                    {/* Guest Info */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-base font-bold text-[#0F172A]">
                          {guest.name}
                        </h3>
                        <p className="text-xs text-[#64748B]">{guest.role}</p>
                      </div>
                      <p className="text-sm text-[#475569] leading-[1.8] mb-4">
                        {guest.bio}
                      </p>
                      {guest.links && guest.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {guest.links.map((link, i) => {
                            let linkIcon = null;
                            const l = link.label;
                            const isInsta = l.includes("Instagram");
                            const isWeb = l.includes("Web") || l.includes("サイト") || l.includes("研修") || l.includes("検索");
                            const isSNS = l.includes("X") || l.includes("Twitter");

                            if (isInsta) linkIcon = <Camera size={12} />;
                            else if (isSNS) linkIcon = <span className="font-bold text-[10px]">𝕏</span>;
                            else linkIcon = <Globe size={12} />;

                            return (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                              >
                                {linkIcon}
                                {link.label}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
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
                      className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 bg-[#FAFAFA] border border-gray-100"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F1F5F9] flex-shrink-0 overflow-hidden">
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
              <a
                href="mailto:ryuyakinjo@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0F172A] text-sm font-bold hover:bg-[#F1F5F9] transition-colors"
              >
                <Mail size={14} />
                メールで連絡する
              </a>
              <a
                href="https://instagram.com/ryuyakinjo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#334155] text-white text-sm font-bold hover:border-[#475569] transition-colors"
              >
                <Globe size={14} />
                Instagram DM
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
