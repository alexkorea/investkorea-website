// On-demand ISR: 블로그 글이 Supabase에 새로 들어오면 이 엔드포인트로 즉시 캐시 무효화.
// 호출 예:
//   POST /api/revalidate
//   body: { secret, slug? }
//   - secret 은 BLOG_REVALIDATE_SECRET 와 일치해야 함
//   - slug 주면 해당 글 페이지만 재검증, 없으면 /blog 전체 재검증
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: Request) {
  let body: { secret?: string; slug?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 })
  }

  const secret = process.env.BLOG_REVALIDATE_SECRET
  if (!secret || body.secret !== secret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const revalidated: string[] = []
  const locales = ["", "/en", "/zh", "/ja"]

  if (body.slug) {
    for (const loc of locales) {
      const p = `${loc}/blog/${body.slug}`
      revalidatePath(p)
      revalidated.push(p)
    }
  }
  for (const loc of locales) {
    const p = `${loc}/blog`
    revalidatePath(p)
    revalidated.push(p)
  }
  revalidatePath("/sitemap.xml")
  revalidated.push("/sitemap.xml")

  return NextResponse.json({ ok: true, revalidated })
}
