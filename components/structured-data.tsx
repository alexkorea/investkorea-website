import { type Locale } from "@/lib/translations"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VISION 행정사사무소",
  alternateName: "VISION Administrative Office",
  url: "https://investkorea.co.kr",
  logo: "https://investkorea.co.kr/icon.svg",
  image: "https://investkorea.co.kr/og-image.png",
  description:
    "외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅 서비스를 제공하는 VISION 행정사사무소",
  telephone: "02-363-2251",
  email: "5000meter@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "퇴계로 324, 3층 (성우빌딩)",
    addressLocality: "중구 광희동",
    addressRegion: "서울특별시",
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
  sameAs: ["https://investkorea.co.kr"],
}

export function StructuredData({ locale = "ko" }: { locale?: Locale }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
