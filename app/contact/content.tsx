"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

type ContactTranslations = typeof import("@/lib/page-translations").pageTranslations.ko.contact

const serviceLabels: Record<string, Record<string, string[]>> = {
  ko: { labels: ["법인설립", "연락사무소 설치", "D-8 투자비자", "D-7 주재원비자", "D-9-2 설비파견", "F-5 영주권", "기타"] },
  en: { labels: ["Company Setup", "Liaison Office", "Investment Visa", "Transfer Visa", "Equipment Dispatch", "Permanent Residency", "Other"] },
  zh: { labels: ["公司设立", "联络事务所", "D-8投资签证", "D-7驻在签证", "D-9-2设备派遣", "F-5永住权", "其他"] },
  ja: { labels: ["法人設立", "連絡事務所", "D-8投資ビザ", "D-7駐在ビザ", "D-9-2設備派遣", "F-5永住権", "その他"] },
}

const serviceBase = [
  { value: "법인설립", icon: "🏢" },
  { value: "연락사무소설치", icon: "🏛️" },
  { value: "D-8 투자비자", icon: "📋" },
  { value: "D-7 주재원비자", icon: "🔄" },
  { value: "D-9-2 설비파견", icon: "⚙️" },
  { value: "F-5 영주권", icon: "🏠" },
  { value: "기타", icon: "💬" },
]

function getServices(locale: string) {
  const labels = serviceLabels[locale]?.labels || serviceLabels.ko.labels
  const subs = locale === "ko" ? serviceLabels.en.labels : serviceLabels.en.labels
  return serviceBase.map((s, i) => ({ ...s, label: labels[i], sub: subs[i] }))
}

const priorityCountriesData = [
  { value: "미국", ko: "🇺🇸 미국", intl: "🇺🇸 USA" },
  { value: "중국", ko: "🇨🇳 중국", intl: "🇨🇳 China" },
  { value: "일본", ko: "🇯🇵 일본", intl: "🇯🇵 Japan" },
  { value: "베트남", ko: "🇻🇳 베트남", intl: "🇻🇳 Vietnam" },
  { value: "캐나다", ko: "🇨🇦 캐나다", intl: "🇨🇦 Canada" },
  { value: "영국", ko: "🇬🇧 영국", intl: "🇬🇧 United Kingdom" },
]

const otherCountriesData = [
  { value: "뉴질랜드", ko: "🇳🇿 뉴질랜드", intl: "🇳🇿 New Zealand" },
  { value: "대만", ko: "🇹🇼 대만", intl: "🇹🇼 Taiwan" },
  { value: "독일", ko: "🇩🇪 독일", intl: "🇩🇪 Germany" },
  { value: "러시아", ko: "🇷🇺 러시아", intl: "🇷🇺 Russia" },
  { value: "말레이시아", ko: "🇲🇾 말레이시아", intl: "🇲🇾 Malaysia" },
  { value: "몽골", ko: "🇲🇳 몽골", intl: "🇲🇳 Mongolia" },
  { value: "미얀마", ko: "🇲🇲 미얀마", intl: "🇲🇲 Myanmar" },
  { value: "싱가포르", ko: "🇸🇬 싱가포르", intl: "🇸🇬 Singapore" },
  { value: "인도", ko: "🇮🇳 인도", intl: "🇮🇳 India" },
  { value: "인도네시아", ko: "🇮🇩 인도네시아", intl: "🇮🇩 Indonesia" },
  { value: "이탈리아", ko: "🇮🇹 이탈리아", intl: "🇮🇹 Italy" },
  { value: "우즈베키스탄", ko: "🇺🇿 우즈베키스탄", intl: "🇺🇿 Uzbekistan" },
  { value: "캄보디아", ko: "🇰🇭 캄보디아", intl: "🇰🇭 Cambodia" },
  { value: "태국", ko: "🇹🇭 태국", intl: "🇹🇭 Thailand" },
  { value: "프랑스", ko: "🇫🇷 프랑스", intl: "🇫🇷 France" },
  { value: "필리핀", ko: "🇵🇭 필리핀", intl: "🇵🇭 Philippines" },
  { value: "호주", ko: "🇦🇺 호주", intl: "🇦🇺 Australia" },
  { value: "홍콩", ko: "🇭🇰 홍콩", intl: "🇭🇰 Hong Kong" },
  { value: "기타", ko: "기타", intl: "Other" },
]

function getCountryLabel(c: { ko: string; intl: string }, locale: string) {
  return locale === "ko" ? c.ko : c.intl
}

