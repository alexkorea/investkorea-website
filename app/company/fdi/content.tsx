import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type FdiTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.companyFdi

export function FdiContent({ t, locale = "ko" }: { t: FdiTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/company.jpg" alt="외국인투자법인 설립 안내" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-16 text-center w-full">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              {t.badge}
            </div>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.requirements.map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-5">
                      <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-blue-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.processTitle}</h2>
                <div className="space-y-4">
                  {t.process.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5">
                      <span className="text-2xl font-bold text-blue-600 font-mono">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.benefitsTitle}</h2>
                <ul className="space-y-3 text-gray-600">
                  {t.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      {item}
                    </li>
                  ))}
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
              <div className="bg-blue-600 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-blue-100 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-blue-700 font-semibold text-sm h-10 rounded-lg hover:bg-blue-50 transition-colors">
                  {t.ctaButton}
                </Link>
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
              { q: "외국인투자법인 설립에 최소 얼마가 필요한가요?", a: "외국인 투자 촉진법에 따라 최소 1억 원(약 USD 80,000) 이상의 투자가 필요합니다. 외국인 투자자는 의결권 있는 주식의 10% 이상을 보유해야 합니다." },
              { q: "외국인투자법인과 지사의 차이점은 무엇인가요?", a: "외국인투자법인은 독립된 법인격을 가지며 세금 감면 혜택과 D-8 비자 신청 자격이 주어집니다. 반면 지사는 해외 본사의 일부로 운영되며 별도 자본금 요건이 없지만 투자 인센티브가 제한적입니다." },
              { q: "법인 설립까지 얼마나 걸리나요?", a: "일반적으로 서류 준비부터 법인 등기까지 약 2~4주가 소요됩니다. 외국인투자 신고, 투자금 송금, 등기, 사업자등록 순으로 진행됩니다." },
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
