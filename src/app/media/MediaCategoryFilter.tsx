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
    all: "bg-[#3E2A1F] text-white hover:bg-[#d43d0e] border-[#3E2A1F]",
    radio: "bg-[#fef5f0] text-[#111111] hover:bg-white border-[#dedbd6]",
    guest: "bg-[#fef5f0] text-[#111111] hover:bg-white border-[#dedbd6]",
    appear: "bg-[#fef5f0] text-[#111111] hover:bg-white border-[#dedbd6]",
    note: "bg-[#fef5f0] text-[#111111] hover:bg-white border-[#dedbd6]",
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
              item.active ? colorMap[item.key] : "bg-white text-[#7b7b78] border-[#dedbd6] hover:bg-[#fef5f0]"
            }`}
          >
            <span>{item.label}</span>
            <span className={`min-w-5 px-1 py-0.5 text-center text-[10px] ${item.active ? "bg-white/20" : "bg-[#fef5f0]"}`}>
              {item.count}
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs text-[#a0a09c]">この絞り込みURLはそのまま共有できます。</p>
    </div>
  );
}
