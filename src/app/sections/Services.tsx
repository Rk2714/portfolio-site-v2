import { Brain, FileCheck, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI導入コンサルティング",
    description: "現場の業務フローを分析し、最適なAIツール（議事録自動化、チャットボット等）の選定から定着支援まで一貫して対応します。",
    features: ["業務フロー分析", "ツール選定・比較", "導入支援・定着化"],
  },
  {
    icon: FileCheck,
    title: "業務効率化支援",
    description: "看護師13年の経験に基づき、現場の視点で業務プロセスを見直し、契約書管理やマニュアル整備など具体的な改善を実施します。",
    features: ["業務プロセス改善", "契約書テンプレート化", "マニュアル整備"],
  },
  {
    icon: MessageCircle,
    title: "医療通訳・人材育成",
    description: "英語での医療通訳サービスと、スタッフ育成プログラムの構築を支援。インバウンド医療対応の人材基盤を強化します。",
    features: ["医療通訳（英語）", "スタッフ育成プログラム", "多言語対応支援"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-[#2563EB] mb-3">サービス</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
          提供する3つのサービス
        </h2>
        <p className="text-base text-[#475569] mb-12 max-w-2xl">
          現場を知るからこそできる、医療特化のコンサルティングを提供します。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg hover:border-[#2563EB]/10 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{service.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#334155]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}