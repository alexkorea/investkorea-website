import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D8Content } from "@/app/visa/d8/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD8", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-8 기업투자비자", path: "/visa/d8" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-8 기업투자비자" description="D-8 기업투자비자 발급 전문 컨설팅" locale="ko" path="/visa/d8" />
      <D8Content t={pageTranslations.ko.visaD8} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
