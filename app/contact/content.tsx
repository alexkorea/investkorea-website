"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type ContactTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.contact

const services = [
  { value: "법인설립", label: "법인설립", sub: "Company Setup", icon: "🏢" },
  { value: "D-8 투자비자", label: "D-8 투자비자", sub: "Investment Visa", icon: "📋" },
  { value: "D-7 주재원비자", label: "D-7 주재원비자", sub: "Transfer Visa", icon: "🔄" },
  { value: "F-5 영주권", label: "F-5 영주권", sub: "Permanent Residency", icon: "🏠" },
  { value: "기타", label: "기타", sub: "Other", icon: "💬" },
]

function StepIndicator({ step }: { step: 1 | 2 }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
        <span className="text-sm font-medium text-gray-900">기본 정보</span>
      </div>
      <div className="w-8 h-px bg-gray-300" />
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>2</div>
        <span className={`text-sm font-medium ${step === 2 ? "text-gray-900" : "text-gray-400"}`}>상세 정보</span>
      </div>
    </div>
  )
}

export { StepIndicator }

export function ContactContent({ t, locale = "ko" }: { t: ContactTranslations; locale?: Locale }) {
  const [selectedService, setSelectedService] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!selectedService) return
    setStatus("sending")
    const form = e.currentTarget
    const snsType = (form.elements.namedItem("snsType") as HTMLSelectElement).value
    const snsId = (form.elements.namedItem("snsId") as HTMLInputElement).value
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      snsType: snsType || undefined,
      snsId: snsId || undefined,
      service: selectedService,
    }
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        const result = await res.json()
        const inquiryId = result.inquiryId || ""
        router.push(`/contact/step2?service=${encodeURIComponent(selectedService)}&inquiryId=${inquiryId}`)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative min-h-[260px] md:min-h-[340px] flex items-center">
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

      {/* Step 1 Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <StepIndicator step={1} />

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">⚡ 30초 빠른 신청</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이름 <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="홍길동"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처 <span className="text-red-500">*</span></label>
                <input
                  name="contact"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="전화번호 또는 카카오톡 ID"
                />
                <p className="text-xs text-gray-400 mt-1">전화번호 또는 카카오톡 ID를 입력해주세요</p>
              </div>

              {/* SNS ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">SNS ID</label>
                <div className="flex gap-2">
                  <select
                    name="snsType"
                    className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    <option value="">선택</option>
                    <option value="kakaotalk">KakaoTalk</option>
                    <option value="wechat">WeChat</option>
                    <option value="line">LINE</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                  <input
                    name="snsId"
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="SNS ID 입력"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">희망 업무 <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <button
                      key={svc.value}
                      type="button"
                      onClick={() => setSelectedService(svc.value)}
                      className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        selectedService === svc.value
                          ? "border-blue-600 bg-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">{svc.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{svc.label}</div>
                        <div className="text-xs text-gray-500">{svc.sub}</div>
                      </div>
                      {selectedService === svc.value && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {!selectedService && status === "error" && (
                  <p className="text-red-500 text-xs mt-2">희망 업무를 선택해주세요.</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || !selectedService}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
              >
                {status === "sending" ? "처리 중..." : "다음 단계로 →"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
              )}
            </form>
          </div>

          {/* Contact info below form */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
              <h3 className="font-semibold text-gray-900 mb-1">전화 상담</h3>
              <p className="text-blue-600 text-lg font-medium">02-363-2251</p>
              <p className="text-sm text-gray-500 mt-1">평일 09:00 ~ 18:00</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
              <h3 className="font-semibold text-gray-900 mb-1">카카오톡 상담</h3>
              <p className="text-blue-600 text-lg font-medium">alexkorea</p>
              <p className="text-sm text-gray-500 mt-1">24시간 접수 가능</p>
            </div>
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
    </>
  )
}
