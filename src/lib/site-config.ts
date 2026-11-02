export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yazirusi.com"
).replace(/\/$/, "");

// Direct production share URL retained for existing published links.
// 2026-11-02: custom-domain redirects preserve /pricing and /radio paths.
export const SHARE_SITE_URL = "https://portfolio-site-xi-eight-33.vercel.app";
