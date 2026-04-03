import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D8Content } from "@/app/visa/d8/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <D8Content t={pageTranslations.ko.visaD8} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
