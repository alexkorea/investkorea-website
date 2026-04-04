import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type BranchTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.companyBranch

export function BranchContent({ t, locale = "ko" }: { t: BranchTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/branch.jpg" alt="국내 지사 설치 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.comparisonTitle}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        {t.comparisonHeaders.map((h, i) => (
                          <th key={i} className="text-left p-3 font-semibold text-gray-900">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {t.comparisonRows.map((row, i) => (
                        <tr key={i} className="border-t border-gray-200">
                          <td className="p-3 font-medium text-gray-900">{row[0]}</td>
                          <td className="p-3 text-gray-600">{row[1]}</td>
                          <td className="p-3 text-gray-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.processTitle}</h2>
                <div className="space-y-4">
                  {t.process.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white border border-gray-200 rounded-lg p-5">
                      <span className="text-2xl font-bold text-indigo-600 font-mono">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.documentsTitle}</h2>
                <ul className="space-y-2 text-gray-600">
                  {t.documents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">&#8226;</span>
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
              <div className="bg-indigo-600 rounded-xl p-6 text-white">
                <h3 className="font-serif font-bold mb-2">{t.ctaTitle}</h3>
                <p className="text-sm text-indigo-100 mb-4">{t.ctaDesc}</p>
                <Link href={getLocalePath(locale, "/contact")} className="inline-flex items-center justify-center w-full bg-white text-indigo-700 font-semibold text-sm h-10 rounded-lg hover:bg-indigo-50 transition-colors">{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
