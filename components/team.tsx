import { type Locale, getTranslations } from "@/lib/translations"

const photoMap: Record<string, string> = {
  "이원중": "/team/leewj.jpg",
  "정유선": "/team/jungyus.jpg",
  "한경택": "/team/hankt.jpg",
  "김정은": "/team/kimje.jpg",
  "이시정": "/team/leesj.jpg",
  "정희정": "/team/junghj.jpg",
  "백승수": "/team/baekss.jpg",
  "김영주": "/team/kimyj.jpg",
  "허경": "/team/hukyung.jpg",
}

const nameToKorean: Record<string, string> = {
  "Lee Won-jung": "이원중", "Jung Yu-sun": "정유선", "Han Kyung-taek": "한경택",
  "Kim Jung-eun": "김정은", "Lee Si-jung": "이시정", "Jung Hee-jung": "정희정",
  "Baek Seung-su": "백승수", "Kim Young-ju": "김영주", "Heo Kyung": "허경",
  "李元重": "이원중", "郑有善": "정유선", "韩庆泽": "한경택",
  "金正恩": "김정은", "李时政": "이시정", "郑熙晶": "정희정",
  "白胜秀": "백승수", "金英珠": "김영주", "许京": "허경",
  "鄭有善": "정유선", "韓慶澤": "한경택", "李時政": "이시정",
  "鄭熙晶": "정희정", "白勝秀": "백승수", "許京": "허경",
  "이원중": "이원중", "정유선": "정유선", "한경택": "한경택",
  "김정은": "김정은", "이시정": "이시정", "정희정": "정희정",
  "백승수": "백승수", "김영주": "김영주", "허경": "허경",
}

function getPhoto(name: string): string {
  const koreanName = nameToKorean[name] || name
  return photoMap[koreanName] || "/placeholder-user.jpg"
}

export function Team({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-base font-medium mb-4">
            {t.team.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.team.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.team.subtitle}
          </p>
        </div>

        {/* Specialists - 6 members in a row */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            {t.team.specialistsLabel}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {t.team.specialists.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden bg-[#dce8f5] border-2 border-border group-hover:border-primary/30 transition-all shadow-sm">
                  <img
                    src={getPhoto(member.name)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-semibold text-foreground">{member.name}</h4>
                <p className="text-base text-primary font-medium mb-2">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.languages.map((lang, j) => (
                    <span key={j} className="text-sm px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Staff - 3 members centered */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            {t.team.supportLabel}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {t.team.support.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-[#dce8f5] border-2 border-border group-hover:border-primary/30 transition-all shadow-sm">
                  <img
                    src={getPhoto(member.name)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base font-semibold text-foreground">{member.name}</h4>
                <p className="text-base text-muted-foreground font-medium mb-2">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.languages.map((lang, j) => (
                    <span key={j} className="text-sm px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
