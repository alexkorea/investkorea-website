import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { ContactContent } from "@/app/contact/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("contact", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "문의하기", path: "/contact" },
      ]} locale="ko" />
      <ServiceJsonLd name="무료 상담" description="전문 행정사에게 직접 상담받으세요" locale="ko" path="/contact" />
      <FaqJsonLd faqs={[
        { question: "상담 비용이 있나요?", answer: "초기 전화 및 이메일 상담은 무료입니다. 구체적인 서류 검토나 심층 상담은 사안에 따라 비용이 발생할 수 있습니다." },
        { question: "상담 가능 언어는 무엇인가요?", answer: "한국어, 영어, 중국어, 일본어로 상담이 가능합니다." },
        { question: "방문 상담도 가능한가요?", answer: "네, 서울 중구 퇴계로 324 성우빌딩 3층 사무실로 방문 상담 가능합니다. 사전 예약을 권장드립니다." },
      ]} />
      <ContactContent t={pageTranslations.ko.contact} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
