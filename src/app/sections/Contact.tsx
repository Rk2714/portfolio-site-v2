"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Calendar } from "lucide-react";

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
  const calendlyUrl = contacts?.calendly || "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3K1Z7qfXJHmL0wZPlg6z7Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z";

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
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-[#64748B] tracking-wider uppercase mb-3">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            まずは無料相談から
          </h2>
          <p className="text-sm text-[#475569] leading-[1.8]">
            DX環境構築、AI人材育成、業務効率化のご相談など、お気軽にお問い合わせください。
            <br />
            初回相談は無料です。
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#64748B]" />
            <a href={`mailto:${email}`} className="text-[#2563EB] hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#64748B]" />
            <span className="text-[#475569]">{location}</span>
          </div>
        </div>

        <div className="mb-10">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors"
          >
            <Calendar size={16} />
            カレンダーから予約する（Google Calendar）
          </a>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-gray-200 bg-white">
            <CheckCircle className="w-10 h-10 text-[#0F172A] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">送信完了</h3>
            <p className="text-sm text-[#475569]">
              お問い合わせありがとうございます。2営業日以内にご返信します。
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-[#2563EB] hover:underline"
            >
              新しく送信する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 border border-gray-200">
            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-2">
                お名前
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all text-sm"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0F172A] mb-2">
                ご相談内容
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] outline-none transition-all resize-none text-sm"
                placeholder="DX導入、AI人材育成、業務効率化など、ご相談内容を具体的にご記入ください"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-4 bg-[#0F172A] text-white text-sm font-bold hover:bg-[#1E293B] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send size={14} />
              {submitting ? "送信中..." : "送信する"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
