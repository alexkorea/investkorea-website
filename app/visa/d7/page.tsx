import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7Content } from "@/app/visa/d7/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD7", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-7 주재원비자", path: "/visa/d7" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-7 주재원비자" description="D-7 주재원비자 발급 전문 컨설팅" locale="ko" path="/visa/d7" />
      <FaqJsonLd faqs={[
        { question: "D-7 비자의 대상은 누구인가요?", answer: "해외 본사에서 한국 지사, 자회사, 연락사무소 등으로 파견되는 필수전문인력(주재원)이 대상입니다. 1년 이상 해외 본사 근무 경력이 필요합니다." },
        { question: "D-7 비자와 E-7 비자의 차이는 무엇인가요?", answer: "D-7은 해외 본사에서 한국으로 파견되는 주재원 비자이고, E-7은 한국 기업이 직접 고용하는 외국인 전문인력 비자입니다." },
        { question: "D-7 비자의 체류기간은 얼마인가요?", answer: "최초 2년이 부여되며, 파견 기간에 따라 최대 5년까지 연장 가능합니다." },
      ]} />
      <D7Content t={pageTranslations.ko.visaD7} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
