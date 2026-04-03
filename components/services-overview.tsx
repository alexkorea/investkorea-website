import { Building2, FileCheck, Globe2 } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const serviceIcons = [Building2, FileCheck, Globe2]

export function ServicesOverview({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  // Group the 8 service items into 3 cards:
  // Card 1: Company Establishment (items 0-1: FDI + Branch/Liaison)
  // Card 2: Visa Services (items 2-3: D-8 + D-7)
  // Card 3: Immigration & Residency (items 4-7: F-5 strategy + F-5 investment + Real Estate + Public Interest)
  const cards = [
    {
      icon: serviceIcons[0],
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      tags: [t.services.items[0].title, t.services.items[1].title],
    },
    {
      icon: serviceIcons[1],
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      tags: [t.services.items[2].title, t.services.items[3].title],
    },
    {
      icon: serviceIcons[2],
      title: t.services.items[4].title,
      description: t.services.items[4].description,
      tags: [t.services.items[5].title, t.services.items[6].title, t.services.items[7].title],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-medium mb-4">
            {t.services.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-border bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-sm px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
