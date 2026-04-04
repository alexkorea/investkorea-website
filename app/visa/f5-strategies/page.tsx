import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5StrategiesContent } from "@/app/visa/f5-strategies/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaF5Strategies", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "영주권 전략", path: "/visa/f5-strategies" },
      ]} locale="ko" />
      <ServiceJsonLd name="영주권 전략" description="F-5 영주권 취득 전략 안내" locale="ko" path="/visa/f5-strategies" />
      <F5StrategiesContent t={pageTranslations.ko.visaF5Strategies} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
