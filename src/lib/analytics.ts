import { track as trackVercelEvent } from "@vercel/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName =
  | "page_view"
  | "media_card_click"
  | "share_click"
  | "guest_link_click"
  | "contact_cta_click"
  | "filter_change"
  | "transcript_open";

export type AnalyticsPageType = "home" | "media_list" | "media_post" | "other";

type AnalyticsValue = string | number | boolean | null | undefined;

export type AnalyticsEventParams = {
  page_type?: AnalyticsPageType;
  page_path?: string;
  page_query?: string;
  post_id?: string;
  post_title?: string;
  category?: string;
  position?: string;
  share_type?: string;
  cta_target?: string;
  guest_name?: string;
  link_label?: string;
  transcript_state?: string;
  destination_url?: string;
};

function sanitizeParams(params: AnalyticsEventParams): Record<string, AnalyticsValue> {
  return Object.fromEntries(Object.entries(params).filter(([, value]) => value !== undefined));
}

export function getPageType(pathname: string): AnalyticsPageType {
  if (pathname === "/") {
    return "home";
  }

  if (pathname === "/media") {
    return "media_list";
  }

  if (pathname.startsWith("/media/")) {
    return "media_post";
  }

  return "other";
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = sanitizeParams(params);

  if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  trackVercelEvent(name, payload);
}
