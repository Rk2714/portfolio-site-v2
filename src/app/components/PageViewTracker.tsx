"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getPageType, trackEvent } from "../../lib/analytics";

let lastTrackedPageViewKey = "";

export default function PageViewTracker() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    const pageViewKey = pathname;

    if (lastTrackedPageViewKey === pageViewKey) {
      return;
    }

    lastTrackedPageViewKey = pageViewKey;

    trackEvent("page_view", {
      page_type: getPageType(pathname),
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
