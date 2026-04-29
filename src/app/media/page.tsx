import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mic, Radio, Calendar, ExternalLink, Phone } from "lucide-react";

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

async function fetchJSON(path: string, fallback: any) {
  try {
    const res = await fetch(`https://portfolio-site-xi-eight-33.vercel.app${path}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

export const metadata = {
  title: "メディア活動｜金城竜弥",
  description: "ラジオパーソナリティとしての出演番組、ゲスト対談、Podcast配信の記録。",
};

export default async function MediaPage() {
  const mediaData = await fetchMicroCMS("media", { contents: [] });
  const mediaItems = (mediaData.contents || []).length > 0
    ? mediaData.contents
    : await fetchJSON("/data/media.json", []);

  const guestData = await fetchMicroCMS("guests", { contents: [] });
  const guestItems = (guestData.contents || []).length > 0
    ? guestData.contents
    : await fetchJSON("/data/guests.json", []);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#0F172A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs text-white/50 mb-6 tracking-wider">
              Media / Radio Personality
            </p>
            <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white leading-[1.25] mb-6">
              メディア活動
            </h1>
            <p className="text-sm sm:text-base text-white/60 leading-[1.8] max-w-xl">
              ラジオパーソナリティとして、医療・DX・地方創生のテーマで発信しています。
              現場の声を届けながら、社会課題の掘り下げを行っています。
            </p>
          </div>
        </section>

        {/* Appearances */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              Appearances
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
              出演番組・配信
            </h2>

            <div className="space-y-0">
              {mediaItems.map((item: any, i: number) => (
                <div
                  key={i}
                  className="border-t border-gray-200 py-8 grid md:grid-cols-12 gap-6"
                >
                  <div className="md:col-span-2">
                    <span className="inline-block px-3 py-1 bg-[#0F172A] text-white text-xs font-bold">
                      {item.type}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-[1.8] mb-3">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                      >
                        視聴する
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div className="md:col-span-4 space-y-2 text-sm text-[#64748B]">
                    <div className="flex items-center gap-2">
                      <Radio size={14} />
                      <span>{item.station}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mic size={14} />
                      <span>{item.frequency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{item.schedule}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-200" />
            </div>
          </div>
        </section>

        {/* Guests */}
        <section className="py-20 md:py-28 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
              Guests
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
              これまでにお招きしたゲスト
            </h2>
            <p className="text-sm text-[#475569] mb-12 max-w-xl">
              各界の専門家をお招きし、現場のリアルを語り合っています。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {guestItems.map((guest: any, i: number) => (
                <div key={i} className="bg-white p-6 border border-gray-100">
                  <div className="mb-4">
                    <p className="text-xs text-[#94A3B8] mb-1">{guest.date}</p>
                    <p className="text-xs text-[#2563EB] font-medium">
                      {guest.program}
                    </p>
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">
                    {guest.name}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4">{guest.title}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-[#64748B] mb-1">トークテーマ</p>
                    <p className="text-sm text-[#334155] mb-3">{guest.topic}</p>
                    {guest.link && (
                      <a
                        href={guest.link}
                        target={guest.linkType === "url" ? "_blank" : undefined}
                        rel={guest.linkType === "url" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:gap-2 transition-all"
                      >
                        {guest.linkType === "tel" ? (
                          <>
                            <Phone size={12} />
                            電話する
                          </>
                        ) : (
                          <>
                            <ExternalLink size={12} />
                            詳しく見る
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-[#64748B]">
                ゲスト出演・取材依頼は
                <a
                  href="mailto:ryuyakinjo@gmail.com"
                  className="text-[#2563EB] hover:underline"
                >
                  こちら
                </a>
                まで
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
