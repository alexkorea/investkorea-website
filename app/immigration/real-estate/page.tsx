import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { RealEstateContent } from "@/app/immigration/real-estate/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("immigrationRealEstate", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "투자이민", path: "/immigration/real-estate" },
        { label: "부동산 투자이민", path: "/immigration/real-estate" },
      ]} locale="ko" />
      <ServiceJsonLd name="부동산 투자이민" description="부동산 투자이민 전문 컨설팅" locale="ko" path="/immigration/real-estate" />
      <RealEstateContent t={pageTranslations.ko.immigrationRealEstate} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
