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
  const calendarSrc =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dL0u8qskhfEDpacS_oUA7sQzLuLcNJf35Jm55-LP0WqMhoRB38reuFFqrjqU2sAQG9rkzjlrI?gv=true";

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

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Google Calendar iframe */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 overflow-hidden">
              <iframe
                src={calendarSrc}
                style={{ border: 0 }}
                width="100%"
                height="450"
                frameBorder="0"
                title="Google Calendar予約"
              />
            </div>
            <p className="text-xs text-[#94A3B8] mt-3">
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
                      href={calendarSrc}
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
