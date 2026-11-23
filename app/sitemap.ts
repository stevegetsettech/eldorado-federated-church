import type { MetadataRoute } from "next";

const siteUrl = "https://www.eldoradofederatedchurch.org";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/visit",
    "/about",
    "/ministries",
    "/worship",
    "/give",
    "/praise-and-prayer-requests",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
