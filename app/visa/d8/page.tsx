import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D8Content } from "@/app/visa/d8/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("visaD8", "ko")

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "비자", path: "/visa/d8" },
        { label: "D-8 기업투자비자", path: "/visa/d8" },
      ]} locale="ko" />
      <ServiceJsonLd name="D-8 기업투자비자" description="D-8 기업투자비자 발급 전문 컨설팅" locale="ko" path="/visa/d8" />
      <FaqJsonLd faqs={[
        { question: "D-8 비자의 유효기간은 얼마인가요?", answer: "D-8 비자의 최초 체류기간은 일반적으로 1~2년이며, 사업 운영 상태에 따라 갱신이 가능합니다. 갱신 시 최대 3년까지 연장할 수 있습니다." },
        { question: "D-8 비자로 가족 초청이 가능한가요?", answer: "네, D-8 비자 소지자는 배우자와 미성년 자녀를 F-3(동반) 비자로 초청할 수 있습니다." },
        { question: "D-8 비자 신청 시 사무실이 반드시 필요한가요?", answer: "네, 실제 사업 운영이 가능한 국내 사무실 주소가 필요합니다. 공유오피스나 가상오피스는 인정되지 않을 수 있습니다." },
      ]} />
      <D8Content t={pageTranslations.ko.visaD8} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
