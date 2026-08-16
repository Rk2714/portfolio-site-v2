import type { MetadataRoute } from "next";
import { getAllMediaPosts } from "../lib/media-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-site-xi-eight-33.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const mediaPosts = getAllMediaPosts().map((post) => ({
    url: `${siteUrl}/media/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/media`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/radio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...mediaPosts,
  ];
}
