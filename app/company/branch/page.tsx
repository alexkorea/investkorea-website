import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { BranchContent } from "@/app/company/branch/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("companyBranch", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사설립", path: "/company/fdi" },
        { label: "국내 지사 설치", path: "/company/branch" },
      ]} locale="ko" />
      <ServiceJsonLd name="국내 지사 설치" description="외국 기업 국내 지사 설치 전문 컨설팅" locale="ko" path="/company/branch" />
      <BranchContent t={pageTranslations.ko.companyBranch} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
