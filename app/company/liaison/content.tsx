import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type LiaisonTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.companyLiaison

export function LiaisonContent({ t, locale = "ko" }: { t: LiaisonTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/liaison.jpg" alt="연락사무소 설치 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.activitiesTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.activities.map((item, i) => (
                    <div key={i} className="bg-teal-50 rounded-lg p-5">
                      <h3 className="font-semibold text-teal-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-teal-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.comparisonTitle}</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                  <p className="text-sm text-amber-800"><strong>{t.comparisonLabel}</strong> {t.comparisonText}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.processTitle}</h2>
                <div className="space-y-4">
                  {t.process.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5">
                      <span className="text-2xl font-bold text-teal-600 font-mono">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  {t.processNote} <Link href={getLocalePath(locale, "/company/liaison-process")} className="text-blue-600 hover:underline">{t.processNoteLink}</Link> {t.processNoteSuffix}
                </p>
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
              <div className="bg-teal-600 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-teal-100 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-teal-700 font-semibold text-sm h-10 rounded-lg hover:bg-teal-50 transition-colors">{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
