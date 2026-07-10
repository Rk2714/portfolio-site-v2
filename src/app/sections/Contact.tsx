"use client";

import { Mail, MapPin, ExternalLink, Camera, CreditCard } from "lucide-react";
import { trackEvent } from "../../lib/analytics";

interface Contacts {
  email?: string;
  location?: string;
}

export default function Contact({ contacts }: { contacts?: Contacts | null }) {
  const email = contacts?.email || "ryuyakinjo@yazirusi.com";
  const location = contacts?.location || "沖縄県中城村";
  const freeUrl = "https://calendar.app.google/wJsV5mJhXuLQmBnS6";
  const paidUrl = "https://calendar.app.google/pR1qA4hqeMkX8kSj7";

  return (
    <section id="contact" className="bg-[#fef5f0]">
      <div className="pencil-section pencil-container space-y-6">
        <div className="space-y-[10px]">
          <p className="pencil-eyebrow">Contact</p>
          <h2 className="pencil-title">現場改善も、個人活動の相談も、まずは30分だけ話してみる</h2>
          <p className="pencil-body max-w-5xl">
            訪問看護ステーションの情報整理、AI活用、Google Drive、議事録、連絡ルール。まずは今困っていることを軽く相談できます。
          </p>
        </div>

        <div className="grid gap-[18px] lg:grid-cols-[1fr_420px]">
          <div className="flex flex-col gap-3">
            <div className="rounded-[4px] border border-[#e8e5df] bg-[#fef5f0] p-6">
              <span className="pencil-chip bg-[#faf9f6]">30分無料</span>
              <h3 className="mt-[14px] text-[22px] font-black text-[#111111]">30分無料で話す</h3>
              <p className="mt-[14px] text-[14px] leading-[24px] text-[#7b7b78]">
                まずは現状を整理して、どこを整えると現場が楽になるかを一緒に確認します。
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

            <div className="rounded-[4px] border border-[#e8e5df] bg-[#fef5f0] p-6">
              <span className="rounded-[4px] border border-[#3E2A1F] bg-[#3E2A1F] px-[14px] py-[10px] text-[12px] font-bold tracking-[0.6px] text-white">
                60分商品
              </span>
              <h3 className="mt-[14px] text-[22px] font-black text-[#111111]">60分の相談を予約する</h3>
              <p className="mt-[14px] text-[14px] leading-[24px] text-[#7b7b78]">
                記録・連絡・情報共有・AI活用の現状を整理し、改善の方向性を60分でまとめます。
              </p>
              <p className="mt-[14px] text-[16px] font-black text-[#111111]">
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
            <div className="rounded-[4px] border border-[#dedbd6] bg-white p-[22px]">
              <h3 className="text-[18px] font-black text-[#111111] mb-[14px]">
                連絡方法
              </h3>
              <div className="space-y-3">
                <div className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <ExternalLink size={13} className="text-[#111111]" />
                    <p className="text-[13px] font-black text-[#111111]">カレンダー予約</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#7b7b78]">30分無料相談はこちら。</p>
                  <a href={freeUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex text-[12px] font-bold text-[#f4511e]">
                    30分無料相談を開く
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <CreditCard size={13} className="text-[#111111]" />
                    <p className="text-[13px] font-black text-[#111111]">支払い</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#7b7b78]">
                    クレジット / PayPay 対応。予約後に支払いリンクを案内します。
                  </p>
                </div>

                <div className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <Mail size={13} className="text-[#111111]" />
                    <p className="text-[13px] font-black text-[#111111]">メール</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#7b7b78]">長期案件・資料請求はこちら。</p>
                  <a
                    href={`mailto:${email}`}
                    onClick={() => {
                      trackEvent("contact_cta_click", {
                        page_type: "home",
                        position: "contact_email",
                        cta_target: "email",
                      });
                    }}
                    className="mt-1 inline-flex text-[12px] font-bold text-[#f4511e]"
                  >
                    {email}
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <Camera size={13} className="text-[#111111]" />
                    <p className="text-[13px] font-black text-[#111111]">Instagram DM</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#7b7b78]">ラジオ関連や気軽な相談はこちら。</p>
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
                    className="mt-1 inline-flex text-[12px] font-bold text-[#f4511e]"
                  >
                    @yazirusi_kinjo
                  </a>
                </div>

                <div className="rounded-[4px] border border-[#dedbd6] bg-[#fef5f0] p-[14px_16px]">
                  <div className="mb-1 flex items-center gap-2">
                    <MapPin size={13} className="text-[#111111]" />
                    <p className="text-[13px] font-black text-[#111111]">オンライン・沖縄 🉑</p>
                  </div>
                  <p className="text-[12px] leading-[19px] text-[#7b7b78]">{location}在住。オンライン中心、現場へも伺います。</p>
                </div>
              </div>
            </div>

            <div className="rounded-[4px] border border-[#dedbd6] bg-white p-[22px]">
              <h3 className="text-[18px] font-black text-[#111111]">遠慮しなくていいこと</h3>
              <p className="mt-[10px] text-[13px] leading-[22px] text-[#7b7b78]">
                構築ありきではありません。AIを入れるかどうかも、どのツールを使うかも、話しながら一緒に考えます。
              </p>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#dedbd6]" />
      </div>
    </section>
  );
}
