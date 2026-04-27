import { ClipboardList, Clock, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "人手不足が深刻化",
    description: "看護師不足により、記録業務や事務作業に追われ、本来の患者ケアに時間が割けない現場が増えています。",
  },
  {
    icon: ClipboardList,
    title: "AI導入の壁",
    description: "AIツールの導入を検討しても、どれを選べばよいか、現場にどう定着させるかが分からず手が止まっています。",
  },
  {
    icon: TrendingDown,
    title: "効果が見えない",
    description: "IT投資をしても「現場で使われない」「期待した効果が出ない」という課題に直面しています。",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-sm font-bold text-[#2563EB] mb-3">課題</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-12">
          医療現場が抱える3つの課題
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item) => (
            <div key={item.title} className="p-6 rounded-lg border border-gray-100 hover:border-[#2563EB]/20 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}