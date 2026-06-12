"use client";

import Link from "next/link";
import type { MediaCategoryFilter } from "../../lib/media-categories";
import { trackEvent } from "../../lib/analytics";

interface FilterItem {
  key: MediaCategoryFilter;
  label: string;
  count: number;
  href: string;
  active: boolean;
}

export default function MediaCategoryFilter({ items }: { items: FilterItem[] }) {
  const colorMap: Record<MediaCategoryFilter, string> = {
    all: "bg-[#0F172A] text-white hover:bg-[#1E293B] border-[#0F172A]",
    radio: "bg-[#2563EB]/10 text-[#2563EB] hover:bg-[#2563EB]/20 border-[#2563EB]/20",
    guest: "bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/20 border-[#059669]/20",
    appear: "bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 border-[#D97706]/20",
    note: "bg-[#64748B]/10 text-[#64748B] hover:bg-[#64748B]/20 border-[#64748B]/20",
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            onClick={() => {
              trackEvent("filter_change", {
                page_type: "media_list",
                category: item.key === "all" ? undefined : item.key,
                position: "media_list_filter",
              });
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 border text-xs font-medium transition-all ${
              item.active ? colorMap[item.key] : "bg-white text-[#475569] border-gray-200 hover:border-gray-300"
            }`}
          >
            <span>{item.label}</span>
            <span className={`min-w-5 px-1 py-0.5 text-[10px] text-center ${item.active ? "bg-white/20" : "bg-[#F8FAFC]"}`}>
              {item.count}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs text-[#64748B]">この絞り込みURLはそのまま共有できます。</p>
    </div>
  );
}
