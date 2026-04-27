"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

interface Contacts {
  email?: string;
  linkedin?: string;
  twitter?: string;
  location?: string;
}

export default function Contact({ contacts }: { contacts?: Contacts | null }) {
  const email = contacts?.email || "ryuyakinjo@gmail.com";
  const location = contacts?.location || "沖縄県中城村";

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
          <p className="text-sm font-bold text-[#2563EB] mb-3">お問い合わせ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
            まずは無料相談から
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mx-auto">
            AI導入の検討、業務効率化のご相談など、お気軽にお問い合わせください。初回相談は無料です。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">メールアドレス</p>
                  <a href={`mailto:${email}`} className="text-sm text-[#2563EB] hover:underline">{email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">所在地</p>
                  <p className="text-sm text-[#475569]">{location}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-xl p-6 text-white">
              <p className="text-sm font-bold mb-2">初回相談は無料です</p>
              <p className="text-xs text-white/60 leading-relaxed">
                AI導入の悩み、業務効率化の課題など、まずはお気軽にご相談ください。現場を知る看護師の視点から、具体的な解決策をご提案します。
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle className="w-12 h-12 text-[#2563EB] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">送信完了</h3>
                <p className="text-sm text-[#475569]">お問い合わせありがとうございます。2営業日以内にご返信します。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#2563EB] hover:underline"
                >
                  新しく送信する
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">お名前</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all text-sm"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">メールアドレス</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all text-sm"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">ご相談内容</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 outline-none transition-all resize-none text-sm"
                    placeholder="ご相談内容を具体的にご記入ください"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-[#2563EB] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {submitting ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}