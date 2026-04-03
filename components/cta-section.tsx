import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, BookOpen } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

export function CTASection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-2xl p-12 md:p-16 border border-primary/10">
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base font-medium">
              {t.cta.bookConsultation}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8 h-12 text-base font-medium">
              <MessageCircle className="mr-2 h-4 w-4" />
              {t.cta.messengerInquiry}
            </Button>
          </div>

          {/* Secondary link */}
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <BookOpen className="mr-2 h-4 w-4" />
            {t.cta.viewAllServices}
          </Button>
        </div>
      </div>
    </section>
  )
}
