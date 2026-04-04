import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { FdiContent } from "@/app/company/fdi/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("companyFdi", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사설립", path: "/company/fdi" },
        { label: "외국인투자법인설립 (FDI)", path: "/company/fdi" },
      ]} locale="ko" />
      <ServiceJsonLd name="외국인투자법인설립 (FDI)" description="외국인 투자법인 설립 전문 컨설팅" locale="ko" path="/company/fdi" />
      <FaqJsonLd faqs={[
        { question: "외국인투자법인 설립에 최소 얼마가 필요한가요?", answer: "외국인 투자 촉진법에 따라 최소 1억 원(약 USD 80,000) 이상의 투자가 필요합니다. 외국인 투자자는 의결권 있는 주식의 10% 이상을 보유해야 합니다." },
        { question: "외국인투자법인과 지사의 차이점은 무엇인가요?", answer: "외국인투자법인은 독립된 법인격을 가지며 세금 감면 혜택과 D-8 비자 신청 자격이 주어집니다. 반면 지사는 해외 본사의 일부로 운영되며 별도 자본금 요건이 없지만 투자 인센티브가 제한적입니다." },
        { question: "법인 설립까지 얼마나 걸리나요?", answer: "일반적으로 서류 준비부터 법인 등기까지 약 2~4주가 소요됩니다. 외국인투자 신고, 투자금 송금, 등기, 사업자등록 순으로 진행됩니다." },
      ]} />
      <FdiContent t={pageTranslations.ko.companyFdi} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
