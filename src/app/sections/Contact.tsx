"use client";

import { Mail, MapPin, ExternalLink, Camera, CreditCard } from "lucide-react";
import { trackEvent } from "../../lib/analytics";

interface Contacts {
  email?: string;
  location?: string;
}

export default function Contact({ contacts }: { contacts?: Contacts | null }) {
  const email = contacts?.email || "ryuyakinjo@gmail.com";
  const location = contacts?.location || "沖縄県中城村";
  const freeUrl = "https://calendar.app.google/wJsV5mJhXuLQmBnS6";
  const paidUrl = "https://calendar.app.google/pR1qA4hqeMkX8kSj7";

  return (
    <section id="contact" className="bg-[#FFF8F0]">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">Contact</p>
          <h2 className="pencil-title">AIの使い方、まずは30分だけ話してみる</h2>
          <p className="pencil-body max-w-5xl">
            AIを仕事でどう使うか、必要なら構築までできるか。まずは軽く相談できます。
          </p>
        </div>

        <div className="grid gap-[18px] lg:grid-cols-[1fr_420px]">
          <div className="flex flex-col gap-3">
            <div className="rounded-[4px] border border-[#D7E0EA] bg-[#FBFCFD] p-6">
              <span className="pencil-chip bg-[#F5F7FA]">30分無料</span>
              <h3 className="mt-[14px] text-[22px] font-black text-[#0F172A]">30分無料で話す</h3>
              <p className="mt-[14px] text-[14px] leading-[24px] text-[#475569]">
                まずは現状を整理して、どこを変えるとよいかを一緒に確認します。
              </p>
              <a
                href={freeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: "contact_free",
                    cta_target: "calendar",
                  });
                }}
                className="pencil-button mt-[14px]"
              >
                相談する
              </a>
            </div>

            <div className="rounded-[4px] border border-[#D7E0EA] bg-[#FBFCFD] p-6">
              <span className="rounded-[4px] border border-[#0F172A] bg-[#0F172A] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white">
                60分商品
              </span>
              <h3 className="mt-[14px] text-[22px] font-black text-[#0F172A]">60分の相談を予約する</h3>
              <p className="mt-[14px] text-[14px] leading-[24px] text-[#475569]">
                AI活用の現状を整理し、改善の方向性を60分でまとめます。
              </p>
              <p className="mt-[14px] text-[16px] font-black text-[#0F172A]">
                60分 ¥5,000 → キャンペーン ¥3,000
              </p>
              <a
                href={paidUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("contact_cta_click", {
                    page_type: "home",
                    position: "contact_paid",
                    cta_target: "calendar",
                  });
                }}
                className="pencil-button mt-[14px]"
              >
                詳細を見る
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px]">
              <h3 className="text-[18px] font-black text-[#0F172A] mb-[14px]">
                連絡方法
              </h3>
              <div className="space-y-3">
                <div className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <ExternalLink size={13} className="text-[#0F172A]" />
                    <p className="text-[13px] font-black text-[#0F172A]">カレンダー予約</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#475569]">30分無料相談はこちら。</p>
                  <a href={freeUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex text-[12px] font-bold text-[#2563EB]">
                    30分無料相談を開く
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <CreditCard size={13} className="text-[#0F172A]" />
                    <p className="text-[13px] font-black text-[#0F172A]">支払い</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#475569]">
                    クレジット / PayPay 対応。予約後に支払いリンクを案内します。
                  </p>
                </div>

                <div className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <Mail size={13} className="text-[#0F172A]" />
                    <p className="text-[13px] font-black text-[#0F172A]">メール</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#475569]">長期案件・資料請求はこちら。</p>
                  <a
                    href={`mailto:${email}`}
                    onClick={() => {
                      trackEvent("contact_cta_click", {
                        page_type: "home",
                        position: "contact_email",
                        cta_target: "email",
                      });
                    }}
                    className="mt-1 inline-flex text-[12px] font-bold text-[#2563EB]"
                  >
                    {email}
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <Camera size={13} className="text-[#0F172A]" />
                    <p className="text-[13px] font-black text-[#0F172A]">Instagram DM</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#475569]">ラジオ関連や気軽な相談はこちら。</p>
                  <a
                    href="https://www.instagram.com/yazirusi_kinjo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent("contact_cta_click", {
                        page_type: "home",
                        position: "contact_instagram",
                        cta_target: "instagram",
                      });
                    }}
                    className="mt-1 inline-flex text-[12px] font-bold text-[#2563EB]"
                  >
                    @yazirusi_kinjo
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#E2E8F0] bg-[#FFF8F0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <MapPin size={13} className="text-[#0F172A]" />
                    <p className="text-[13px] font-black text-[#0F172A]">オンライン</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#475569]">{location}在住 / オンライン対応</p>
                </div>
              </div>
            </div>

            <div className="rounded-[4px] border border-[#E2E8F0] bg-white p-[22px]">
              <h3 className="text-[18px] font-black text-[#0F172A]">予約前に決めなくていいこと</h3>
              <p className="mt-[10px] text-[13px] leading-[22px] text-[#475569]">
                どのAIツールを使うか、何を構築するかは一緒に整理します。まずは「今困っていること」だけ持ってきてください。
              </p>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#E2E8F0]" />
      </div>
    </section>
  );
}
