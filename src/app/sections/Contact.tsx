"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle } from "lucide-react";

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
        alert("送信に失敗しました。");
      }
    } catch {
      alert("送信に失敗しました。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/hero-medical.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A0A0F]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#FF4D00] mb-6">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              一緒に<br />未来を創る
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-12">
              医療・AI・地方創生に関するご相談、業務提携のお話など、お気軽にお問い合わせください。
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <Mail size={18} strokeWidth={1} className="text-white/60" />
                </div>
                <div>
                  <p className="text-xs text-white/40 tracking-wide uppercase">Email</p>
                  <a href={`mailto:${email}`} className="text-white hover:text-[#FF4D00] transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1} className="text-white/60" />
                </div>
                <div>
                  <p className="text-xs text-white/40 tracking-wide uppercase">Location</p>
                  <p className="text-white">{location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle size={48} strokeWidth={1} className="text-[#FF4D00] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">送信完了</h3>
                <p className="text-white/50">お問い合わせありがとうございます。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-white/40 hover:text-white transition-colors tracking-wide"
                >
                  新規送信
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs text-white/40 tracking-[0.2em] uppercase mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#FF4D00] outline-none transition-colors placeholder:text-white/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 tracking-[0.2em] uppercase mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#FF4D00] outline-none transition-colors placeholder:text-white/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 tracking-[0.2em] uppercase mb-3">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-lg focus:border-[#FF4D00] outline-none transition-colors resize-none placeholder:text-white/20"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex items-center gap-3 text-white hover:text-[#FF4D00] transition-colors disabled:opacity-50"
                >
                  <span className="text-sm font-bold tracking-[0.2em] uppercase">
                    {submitting ? "Sending..." : "Send Message"}
                  </span>
                  <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
