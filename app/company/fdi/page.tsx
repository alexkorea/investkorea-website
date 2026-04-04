import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { FdiContent } from "@/app/company/fdi/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("companyFdi", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사설립", path: "/company/fdi" },
        { label: "외국인투자법인설립 (FDI)", path: "/company/fdi" },
      ]} locale="ko" />
      <ServiceJsonLd name="외국인투자법인설립 (FDI)" description="외국인 투자법인 설립 전문 컨설팅" locale="ko" path="/company/fdi" />
      <FdiContent t={pageTranslations.ko.companyFdi} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
