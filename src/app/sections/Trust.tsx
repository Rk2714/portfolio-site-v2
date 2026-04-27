import { Stethoscope, Brain, Users } from "lucide-react";

const trustItems = [
  { value: "13年", label: "看護師としての臨床経験", icon: Stethoscope },
  { value: "3施設", label: "AI導入支援実績", icon: Brain },
  { value: "50名+", label: "スタッフ育成支援", icon: Users },
];

export default function Trust() {
  return (
    <section className="py-16 md:py-20 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[#60A5FA]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}