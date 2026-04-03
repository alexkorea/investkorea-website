import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7DetailsContent } from "@/app/visa/d7-details/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <D7DetailsContent t={pageTranslations.ko.visaD7Details} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
