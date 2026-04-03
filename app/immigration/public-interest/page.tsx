import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { PublicInterestContent } from "@/app/immigration/public-interest/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PublicInterestContent t={pageTranslations.ko.immigrationPublicInterest} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
