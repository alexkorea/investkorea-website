import type { MetadataRoute } from "next"
import { getPostSlugs } from "@/lib/blog"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://investkorea.co.kr"
  const localeMap = [
    { prefix: "", hreflang: "ko" },
    { prefix: "/en", hreflang: "en" },
    { prefix: "/zh", hreflang: "zh" },
    { prefix: "/ja", hreflang: "ja" },
  ]

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/company/fdi", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/company/branch", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/company/liaison", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/company/liaison-process", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/visa/d8", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/visa/d8-process", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/visa/d7", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/visa/d7-details", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/visa/f5", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/visa/f5-strategies", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/immigration/real-estate", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/immigration/public-interest", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const route of routes) {
    for (const loc of localeMap) {
      const alternates: Record<string, string> = {}
      for (const alt of localeMap) {
        alternates[alt.hreflang] = `${baseUrl}${alt.prefix}${route.path}`
      }

      sitemapEntries.push({
        url: `${baseUrl}${loc.prefix}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages: alternates },
      })
    }
  }

  // Blog post pages
  const slugs = await getPostSlugs()
  for (const slug of slugs) {
    for (const loc of localeMap) {
      const alternates: Record<string, string> = {}
      for (const alt of localeMap) {
        alternates[alt.hreflang] = `${baseUrl}${alt.prefix}/blog/${slug}`
      }

      sitemapEntries.push({
        url: `${baseUrl}${loc.prefix}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: alternates },
      })
    }
  }

  return sitemapEntries
}
