"use client";

import { ExternalLink } from "lucide-react";
import type { AnalyticsEventName, AnalyticsEventParams } from "../../lib/analytics";
import { trackEvent } from "../../lib/analytics";

interface Props {
  label: string;
  url: string;
  eventName?: AnalyticsEventName;
  eventParams?: AnalyticsEventParams;
}

export default function LinkCard({ label, url, eventName, eventParams }: Props) {
  const domain = url.replace(/https?:\/\//, "").split("/")[0] || "";
  const favicon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (!eventName) {
          return;
        }

        trackEvent(eventName, {
          ...eventParams,
          link_label: label,
          destination_url: url,
        });
      }}
      className="group flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-[#D97706]/30 hover:bg-[#FFFCF9] transition-all"
    >
      <div className="w-10 h-10 bg-[#FFF5EB] flex items-center justify-center flex-shrink-0 overflow-hidden">
        <img
          src={favicon}
          alt=""
          className="w-5 h-5"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#D97706]"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>';
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#D97706] transition-colors truncate">
          {label}
        </p>
        <p className="text-xs text-[#94A3B8] truncate">{domain}</p>
      </div>
      <ExternalLink size={14} className="text-[#CBD5E1] group-hover:text-[#D97706] transition-colors flex-shrink-0" />
    </a>
  );
}
