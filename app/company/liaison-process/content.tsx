import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type LPTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.companyLiaisonProcess

export function LiaisonProcessContent({ t, locale = "ko" }: { t: LPTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img src="/pages/liaison.jpg" alt="" className="w-full h-full object-cover" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.processDetailTitle}</h2>
                <div className="space-y-6">
                  {t.processSteps.map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex gap-4 items-start mb-3">
                        <span className="text-2xl font-bold text-teal-600 font-mono">{item.step}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <ul className="ml-12 space-y-1">
                        {item.details.map((d, j) => (
                          <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                            <span className="text-teal-500 mt-1">&#8250;</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.checklistTitle}</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="space-y-3">
                    {t.checklist.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-600">
                        <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">{t.checklistNote1}<br />{t.checklistNote2}</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.cautionsTitle}</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-5 space-y-2">
                  {t.cautions.map((item, i) => (
                    <p key={i} className="text-sm text-red-700 flex items-start gap-2">
                      <span className="font-bold">!</span> {item}
                    </p>
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
