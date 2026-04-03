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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StructuredData locale="ko" />
      <Header locale="ko" />
      <Hero locale="ko" />
      <ServicesOverview locale="ko" />
      <Stats locale="ko" />
      <Team locale="ko" />
      <Messenger locale="ko" />
      <WhyUs locale="ko" />
      <CTA locale="ko" />
      <Footer locale="ko" />
    </main>
  )
}
