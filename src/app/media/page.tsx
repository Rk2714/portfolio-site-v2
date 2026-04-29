import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mic, Radio, Calendar, ExternalLink, Tag, ChevronRight } from "lucide-react";

const API_KEY = "ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX";
const SERVICE_ID = "yqj3ujq81j";

async function fetchMicroCMS(endpoint: string, fallback: any) {
  try {
    const res = await fetch(
      `https://${SERVICE_ID}.microcms.io/api/v1/${endpoint}?limit=100`,
      {
        headers: { "X-MICROCMS-API-KEY": API_KEY },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

// ダミーデータ（ブログ/雑記スタイル）
const fallbackPosts = [
  {
    id: "1",
    category: "radio",
    categoryLabel: "ラジオ",
    date: "2024-03-15",
    title: "ラジオいえろーかっしー #12｜医療現場のDX化って、どこから始めるの？",
    excerpt: "今回は、病院で働く友人をゲストに迎えて、医療現場のDX化について本音トーク。電子カルテの導入、AIでの業務効率化、現場の人たちが本当に困っていることって何なのか、聞いてみました。意外な苦労話が出てきて、僕自身も反省点が多かったです。",
    image: "/images/microphone.jpg",
  },
  {
    id: "2",
    category: "guest",
    categoryLabel: "ゲスト",
    date: "2024-02-28",
    title: "看護師20年の先輩に聞く｜「辞めたい」と思った日々を乗り越えた方法",
    excerpt: "現役看護師の先輩をゲストに招いて、キャリアの転機について語り合いました。何度も辞めたいと思った時期があったという先輩。でも現場に残り続けた理由は、「誰かのために働く」というシンプルな想いの中にありました。",
    image: "/images/medical-team.jpg",
  },
  {
    id: "3",
    category: "radio",
    categoryLabel: "ラジオ",
    date: "2024-02-10",
    title: "ラジオいえろーかっしー #11｜AIを導入して3ヶ月、現場が変わった話",
    excerpt: "某病院にAI議事録ツールを導入して3ヶ月が経過。当初は戸惑いがあった看護師さんたちも、今では「もう手放せない」と言ってくれています。導入前後の変化を、現場の声と共にお届けします。",
    image: "/images/hero-tech.jpg",
  },
  {
    id: "4",
    category: "note",
    categoryLabel: "雑記",
    date: "2024-01-20",
    title: "沖縄で医療支援を始めて、気づいた「地方創生」のリアル",
    excerpt: "ヌチマース号の活動を通じて、沖縄の医療現場を見てきました。都会と違う課題、でも解決したいという熱意はどこも同じ。地方だからこそできることを、地元の人たちと一緒に考えていきたいと思っています。",
    image: "/images/okinawa-sea.jpg",
  },
  {
    id: "5",
    category: "guest",
    categoryLabel: "ゲスト",
    date: "2024-01-08",
    title: "医療系YouTuber対談｜「情報発信」が現場を変える可能性",
    excerpt: "医療系YouTuberの○○さんをゲストにお招きしました。SNSでの情報発信が、現場の看護師たちにどんな影響を与えているのか。発信する側の責任と、現場のリアルを伝える難しさについて語りました。",
    image: "/images/profile-workspace.jpg",
  },
  {
    id: "6",
    category: "note",
    categoryLabel: "雑記",
    date: "2023-12-15",
    title: "2023年を振り返って｜看護師からDXコンサルタントへ、転身の1年",
    excerpt: "2023年は、僕にとって大きな転換点でした。看護師としての現場を離れ、テクノロジーの力で医療を変える仕事に踏み出した年。不安もあったけど、それ以上に「やりたいこと」が見えてきた1年でした。",
    image: "/images/ambulance.jpg",
  },
];

export const metadata = {
  title: "メディア活動・雑記｜金城竜弥",
  description: "ラジオパーソナリティとしての活動、ゲスト対談、現場での気づきを綴った雑記。",
};

export default async function MediaPage() {
  const mediaData = await fetchMicroCMS("media", { contents: [] });
  const posts = (mediaData.contents || []).length > 0
    ? mediaData.contents.map((item: any) => ({
        id: item.id,
        category: item.category || "note",
        categoryLabel: item.categoryLabel || "雑記",
        date: item.date || "2024-01-01",
        title: item.title,
        excerpt: item.excerpt || item.description,
        image: item.image?.url || null,
      }))
    : fallbackPosts;

  const categories = [
    { key: "all", label: "すべて" },
    { key: "radio", label: "ラジオ" },
    { key: "guest", label: "ゲスト" },
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
              {posts.map((post: { id: string; category: string; categoryLabel: string; date: string; title: string; excerpt: string; image: string | null }, index: number) => (
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
                            : "text-[#64748B]"
                        }`}
                      >
                        {post.category === "radio" && <Radio size={12} />}
                        {post.category === "guest" && <Mic size={12} />}
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
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                    >
                      続きを読む
                      <ChevronRight size={14} />
                    </a>
                  </div>

                  {/* Thumbnail */}
                  <div className="md:col-span-3">
                    <div className="aspect-[4/3] bg-[#F1F5F9] overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
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
