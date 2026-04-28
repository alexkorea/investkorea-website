"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type ContactTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.contact

const services = [
  { value: "법인설립", label: "법인설립", sub: "Company Setup", icon: "🏢" },
  { value: "연락사무소설치", label: "연락사무소 설치", sub: "Liaison Office", icon: "🏛️" },
  { value: "D-8 투자비자", label: "D-8 투자비자", sub: "Investment Visa", icon: "📋" },
  { value: "D-7 주재원비자", label: "D-7 주재원비자", sub: "Transfer Visa", icon: "🔄" },
  { value: "D-9-2 설비파견", label: "D-9-2 설비파견", sub: "Equipment Dispatch", icon: "⚙️" },
  { value: "F-5 영주권", label: "F-5 영주권", sub: "Permanent Residency", icon: "🏠" },
  { value: "기타", label: "기타", sub: "Other", icon: "💬" },
]

const priorityCountries = [
  { value: "미국", label: "🇺🇸 미국" },
  { value: "중국", label: "🇨🇳 중국" },
  { value: "일본", label: "🇯🇵 일본" },
  { value: "베트남", label: "🇻🇳 베트남" },
  { value: "캐나다", label: "🇨🇦 캐나다" },
  { value: "영국", label: "🇬🇧 영국" },
]

const otherCountries = [
  { value: "뉴질랜드", label: "🇳🇿 뉴질랜드" },
  { value: "대만", label: "🇹🇼 대만" },
  { value: "독일", label: "🇩🇪 독일" },
  { value: "러시아", label: "🇷🇺 러시아" },
  { value: "말레이시아", label: "🇲🇾 말레이시아" },
  { value: "몽골", label: "🇲🇳 몽골" },
  { value: "미얀마", label: "🇲🇲 미얀마" },
  { value: "싱가포르", label: "🇸🇬 싱가포르" },
  { value: "인도", label: "🇮🇳 인도" },
  { value: "인도네시아", label: "🇮🇩 인도네시아" },
  { value: "이탈리아", label: "🇮🇹 이탈리아" },
  { value: "우즈베키스탄", label: "🇺🇿 우즈베키스탄" },
  { value: "캄보디아", label: "🇰🇭 캄보디아" },
  { value: "태국", label: "🇹🇭 태국" },
  { value: "프랑스", label: "🇫🇷 프랑스" },
  { value: "필리핀", label: "🇵🇭 필리핀" },
  { value: "호주", label: "🇦🇺 호주" },
  { value: "홍콩", label: "🇭🇰 홍콩" },
  { value: "기타", label: "기타" },
]

function StepIndicator() {
  return null
}

export { StepIndicator }

export function ContactContent({ t, locale = "ko" }: { t: ContactTranslations; locale?: Locale }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [submittedName, setSubmittedName] = useState("")
  const [inquiryId, setInquiryId] = useState("")

  function toggleService(value: string) {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selectedServices.length === 0) return
    setStatus("sending")
    const form = e.currentTarget
    const snsType = (form.elements.namedItem("snsType") as HTMLSelectElement).value
    const snsId = (form.elements.namedItem("snsId") as HTMLInputElement).value
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      snsType: snsType || undefined,
      snsId: snsId || undefined,
      nationality: (form.elements.namedItem("nationality") as HTMLSelectElement).value,
      services: selectedServices,
    }
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        const result = await res.json()
        setSubmittedName(data.name)
        setInquiryId(result.inquiryId || "")
        setStatus("sent")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
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

        <section className="py-24">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">상담신청이 접수되었습니다.</h2>
              <p className="text-gray-600 mb-4">
                {selectedServices.map(s => s).join(', ')} 신청을 해주셨습니다.
                <br />
                {selectedServices.map(s => s).join(', ')} 취득을 위해 좀 더 자세한 정보를 입력해 주시면 감사드립니다.
              </p>

              <Link
                href={`/contact/step2?service=${encodeURIComponent(selectedServices.join(','))}&inquiryId=${inquiryId}`}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg font-semibold transition-colors text-lg mb-6"
              >
                상세정보 입력하기 →
              </Link>

              <p className="text-sm text-gray-400 mb-6">약 1분 소요</p>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-bold text-blue-900 text-lg mb-3">비전행정사사무소</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 8년+ 외국인 투자·비자 전문 실무 경험</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 20개국 이상 외국인 투자기업 설립 대행</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 한국어·영어·중국어·일본어 다국어 상담</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 가장 빠른 출입국사무소를 찾아 신속 처리</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 서류 준비부터 접수·수령까지 원스톱 대행</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">전화:</span>
                  <span className="font-medium text-gray-900">02-363-2251</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">카카오톡:</span>
                  <span className="font-medium text-gray-900">alexkorea</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">이메일:</span>
                  <span className="font-medium text-gray-900">5000meter@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
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

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">이메일 <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="example@email.com"
                />
                <p className="text-xs text-gray-400 mt-1">맞춤 상담 양식 링크를 발송해드립니다</p>
              </div>

              {/* Contact (Phone) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">연락처 (전화번호)</label>
                <input
                  name="contact"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="010-1234-5678"
                />
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
                    <option value="kakaotalk">카카오톡</option>
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

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">국적</label>
                <select
                  name="nationality"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">선택해주세요</option>
                  {priorityCountries.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                  <option disabled>──────────</option>
                  {otherCountries.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>

              {/* Service Selection - Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">희망 업무 <span className="text-red-500">*</span> <span className="text-gray-400 font-normal text-xs">(복수 선택 가능)</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((svc) => (
                    <button
                      key={svc.value}
                      type="button"
                      onClick={() => toggleService(svc.value)}
                      className={`relative flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                        selectedServices.includes(svc.value)
                          ? "border-blue-600 bg-blue-50 shadow-sm"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">{svc.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{svc.label}</div>
                        <div className="text-xs text-gray-500">{svc.sub}</div>
                      </div>
                      {selectedServices.includes(svc.value) && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedServices.length === 0 && status === "error" && (
                  <p className="text-red-500 text-xs mt-2">희망 업무를 선택해주세요.</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || selectedServices.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
              >
                {status === "sending" ? "처리 중..." : "신청하기"}
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
