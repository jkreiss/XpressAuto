import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes = ["/", "/servicing", "/repairs", "/store", "/tyres"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
