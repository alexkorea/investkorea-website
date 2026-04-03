import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { LiaisonContent } from "@/app/company/liaison/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <LiaisonContent t={pageTranslations.ko.companyLiaison} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
