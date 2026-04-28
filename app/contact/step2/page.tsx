"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

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

type FieldDef = {
  name: string
  label: string
  type: "text" | "select" | "textarea" | "radio"
  options?: string[]
  placeholder?: string
  required?: boolean
}

const serviceFields: Record<string, FieldDef[]> = {
  "법인설립": [
    { name: "nationality", label: "국적", type: "text", placeholder: "예: 미국, 중국, 일본", required: true },
    { name: "investAmount", label: "투자 예정 금액", type: "select", options: ["1억 원 미만", "1억 원", "3억 원", "5억 원 이상"], required: true },
    { name: "businessType", label: "사업 업종", type: "text", placeholder: "예: IT, 무역, 제조업, 요식업", required: true },
    { name: "visitDate", label: "한국 방문 예정일", type: "text", placeholder: "예: 2026년 5월", required: false },
    { name: "inKorea", label: "현재 한국 체류 여부", type: "radio", options: ["예", "아니오"], required: true },
  ],
  "D-8 투자비자": [
    { name: "nationality", label: "국적", type: "text", placeholder: "예: 미국, 중국, 일본", required: true },
    { name: "investAmount", label: "투자 금액", type: "select", options: ["1억 원 미만", "1억 원", "3억 원", "5억 원 이상"], required: true },
    { name: "businessType", label: "사업 업종", type: "text", placeholder: "예: IT, 무역, 제조업, 요식업", required: true },
    { name: "hasOffice", label: "한국 내 사무실 확보 여부", type: "radio", options: ["예", "아니오", "준비 중"], required: true },
    { name: "currentVisa", label: "현재 비자 종류", type: "text", placeholder: "예: B-1, C-3, 없음", required: false },
  ],
  "D-7 주재원비자": [
    { name: "nationality", label: "국적", type: "text", placeholder: "예: 미국, 중국, 일본", required: true },
    { name: "workDuration", label: "해외 본사 근무 기간", type: "text", placeholder: "예: 3년", required: true },
    { name: "hasBranch", label: "한국 지사 설립 여부", type: "radio", options: ["예", "아니오", "준비 중"], required: true },
    { name: "transferDate", label: "파견 예정일", type: "text", placeholder: "예: 2026년 6월", required: false },
  ],
  "F-5 영주권": [
    { name: "currentVisa", label: "현재 비자 종류", type: "text", placeholder: "예: D-8, E-7, F-2", required: true },
    { name: "stayDuration", label: "한국 체류 기간", type: "text", placeholder: "예: 5년", required: true },
    { name: "income", label: "연간 소득 수준", type: "select", options: ["3,000만 원 미만", "3,000만 ~ 5,000만 원", "5,000만 ~ 1억 원", "1억 원 이상"], required: true },
    { name: "topik", label: "한국어 능력 (TOPIK 등급)", type: "select", options: ["없음", "TOPIK 1급", "TOPIK 2급", "TOPIK 3급", "TOPIK 4급", "TOPIK 5급", "TOPIK 6급", "사회통합프로그램 이수"], required: true },
  ],
  "기타": [
    { name: "inquiry", label: "문의 내용", type: "textarea", placeholder: "궁금하신 내용을 자유롭게 작성해주세요.", required: true },
  ],
}

// Deduplicate fields across multiple services, keeping first occurrence
function getFieldsForServices(serviceList: string[]): { service: string; fields: FieldDef[] }[] {
  const sections: { service: string; fields: FieldDef[] }[] = []
  const usedFieldNames = new Set<string>()

  for (const svc of serviceList) {
    const allFields = serviceFields[svc] || serviceFields["기타"]
    const uniqueFields = allFields.filter((f) => {
      if (usedFieldNames.has(f.name)) return false
      usedFieldNames.add(f.name)
      return true
    })
    if (uniqueFields.length > 0) {
      sections.push({ service: svc, fields: uniqueFields })
    }
  }

  return sections
}

