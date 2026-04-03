import Image from "next/image"
import { type Locale, getTranslations } from "@/lib/translations"

const messengerData = [
  { qr: "/qr/kakao.jpg", color: "bg-yellow-400" },
  { qr: "/qr/wechat.jpg", color: "bg-green-500" },
  { qr: "/qr/line.jpg", color: "bg-green-400" },
  { qr: "/qr/whatsapp.jpg", color: "bg-emerald-500" },
]

export function Messenger({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-medium mb-4">
            {t.messenger.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {t.messenger.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.messenger.subtitle}
          </p>
        </div>

        {/* QR Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {t.messenger.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow"
            >
              {/* QR Code */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden bg-muted border border-border">
                <Image
                  src={messengerData[i].qr}
                  alt={`${item.name} QR Code`}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Messenger Info */}
              <div className={`inline-block w-2 h-2 rounded-full ${messengerData[i].color} mb-2`} />
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
