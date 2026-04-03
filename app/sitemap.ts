import type { MetadataRoute } from "next"
import { getPostSlugs } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://investkorea.co.kr"
  const locales = ["", "/en", "/zh", "/ja"]

  const routes = [
    "",
    "/company/fdi",
    "/company/branch",
    "/company/liaison",
    "/company/liaison-process",
    "/visa/d8",
    "/visa/d8-process",
    "/visa/d7",
    "/visa/d7-details",
    "/visa/f5",
    "/visa/f5-strategies",
    "/immigration/real-estate",
    "/immigration/public-interest",
    "/about",
    "/blog",
    "/contact",
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      })
    }
  }

  // Blog post pages
  const slugs = getPostSlugs()
  for (const slug of slugs) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  }

  return sitemapEntries
}
