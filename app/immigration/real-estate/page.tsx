import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { RealEstateContent } from "@/app/immigration/real-estate/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("immigrationRealEstate", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "투자이민", path: "/immigration/real-estate" },
        { label: "부동산 투자이민", path: "/immigration/real-estate" },
      ]} locale="ko" />
      <ServiceJsonLd name="부동산 투자이민" description="부동산 투자이민 전문 컨설팅" locale="ko" path="/immigration/real-estate" />
      <FaqJsonLd faqs={[
        { question: "어떤 지역의 부동산이 투자이민 대상인가요?", answer: "제주도, 평창 알펜시아, 여수 경도, 인천 영종도, 부산 해운대 등 정부가 지정한 투자이민 특구의 부동산이 대상입니다." },
        { question: "투자 금액 기준은 얼마인가요?", answer: "5억 원 이상(제주도 기준)의 휴양 콘도미니엄 등 지정 부동산에 투자해야 합니다. 지역에 따라 금액 기준이 다를 수 있습니다." },
        { question: "부동산 매각 시 영주권은 유지되나요?", answer: "F-2 거주비자 단계에서 부동산을 매각하면 비자가 취소될 수 있습니다. F-5 영주권 취득 후에는 투자 유지 의무가 완화됩니다." },
      ]} />
      <RealEstateContent t={pageTranslations.ko.immigrationRealEstate} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
