import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageTranslations } from "@/lib/page-translations"
import { LiaisonContent } from "@/app/company/liaison/content"
import { type Locale, locales } from "@/lib/translations"
import { getPageMetadata, type PageKey } from "@/lib/seo-metadata"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { ServiceJsonLd } from "@/components/structured-data"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  return getPageMetadata("companyLiaison" as PageKey, locale)
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale
  const t = pageTranslations[locale]?.companyLiaison || pageTranslations.ko.companyLiaison
  return (
    <main className="min-h-screen">
      <Header locale={locale} />
      <PageBreadcrumb items={[
        { label: t.badge, path: "/company/fdi" },
        { label: t.title, path: "/company/liaison" },
      ]} locale={locale} />
      <ServiceJsonLd name={t.title} description={t.subtitle} locale={locale} path="/company/liaison" />
      <LiaisonContent t={t} locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
