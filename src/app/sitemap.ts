import type { MetadataRoute } from "next";
import { getAllMediaPosts } from "../lib/media-data";
import { SITE_URL } from "../lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const mediaPosts = getAllMediaPosts().map((post) => ({
    url: `${SITE_URL}/media/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/media`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/radio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...mediaPosts,
  ];
}
