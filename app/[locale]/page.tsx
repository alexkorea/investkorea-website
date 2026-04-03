import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustStatsSection } from "@/components/trust-stats-section"
import { MessengerSection } from "@/components/messenger-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
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
      <HeroSection locale={locale} />
      <TrustStatsSection locale={locale} />
      <MessengerSection locale={locale} />
      <ServicesSection locale={locale} />
      <TeamSection locale={locale} />
      <WhyChooseSection locale={locale} />
      <ProcessSection locale={locale} />
      <TestimonialsSection locale={locale} />
      <CTASection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
