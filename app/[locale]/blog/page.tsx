import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/cta"
import { getAllPosts } from "@/lib/blog"
import { type Locale, locales } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"
import { getPageMetadata, type PageKey } from "@/lib/seo-metadata"
import { Calendar, Tag } from "lucide-react"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

const blogLabels: Record<string, { title: string; subtitle: string; badge: string; back?: string }> = {
  ko: { title: "블로그", subtitle: "외국인 투자, 비자, 법인설립 관련 최신 정보와 전문 가이드", badge: "VISION Blog" },
  en: { title: "Blog", subtitle: "Latest information and expert guides on foreign investment, visas, and company formation", badge: "VISION Blog" },
  zh: { title: "博客", subtitle: "外国人投资、签证、公司设立相关最新信息和专业指南", badge: "VISION Blog" },
  ja: { title: "ブログ", subtitle: "外国人投資、ビザ、法人設立に関する最新情報と専門ガイド", badge: "VISION Blog" },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  return getPageMetadata("blog" as PageKey, locale)
}

export const revalidate = 60

export default async function LocaleBlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const posts = await getAllPosts(locale)
  const labels = blogLabels[locale] || blogLabels.ko

  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <PageBreadcrumb items={[
        { label: labels.title, path: "/blog" },
      ]} locale={locale} />

      {/* Hero Banner */}
      <section className="relative pt-16">
        <div className="relative h-[280px] md:h-[340px] overflow-hidden">
          <Image
            src="/pages/about.jpg"
            alt={labels.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full mb-4">
                  {labels.badge}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                  {labels.title}
                </h1>
                <p className="text-blue-100 text-lg">
                  {labels.subtitle}
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
                href={getLocalePath(locale, `/blog/${post.slug}`)}
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

      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
