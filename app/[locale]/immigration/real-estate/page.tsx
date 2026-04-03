import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { RealEstateContent } from "@/app/immigration/real-estate/content"
import { type Locale, locales } from "@/lib/translations"

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.immigrationRealEstate || pageTranslations.ko.immigrationRealEstate
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <RealEstateContent t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
