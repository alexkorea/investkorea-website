import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { F5StrategiesContent } from "@/app/visa/f5-strategies/content"
import { type Locale, locales } from "@/lib/translations"

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.visaF5Strategies || pageTranslations.ko.visaF5Strategies
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <F5StrategiesContent t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
