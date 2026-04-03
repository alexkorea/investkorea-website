import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/blog"
import { remark } from "remark"
import html from "remark-html"
import { Calendar, Tag, ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "ko")
  return {
    title: `${post.title} - VISION 행정사사무소`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug, "ko")
  const allPosts = getAllPosts("ko")
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <main className="min-h-screen">
      <Header locale="ko" />

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
                className="prose prose-lg prose-gray max-w-none
                  prose-headings:font-serif prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-li:text-gray-600
                  prose-strong:text-gray-900
                  prose-table:border prose-table:border-gray-200
                  prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2
                  prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-gray-200"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-24 space-y-8">
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
