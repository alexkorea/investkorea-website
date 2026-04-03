import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5Content } from "@/app/visa/f5/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <F5Content t={pageTranslations.ko.visaF5} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
