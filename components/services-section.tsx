import { Button } from "@/components/ui/button"
import {
  Building2,
  Building,
  FileCheck,
  Briefcase,
  Shield,
  Landmark,
  Home,
  Heart,
  ArrowRight
} from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const serviceIcons = [Building2, Building, FileCheck, Briefcase, Shield, Landmark, Home, Heart]
const serviceHrefs = [
  "/services/fdi",
  "/services/branch-office",
  "/services/d8-visa",
  "/services/d7-visa",
  "/services/permanent-residency",
  "/services/f5-investment",
  "/services/real-estate",
  "/services/public-interest",
]

export function ServicesSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">{t.services.badge}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4 text-balance">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <div
                key={service.title}
                className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:text-accent hover:bg-transparent group"
                >
                  {t.services.learnMore}
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
