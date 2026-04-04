import Link from "next/link"
import Image from "next/image"
import { getPageMetadata } from "@/lib/seo-metadata"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { getAllPosts } from "@/lib/blog"
import { Calendar, Tag } from "lucide-react"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

export const metadata = getPageMetadata("blog", "ko")

export default function BlogPage() {
  const posts = getAllPosts("ko")

  return (
    <main className="min-h-screen">
      <Header locale="ko" />
      <PageBreadcrumb items={[
        { label: "블로그", path: "/blog" },
      ]} locale="ko" />

      {/* Hero Banner */}
      <section className="relative pt-16">
        <div className="relative h-[280px] md:h-[340px] overflow-hidden">
          <Image
            src="/pages/about.jpg"
            alt="블로그"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full mb-4">
                  VISION Blog
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                  블로그
                </h1>
                <p className="text-blue-100 text-lg">
                  외국인 투자, 비자, 법인설립 관련 최신 정보와 전문 가이드
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{post.date}</time>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