const ui: Record<string, Record<string, string>> = {
  ko: { name: "이름", email: "이메일", phone: "연락처 (전화번호)", sns: "SNS 선택", snsId: "SNS ID 입력", nationality: "국적", selectNationality: "선택해주세요", services: "희망 업무", servicesMulti: "(복수 선택 가능)", selectServices: "희망 업무를 선택해주세요.", submit: "신청하기", submitting: "처리 중...", error: "전송에 실패했습니다. 잠시 후 다시 시도해주세요.", quickApply: "⚡ 30초 빠른 신청", emailNote: "맞춤 상담 양식 링크를 발송해드립니다", phoneCta: "전화 상담", phoneHours: "평일 09:30 – 17:30", kakaoCta: "카카오톡 상담", kakaoHours: "24시간 접수 가능", namePlaceholder: "홍길동", phonePlaceholder: "010-1234-5678" },
  en: { name: "Name", email: "Email", phone: "Phone Number", sns: "SNS", snsId: "Enter SNS ID", nationality: "Nationality", selectNationality: "Select", services: "Services Needed", servicesMulti: "(Multiple selection)", selectServices: "Please select a service.", submit: "Submit", submitting: "Submitting...", error: "Failed to submit. Please try again.", quickApply: "⚡ Quick Apply (30 sec)", emailNote: "We'll send a personalized consultation form to your email", phoneCta: "Phone Consultation", phoneHours: "Mon-Fri 09:30 – 17:30 KST", kakaoCta: "KakaoTalk", kakaoHours: "24/7 Available", namePlaceholder: "John Doe", phonePlaceholder: "+1-234-567-8900" },
  zh: { name: "姓名", email: "邮箱", phone: "联系电话", sns: "SNS", snsId: "输入SNS ID", nationality: "国籍", selectNationality: "请选择", services: "咨询业务", servicesMulti: "(可多选)", selectServices: "请选择咨询业务", submit: "提交申请", submitting: "提交中...", error: "提交失败，请稍后再试", quickApply: "⚡ 30秒快速申请", emailNote: "我们将发送定制咨询表到您的邮箱", phoneCta: "电话咨询", phoneHours: "工作日 09:30 – 17:30 (韩国时间)", kakaoCta: "KakaoTalk咨询", kakaoHours: "24小时受理", namePlaceholder: "张三", phonePlaceholder: "+86-123-4567-8900" },
  ja: { name: "お名前", email: "メール", phone: "電話番号", sns: "SNS", snsId: "SNS ID入力", nationality: "国籍", selectNationality: "選択してください", services: "ご希望の業務", servicesMulti: "(複数選択可)", selectServices: "業務を選択してください", submit: "申請する", submitting: "処理中...", error: "送信に失敗しました。再度お試しください。", quickApply: "⚡ 30秒クイック申請", emailNote: "カスタム相談フォームのリンクをメールでお送りします", phoneCta: "電話相談", phoneHours: "平日 09:30 – 17:30 (韓国時間)", kakaoCta: "KakaoTalk相談", kakaoHours: "24時間受付", namePlaceholder: "山田太郎", phonePlaceholder: "+81-90-1234-5678" },
}

const successUi: Record<string, Record<string, string>> = {
  ko: {
    heading: "상담신청이 접수되었습니다.",
    applied: "신청을 해주셨습니다.",
    detail: "취득을 위해 좀 더 자세한 정보를 입력해 주시면 감사드립니다.",
    detailBtn: "상세정보 입력하기 →",
    detailTime: "약 1분 소요",
    companyName: "비전행정사사무소",
    cred1: "8년+ 외국인 투자·비자 전문 실무 경험",
    cred2: "20개국 이상 외국인 투자기업 설립 대행",
    cred3: "한국어·영어·중국어·일본어 다국어 상담",
    cred4: "가장 빠른 출입국사무소를 찾아 신속 처리",
    cred5: "서류 준비부터 접수·수령까지 원스톱 대행",
    labelPhone: "전화:",
    labelKakao: "카카오톡:",
    labelEmail: "이메일:",
  },
  en: {
    heading: "Your consultation request has been received.",
    applied: "You have applied for the following services.",
    detail: "Please provide more details so we can assist you better.",
    detailBtn: "Enter Details →",
    detailTime: "About 1 minute",
    companyName: "VISION Administrative Attorney Agent",
    cred1: "8+ years of foreign investment & visa expertise",
    cred2: "Company setup for clients from 20+ countries",
    cred3: "Multilingual support: Korean, English, Chinese, Japanese",
    cred4: "Fast processing via the nearest immigration office",
    cred5: "One-stop service from document prep to submission & collection",
    labelPhone: "Phone:",
    labelKakao: "KakaoTalk:",
    labelEmail: "Email:",
  },
  zh: {
    heading: "咨询申请已受理。",
    applied: "您已申请以下服务。",
    detail: "请提供更多详细信息，以便我们为您提供更好的帮助。",
    detailBtn: "填写详细信息 →",
    detailTime: "约1分钟",
    companyName: "飞展行政士事务所",
    cred1: "8年以上外国人投资·签证专业实务经验",
    cred2: "为20多个国家的外国人投资企业提供代办服务",
    cred3: "韩语·英语·中文·日语多语言咨询",
    cred4: "寻找最快的出入境管理局进行快速处理",
    cred5: "从文件准备到提交·领取一站式代办",
    labelPhone: "电话:",
    labelKakao: "KakaoTalk:",
    labelEmail: "邮箱:",
  },
  ja: {
    heading: "ご相談の申請が受理されました。",
    applied: "以下のサービスをお申し込みいただきました。",
    detail: "より詳しい情報をご入力いただけますと幸いです。",
    detailBtn: "詳細情報を入力 →",
    detailTime: "約1分",
    companyName: "VISION行政書士事務所",
    cred1: "8年以上の外国人投資・ビザ専門実務経験",
    cred2: "20カ国以上の外国人投資企業設立を代行",
    cred3: "韓国語・英語・中国語・日本語の多言語相談",
    cred4: "最寄りの出入国管理事務所で迅速処理",
    cred5: "書類準備から提出・受領までワンストップ代行",
    labelPhone: "電話:",
    labelKakao: "KakaoTalk:",
    labelEmail: "メール:",
  },
}

