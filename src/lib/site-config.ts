export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yazirusi.com"
).replace(/\/$/, "");

// yazirusi.com currently redirects every path to the homepage.
// Share the direct production URL until domain forwarding preserves paths.
export const SHARE_SITE_URL = "https://portfolio-site-xi-eight-33.vercel.app";
