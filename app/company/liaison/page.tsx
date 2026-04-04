import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { LiaisonContent } from "@/app/company/liaison/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("companyLiaison", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사설립", path: "/company/fdi" },
        { label: "연락사무소 설치", path: "/company/liaison" },
      ]} locale="ko" />
      <ServiceJsonLd name="연락사무소 설치" description="외국 기업 연락사무소 설치 전문 컨설팅" locale="ko" path="/company/liaison" />
      <LiaisonContent t={pageTranslations.ko.companyLiaison} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
