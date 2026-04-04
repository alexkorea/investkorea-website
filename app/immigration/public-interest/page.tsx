import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { PublicInterestContent } from "@/app/immigration/public-interest/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("immigrationPublicInterest", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "투자이민", path: "/immigration/real-estate" },
        { label: "공익사업 이민", path: "/immigration/public-interest" },
      ]} locale="ko" />
      <ServiceJsonLd name="공익사업 이민" description="공익사업 투자이민 전문 컨설팅" locale="ko" path="/immigration/public-interest" />
      <PublicInterestContent t={pageTranslations.ko.immigrationPublicInterest} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
