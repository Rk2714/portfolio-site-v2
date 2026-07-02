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
    radio: "bg-[#FFF8F0] text-[#0F172A] hover:bg-white border-[#E2E8F0]",
    guest: "bg-[#FFF8F0] text-[#0F172A] hover:bg-white border-[#E2E8F0]",
    appear: "bg-[#FFF8F0] text-[#0F172A] hover:bg-white border-[#E2E8F0]",
    note: "bg-[#FFF8F0] text-[#0F172A] hover:bg-white border-[#E2E8F0]",
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
            className={`inline-flex items-center gap-2 rounded-[4px] border px-4 py-2 text-xs font-bold transition-all ${
              item.active ? colorMap[item.key] : "bg-white text-[#475569] border-[#E2E8F0] hover:bg-[#FFF8F0]"
            }`}
          >
            <span>{item.label}</span>
            <span className={`min-w-5 px-1 py-0.5 text-center text-[10px] ${item.active ? "bg-white/20" : "bg-[#FFF8F0]"}`}>
              {item.count}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs text-[#64748B]">この絞り込みURLはそのまま共有できます。</p>
    </div>
  );
}
