import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { RealEstateContent } from "@/app/immigration/real-estate/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <RealEstateContent t={pageTranslations.ko.immigrationRealEstate} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
