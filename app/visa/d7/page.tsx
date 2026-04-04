import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7Content } from "@/app/visa/d7/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD7", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-7 주재원비자", path: "/visa/d7" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-7 주재원비자" description="D-7 주재원비자 발급 전문 컨설팅" locale="ko" path="/visa/d7" />
      <D7Content t={pageTranslations.ko.visaD7} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
