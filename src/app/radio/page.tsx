import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TrackedLink from "../components/TrackedLink";
import MediaCard from "../media/MediaCard";
import { ArrowRight, Radio, Mic, Globe, Heart, Sparkles } from "lucide-react";
import { getAllMediaFromCMS } from "../../lib/media-data";

export const metadata: Metadata = {
  title: "ラジオ一覧｜金城竜弥",
  description: "YouTubeサムネをそのまま使った、ラジオ回の一覧。テーマ・要点・出演回を見やすく整理しています。",
};

export default async function RadioPage() {
  const posts = await getAllMediaFromCMS();
  const radioPosts = posts.filter((post) => post.category === "radio");

  return (
    <>
      <Navigation />
      <main>
        {/* RADIO Hero */}
        <section className="bg-white pt-[88px]">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            <p className="pencil-eyebrow mb-4">
              Radio / Episodes
            </p>
            <h1 className="text-[34px] font-black leading-[1.12] text-[#0F172A] mb-6">
              ラジオ回を、YouTubeサムネのまま並べる。
            </h1>
            <p className="text-[16px] leading-[1.7] text-[#475569] max-w-2xl">
              ラジオの更新だけを静かに追いやすくした一覧です。サムネは YouTube のものをそのまま使い、あとから見返しやすい形にしています。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] px-3 py-2 text-xs text-[#475569]">
              <span className="font-bold text-[#0F172A]">{radioPosts.length}件</span>
              <span>表示中</span>
              <span className="text-[#CBD5E1]">/</span>
              <span>全{posts.length}件</span>
            </div>
          </div>
        </section>

        {/* Filter / Navigation */}
        <section className="bg-white border-b border-[#E2E8F0]">
          <div className="pencil-section max-w-[900px] mx-auto py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-4 py-2 text-xs font-bold text-white">
                <Radio size={12} />
                ラジオ
              </span>
              <Link href="/media" className="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors">
                更新一覧へ戻る
              </Link>
            </div>
          </div>
        </section>

        {/* Radio Posts Grid */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            {radioPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-[18px]">
                {radioPosts.map((post) => (
                  <MediaCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="rounded-[4px] border border-dashed border-[#E2E8F0] bg-[#FCF9F5] px-6 py-10 text-center">
                <p className="text-sm font-bold text-[#0F172A] mb-2">ラジオ回はまだありません。</p>
                <p className="text-xs text-[#64748B]">ラジオデータが入ると、ここに YouTube サムネ付きで並びます。</p>
              </div>
            )}
          </div>
        </section>

        {/* ラジオ Content Roles */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto border-b border-[#E2E8F0]">
            <div className="mb-6">
              <p className="pencil-eyebrow mb-2">ROLES</p>
              <h2 className="text-[28px] font-black leading-[1.12] text-[#0F172A]">
                このサイトで発信していること
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-[18px]">
              {[
                { icon: Mic, title: "ラジオ", desc: "いえろーかっし～ FM21 のゲスト回・放送回をアーカイブ。" },
                { icon: Globe, title: "広報", desc: "子ども食堂や地域活動のお知らせ・募集。", href: "/media?category=appear" },
                { icon: Heart, title: "地域活動", desc: "中城を中心にした地域づくりの記録。" },
                { icon: Sparkles, title: "AIメモ", desc: "AI活用のノウハウ・実践メモ。", href: "/media?category=note" },
              ].map((role, i) => {
                const Icon = role.icon;
                return role.href ? (
                  <Link
                    key={i}
                    href={role.href as string}
                    className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3 hover:border-[#D7E0EA] transition-colors"
                  >
                    <Icon size={20} className="text-[#0F172A]" />
                    <p className="text-[18px] font-black text-[#0F172A]">{role.title}</p>
                    <p className="text-[14px] leading-[1.7] text-[#475569]">{role.desc}</p>
                    <ArrowRight size={14} className="text-[#CBD5E1] mt-auto self-end" />
                  </Link>
                ) : (
                  <div
                    key={i}
                    className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px] flex flex-col gap-3"
                  >
                    <Icon size={20} className="text-[#0F172A]" />
                    <p className="text-[18px] font-black text-[#0F172A]">{role.title}</p>
                    <p className="text-[14px] leading-[1.7] text-[#475569]">{role.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="pencil-section max-w-[900px] mx-auto text-center">
            <p className="pencil-eyebrow mb-4">
              ゲスト出演・取材依頼はこちら
            </p>
            <TrackedLink
              href="mailto:ryuyakinjo@gmail.com"
              eventName="contact_cta_click"
              eventParams={{
                page_type: "media_list",
                page_path: "/radio",
                position: "radio_list_footer",
                cta_target: "email",
              }}
              className="pencil-button"
            >
              メールで連絡する
              <ArrowRight size={14} />
            </TrackedLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