function t_(locale: string, key: string): string {
  return ui[locale]?.[key] || ui.ko[key]
}

function s_(locale: string, key: string): string {
  return successUi[locale]?.[key] || successUi.ko[key]
}

function StepIndicator() {
  return null
}

export { StepIndicator }

export function ContactContent({ t, locale = "ko" }: { t: ContactTranslations; locale?: Locale }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [submittedName, setSubmittedName] = useState("")
  const [inquiryId, setInquiryId] = useState("")

  const services = getServices(locale)

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
              <Image src="/pages/contact.jpg" alt={t.title} fill className="object-cover" priority sizes="100vw" />
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
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">{s_(locale, "heading")}</h2>
              <p className="text-gray-600 mb-4">
                {selectedServices.map(s => s).join(', ')} — {s_(locale, "applied")}
                <br />
                {s_(locale, "detail")}
              </p>

              <Link
                href={`/contact/step2?service=${encodeURIComponent(selectedServices.join(','))}&inquiryId=${inquiryId}`}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg font-semibold transition-colors text-lg mb-6"
              >
                {s_(locale, "detailBtn")}
              </Link>

              <p className="text-sm text-gray-400 mb-6">{s_(locale, "detailTime")}</p>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-bold text-blue-900 text-lg mb-3">{s_(locale, "companyName")}</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> {s_(locale, "cred1")}</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> {s_(locale, "cred2")}</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> {s_(locale, "cred3")}</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> {s_(locale, "cred4")}</li>
                  <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> {s_(locale, "cred5")}</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-5 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">{s_(locale, "labelPhone")}</span>
                  <span className="font-medium text-gray-900">02-363-2251</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">{s_(locale, "labelKakao")}</span>
                  <span className="font-medium text-gray-900">alexkorea</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">{s_(locale, "labelEmail")}</span>
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
            <Image src="/pages/contact.jpg" alt={t.title} fill className="object-cover" priority sizes="100vw" />
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
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">{t_(locale, "quickApply")}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t_(locale, "name")} <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder={t_(locale, "namePlaceholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t_(locale, "email")} <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="example@email.com"
                />
                <p className="text-xs text-gray-400 mt-1">{t_(locale, "emailNote")}</p>
              </div>

              {/* Contact (Phone) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t_(locale, "phone")}</label>
                <input
                  name="contact"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder={t_(locale, "phonePlaceholder")}
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
                    <option value="">{t_(locale, "sns")}</option>
                    <option value="kakaotalk">KakaoTalk</option>
                    <option value="wechat">WeChat</option>
                    <option value="line">LINE</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                  <input
                    name="snsId"
                    type="text"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder={t_(locale, "snsId")}
                  />
                </div>
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t_(locale, "nationality")}</label>
                <select
                  name="nationality"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="">{t_(locale, "selectNationality")}</option>
                  {priorityCountriesData.map((c) => (
                    <option key={c.value} value={c.value}>{getCountryLabel(c, locale)}</option>
                  ))}
                  <option disabled>──────────</option>
                  {otherCountriesData.map((c) => (
                    <option key={c.value} value={c.value}>{getCountryLabel(c, locale)}</option>
                  ))}
                </select>
              </div>

              {/* Service Selection - Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">{t_(locale, "services")} <span className="text-red-500">*</span> <span className="text-gray-400 font-normal text-xs">{t_(locale, "servicesMulti")}</span></label>
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
                  <p className="text-red-500 text-xs mt-2">{t_(locale, "selectServices")}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || selectedServices.length === 0}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-base"
              >
                {status === "sending" ? t_(locale, "submitting") : t_(locale, "submit")}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">{t_(locale, "error")}</p>
              )}
            </form>
          </div>

          {/* Contact info below form */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
              <h3 className="font-semibold text-gray-900 mb-1">{t_(locale, "phoneCta")}</h3>
              <p className="text-blue-600 text-lg font-medium">02-363-2251</p>
              <p className="text-sm text-gray-500 mt-1">{t_(locale, "phoneHours")}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-center">
              <h3 className="font-semibold text-gray-900 mb-1">{t_(locale, "kakaoCta")}</h3>
              <p className="text-blue-600 text-lg font-medium">alexkorea</p>
              <p className="text-sm text-gray-500 mt-1">{t_(locale, "kakaoHours")}</p>
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
