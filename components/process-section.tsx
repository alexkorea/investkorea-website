import { MessageSquare, FileSearch, Target, FileCheck } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const stepIcons = [MessageSquare, FileSearch, Target, FileCheck]

export function ProcessSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">{t.process.badge}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-4 text-balance">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-border" />
                )}

                <div className="text-center">
                  {/* Step number and icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
