import { Globe2, Award, Users, Workflow, Headphones, CheckCircle2 } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const featureIcons = [Globe2, Award, Users, Workflow, Headphones, CheckCircle2]

export function WhyChooseSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">{t.whyChoose.badge}</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-6 text-balance">
              {t.whyChoose.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.whyChoose.subtitle}
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {t.whyChoose.keyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {t.whyChoose.features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
