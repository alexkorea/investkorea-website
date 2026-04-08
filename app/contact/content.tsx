"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type ContactTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.contact

export function ContactContent({ t, locale = "ko" }: { t: ContactTranslations; locale?: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      nationality: (form.elements.namedItem("nationality") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus("sent")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <section className="relative pt-16">
        <div className="relative min-h-[300px] md:min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/pages/contact.jpg" alt="VISION 행정사사무소 문의하기" fill className="object-cover" priority sizes="100vw" />
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
                  {[
                    { name: "Kakao Talk", qr: "/qr/kakao.jpg" },
                    { name: "WeChat", qr: "/qr/wechat.jpg" },
                    { name: "LINE", qr: "/qr/line.jpg" },
                    { name: "WhatsApp", qr: "/qr/whatsapp.jpg" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-lg p-4 border border-gray-200 bg-white text-center">
                      <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden border border-gray-100">
                        <img src={item.qr} alt={item.name + " QR"} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">{t.formTitle}</h2>

                {status === "sent" ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {locale === "ko" ? "상담 신청이 접수되었습니다!" : locale === "ja" ? "お問い合わせを受け付けました！" : locale === "zh" ? "咨询申请已提交！" : "Your inquiry has been submitted!"}
                    </h3>
                    <p className="text-gray-500">
                      {locale === "ko" ? "빠른 시간 내에 연락드리겠습니다." : locale === "ja" ? "早急にご連絡いたします。" : locale === "zh" ? "我们会尽快与您联系。" : "We will contact you shortly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formName}</label>
                      <input name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formNamePlaceholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formEmail}</label>
                      <input name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formEmailPlaceholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formPhone}</label>
                      <input name="phone" type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formPhonePlaceholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formNationality}</label>
                      <input name="nationality" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder={t.formNationalityPlaceholder} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formService}</label>
                      <select name="service" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                        <option value="">{t.formServiceDefault}</option>
                        {t.formServiceOptions.map((opt, i) => (
                          <option key={i} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.formMessage}</label>
                      <textarea name="message" rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder={t.formMessagePlaceholder} />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      {status === "sending"
                        ? (locale === "ko" ? "전송 중..." : "Sending...")
                        : t.formSubmit}
                    </button>
                    {status === "error" && (
                      <p className="text-red-500 text-sm text-center">
                        {locale === "ko" ? "전송에 실패했습니다. 직접 전화 또는 이메일로 문의해주세요." : "Failed to send. Please contact us by phone or email."}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 text-center">{t.formNote}</p>
                  </form>
                )}
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

      {/* Related Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            {locale === "ko" ? "주요 서비스 안내" : locale === "en" ? "Our Key Services" : locale === "zh" ? "主要服务介绍" : "主要サービス案内"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/company/fdi", title: locale === "ko" ? "외국인투자법인 설립" : locale === "en" ? "FDI Company Setup" : locale === "zh" ? "外商投资法人设立" : "外国人投資法人設立", desc: locale === "ko" ? "1억 원 이상 투자로 한국 법인 설립" : locale === "en" ? "Establish a Korean corporation with 100M+ KRW investment" : locale === "zh" ? "投资1亿韩元以上设立韩国法人" : "1億ウォン以上の投資で韓国法人設立" },
              { href: "/visa/d8", title: locale === "ko" ? "D-8 기업투자비자" : locale === "en" ? "D-8 Investment Visa" : locale === "zh" ? "D-8企业投资签证" : "D-8企業投資ビザ", desc: locale === "ko" ? "법인 설립 후 투자자 체류자격 취득" : locale === "en" ? "Obtain investor residency after company setup" : locale === "zh" ? "设立法人后取得投资者居留资格" : "法人設立後の投資家在留資格取得" },
              { href: "/visa/f5", title: locale === "ko" ? "F-5 영주권 안내" : locale === "en" ? "F-5 Permanent Residency" : locale === "zh" ? "F-5永住权指南" : "F-5永住権案内", desc: locale === "ko" ? "투자이민을 통한 영주권 취득 경로" : locale === "en" ? "Permanent residency via investment immigration" : locale === "zh" ? "通过投资移民取得永住权" : "投資移民による永住権取得ルート" },
            ].map((item) => (
              <Link key={item.href} href={getLocalePath(locale, item.href)} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "상담 비용이 있나요?", a: "초기 전화 및 이메일 상담은 무료입니다. 구체적인 서류 검토나 심층 상담은 사안에 따라 비용이 발생할 수 있습니다." },
              { q: "상담 가능 언어는 무엇인가요?", a: "한국어, 영어, 중국어, 일본어로 상담이 가능합니다." },
              { q: "방문 상담도 가능한가요?", a: "네, 서울 중구 퇴계로 324 성우빌딩 3층 사무실로 방문 상담 가능합니다. 사전 예약을 권장드립니다." },
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
