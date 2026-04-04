import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type D8Translations = typeof import("@/lib/page-translations").pageTranslations.ko.visaD8

export function D8Content({ t, locale = "ko" }: { t: D8Translations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/d8.jpg" alt="D-8 기업투자비자 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.typesTitle}</h2>
                <div className="space-y-4">
                  {t.types.map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{item.type}</span>
                        <h3 className="font-semibold text-blue-900">{item.title}</h3>
                      </div>
                      <p className="text-sm text-blue-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.requirementsTitle}</h2>
                <ul className="space-y-3 text-gray-600">
                  {t.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  {t.requirementsNote} <Link href={getLocalePath(locale, "/visa/d8-process")} className="text-blue-600 hover:underline">{t.requirementsNoteLink}</Link>{t.requirementsNoteSuffix}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.stayTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.stayItems.map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
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
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-blue-700 font-semibold text-sm h-10 rounded-lg hover:bg-blue-50 transition-colors">{t.ctaButton}</Link>
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
              { q: "D-8 비자의 유효기간은 얼마인가요?", a: "D-8 비자의 최초 체류기간은 일반적으로 1~2년이며, 사업 운영 상태에 따라 갱신이 가능합니다. 갱신 시 최대 3년까지 연장할 수 있습니다." },
              { q: "D-8 비자로 가족 초청이 가능한가요?", a: "네, D-8 비자 소지자는 배우자와 미성년 자녀를 F-3(동반) 비자로 초청할 수 있습니다." },
              { q: "D-8 비자 신청 시 사무실이 반드시 필요한가요?", a: "네, 실제 사업 운영이 가능한 국내 사무실 주소가 필요합니다. 공유오피스나 가상오피스는 인정되지 않을 수 있습니다." },
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
