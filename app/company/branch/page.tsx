import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { BranchContent } from "@/app/company/branch/content"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <BranchContent t={pageTranslations.ko.companyBranch} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
