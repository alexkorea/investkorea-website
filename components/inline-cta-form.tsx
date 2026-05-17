"use client"

import { useState, FormEvent } from "react"

const FORM_LABELS: Record<string, {
  title: string
  namePlaceholder: string
  contactPlaceholder: string
  emailPlaceholder: string
  submit: string
  submitting: string
  success: string
  error: string
  service: string
}> = {
  ko: {
    title: "⚡ 30초 빠른 상담 신청",
    namePlaceholder: "이름 *",
    contactPlaceholder: "연락처 *",
    emailPlaceholder: "이메일",
    submit: "상담 신청",
    submitting: "전송 중...",
    success: "신청 완료! 곧 연락드리겠습니다.",
    error: "전송에 실패했습니다. 다시 시도해주세요.",
    service: "블로그 문의",
  },
  en: {
    title: "⚡ Quick Consultation — 30 Seconds",
    namePlaceholder: "Name *",
    contactPlaceholder: "Contact *",
    emailPlaceholder: "Email",
    submit: "Request Consultation",
    submitting: "Sending...",
    success: "Submitted! We'll be in touch shortly.",
    error: "Submission failed. Please try again.",
    service: "Blog Inquiry",
  },
  zh: {
    title: "⚡ 30秒快速咨询申请",
    namePlaceholder: "姓名 *",
    contactPlaceholder: "联系方式 *",
    emailPlaceholder: "电子邮件",
    submit: "申请咨询",
    submitting: "发送中...",
    success: "申请完成！我们将尽快与您联系。",
    error: "发送失败，请重试。",
    service: "博客咨询",
  },
  ja: {
    title: "⚡ 30秒で相談申請",
    namePlaceholder: "お名前 *",
    contactPlaceholder: "連絡先 *",
    emailPlaceholder: "メールアドレス",
    submit: "相談を申請する",
    submitting: "送信中...",
    success: "申請完了！近日中にご連絡いたします。",
    error: "送信に失敗しました。もう一度お試しください。",
    service: "ブログ問い合わせ",
  },
}

export function InlineCTAForm({ locale = "ko" }: { locale?: string }) {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const labels = FORM_LABELS[locale] || FORM_LABELS.ko

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim() || !contact.trim()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          email: email.trim(),
          services: [labels.service],
          source: "blog-inline",
        }),
      })
      if (!res.ok) throw new Error("fail")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="my-10 rounded-xl border-2 border-blue-200 bg-blue-50 p-6 text-center">
        <p className="text-lg font-semibold text-blue-800">{labels.success}</p>
      </div>
    )
  }

  return (
    <div className="my-10 rounded-xl border-2 border-blue-200 bg-blue-50/60 p-6 md:p-8">
      <h3 className="mb-4 text-lg font-bold text-blue-900">
        {labels.title}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-3 sm:grid-cols-3">
          <input
            type="text"
            placeholder={labels.namePlaceholder}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-lg border border-blue-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder={labels.contactPlaceholder}
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="h-11 rounded-lg border border-blue-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder={labels.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-lg border border-blue-300 bg-white px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-4 h-11 w-full rounded-lg text-sm font-semibold text-white disabled:opacity-60 sm:w-auto sm:px-10" style={{background:'#A33344'}}
        >
          {status === "loading" ? labels.submitting : labels.submit}
        </button>
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600">{labels.error}</p>
        )}
      </form>
    </div>
  )
}
