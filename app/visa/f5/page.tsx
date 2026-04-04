import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5Content } from "@/app/visa/f5/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaF5", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "F-5 영주권", path: "/visa/f5" },
      ]} locale="ko" />
      <ServiceJsonLd name="F-5 영주권" description="F-5 영주권 취득 전문 컨설팅" locale="ko" path="/visa/f5" />
      <F5Content t={pageTranslations.ko.visaF5} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
