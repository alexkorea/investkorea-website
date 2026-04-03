import { Users, Award, Building2, Globe2 } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const icons = [Award, Users, Building2, Globe2]

export function TrustStatsSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.trustStats.stats.map((stat, index) => {
            const Icon = icons[index]
            return (
              <div
                key={stat.label}
                className="text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-5">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-4xl font-serif font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-primary-foreground/70">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
