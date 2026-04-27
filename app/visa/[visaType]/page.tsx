import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { countries, visaTypes, getVisaType } from "@/lib/programmatic-data"

type Props = {
  params: Promise<{ visaType: string }>
}

export function generateStaticParams() {
  return visaTypes.map((v) => ({ visaType: v.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { visaType } = await params
  const visa = getVisaType(visaType)
  if (!visa) return {}

  const title = `${visa.code} ${visa.name} 국가별 안내 | VISION 행정사사무소`
  const description = `${visa.code} ${visa.name} - 20개국 국적별 맞춤 안내. ${visa.description}. VISION 행정사사무소 전문 상담.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ko_KR',
      url: `https://investkorea.co.kr/visa/${visa.slug}`,
      siteName: 'VISION 행정사사무소',
    },
    alternates: {
      canonical: `https://investkorea.co.kr/visa/${visa.slug}`,
    },
  }
}

export default async function VisaTypeIndexPage({ params }: Props) {
  const { visaType } = await params

  // Only handle programmatic slugs; let existing pages (d8, d7, f5, etc.) through
  const visa = getVisaType(visaType)
  if (!visa) notFound()

  return (
    <main className="min-h-screen bg-white">
      <Header locale="ko" />

      <PageBreadcrumb
        items={[
          { label: '비자', path: `/visa/${visa.slug}` },
          { label: `${visa.code} ${visa.name}`, path: `/visa/${visa.slug}` },
        ]}
        locale="ko"
      />

      {/* Hero */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-blue-600 font-medium mb-2">{visa.code} {visa.nameEn}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {visa.code} {visa.name} 국가별 안내
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {visa.description}. 국적별 맞춤 안내 페이지를 선택하세요.
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/visa/${visa.slug}/${country.slug}`}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <span className="text-4xl">{country.flag}</span>
                <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {country.name}
                </span>
                <span className="text-xs text-gray-500">{country.nameEn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{visa.code} {visa.name} 요약</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">{visa.slug === 'd8' ? '최소 투자금액' : '필수 조건'}</p>
              <p className="text-lg font-bold text-gray-900">{visa.minInvestment}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">체류 기간</p>
              <p className="text-lg font-bold text-gray-900">{visa.duration}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">핵심 혜택</p>
              <p className="text-lg font-bold text-gray-900">{visa.keyBenefit}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {visa.code} {visa.name} 전문 상담
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            VISION 행정사사무소가 {visa.code} 비자 취득을 처음부터 끝까지 지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              상담 신청하기
            </Link>
            <a
              href="tel:02-363-2251"
              className="inline-flex items-center bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors"
            >
              전화: 02-363-2251
            </a>
          </div>
        </div>
      </section>

      <Footer locale="ko" />
    </main>
  )
}
