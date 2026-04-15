import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { Messenger } from "@/components/messenger"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { Calendar, Tag, ArrowLeft } from "lucide-react"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ArticleJsonLd } from "@/components/structured-data"

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, "ko")
  if (!post) return { title: "Not found" }
  const BASE_URL = "https://investkorea.co.kr"
  return {
    title: `${post.title} - VISION 행정사사무소`,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
      languages: {
        ko: `${BASE_URL}/blog/${slug}`,
        en: `${BASE_URL}/en/blog/${slug}`,
        zh: `${BASE_URL}/zh/blog/${slug}`,
        ja: `${BASE_URL}/ja/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} - VISION 행정사사무소`,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      images: [{ url: post.image.startsWith("http") ? post.image : `${BASE_URL}${post.image}` }],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, "ko")
  if (!post) notFound()
  const allPosts = await getAllPosts("ko")
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const contentHtml = post.content

  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "블로그", path: "/blog" },
        { label: post.title, path: `/blog/${slug}` },
      ]} locale="ko" />
      <ArticleJsonLd title={post.title} description={post.excerpt} slug={slug} datePublished={post.date} locale="ko" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "author": { "@type": "Organization", "name": "비전행정사사무소" },
        "publisher": { "@type": "Organization", "name": "비전행정사사무소" },
        "description": post.excerpt,
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://investkorea.co.kr/blog/${slug}` }
      }) }} />

      {/* Messenger QR */}
      <Messenger locale="ko" />

      {/* Hero Banner */}
      <section className="relative pt-16">
        <div className="relative h-[280px] md:h-[380px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 w-full pb-10">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-gray-300">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                블로그 목록으로
              </Link>
              <div
                style={{ fontSize: '16px', lineHeight: '1.85' }}
                className="prose prose-gray max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:border-b-2 prose-h2:border-blue-500 prose-h2:pb-3 prose-h2:text-blue-900
                  prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-blue-800
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-strong:text-gray-900
                  prose-a:text-blue-600 prose-a:underline prose-a:underline-offset-2 prose-a:font-semibold
                  prose-blockquote:border-l-4 prose-blockquote:border-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-800 prose-blockquote:my-6 prose-blockquote:text-sm prose-blockquote:font-medium
                  prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 prose-img:max-h-[300px] prose-img:object-cover prose-img:w-full"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* QR Codes 2x2 */}
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-serif font-semibold text-gray-900 mb-3 text-center text-sm">메신저 상담</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Kakao Talk", qr: "/qr/kakao.jpg" },
                      { name: "WeChat", qr: "/qr/wechat.jpg" },
                      { name: "LINE", qr: "/qr/line.jpg" },
                      { name: "WhatsApp", qr: "/qr/whatsapp.jpg" },
                    ].map((m) => (
                      <div key={m.name} className="text-center">
                        <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-100 mb-1">
                          <img src={m.qr} alt={m.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs text-gray-600">{m.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-gray-900 mb-4">관련 글</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-1">{related.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h3 className="font-serif font-semibold mb-2">전문 상담이 필요하신가요?</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    VISION 행정사사무소의 전문 행정사가 맞춤 상담을 제공합니다.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-medium text-sm h-10 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    무료 상담 신청
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
