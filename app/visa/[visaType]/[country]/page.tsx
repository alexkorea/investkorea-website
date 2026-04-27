import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { FaqJsonLd, ServiceJsonLd } from "@/components/structured-data"
import { countries, visaTypes, getCountry, getVisaType } from "@/lib/programmatic-data"

type Props = {
  params: Promise<{ visaType: string; country: string }>
}

export function generateStaticParams() {
  const params: { visaType: string; country: string }[] = []
  for (const visa of visaTypes) {
    for (const country of countries) {
      params.push({ visaType: visa.slug, country: country.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { visaType, country: countrySlug } = await params
  const visa = getVisaType(visaType)
  const country = getCountry(countrySlug)
  if (!visa || !country) return {}

  const title = `${country.name}인의 한국 ${visa.code} ${visa.name} 안내 | VISION 행정사사무소`
  const description = `${country.name}(${country.nameEn}) 국적자를 위한 한국 ${visa.code} ${visa.name} 신청 가이드. ${visa.description}. 전문 행정사 상담 제공.`

  return {
    title,
    description,
    keywords: [
      `${country.name} ${visa.code}`,
      `${country.nameEn} ${visa.code} visa Korea`,
      `${visa.name} ${country.name}`,
      `한국 ${visa.name}`,
      `${country.nameLocal} Korea visa`,
      '행정사', '비자 컨설팅',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ko_KR',
      url: `https://investkorea.co.kr/visa/${visa.slug}/${country.slug}`,
      siteName: 'VISION 행정사사무소',
    },
    alternates: {
      canonical: `https://investkorea.co.kr/visa/${visa.slug}/${country.slug}`,
    },
  }
}

/* ── Country-specific notes ────────────────────────────────── */
function getCountryNotes(countrySlug: string, visaCode: string): string[] {
  const notes: string[] = [
    '모든 서류는 한국어 번역 공증이 필요합니다.',
    '비자 심사 기간은 약 30~45일 소요됩니다.',
    '신청 전 출입국관리사무소에 사전 상담을 권장합니다.',
  ]
  const extra: Record<string, string[]> = {
    china: ['중국 서류는 반드시 중국 외교부 인증(아포스티유)이 필요합니다.', '한-중 조세조약 관련 세무 검토를 권장합니다.'],
    vietnam: ['베트남 서류는 베트남 외교부 공증 후 주한 베트남 대사관 확인이 필요합니다.'],
    japan: ['한-일 조세조약에 따른 이중과세 방지 혜택을 활용할 수 있습니다.'],
    usa: ['미국 시민권자는 FBAR/FATCA 보고 의무가 있으므로 세무 전문가 상담을 권장합니다.'],
    india: ['인도 서류는 인도 외교부 아포스티유 인증이 필요합니다.'],
    russia: ['러시아어 서류는 공인번역사의 한국어 번역이 필요합니다.'],
    mongolia: ['몽골 서류는 몽골 외교부 인증 후 주한 몽골 대사관 확인이 필요합니다.'],
    uzbekistan: ['우즈베키스탄 서류는 외교부 아포스티유 인증이 필요합니다.'],
  }
  if (extra[countrySlug]) notes.push(...extra[countrySlug])
  return notes
}

/* ── FAQ ───────────────────────────────────────────────────── */
function getFaqs(countryName: string, visa: { code: string; name: string; duration: string; keyBenefit: string }) {
  return [
    {
      question: `${countryName} 국적자가 ${visa.code} ${visa.name}를 받으려면 얼마나 걸리나요?`,
      answer: `${visa.code} 비자 심사 기간은 보통 30~45일 정도 소요됩니다. 서류 준비 기간을 포함하면 2~3개월을 예상하시면 됩니다. VISION 행정사사무소에서는 서류 준비부터 접수까지 전 과정을 지원합니다.`,
    },
    {
      question: `${visa.code} 비자의 체류 기간과 연장은 어떻게 되나요?`,
      answer: `${visa.code} 비자의 체류 기간은 ${visa.duration}입니다. 비자 만료 전 출입국관리사무소에서 연장 신청이 가능하며, ${visa.keyBenefit}이 가능합니다.`,
    },
    {
      question: `${visa.code} 비자로 가족을 데려올 수 있나요?`,
      answer: `네, ${visa.code} 비자 소지자는 배우자와 미성년 자녀를 F-3(동반) 비자로 초청할 수 있습니다. 가족 비자 신청도 함께 지원해 드립니다.`,
    },
  ]
}

/* ── Page ──────────────────────────────────────────────────── */
export default async function VisaCountryPage({ params }: Props) {
  const { visaType, country: countrySlug } = await params
  const visa = getVisaType(visaType)
  const country = getCountry(countrySlug)
  if (!visa || !country) notFound()

  const notes = getCountryNotes(country.slug, visa.code)
  const faqs = getFaqs(country.name, visa)

  const steps = visa.slug === 'd8'
    ? [
        { num: '01', title: '사업 계획 수립', desc: '투자 목적, 사업 분야, 투자 금액 등 사업 계획을 구체적으로 수립합니다.' },
        { num: '02', title: '법인 설립', desc: '외국인투자촉진법에 따라 외국인투자기업을 설립하고 사업자등록을 완료합니다.' },
        { num: '03', title: '투자자금 송금', desc: `${country.name}에서 한국으로 1억원 이상의 투자금을 외국환은행을 통해 송금합니다.` },
        { num: '04', title: '비자 서류 준비', desc: '투자 증빙, 사업 계획서, 신원 보증 서류 등 필요 서류를 준비합니다.' },
        { num: '05', title: '비자 신청 및 발급', desc: '출입국관리사무소에 D-8 비자를 신청하고 심사를 거쳐 발급받습니다.' },
      ]
    : [
        { num: '01', title: '본사 파견 결정', desc: `${country.name} 소재 본사에서 한국 지사로의 파견을 공식 결정합니다.` },
        { num: '02', title: '한국 지사 확인', desc: '한국 내 지사(지점, 자회사 등)의 설립 및 운영 현황을 확인합니다.' },
        { num: '03', title: '재직 증명 준비', desc: `${country.name} 본사에서 1년 이상 근무한 사실을 증명하는 서류를 준비합니다.` },
        { num: '04', title: '비자 서류 준비', desc: '파견 명령서, 고용 계약서, 회사 서류 등 필요 서류를 구비합니다.' },
        { num: '05', title: '비자 신청 및 발급', desc: '출입국관리사무소에 D-7 비자를 신청하고 심사를 거쳐 발급받습니다.' },
      ]

  const documents = visa.slug === 'd8'
    ? [
        '여권 사본 및 증명사진',
        '외국인투자기업 등록증명서',
        '사업자등록증 사본',
        '법인등기부등본',
        '투자자금 도입 증빙 (외국환매입증명서)',
        '사업계획서',
        '사무실 임대차계약서',
        '본국 범죄경력증명서',
        '재정 능력 증빙 서류',
      ]
    : [
        '여권 사본 및 증명사진',
        '본사 재직증명서 (1년 이상 근무 확인)',
        '파견명령서 또는 발령장',
        '한국 지사 사업자등록증 사본',
        '한국 지사 법인등기부등본',
        '고용계약서',
        '본사 회사 소개 자료',
        '본국 범죄경력증명서',
        '학력/경력 증명 서류',
      ]

  return (
    <main className="min-h-screen bg-white">
      <Header locale="ko" />

      <PageBreadcrumb
        items={[
          { label: '비자', path: `/visa/${visa.slug}` },
          { label: `${visa.code} ${visa.name}`, path: `/visa/${visa.slug}` },
          { label: `${country.name}`, path: `/visa/${visa.slug}/${country.slug}` },
        ]}
        locale="ko"
      />

      <ServiceJsonLd
        name={`${country.name} ${visa.code} ${visa.name}`}
        description={`${country.name} 국적자를 위한 한국 ${visa.code} ${visa.name} 전문 컨설팅`}
        locale="ko"
        path={`/visa/${visa.slug}/${country.slug}`}
      />
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="pt-8 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-6xl mb-4 block">{country.flag}</span>
          <p className="text-sm text-blue-600 font-medium mb-2">
            {visa.code} {visa.name} &middot; {country.nameEn}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {country.name}인의 한국 {visa.code} {visa.name} 안내
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {visa.description}. {country.name}({country.nameLocal}) 국적자를 위한 맞춤 안내를 제공합니다.
          </p>
        </div>
      </section>

      {/* Key Info Table */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 정보</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-sm text-blue-600 font-medium mb-1">
                {visa.slug === 'd8' ? '최소 투자금액' : '필수 조건'}
              </p>
              <p className="text-xl font-bold text-gray-900">{visa.minInvestment}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-sm text-blue-600 font-medium mb-1">체류 기간</p>
              <p className="text-xl font-bold text-gray-900">{visa.duration}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-sm text-blue-600 font-medium mb-1">핵심 혜택</p>
              <p className="text-xl font-bold text-gray-900">{visa.keyBenefit}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">신청 절차 5단계</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">필요 서류</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <li key={doc} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  &#10003;
                </span>
                <span className="text-gray-700">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Country-specific Notes */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {country.name} 국적자 주의사항
          </h2>
          <ul className="space-y-3">
            {notes.map((note, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  !
                </span>
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">자주 묻는 질문</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Q. {faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {country.name} {visa.code} {visa.name} 전문 상담
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            VISION 행정사사무소가 {country.name} 국적자의 {visa.code} 비자 취득을 처음부터 끝까지 지원합니다.
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
              전화 상담: 02-363-2251
            </a>
            <a
              href="https://open.kakao.com/o/s6Z5Kvlg"
              className="inline-flex items-center bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              카카오톡: alexkorea
            </a>
          </div>
        </div>
      </section>

      <Footer locale="ko" />
    </main>
  )
}
