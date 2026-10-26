import type { MetadataRoute } from "next";
import { caseStudies, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/offres", "/projets", "/a-propos", "/contact"];
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/projets/${study.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
