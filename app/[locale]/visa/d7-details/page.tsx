import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7DetailsContent } from "@/app/visa/d7-details/content"
import { type Locale, locales } from "@/lib/translations"

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.visaD7Details || pageTranslations.ko.visaD7Details
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <D7DetailsContent t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
