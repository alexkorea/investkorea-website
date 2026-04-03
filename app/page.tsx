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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StructuredData locale="ko" />
      <Header locale="ko" />
      <HeroSection locale="ko" />
      <TrustStatsSection locale="ko" />
      <MessengerSection locale="ko" />
      <ServicesSection locale="ko" />
      <TeamSection locale="ko" />
      <WhyChooseSection locale="ko" />
      <ProcessSection locale="ko" />
      <TestimonialsSection locale="ko" />
      <CTASection locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
