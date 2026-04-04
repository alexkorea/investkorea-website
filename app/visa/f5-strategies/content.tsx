import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type F5STranslations = typeof import("@/lib/page-translations").pageTranslations.ko.visaF5Strategies

export function F5StrategiesContent({ t, locale = "ko" }: { t: F5STranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/f5.jpg" alt="영주권 전략 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.whyTitle}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{t.whyText}</p>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.comparisonTitle}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>{t.comparisonHeaders.map((h, i) => (<th key={i} className="text-left p-3 font-semibold text-gray-900">{h}</th>))}</tr>
                    </thead>
                    <tbody>
                      {t.comparisonRows.map((row, i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 text-gray-600">{row[1]}</td>
                          <td className="p-3 text-gray-600">{row[2]}</td>
                          <td className="p-3 text-gray-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.strategy1Title}</h2>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700 mb-3">{t.strategy1Text}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>{t.prosLabel}</strong> {t.strategy1Pros}</li>
                    <li><strong>{t.consLabel}</strong> {t.strategy1Cons}</li>
                    <li><strong>{t.forLabel}</strong> {t.strategy1For}</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.strategy2Title}</h2>
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <p className="text-gray-700 mb-3">{t.strategy2Text}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>{t.prosLabel}</strong> {t.strategy2Pros}</li>
                    <li><strong>{t.consLabel}</strong> {t.strategy2Cons}</li>
                    <li><strong>{t.forLabel}</strong> {t.strategy2For}</li>
                  </ul>
                  <Link href={getLocalePath(locale, "/immigration/real-estate")} className="text-blue-600 text-sm hover:underline mt-2 inline-block">{t.strategy2Link} &rarr;</Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.strategy3Title}</h2>
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <p className="text-gray-700 mb-3">{t.strategy3Text}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>{t.prosLabel}</strong> {t.strategy3Pros}</li>
                    <li><strong>{t.consLabel}</strong> {t.strategy3Cons}</li>
                    <li><strong>{t.forLabel}</strong> {t.strategy3For}</li>
                  </ul>
                  <Link href={getLocalePath(locale, "/immigration/public-interest")} className="text-blue-600 text-sm hover:underline mt-2 inline-block">{t.strategy3Link} &rarr;</Link>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.strategy4Title}</h2>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <p className="text-gray-700 mb-3">{t.strategy4Text}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>{t.routeLabel}</strong> {t.strategy4Route}</li>
                    <li><strong>{t.prosLabel}</strong> {t.strategy4Pros}</li>
                    <li><strong>{t.consLabel}</strong> {t.strategy4Cons}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-serif font-bold text-gray-900 mb-3">{t.sidebarRoutesTitle}</h3>
                <ul className="space-y-2">
                  {t.sidebarRoutes.map((link, i) => (
                    <li key={i}><Link href={getLocalePath(locale, link.href)} className="text-blue-600 hover:underline text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-slate-300 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-slate-800 font-semibold text-sm h-10 rounded-lg hover:bg-slate-50 transition-colors">{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">{t.relatedServicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.relatedServices.map((item) => (
              <Link key={item.href} href={getLocalePath(locale, item.href)} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
