"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Link, MessageSquare, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

interface Contacts {
  email?: string;
  linkedin?: string;
  twitter?: string;
  location?: string;
}

export default function Contact({ contacts }: { contacts?: Contacts | null }) {
  const email = contacts?.email || "ryuyakinjo@gmail.com";
  const linkedin = contacts?.linkedin || "#";
  const twitter = contacts?.twitter || "#";
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
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

  const contactMethods = [
    {
      icon: Mail,
      title: "メール",
      value: email,
      href: `mailto:${email}`,
      description: "業務提携・お仕事のご相談はメールにて",
    },
    {
      icon: Link,
      title: "LinkedIn",
      value: linkedin !== "#" ? "プロフィールを見る" : "準備中",
      href: linkedin,
      description: "経歴やスキルの詳細はLinkedInにて",
      disabled: linkedin === "#",
    },
    {
      icon: MessageSquare,
      title: "X / Twitter",
      value: twitter !== "#" ? "フォローする" : "準備中",
      href: twitter,
      description: "日々の活動や考えを発信しています",
      disabled: twitter === "#",
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-[#FAFBFC]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">Contact</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto">
          医療・AI・地方創生に関するご相談、業務提携のお話など、お気軽にお問い合わせください。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.title}
            href={method.disabled ? undefined : method.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#0066CC]/20 transition-all duration-300 ${
              method.disabled ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066CC]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066CC] transition-colors">
              <method.icon className="w-6 h-6 text-[#0066CC] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{method.title}</h3>
            <p className="text-[#0066CC] font-medium mb-2 flex items-center gap-1">
              {method.value}
              {!method.disabled && (
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </p>
            <p className="text-sm text-[#6B7280]">{method.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 border border-gray-100 mb-12"
      >
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">送信完了</h3>
            <p className="text-[#6B7280]">お問い合わせありがとうございます。折り返しご連絡いたします。</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052a3] transition-colors"
            >
              新規送信
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">お問い合わせフォーム</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">お名前</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A2E] mb-2">メールアドレス</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A2E] mb-2">メッセージ</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 outline-none transition-all resize-none"
                placeholder="ご相談内容をお書きください..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full md:w-auto px-8 py-4 bg-[#0066CC] text-white font-semibold rounded-xl hover:bg-[#0052a3] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0066CC]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {submitting ? "送信中..." : "送信する"}
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-[#6B7280] mb-4">
          <MapPin size={18} />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-[#1A1A2E] font-semibold mb-2">
          看護師 × AIコンサルタント × キャリアコンサルタント
        </p>
        <p className="text-sm text-[#6B7280]">
          医療とテクノロジーの架け橋に。地方創生からグローバル医療まで。
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
