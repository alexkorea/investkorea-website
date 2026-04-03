import Image from "next/image"
import { type Locale, getTranslations } from "@/lib/translations"

const messengerData = [
  { qr: "/qr/kakao.jpg" },
  { qr: "/qr/wechat.jpg" },
  { qr: "/qr/line.jpg" },
  { qr: "/qr/whatsapp.jpg" },
]

const messengerNames = ["Kakao Talk", "WeChat", "LINE", "WhatsApp"]

export function Messenger({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-12 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            {t.messenger.title}
          </h2>
          <p className="text-muted-foreground">
            {t.messenger.subtitle}
          </p>
        </div>

        {/* QR Cards - compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {messengerNames.map((name, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 text-center border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-28 h-28 mx-auto mb-3 rounded-lg overflow-hidden bg-muted border border-border">
                <Image
                  src={messengerData[i].qr}
                  alt={`${name} QR Code`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
