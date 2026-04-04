import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type RETranslations = typeof import("@/lib/page-translations").pageTranslations.ko.immigrationRealEstate

export function RealEstateContent({ t, locale = "ko" }: { t: RETranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/realestate.jpg" alt="부동산 투자이민 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.whatIsTitle}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{t.whatIsP1}</p>
                <p className="text-gray-600 leading-relaxed">{t.whatIsP2}</p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.requirementsTitle}</h2>
                <div className="space-y-4">
                  {t.requirements.map((item, i) => (
                    <div key={i} className="bg-emerald-50 rounded-lg p-5">
                      <h3 className="font-semibold text-emerald-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-emerald-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.regionsTitle}</h2>
                <p className="text-gray-600 mb-4 text-sm">{t.regionsNote}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {t.regions.map((item, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 text-sm">{item.region}</h3>
                      <p className="text-xs text-gray-500">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.processTitle}</h2>
                <div className="space-y-4">
                  {t.process.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5">
                      <span className="text-2xl font-bold text-emerald-600 font-mono">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-semibold text-amber-900 mb-2">{t.cautionsTitle}</h3>
                <ul className="text-sm text-amber-800 space-y-1">
                  {t.cautions.map((item, i) => (<li key={i}>{item}</li>))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif font-bold text-gray-900 mb-3">{t.sidebarRelatedTitle}</h3>
                <ul className="space-y-2">
                  {t.sidebarRelated.map((link, i) => (
                    <li key={i}><Link href={getLocalePath(locale, link.href)} className="text-blue-600 hover:underline text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-700 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-emerald-100 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-emerald-700 font-semibold text-sm h-10 rounded-lg hover:bg-emerald-50 transition-colors">{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "어떤 지역의 부동산이 투자이민 대상인가요?", a: "제주도, 평창 알펜시아, 여수 경도, 인천 영종도, 부산 해운대 등 정부가 지정한 투자이민 특구의 부동산이 대상입니다." },
              { q: "투자 금액 기준은 얼마인가요?", a: "5억 원 이상(제주도 기준)의 휴양 콘도미니엄 등 지정 부동산에 투자해야 합니다. 지역에 따라 금액 기준이 다를 수 있습니다." },
              { q: "부동산 매각 시 영주권은 유지되나요?", a: "F-2 거주비자 단계에서 부동산을 매각하면 비자가 취소될 수 있습니다. F-5 영주권 취득 후에는 투자 유지 의무가 완화됩니다." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
