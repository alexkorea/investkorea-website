import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5Content } from "@/app/visa/f5/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaF5", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "F-5 영주권", path: "/visa/f5" },
      ]} locale="ko" />
      <ServiceJsonLd name="F-5 영주권" description="F-5 영주권 취득 전문 컨설팅" locale="ko" path="/visa/f5" />
      <FaqJsonLd faqs={[
        { question: "F-5 영주권 취득에 필요한 투자금액은 얼마인가요?", answer: "고액투자 이민의 경우 5억 원 이상 투자가 필요합니다. 부동산 투자이민은 지역에 따라 5억~7억 원입니다." },
        { question: "F-5 영주권은 영구적인가요?", answer: "F-5 영주권은 영구적이지만, 2년마다 체류지 변경신고를 해야 하며, 대한민국에 일정 기간 이상 거주해야 합니다. 장기간 출국 시 재입국 허가가 필요합니다." },
        { question: "투자 후 영주권 취득까지 얼마나 걸리나요?", answer: "투자 완료 후 심사 기간은 약 3~6개월입니다. 다만 투자금 유지, 범죄 기록 조회 등 추가 확인이 필요할 수 있습니다." },
      ]} />
      <F5Content t={pageTranslations.ko.visaF5} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
