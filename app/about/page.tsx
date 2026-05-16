import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { AboutContent } from "@/app/about/content"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd, FaqJsonLd } from "@/components/structured-data"

export const metadata = getPageMetadata("about", "ko")

const aboutFaqs = [
  { question: "VISION 행정사사무소는 어떤 업무를 담당하나요?", answer: "외국인 투자법인 설립(FDI 신고·법인설립·사업자등록), D-8 기업투자비자, D-7 주재원비자, E-7 특정활동비자, F-5 영주권(투자 영주권 포함), F-2-7 점수제 거주 비자, 체류 연장·변경 등 외국인 체류와 투자 관련 모든 행정 업무를 대행합니다." },
  { question: "VISION 행정사사무소는 법무법인인가요?", answer: "아닙니다. 행정사법에 따라 인가된 행정사사무소입니다. 인허가 서류 준비 및 관계 행정기관 제출을 대행합니다. 소송·재판·형사 변호 등 변호사 업무는 취급하지 않습니다." },
  { question: "상담은 무료인가요?", answer: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다. 전화(02-363-2251), 이메일, KakaoTalk·WeChat·LINE·WhatsApp으로 문의하실 수 있습니다." },
  { question: "D-8 기업투자비자와 법인설립을 함께 진행할 수 있나요?", answer: "네. VISION 행정사사무소는 외국인투자신고(FDI 신고), 법인설립 등기, 사업자등록, D-8 비자 신청을 원스톱으로 처리합니다. 투자 금액 1억 원 이상 법인 설립 시 D-8 비자 신청이 가능합니다." },
  { question: "어떤 언어로 상담이 가능한가요?", answer: "한국어, 영어, 중국어(보통화), 일본어 4개 언어로 상담이 가능합니다. 다국어 전문 행정사 팀이 직접 소통합니다." },
  { question: "사무소 위치는 어디인가요?", answer: "서울특별시 중구 퇴계로 324, 3층 성우빌딩입니다. 동대문역사문화공원역 4번 출구에서 도보 1분 거리입니다. 영업시간: 월~금 09:30~18:30 (한국시간)." },
  { question: "F-5 영주권은 투자를 통해서도 취득 가능한가요?", answer: "네. F-5-5(부동산 투자 영주권), F-5-21(공익사업 일반 투자자 영주권), F-5-23(공익사업 은퇴이민 투자자 영주권) 등 투자 기반 F-5 영주권 경로가 있습니다. VISION 행정사사무소는 투자 영주권 경로별 요건 검토 및 신청을 지원합니다." },
]

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "회사소개", path: "/about" },
      ]} locale="ko" />
      <ServiceJsonLd name="VISION 행정사사무소" description="외국인 투자의 성공 파트너, VISION 행정사사무소" locale="ko" path="/about" />
      <FaqJsonLd faqs={aboutFaqs} />
      <AboutContent t={pageTranslations.ko.about} locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
