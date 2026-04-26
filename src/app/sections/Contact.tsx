"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Link, MessageSquare } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const contactMethods = [
  {
    icon: Mail,
    title: "メール",
    value: "お問い合わせはこちら",
    href: "mailto:contact@example.com",
    description: "業務提携・お仕事のご相談はメールにて",
  },
  {
    icon: Link,
    title: "LinkedIn",
    value: "プロフィールを見る",
    href: "#",
    description: "経歴やスキルの詳細はLinkedInにて",
  },
  {
    icon: MessageSquare,
    title: "X / Twitter",
    value: "フォローする",
    href: "#",
    description: "日々の活動や考えを発信しています",
  },
];

export default function Contact() {
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
            href={method.href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#0066CC]/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066CC]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066CC] transition-colors">
              <method.icon className="w-6 h-6 text-[#0066CC] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">{method.title}</h3>
            <p className="text-[#0066CC] font-medium mb-2 flex items-center gap-1">
              {method.value}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
            <p className="text-sm text-[#6B7280]">{method.description}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
      >
        <div className="flex items-center justify-center gap-2 text-[#6B7280] mb-4">
          <MapPin size={18} />
          <span className="text-sm">沖縄県中城村</span>
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
