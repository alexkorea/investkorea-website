import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { D7Content } from "@/app/visa/d7/content"
import { type Locale, locales } from "@/lib/translations"
import { getPageMetadata, type PageKey } from "@/lib/seo-metadata"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  return getPageMetadata("visaD7" as PageKey, locale)
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.visaD7 || pageTranslations.ko.visaD7
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <PageBreadcrumb items={[
        { label: t.badge, path: "/visa/d8" },
        { label: t.title, path: "/visa/d7" },
      ]} locale={locale} />
      <ServiceJsonLd name={t.title} description={t.subtitle} locale={locale} path="/visa/d7" />
      <D7Content t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
