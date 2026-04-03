import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://investkorea.co.kr"
  const locales = ["", "/en", "/zh", "/ja"]

  const routes = [
    "",
    "/company-establishment/fdi",
    "/company-establishment/branch-office",
    "/company-establishment/liaison-office",
    "/d8-visa",
    "/d8-visa/eligibility",
    "/d7-visa",
    "/d7-visa/eligibility",
    "/f5-investment",
    "/f5-investment/permanent-residency",
    "/f5-investment/real-estate",
    "/f5-investment/public-interest",
    "/about",
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

  return sitemapEntries
}
