import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { LiaisonProcessContent } from "@/app/company/liaison-process/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <LiaisonProcessContent t={pageTranslations.ko.companyLiaisonProcess} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
