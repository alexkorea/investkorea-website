import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { AboutContent } from "@/app/about/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <AboutContent t={pageTranslations.ko.about} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
