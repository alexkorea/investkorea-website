import type { Metadata } from "next"
import { type Locale, locales } from "@/lib/translations"
import { LangSetter } from "@/components/lang-setter"

const SITE_URL = "https://investkorea.co.kr"

const META: Record<string, { title: string; description: string; lang: string }> = {
  en: {
    title: "Korea Company Registration & Foreign Investment | VISION Admin Office",
    description: "Korea company registration, FDI, D-8 investor visa, D-7 visa, F-5 permanent residency consulting. Expert guidance in English, Chinese, Japanese, Korean.",
    lang: "en",
  },
  zh: {
    title: "韩国公司注册·外资投资·签证咨询 | VISION行政士事务所",
    description: "韩国法人设立、外资投资(FDI)、D-8投资签证、D-7签证、F-5永久居留权专业咨询。支持中文、韩语、英语、日语。",
    lang: "zh",
  },
  ja: {
    title: "韓国会社設立・外国人投資・ビザ相談 | VISIONビザ事務所",
    description: "韓国法人設立、外国人投資(FDI)、D-8投資ビザ、D-7ビザ、F-5永住権の専門コンサルティング。日本語・韓国語・英語・中国語対応。",
    lang: "ja",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale]
  if (!m) return {}

  return {
    title: m.title,
    description: m.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ko: SITE_URL,
        en: `${SITE_URL}/en`,
        zh: `${SITE_URL}/zh`,
        ja: `${SITE_URL}/ja`,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${locale}`,
      siteName: "VISION 행정사사무소",
      type: "website",
      locale: m.lang,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "VISION 행정사사무소" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: { index: true, follow: true },
  }
}

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "ko")
    .map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <>
      <LangSetter locale={locale} />
      {children}
    </>
  )
}
