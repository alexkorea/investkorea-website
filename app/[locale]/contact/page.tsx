import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { ContactContent } from "@/app/contact/content"
import { type Locale, locales } from "@/lib/translations"

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.contact || pageTranslations.ko.contact
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <ContactContent t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
