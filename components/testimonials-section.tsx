import { Quote, Building2, Briefcase, Users, Home } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const clientIcons = [Building2, Briefcase, Users, Home]

export function TestimonialsSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">{t.testimonials.badge}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-3 mb-4 text-balance">
            {t.testimonials.title}
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8"
            >
              <Quote className="w-10 h-10 text-accent/60 mb-6" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-primary-foreground/70">{testimonial.role}</p>
                <p className="text-sm text-accent">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Who We Help */}
        <div>
          <h3 className="text-center text-xl font-semibold mb-10">{t.testimonials.whoWeHelp}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.testimonials.clientTypes.map((client, index) => {
              const Icon = clientIcons[index]
              return (
                <div
                  key={client.title}
                  className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">{client.title}</h4>
                  <p className="text-sm text-primary-foreground/70">{client.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
