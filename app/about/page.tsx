import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { AboutContent } from "@/app/about/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("about", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사소개", path: "/about" },
      ]} locale="ko" />
      <ServiceJsonLd name="VISION 행정사사무소" description="외국인 투자의 성공 파트너, VISION 행정사사무소" locale="ko" path="/about" />
      <AboutContent t={pageTranslations.ko.about} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
