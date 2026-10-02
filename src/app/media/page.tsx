import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrackedLink from "../components/TrackedLink";
import MediaCategoryFilter from "./MediaCategoryFilter";
import MediaCard from "./MediaCard";
import { ExternalLink } from "lucide-react";
import { getAllMediaFromCMS } from "../../lib/media-data";
import { siteContacts } from "../../lib/site-data";
import {
  getMediaCategoryOption,
  mediaCategoryOptions,
  normalizeMediaCategory,
  type MediaCategoryFilter as MediaCategoryKey,
} from "../../lib/media-categories";

interface Props {
  searchParams: Promise<{ category?: string | string[] }>;
}

function getFilterHref(category: MediaCategoryKey) {
  return category === "all" ? "/media" : `/media?category=${category}`;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category } = await searchParams;
  const activeCategory = normalizeMediaCategory(category);
  const option = getMediaCategoryOption(activeCategory);
  const posts = await getAllMediaFromCMS();
  const socialImage =
    activeCategory === "all"
      ? "/images/okinawa-sea.jpg"
      : posts.find((post) => post.category === activeCategory)?.thumbnail || "/images/okinawa-sea.jpg";
  const title =
    activeCategory === "all"
      ? "活動・メディア｜金城竜弥"
      : `${option.label}｜活動・メディア｜金城竜弥`;
  const url = getFilterHref(activeCategory);

  return {
    title,
    description: option.heroDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: option.heroDescription,
      url,
      siteName: "Yazirusi",
      locale: "ja_JP",
      type: "website",
      images: [{ url: socialImage, alt: option.heroTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: option.heroDescription,
      images: [socialImage],
    },
  };
}

export default async function MediaPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const activeCategory = normalizeMediaCategory(category);
  const posts = await getAllMediaFromCMS();
  const filteredPosts = activeCategory === "all" ? posts : posts.filter((post) => post.category === activeCategory);
  const activeCategoryOption = getMediaCategoryOption(activeCategory);
  const filterItems = mediaCategoryOptions.map((option) => ({
    key: option.key,
    label: option.label,
    count: option.key === "all" ? posts.length : posts.filter((post) => post.category === option.key).length,
    href: getFilterHref(option.key),
    active: option.key === activeCategory,
  }));


  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-white pt-[88px]">
          <div className="pencil-section mx-auto max-w-[900px] border-b border-[#dedbd6]">
            <p className="pencil-eyebrow mb-4">
              MEDIA & STORIES
            </p>
            <h1 className="pencil-title mb-6">
              {activeCategoryOption.heroTitle}
            </h1>
            <p className="pencil-body max-w-2xl">
              {activeCategoryOption.heroDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] px-3 py-2 text-xs text-[#7b7b78]">
              <span className="font-bold text-[#111111]">{filteredPosts.length}件</span>
              <span>{activeCategory === "all" ? "公開中の記録" : `${activeCategoryOption.label}の記録`}</span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white py-8 border-b border-[#dedbd6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <MediaCategoryFilter items={filterItems} />
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <MediaCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="rounded-[4px] border border-dashed border-[#dedbd6] bg-[#fef5f0] px-6 py-10 text-center">
                <p className="text-sm font-bold text-[#111111] mb-2">このカテゴリは、まだ準備中です。</p>
                <p className="text-xs text-[#a0a09c]">ほかのカテゴリから、公開中の記録をご覧いただけます。</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#fef5f0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="pencil-title mb-4">あなたの仕事のことも、<br />聞かせてください。</h2>
            <p className="pencil-body mx-auto mb-6 max-w-2xl">
              業務の困りごとや、AIをどう使うか。まずは30分無料相談で、今の状況と次の一歩を一緒に整理します。公式LINEを友だち追加し、「予約」と送ってください。
            </p>
            <TrackedLink
              href={siteContacts.lineOfficial}
              target="_blank"
              rel="noopener noreferrer"
              eventName="contact_cta_click"
              eventParams={{ page_type: "media_list", position: "media_list_footer", cta_target: "line_free_consultation" }}
              className="pencil-button"
            >
              LINEで30分無料相談を予約
              <ExternalLink size={14} aria-hidden="true" />
            </TrackedLink>
            <p className="pencil-body mt-4">相談だけでも大丈夫です。</p>
            <p className="text-sm text-[#666660] mt-10 mb-3">出演・取材のご依頼はこちら</p>
            <TrackedLink
              href={`mailto:${siteContacts.email}`}
              eventName="contact_cta_click"
              eventParams={{
                page_type: "media_list",
                position: "media_list_footer",
                cta_target: "email",
              }}
              className="inline-flex items-center gap-2 text-sm text-[#365343] underline underline-offset-4"
            >
              <ExternalLink size={14} />
              出演・取材をメールで相談する
            </TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
