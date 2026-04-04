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
    </>
  )
}
