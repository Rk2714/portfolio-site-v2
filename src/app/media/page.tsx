import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrackedLink from "../components/TrackedLink";
import MediaCategoryFilter from "./MediaCategoryFilter";
import MediaCard from "./MediaCard";
import { ExternalLink } from "lucide-react";
import { getAllMediaFromCMS } from "../../lib/media-data";
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
      ? "メディア活動・雑記｜金城竜弥"
      : `${option.label}一覧｜メディア活動・金城竜弥`;
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
      siteName: "金城竜弥",
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
          <div className="pencil-section mx-auto max-w-[900px] border-b border-[#E2E8F0]">
            <p className="pencil-eyebrow mb-4">
              Media & Notes
            </p>
            <h1 className="pencil-title mb-6">
              {activeCategoryOption.heroTitle}
            </h1>
            <p className="pencil-body max-w-2xl">
              {activeCategoryOption.heroDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] px-3 py-2 text-xs text-[#475569]">
              <span className="font-bold text-[#0F172A]">{filteredPosts.length}件</span>
              <span>表示中</span>
              <span className="text-[#CBD5E1]">/</span>
              <span>全{posts.length}件</span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white py-8 border-b border-[#E2E8F0]">
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
              <div className="rounded-[4px] border border-dashed border-[#E2E8F0] bg-[#FCF9F5] px-6 py-10 text-center">
                <p className="text-sm font-bold text-[#0F172A] mb-2">このカテゴリの記事はまだありません。</p>
                <p className="text-xs text-[#64748B]">別カテゴリに切り替えると、公開済みのラジオや出演回を確認できます。</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FFF8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-[#64748B] mb-4">
              ゲスト出演・取材依頼はこちら
            </p>
            <TrackedLink
              href="mailto:ryuyakinjo@gmail.com"
              eventName="contact_cta_click"
              eventParams={{
                page_type: "media_list",
                position: "media_list_footer",
                cta_target: "email",
              }}
              className="pencil-button"
            >
              <ExternalLink size={14} />
              メールで連絡する
            </TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
