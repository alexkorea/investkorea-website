import { Languages, Award, Users, Briefcase } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const featureIcons = [Languages, Award, Users, Briefcase]

export function WhyUs({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  // Use first 4 features from the existing translations
  const features = t.whyChoose.features.slice(0, 4)

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-medium mb-4">
            {t.whyChoose.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.whyChoose.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.whyChoose.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = featureIcons[i]
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-muted hover:bg-blue-50 border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
