import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

const messengerStyles = [
  { color: "bg-[#FEE500]", textColor: "text-[#3C1E1E]", icon: "K", qr: "/qr/kakao.jpg" },
  { color: "bg-[#07C160]", textColor: "text-white", icon: "W", qr: "/qr/wechat.jpg" },
  { color: "bg-[#00B900]", textColor: "text-white", icon: "L", qr: "/qr/line.jpg" },
  { color: "bg-[#25D366]", textColor: "text-white", icon: "W", qr: "/qr/whatsapp.jpg" },
]

export function MessengerSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">{t.messenger.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t.messenger.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.messenger.subtitle}
          </p>
        </div>

        {/* Messenger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.messenger.items.map((messenger, index) => {
            const style = messengerStyles[index]
            return (
              <div
                key={messenger.name}
                className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
              >
                {/* QR Code */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 bg-white flex items-center justify-center border border-border">
                  <img src={style.qr} alt={messenger.name + " QR"} className="w-full h-full object-contain p-2" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {messenger.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {messenger.description}
                </p>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                >
                  {t.messenger.contactNow}
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
