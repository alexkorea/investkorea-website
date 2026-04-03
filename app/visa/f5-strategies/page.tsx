import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5StrategiesContent } from "@/app/visa/f5-strategies/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <F5StrategiesContent t={pageTranslations.ko.visaF5Strategies} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
