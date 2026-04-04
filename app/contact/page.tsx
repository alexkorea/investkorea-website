import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { ContactContent } from "@/app/contact/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("contact", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "문의하기", path: "/contact" },
      ]} locale="ko" />
      <ServiceJsonLd name="무료 상담" description="전문 행정사에게 직접 상담받으세요" locale="ko" path="/contact" />
      <ContactContent t={pageTranslations.ko.contact} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
