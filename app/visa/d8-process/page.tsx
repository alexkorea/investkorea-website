import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D8ProcessContent } from "@/app/visa/d8-process/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <D8ProcessContent t={pageTranslations.ko.visaD8Process} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
