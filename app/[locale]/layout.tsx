import { type Locale, locales } from "@/lib/translations"
import { LangSetter } from "@/components/lang-setter"

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
