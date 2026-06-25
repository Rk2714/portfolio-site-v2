"use client";

import { Mail, MapPin, ExternalLink, Camera } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-28 bg-[#FFF8F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            まずは30分無料相談から
          </h2>
          <p className="text-sm text-[#475569] leading-[1.8] max-w-2xl mx-auto">
            カレンダーから希望の日時を選んで予約してください。
            <br />
            メールやInstagram DMでのお問い合わせも受け付けています。
          </p>
        </div>

          {/* Pricing Info */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white border border-gray-200 p-6 text-center">
              <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-2">Free</p>
              <p className="text-2xl font-bold text-[#0F172A] mb-1">30分無料</p>
              <p className="text-sm text-[#475569]">お試し相談</p>
            </div>
            <div className="bg-white border border-[#1E3A5F] p-6 text-center">
              <p className="text-xs font-bold text-[#1E3A5F] tracking-wider uppercase mb-2">New</p>
              <p className="text-2xl font-bold text-[#0F172A] mb-1">60分 ¥3,000</p>
              <p className="text-sm text-[#475569]">あなたのAIの使い方当たってますか</p>
              <p className="text-xs text-[#64748B] mt-2">AI活用の現状診断＋改善アドバイス</p>
              <p className="text-xs text-[#1E3A5F] mt-3 font-medium">クレジットカード / PayPay 対応</p>
              <p className="text-xs text-[#94A3B8] mt-0.5">予約確認後、お支払いリンクをお送りします</p>
            </div>
          </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Booking cards */}
          <div className="lg:col-span-3 space-y-4">
            <a
              href={freeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-gray-200 p-6 hover:border-[#1E3A5F] transition-colors"
            >
              <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-1">Free</p>
              <p className="text-lg font-bold text-[#0F172A]">30分無料相談を予約する</p>
              <p className="text-xs text-[#64748B] mt-1">お試し相談。まずは気軽にどうぞ</p>
            </a>
            <a
              href={paidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#1E3A5F] p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-bold text-[#1E3A5F] tracking-wider uppercase mb-1">New / ¥3,000</p>
              <p className="text-lg font-bold text-[#0F172A]">60分「あなたのAIの使い方当たってますか」を予約する</p>
              <p className="text-xs text-[#64748B] mt-1">AI活用の現状診断＋改善アドバイス / クレジットカード・PayPay対応</p>
            </a>
            <p className="text-xs text-[#94A3B8]">
              Google Calendarの予約システムを利用しています。予約確定後、確認メールが届きます。
            </p>
          </div>

          {/* Right: Contact channels */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-sm font-bold text-[#0F172A] mb-6">
                お問い合わせ方法
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                    <ExternalLink size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A] mb-0.5">30分無料相談</p>
                    <p className="text-xs text-[#64748B] mb-1">
                      カレンダーから予約してください
                    </p>
                    <a
                      href={freeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        trackEvent("contact_cta_click", {
                          page_type: "home",
                          position: "contact_calendar",
                          cta_target: "calendar",
                        });
                      }}
                      className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:underline"
                    >
                      カレンダーを開く
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A] mb-0.5">メール</p>
                    <p className="text-xs text-[#64748B] mb-1">
                      資料請求・長期案件のご相談
                    </p>
                    <a
                      href={`mailto:${email}`}
                      onClick={() => {
                        trackEvent("contact_cta_click", {
                          page_type: "home",
                          position: "contact_email",
                          cta_target: "email",
                        });
                      }}
                      className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center flex-shrink-0">
                    <Camera size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0F172A] mb-0.5">Instagram DM</p>
                    <p className="text-xs text-[#64748B] mb-1">
                      ラジオ関連・カジュアルなお問い合わせ
                    </p>
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
                      className="inline-flex items-center gap-1 text-xs text-[#2563EB] font-medium hover:underline"
                    >
                      @yazirusi_kinjo
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 text-center">
              <div className="flex items-center justify-center gap-2 text-[#475569] mb-2">
                <MapPin size={14} />
                <span className="text-sm">{location}在住</span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                全国どこでもオンライン対応
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
