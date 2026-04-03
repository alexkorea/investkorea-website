import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { FdiContent } from "@/app/company/fdi/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <FdiContent t={pageTranslations.ko.companyFdi} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
