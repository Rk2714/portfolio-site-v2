import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mic, Radio, ExternalLink, Tag, ChevronRight } from "lucide-react";
import { getAllMediaFromCMS } from "../../lib/media-data";

export const metadata = {
  title: "メディア活動・雑記｜金城竜弥",
  description: "ラジオパーソナリティとしての活動、ゲスト対談、現場での気づきを綴った雑記。",
};

export default async function MediaPage() {
  const posts = (await getAllMediaFromCMS()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
        <section className="py-8 bg-gradient-to-r from-[#FAFAFA] to-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const colorMap: Record<string, string> = {
                  all: "bg-[#0F172A] text-white hover:bg-[#1E293B]",
                  radio: "bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/20 border-[#2563EB]/20",
                  guest: "bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 border-[#059669]/20",
                  appear: "bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 border-[#D97706]/20",
                  note: "bg-[#64748B]/10 text-[#64748B] hover:bg-[#64748B]/20 border-[#64748B]/20",
                };
                return (
                  <a
                    key={cat.key}
                    href={`#${cat.key}`}
                    className={`px-4 py-2 border text-xs font-medium transition-all ${
                      cat.key === "all" ? colorMap.all : colorMap[cat.key]
                    }`}
                  >
                    {cat.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => {
                const catColor = post.category === "radio" ? "#2563EB" : post.category === "guest" ? "#059669" : post.category === "appear" ? "#D97706" : "#64748B";
                const CatIcon = post.category === "radio" ? Radio : post.category === "guest" ? Mic : post.category === "appear" ? ExternalLink : Tag;
                return (
                  <a
                    key={post.id}
                    href={`/media/${post.id}`}
                    className="group block bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-[#F1F5F9] overflow-hidden relative">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#CBD5E1]">
                          <Mic size={32} />
                        </div>
                      )}
                      {/* Floating category badge */}
                      <div
                        className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-bold"
                        style={{ color: catColor }}
                      >
                        <CatIcon size={11} />
                        {post.categoryLabel}
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur text-xs text-white/80">
                        {post.date}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Color accent bar */}
                      <div className="w-8 h-1 mb-3 rounded-full" style={{ backgroundColor: catColor }} />
                      <h2 className="text-base md:text-lg font-bold text-[#0F172A] mb-2 group-hover:opacity-70 transition-opacity leading-snug line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-xs text-[#475569] leading-[1.8] mb-3 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                        style={{ color: catColor }}
                      >
                        続きを読む
                        <ChevronRight size={12} />
                      </span>
                    </div>
                  </a>
                );
              })}
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
