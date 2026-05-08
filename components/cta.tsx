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
          <Button style={{background:'#A33344',color:'#fff',padding:'0 32px'}} className="h-12 text-base rounded-lg font-semibold">
            {t.cta.bookConsultation}
          </Button>
          <Button style={{background:'#A33344',color:'#fff',padding:'0 32px'}} className="h-12 text-base rounded-lg font-semibold">
            {t.cta.messengerInquiry}
          </Button>
        </div>
      </div>
    </section>
  )
}
