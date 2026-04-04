import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7DetailsContent } from "@/app/visa/d7-details/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD7Details", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-7 비자 발급요건", path: "/visa/d7-details" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-7 비자 발급요건" description="D-7 비자 발급요건 안내" locale="ko" path="/visa/d7-details" />
      <D7DetailsContent t={pageTranslations.ko.visaD7Details} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
