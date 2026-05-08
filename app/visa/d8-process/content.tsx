import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type D8PTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.visaD8Process & {
  requirementsDetailTitle?: string
  requirementsDetail?: { title: string; desc: string }[]
  renewalTitle?: string
  renewal?: string[]
  faqTitle?: string
  faqs?: { q: string; a: string }[]
}

export function D8ProcessContent({ t, locale = "ko" }: { t: D8PTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/d8.jpg" alt="D-8 비자 발급 절차" fill className="object-cover" priority sizes="100vw" />
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
                <div className="space-y-3">
                  {t.eligibility.map((item, i) => (
                    <div key={i} className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900">{item.title}</h3>
                      <p className="text-sm text-blue-700 mt-1">{item.desc}</p>
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
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.documentsTitle}</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">{t.basicDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {t.basicDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-blue-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-3">{t.investorDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {t.investorDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-blue-600">&#8226;</span> {item}</li>))}
                  </ul>
                  <h3 className="font-semibold text-gray-900 mb-3">{t.staffDocsLabel}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {t.staffDocs.map((item, i) => (<li key={i} className="flex items-start gap-2"><span className="text-blue-600">&#8226;</span> {item}</li>))}
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-semibold text-amber-900 mb-2">{t.notesTitle}</h3>
                <ul className="space-y-1 text-sm text-amber-800">
                  {t.notes.map((item, i) => (<li key={i}>{item}</li>))}
                </ul>
              </div>
              {t.requirementsDetailTitle && t.requirementsDetail && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.requirementsDetailTitle}</h2>
                  <div className="space-y-3">
                    {t.requirementsDetail.map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {t.renewalTitle && t.renewal && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.renewalTitle}</h2>
                  <ul className="space-y-2">
                    {t.renewal.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-blue-600 mt-0.5">▪</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {t.faqTitle && t.faqs && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.faqTitle}</h2>
                  <div className="space-y-4">
                    {t.faqs.map((faq, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                        <h3 className="font-semibold text-gray-900 mb-2">Q. {faq.q}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">A. {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                <Link href={getLocalePath(locale, "/contact")} style={{background:'#A33344',color:'#fff',padding:'12px 28px',borderRadius:'8px',fontWeight:'700',fontSize:'15px',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none'}}>{t.ctaButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
