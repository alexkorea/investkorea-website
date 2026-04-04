import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { LiaisonProcessContent } from "@/app/company/liaison-process/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("companyLiaisonProcess", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사설립", path: "/company/fdi" },
        { label: "연락사무소 설치 절차", path: "/company/liaison-process" },
      ]} locale="ko" />
      <ServiceJsonLd name="연락사무소 설치 절차" description="연락사무소 설치 절차 안내" locale="ko" path="/company/liaison-process" />
      <LiaisonProcessContent t={pageTranslations.ko.companyLiaisonProcess} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
