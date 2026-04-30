import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mic, Radio, ExternalLink, Tag, ChevronRight } from "lucide-react";
import { getAllMediaFromCMS } from "../../lib/media-data";

export const metadata = {
  title: "メディア活動・雑記｜金城竜弥",
  description: "ラジオパーソナリティとしての活動、ゲスト対談、現場での気づきを綴った雑記。",
};

export default async function MediaPage() {
  const posts = await getAllMediaFromCMS();

  const categories = [
    { key: "all", label: "すべて" },
    { key: "radio", label: "ラジオ" },
    { key: "guest", label: "ゲスト" },
    { key: "appear", label: "出演" },
    { key: "note", label: "雑記" },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-xs text-[#64748B] mb-4 tracking-wider">
              Media & Notes
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-6">
              ラジオ、ゲスト対談、
              <br />
              現場での気づき。
            </h1>
            <p className="text-sm md:text-base text-[#475569] leading-[1.8] max-w-2xl">
              ラジオパーソナリティとしての活動記録と、現場で感じたことを書き留めた雑記。
              医療、DX、地方創生、人材育成——日々の考えを綴っています。
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-[#FAFAFA] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.key}
                  href={`#${cat.key}`}
                  className="px-4 py-2 bg-white border border-gray-200 text-xs text-[#475569] hover:border-[#0F172A] hover:text-[#0F172A] transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-12">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group grid md:grid-cols-12 gap-6 items-start border-b border-gray-100 pb-12 last:border-0"
                >
                  {/* Date & Category */}
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-[#94A3B8]">
                        {post.date}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium w-fit ${
                          post.category === "radio"
                            ? "text-[#2563EB]"
                            : post.category === "guest"
                            ? "text-[#059669]"
                            : post.category === "appear"
                            ? "text-[#D97706]"
                            : "text-[#64748B]"
                        }`}
                      >
                        {post.category === "radio" && <Radio size={12} />}
                        {post.category === "guest" && <Mic size={12} />}
                        {post.category === "appear" && <ExternalLink size={12} />}
                        {post.category === "note" && <Tag size={12} />}
                        {post.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <h2 className="text-lg md:text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#475569] leading-[1.8] mb-4">
                      {post.excerpt}
                    </p>
                    <a
                      href={`/media/${post.id}`}
                      className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                    >
                      続きを読む
                      <ChevronRight size={14} />
                    </a>
                  </div>

                  {/* Thumbnail */}
                  <div className="md:col-span-3">
                    <div className="aspect-[4/3] bg-[#F1F5F9] overflow-hidden">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                          <Mic size={24} />
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-[#64748B] mb-4">
              ゲスト出演・取材依頼はこちら
            </p>
            <a
              href="mailto:ryuyakinjo@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors"
            >
              <ExternalLink size={14} />
              メールで連絡する
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
