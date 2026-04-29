import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Mic, Radio, Calendar, ExternalLink } from "lucide-react";

const mediaAppearances = [
  {
    type: "レギュラー",
    title: "ラジオ番組タイトル",
    station: "FM沖縄",
    frequency: "82.0MHz",
    schedule: "毎週水曜日 21:00-22:00",
    description: "沖縄の医療・DX・地域活性化をテーマに、ゲストを招いて対談するレギュラー番組。看護師目線からの社会課題の掘り下げが好評。",
    link: "#",
  },
  {
    type: "ゲスト出演",
    title: "医療×テクノロジーの未来",
    station: "InterFM",
    frequency: "89.7MHz",
    schedule: "2026年3月15日",
    description: "医療現場のDX導入事例と、AIがもたらす業務変革について出演。現場のリアルな声を交えながら解説。",
    link: "#",
  },
  {
    type: "ゲスト出演",
    title: "沖縄発・地方創生の最前線",
    station: "J-WAVE",
    frequency: "81.3MHz",
    schedule: "2026年1月20日",
    description: "ヌチマース号やコトマースなど、沖縄発の医療プロジェクトを通じた地方創生活動についてインタビュー受け。",
    link: "#",
  },
  {
    type: "パーソナリティ",
    title: "オンライン医療ラジオ",
    station: "Podcast / Spotify",
    frequency: "配信",
    schedule: "隔週金曜日更新",
    description: "医療従事者向けに、業務効率化や心身のケアについて発信するポッドキャスト。累計ダウンロード数1万回突破。",
    link: "#",
  },
];

const guests = [
  {
    name: "ゲスト名",
    title: "医療DX企業 CEO",
    topic: "AI導入の現場での活用法",
    date: "2026年4月",
  },
  {
    name: "ゲスト名",
    title: "沖縄県 地域政策部 担当者",
    topic: "沖縄の医療アクセス課題と解決策",
    date: "2026年3月",
  },
  {
    name: "ゲスト名",
    title: "看護師 / キャリアコンサルタント",
    topic: "医療従事者の働き方改革",
    date: "2026年2月",
  },
];

export const metadata = {
  title: "メディア活動｜金城竜弥",
  description: "ラジオパーソナリティとしての出演番組、ゲスト対談、Podcast配信の記録。",
};

export default function MediaPage() {
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
              {mediaAppearances.map((item, i) => (
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
                    {item.link !== "#" && (
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
              これまでにお招きしたゲスト
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {guests.map((guest, i) => (
                <div
                  key={i}
                  className="bg-white p-6 border border-gray-100"
                >
                  <p className="text-xs text-[#94A3B8] mb-3">{guest.date}</p>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">
                    {guest.name}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4">{guest.title}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-[#64748B] mb-1">テーマ</p>
                    <p className="text-sm text-[#334155]">{guest.topic}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-[#64748B]">
                ゲスト出演・取材依頼は
                <a href="mailto:ryuyakinjo@gmail.com" className="text-[#2563EB] hover:underline">
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
