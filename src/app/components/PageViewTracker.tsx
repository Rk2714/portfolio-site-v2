"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getPageType, trackEvent } from "../../lib/analytics";

let lastTrackedPageViewKey = "";

export default function PageViewTracker() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pageViewKey = query ? `${pathname}?${query}` : pathname;

    if (lastTrackedPageViewKey === pageViewKey) {
      return;
    }

    lastTrackedPageViewKey = pageViewKey;

    trackEvent("page_view", {
      page_type: getPageType(pathname),
      page_path: pathname,
      page_query: query || undefined,
    });
  }, [pathname, searchParams]);

  return null;
}
