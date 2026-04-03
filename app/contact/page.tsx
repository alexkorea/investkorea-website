import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { ContactContent } from "@/app/contact/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <ContactContent t={pageTranslations.ko.contact} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
