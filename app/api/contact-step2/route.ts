import { NextResponse } from "next/server"

const NOTION_KEY = process.env.NOTION_CRM_KEY || ""
const TELEGRAM_BOT_TOKEN = "8603761359:AAGiXjJUrhUhEnqCV5a9psTPaUYOcrZmbfE"
const TELEGRAM_CHAT_ID = "5533847195"

async function notionReq(endpoint: string, method: string, body?: any) {
  const res = await fetch(`https://api.notion.com/v1/${endpoint}`, {
    method,
    headers: {
      "Authorization": `Bearer ${NOTION_KEY}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  return res.json()
}

function formatDetailsForDisplay(service: string, details: Record<string, string>, additionalMessage?: string): string {
  const fieldLabels: Record<string, string> = {
    nationality: "국적",
    investAmount: "투자 금액",
    businessType: "사업 업종",
    visitDate: "방문 예정일",
    inKorea: "한국 체류 여부",
    hasOffice: "사무실 확보",
    currentVisa: "현재 비자",
    workDuration: "본사 근무 기간",
    hasBranch: "지사 설립 여부",
    transferDate: "파견 예정일",
    stayDuration: "한국 체류 기간",
    income: "연간 소득",
    topik: "한국어 능력",
    inquiry: "문의 내용",
  }

  let text = `[InvestKorea] 상담 신청 완료\n\n`
  text += `서비스: ${service}\n`
  text += `────────────\n`

  for (const [key, value] of Object.entries(details)) {
    if (value) {
      const label = fieldLabels[key] || key
      text += `${label}: ${value}\n`
    }
  }

  if (additionalMessage) {
    text += `\n추가 메시지:\n${additionalMessage}`
  }

  return text
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { inquiryId, service, details, additionalMessage } = body

    if (!service || !details) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Build summary text for CRM
    const detailsSummary = Object.entries(details as Record<string, string>)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join(" | ")

    const fullSummary = additionalMessage
      ? `${detailsSummary} | 추가메시지: ${additionalMessage}`
      : detailsSummary

    // Update existing inquiry in Notion CRM if we have an inquiryId
    const updatePromise = (async () => {
      if (inquiryId && NOTION_KEY) {
        try {
          await notionReq(`pages/${inquiryId}`, "PATCH", {
            properties: {
              "Form Type": { select: { name: "consultation_complete" } },
              "Quote Answers Summary": {
                rich_text: [{ text: { content: fullSummary.substring(0, 2000) } }],
              },
              "Message": {
                rich_text: [{ text: { content: (additionalMessage || "").substring(0, 2000) } }],
              },
            },
          })
        } catch (err) {
          console.error("Notion update error:", err)
        }
      }
    })()

    // Send Telegram notification
    const telegramText = formatDetailsForDisplay(service, details, additionalMessage)
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramText,
        }),
      }
    ).catch((err) => console.error("Telegram error:", err))

    await Promise.all([updatePromise, telegramPromise])

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact step2 error:", error)
    return NextResponse.json(
      { ok: false, error: "Failed to process inquiry" },
      { status: 500 }
    )
  }
}
