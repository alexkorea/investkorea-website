import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type ContactTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.contact

export function ContactContent({ t, locale = "ko" }: { t: ContactTranslations; locale?: Locale }) {
  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img src="/pages/contact.jpg" alt="" className="w-full h-full object-cover" />
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
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.contactInfoTitle}</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-1">{t.phoneLabel}</h3>
                    <p className="text-blue-600 text-lg font-medium">{t.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.phoneHours}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-1">{t.emailLabel}</h3>
                    <p className="text-blue-600 text-lg font-medium">{t.email}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.emailNote}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-1">{t.addressLabel}</h3>
                    <p className="text-gray-700">{t.address}</p>
                    <p className="text-sm text-gray-500 mt-1">{t.addressNote}</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.messengerTitle}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {t.messengers.map((item, i) => (
                    <div key={i} className={`rounded-lg p-4 border ${item.color}`}>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
                <ul className="space-y-2 text-gray-600">
                  {t.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">{t.formTitle}</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formName}</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formNamePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formEmail}</label>
                    <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formEmailPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formPhone}</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formPhonePlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formNationality}</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formNationalityPlaceholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formService}</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                      <option value="">{t.formServiceDefault}</option>
                      {t.formServiceOptions.map((opt, i) => (
                        <option key={i} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.formMessage}</label>
                    <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder={t.formMessagePlaceholder} />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">{t.formSubmit}</button>
                  <p className="text-xs text-gray-400 text-center">{t.formNote}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{t.ctaSectionTitle}</h2>
          <p className="text-gray-600 mb-8">{t.ctaSectionDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={getLocalePath(locale, "/company/fdi")} className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg font-semibold transition-colors">{t.ctaSectionButton1}</Link>
            <Link href={getLocalePath(locale, "/about")} className="inline-flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-gray-700 px-8 h-12 rounded-lg font-medium transition-colors">{t.ctaSectionButton2}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