function Step2Form() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service") || ""
  const inquiryId = searchParams.get("inquiryId") || ""
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState<Record<string, string>>({})

  // Parse multiple services from comma-separated param
  const serviceList = serviceParam
    .split(",")
    .map((s) => decodeURIComponent(s).trim())
    .filter(Boolean)

  const sections = getFieldsForServices(serviceList.length > 0 ? serviceList : ["기타"])
  const serviceLabel = serviceList.length > 0 ? serviceList.join(" / ") : "기타"

  function updateField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const additionalMessage = (form.elements.namedItem("additionalMessage") as HTMLTextAreaElement)?.value || ""

    const payload = {
      inquiryId,
      service: serviceLabel,
      details: { ...formData },
      additionalMessage,
    }

    try {
      const res = await fetch("/api/contact-step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
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
      <main className="min-h-screen">
        <Header locale="ko" />
        <PageBreadcrumb items={[
          { label: "문의하기", path: "/contact" },
          { label: "상담 완료", path: "/contact/step2" },
        ]} locale="ko" />
        <section className="py-24">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">상담 신청이 완료되었습니다</h2>
              <p className="text-gray-600 mb-6">영업일 기준 1일 이내 연락드리겠습니다.</p>

              <div className="bg-gray-50 rounded-lg p-5 mb-6 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">전화:</span>
                  <span className="font-medium text-gray-900">02-363-2251</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">카카오톡:</span>
                  <span className="font-medium text-gray-900">alexkorea</span>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-11 rounded-lg font-semibold transition-colors"
              >
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
        <Footer locale="ko" />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "문의하기", path: "/contact" },
        { label: "상세 정보", path: "/contact/step2" },
      ]} locale="ko" />

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <StepIndicator step={2} />

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {serviceList.map((svc) => (
                <span key={svc} className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">{svc}</span>
              ))}
            </div>
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-1">상세 정보 입력</h2>
            <p className="text-sm text-gray-500 mb-6">선택하신 서비스에 맞는 상세 정보를 입력해주세요.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {sections.map((section, sectionIdx) => (
                <div key={section.service}>
                  {sections.length > 1 && (
                    <div className={`${sectionIdx > 0 ? "mt-6 pt-6 border-t border-gray-200" : ""}`}>
                      <h3 className="text-sm font-semibold text-blue-700 mb-4">{section.service}</h3>
                    </div>
                  )}
                  {section.fields.map((field) => (
                    <div key={field.name} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>

                      {field.type === "text" && (
                        <input
                          type="text"
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.name] || ""}
                          onChange={(e) => updateField(field.name, e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                      )}

                      {field.type === "select" && (
                        <select
                          required={field.required}
                          value={formData[field.name] || ""}
                          onChange={(e) => updateField(field.name, e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                        >
                          <option value="">선택해주세요</option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      )}

                      {field.type === "radio" && (
                        <div className="flex flex-wrap gap-3 mt-1">
                          {field.options?.map((opt) => (
                            <label
                              key={opt}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${
                                formData[field.name] === opt
                                  ? "border-blue-600 bg-blue-50 text-blue-700"
                                  : "border-gray-200 hover:border-gray-300 text-gray-700"
                              }`}
                            >
                              <input
                                type="radio"
                                name={field.name}
                                value={opt}
                                checked={formData[field.name] === opt}
                                onChange={(e) => updateField(field.name, e.target.value)}
                                className="sr-only"
                                required={field.required}
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )}

                      {field.type === "textarea" && (
                        <textarea
                          required={field.required}
                          placeholder={field.placeholder}
                          rows={5}
                          value={formData[field.name] || ""}
                          onChange={(e) => updateField(field.name, e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Additional message - common to all */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">추가 메시지 <span className="text-gray-400 font-normal">(선택사항)</span></label>
                <textarea
                  name="additionalMessage"
                  rows={3}
                  placeholder="추가적으로 전달하고 싶은 내용이 있으시면 작성해주세요."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors text-base"
              >
                {status === "sending" ? "전송 중..." : "상담 신청 완료"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.</p>
              )}

              <p className="text-xs text-gray-400 text-center">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
            </form>
          </div>

          <div className="mt-4 text-center">
            <Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              ← 이전 단계로 돌아가기
            </Link>
          </div>
        </div>
      </section>
      <Footer locale="ko" />
    </main>
  )
}

export default function Step2Page() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Header locale="ko" />
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4" />
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto" />
            </div>
          </div>
        </section>
        <Footer locale="ko" />
      </main>
    }>
      <Step2Form />
    </Suspense>
  )
}
