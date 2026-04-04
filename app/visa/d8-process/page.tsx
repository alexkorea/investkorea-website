import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D8ProcessContent } from "@/app/visa/d8-process/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD8Process", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-8 비자 발급 절차", path: "/visa/d8-process" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-8 비자 발급 절차" description="D-8 비자 발급 절차 안내" locale="ko" path="/visa/d8-process" />
      <D8ProcessContent t={pageTranslations.ko.visaD8Process} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
