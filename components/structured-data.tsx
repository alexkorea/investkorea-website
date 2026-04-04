import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

const BASE_URL = "https://investkorea.co.kr"

// Organization + ProfessionalService for homepage
const orgData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "VISION 행정사사무소",
  alternateName: "VISION Administrative Office",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  image: `${BASE_URL}/og-image.png`,
  description:
    "외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅 서비스를 제공하는 VISION 행정사사무소",
  telephone: "02-363-2251",
  email: "5000meter@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "퇴계로 324, 3층 (성우빌딩)",
    addressLocality: "중구 광희동",
    addressRegion: "서울특별시",
    postalCode: "04620",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5665,
    longitude: 126.978,
  },
  areaServed: {
    "@type": "Country",
    name: "South Korea",
  },
  serviceType: [
    "Foreign Investment Consulting",
    "Company Establishment",
    "Visa Processing",
    "Immigration Consulting",
    "D-8 Visa",
    "D-7 Visa",
    "F-5 Permanent Residency",
    "Real Estate Immigration",
  ],
  knowsLanguage: ["ko", "en", "zh", "ja"],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
}

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "VISION 행정사사무소",
  url: BASE_URL,
  inLanguage: ["ko", "en", "zh", "ja"],
  publisher: { "@id": `${BASE_URL}/#organization` },
}

// Homepage: Organization + WebSite
export function StructuredData({ locale = "ko" }: { locale?: Locale }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}

// Breadcrumb JSON-LD for service pages
type BreadcrumbItem = { name: string; path: string }

export function BreadcrumbJsonLd({
  items,
  locale = "ko",
}: {
  items: BreadcrumbItem[]
  locale?: Locale
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${getLocalePath(locale, item.path)}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}

// Service page JSON-LD
export function ServiceJsonLd({
  name,
  description,
  locale = "ko",
  path,
}: {
  name: string
  description: string
  locale?: Locale
  path: string
}) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${getLocalePath(locale, path)}`,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "South Korea" },
    inLanguage: locale,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  )
}

// Blog article JSON-LD
export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  locale = "ko",
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  locale?: Locale
}) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}${getLocalePath(locale, `/blog/${slug}`)}`,
    datePublished,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: locale,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  )
}
