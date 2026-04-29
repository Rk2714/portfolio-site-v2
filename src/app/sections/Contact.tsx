"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, ExternalLink } from "lucide-react";

interface Contacts {
  email?: string;
  linkedin?: string;
  twitter?: string;
  location?: string;
  calendly?: string;
}

export default function Contact({ contacts }: { contacts?: Contacts | null }) {
  const email = contacts?.email || "ryuyakinjo@gmail.com";
  const location = contacts?.location || "沖縄県中城村";
  const calendarSrc =
    contacts?.calendly ||
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1dL0u8qskhfEDpacS_oUA7sQzLuLcNJf35Jm55-LP0WqMhoRB38reuFFqrjqU2sAQG9rkzjlrI?gv=true";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://yqj3ujq81j.microcms.io/api/v1/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MICROCMS-API-KEY": "ydaf5pN5b4BqHJrtD67NXUa19qPUybJ9GWcX",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      alert("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            まずは無料相談から
          </h2>
          <p className="text-sm text-[#475569] leading-[1.8] max-w-2xl mx-auto">
            下のカレンダーから希望の日時を選んで予約してください。
            <br />
            事前に詳細を送りたい場合は、右のフォームもご利用ください。
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
                height="700"
                frameBorder="0"
                title="Google Calendar予約"
              />
            </div>
            <p className="text-xs text-[#94A3B8] mt-3">
              Google Calendarの予約システムを利用しています。予約確定後、確認メールが届きます。
            </p>
          </div>

          {/* Right: Contact info + form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#64748B]" />
                <a href={`mailto:${email}`} className="text-[#2563EB] hover:underline">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#64748B]" />
                <span className="text-[#475569]">{location}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-sm font-bold text-[#0F172A] mb-4">
                お問い合わせフォーム
              </h3>

              {submitted ? (
                <div className="text-center py-10 border border-gray-200 bg-white">
                  <CheckCircle className="w-8 h-8 text-[#0F172A] mx-auto mb-3" />
                  <p className="text-sm font-bold text-[#0F172A] mb-1">送信完了</p>
                  <p className="text-xs text-[#475569] mb-4">
                    お問い合わせありがとうございます。3営業日以内にご返信いたします。
                  </p>
                  <a
                    href={calendarSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#2563EB] font-medium hover:underline mb-4"
                  >
                    <ExternalLink size={12} />
                    Googleカレンダーで30分無料相談を予約する
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#64748B] hover:text-[#0F172A] transition-colors"
                    >
                      新しく送信する
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      お名前
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      ご相談内容
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all resize-none text-sm"
                      placeholder="DX導入、AI人材育成など、ご相談内容を簡潔に"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-4 py-3 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send size={13} />
                    {submitting ? "送信中..." : "送信する"}
                  </button>

                  <div className="pt-4 border-t border-gray-100 text-center">
                    <p className="text-xs text-[#94A3B8] mb-2">
                      まずは予約からでもOK
                    </p>
                    <a
                      href={calendarSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#2563EB] font-medium hover:underline"
                    >
                      <ExternalLink size={12} />
                      Googleカレンダーで30分無料相談を予約する
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
