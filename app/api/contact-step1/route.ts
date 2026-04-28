import { NextResponse } from "next/server"
import { saveToCRM } from "@/lib/notion-crm"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, contact, service } = body

    if (!name || !contact || !service) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Determine if contact is phone or kakao
    const isPhone = /^[\d\s\-+()]+$/.test(contact.trim())
    const phone = isPhone ? contact : undefined
    const kakaoId = !isPhone ? contact : undefined

    // Save to Notion CRM
    const crmResult = await saveToCRM({
      brand: "investkorea",
      formType: "consultation_step1",
      siteUrl: "https://www.investkorea.co.kr/contact",
      name,
      phone,
      serviceRaw: service,
      message: kakaoId ? `카카오톡 ID: ${kakaoId}` : undefined,
      rawPayload: { name, contact, service, kakaoId },
    })

    const inquiryId = crmResult.inboxId || `inv-${Date.now()}`

    return NextResponse.json({ ok: true, inquiryId })
  } catch (error) {
    console.error("Contact step1 error:", error)
    return NextResponse.json(
      { ok: false, error: "Failed to save inquiry" },
      { status: 500 }
    )
  }
}
