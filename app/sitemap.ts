export const dynamic = "force-static";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://revin.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
