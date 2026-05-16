import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type AboutTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.about

export function AboutContent({ t, locale = "ko" }: { t: AboutTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/about.jpg" alt="VISION 행정사사무소 소개" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">{t.badge}</div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">{t.title}</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.introTitle}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{t.introP1}</p>
                <p className="text-gray-600 leading-relaxed">{t.introP2}</p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.statsTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.stats.map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.expertiseTitle}</h2>
                <div className="space-y-3">
                  {t.expertise.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.teamTitle}</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{t.teamAdminLabel}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {t.teamAdmins.map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.role} | {item.lang}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">{t.teamOfficeLabel}</h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {t.teamOffice.map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.locationTitle}</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="space-y-2 text-gray-600">
                    <p><strong>{t.addressLabel}</strong> {t.locationAddress}</p>
                    <p><strong>{t.phoneLabel}</strong> {t.locationPhone}</p>
                    <p><strong>{t.emailLabel}</strong> {t.locationEmail}</p>
                    <p><strong>{t.hoursLabel}</strong> {t.locationHours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif font-bold text-gray-900 mb-3">{t.sidebarTitle}</h3>
                <ul className="space-y-2">
                  {t.sidebarLinks.map((link, i) => (
                    <li key={i}><Link href={getLocalePath(locale, link.href)} className="text-blue-600 hover:underline text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-blue-100 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-blue-700 font-semibold text-sm h-10 rounded-lg hover:bg-blue-50 transition-colors">{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 text-center mb-2">자주 묻는 질문</h2>
          <p className="text-center text-gray-500 text-sm mb-10">VISION 행정사사무소에 대해 자주 묻는 질문들</p>
          <div className="space-y-3">
            {[
              { q: "VISION 행정사사무소는 어떤 업무를 담당하나요?", a: "외국인 투자법인 설립(FDI 신고·법인설립·사업자등록), D-8 기업투자비자, D-7 주재원비자, E-7 특정활동비자, F-5 영주권(투자 영주권 포함), F-2-7 점수제 거주 비자, 체류 연장·변경 등 외국인 체류와 투자 관련 모든 행정 업무를 대행합니다." },
              { q: "법무법인인가요?", a: "아닙니다. 행정사법에 따라 인가된 행정사사무소입니다. 인허가 서류 준비 및 관계 행정기관 제출을 대행합니다. 소송·재판·형사 변호 등 변호사 업무는 취급하지 않습니다." },
              { q: "상담은 무료인가요?", a: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다. 전화(02-363-2251) 또는 KakaoTalk·WeChat·LINE·WhatsApp으로 문의하실 수 있습니다." },
              { q: "D-8 비자와 법인설립을 함께 진행할 수 있나요?", a: "네. FDI 신고, 법인설립 등기, 사업자등록, D-8 비자 신청을 원스톱으로 처리합니다. 투자 금액 1억 원 이상 법인 설립 시 D-8 비자 신청이 가능합니다." },
              { q: "어떤 언어로 상담이 가능한가요?", a: "한국어, 영어, 중국어(보통화), 일본어 4개 언어로 상담이 가능합니다. 다국어 전문 행정사 팀이 직접 소통합니다." },
              { q: "사무소 위치는 어디인가요?", a: "서울특별시 중구 퇴계로 324, 3층 성우빌딩입니다. 동대문역사문화공원역 4번 출구에서 도보 1분 거리입니다. 영업시간: 월~금 09:30~18:30." },
              { q: "F-5 투자 영주권 취득이 가능한가요?", a: "네. F-5-5(부동산 투자), F-5-21(공익사업 일반 투자자), F-5-23(공익사업 은퇴이민) 등 투자 기반 F-5 영주권 경로가 있습니다. 각 경로별 요건 검토 및 신청을 지원합니다." },
            ].map(({ q, a }, i) => (
              <details key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center text-sm">
                  {q}
                  <span className="text-blue-600 ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
