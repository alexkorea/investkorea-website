import { Button } from "@/components/ui/button"
import { type Locale, getTranslations } from "@/lib/translations"

export function CTA({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          {t.cta.title}
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary hover:bg-blue-50 px-8 h-12 text-base rounded-lg font-semibold">
            {t.cta.bookConsultation}
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base rounded-lg"
          >
            {t.cta.messengerInquiry}
          </Button>
        </div>
      </div>
    </section>
  )
}
