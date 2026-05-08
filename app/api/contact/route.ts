import { NextResponse } from "next/server"
import * as nodemailer from "nodemailer"

const SITE_NAME = "InvestKorea"
const SITE_NAME_KR = "인베스트코리아"

// Simple in-process rate limiter (resets on cold start — good enough to slow bots)
const rateMap = new Map<string, { count: number; ts: number }>()
const RATE_WINDOW_MS = 5 * 60 * 1000 // 5 min
const RATE_MAX = 3

function getClientIp(req: Request): string {
  return req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now - entry.ts > RATE_WINDOW_MS) {
    rateMap.set(ip, { count: 1, ts: now })
    return false
  }
  entry.count++
  return entry.count > RATE_MAX
}

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com","guerrillamail.com","tempmail.com","throwaway.email","10minutemail.com",
  "yopmail.com","sharklasers.com","guerrillamailblock.com","spam4.me","trashmail.com",
  "maildrop.cc","getairmail.com","dispostable.com","mailnull.com","spamgourmet.com",
  "fakeinbox.com","tempr.email","discard.email","spamhereplease.com","mailnesia.com",
])

function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase() || ""
  return DISPOSABLE_DOMAINS.has(domain)
}

async function sendEmail(fields: Record<string, string>, senderName: string, senderEmail: string) {
  const appPassword = process.env.GMAIL_APP_PASSWORD
  if (!appPassword) {
    console.warn("GMAIL_APP_PASSWORD not set — skipping email notification")
    return
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "5000meter@gmail.com",
      pass: appPassword,
    },
  })

  const rows = Object.entries(fields)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f9f9f9;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value || "-"}</td></tr>`)
    .join("\n")

  const html = `
    <div style="font-family:'Apple SD Gothic Neo',sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a56db;">[${SITE_NAME_KR}] 새 상담 신청</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${rows}
      </table>
      <p style="color:#666;font-size:13px;">이 메일은 ${SITE_NAME} 웹사이트 상담 폼에서 자동 발송되었습니다.</p>
    </div>
  `

  await transporter.sendMail({
    from: { name: senderName + " via " + SITE_NAME, address: "5000meter@gmail.com" },
    to: "5000meter@gmail.com",
    replyTo: senderEmail,
    subject: `[${SITE_NAME_KR}] 새 상담 신청 - ${fields["이름"] || "고객"}`,
    html,
  })
}


const NOTION_KEY = process.env.NOTION_API_KEY || ""
const NOTION_DB = "34c5bd7c-ac5a-81aa-a9f0-c5ba54d2547d"

async function saveToNotion(data: Record<string, string>) {
  if (!NOTION_KEY) return
  const today = new Date().toISOString().slice(0, 10)
  await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + NOTION_KEY,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DB },
      properties: {
        "이름": { title: [{ text: { content: data.name || "" } }] },
        "이메일": { email: data.email || null },
        "연락처": { phone_number: data.phone || null },
        "서비스": { rich_text: [{ text: { content: data.service || data.type || "" } }] },
        "메시지": { rich_text: [{ text: { content: data.message || "" } }] },
        "접수일": { date: { start: today } },
        "상태": { select: { name: "신규" } },
      },
    }),
  })
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 })
    }

    const body = await request.json()

    if (body.website) {
      return NextResponse.json({ success: true })
    }

    const { name, email, phone, nationality, service, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    if (isDisposableEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 })
    }

    const text = `[InvestKorea] 새 상담 문의

이름: ${name || "-"}
이메일: ${email || "-"}
전화번호: ${phone || "-"}
국적: ${nationality || "-"}
서비스: ${service || "-"}
메시지: ${message || "-"}`

    // Telegram notification
    const telegramPromise = fetch(
      `https://api.telegram.org/bot8748564690:AAEGsXxcfqrHmGue8lkqUaa2E0Q8CDCY-Eo/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "5533847195",
          text,
        }),
      }
    )

    // Email notification
    const emailPromise = sendEmail({
      "이름": name,
      "이메일": email,
      "전화번호": phone,
      "국적": nationality,
      "서비스": service,
      "메시지": message,
    }, name, email).catch((err) => console.error("Email send error:", err))

    // Notion save (legacy)
    const notionPromise = saveToNotion(body).catch((err) => console.error("Notion error:", err))

    // Notion CRM (new unified system)
    const { saveToCRM } = await import("@/lib/notion-crm")
    const crmPromise = saveToCRM({
      brand: 'investkorea', formType: 'contact',
      siteUrl: 'https://www.investkorea.co.kr/contact',
      name, email, phone, nationality,
      serviceRaw: service, message,
      rawPayload: body,
    }).catch((err) => console.error("CRM error:", err))

    await Promise.all([telegramPromise, emailPromise, notionPromise, crmPromise])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}
