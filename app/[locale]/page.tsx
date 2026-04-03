import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { Stats } from "@/components/stats"
import { Team } from "@/components/team"
import { Messenger } from "@/components/messenger"
import { WhyUs } from "@/components/why-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { type Locale, locales } from "@/lib/translations"

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "ko")
    .map((locale) => ({ locale }))
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = (locales.includes(localeParam as Locale) ? localeParam : "ko") as Locale

  return (
    <main className="min-h-screen">
      <StructuredData locale={locale} />
      <Header locale={locale} />
      <Hero locale={locale} />
      <ServicesOverview locale={locale} />
      <Stats locale={locale} />
      <Team locale={locale} />
      <Messenger locale={locale} />
      <WhyUs locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
