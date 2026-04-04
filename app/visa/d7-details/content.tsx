import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type D7DTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.visaD7Details

export function D7DetailsContent({ t, locale = "ko" }: { t: D7DTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/d7.jpg" alt="D-7 비자 발급요건 안내" fill className="object-cover" priority sizes="100vw" />
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.eligibilityTitle}</h2>
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-5">
                    <h3 className="font-semibold text-indigo-900 mb-2">{t.eligibilityD71Title}</h3>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      {t.eligibilityD71.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-5">
                    <h3 className="font-semibold text-indigo-900 mb-2">{t.eligibilityD72Title}</h3>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      {t.eligibilityD72.map((item, i) => (<li key={i}>{item}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.requirementsTitle}</h2>
                <div className="space-y-3">
                  {t.requirementItems.map((item, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.documentsTitle}</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{t.basicDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {t.basicDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-indigo-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-3">{t.hqDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {t.hqDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-indigo-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-3">{t.krDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {t.krDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-indigo-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-3">{t.otherDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {t.otherDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-indigo-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <p className="text-xs text-gray-400 mt-4">{t.docsNote}</p>
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
