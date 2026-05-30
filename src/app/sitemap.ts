import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kangitensoftware.com",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}