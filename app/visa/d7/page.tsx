import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7Content } from "@/app/visa/d7/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <D7Content t={pageTranslations.ko.visaD7} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
