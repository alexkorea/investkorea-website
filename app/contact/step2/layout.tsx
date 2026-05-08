import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "상세 정보 입력 - 투자비자 비전행정사사무소",
  description:
    "상담 신청의 세부 정보를 입력해 주세요. 전문 행정사가 맞춤 상담을 제공합니다.",
  robots: { index: false },
}

export default function Step2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
