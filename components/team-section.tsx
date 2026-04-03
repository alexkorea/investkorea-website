import { Users } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"

export function TeamSection({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">{t.team.badge}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            {t.team.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.team.subtitle}
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            {t.team.specialistsLabel}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.team.specialists.map((member) => (
              <TeamCard key={member.name} member={member} t={t} />
            ))}
          </div>
        </div>

        {/* Support Staff Grid */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            {t.team.supportLabel}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.team.support.map((member) => (
              <TeamCard key={member.name} member={member} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member, t }: { member: { name: string; role: string; languages: readonly string[]; specialties: readonly string[] }; t: ReturnType<typeof getTranslations> }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-md hover:border-accent/20 transition-all duration-300">
      {/* Avatar placeholder */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <span className="text-xl font-serif font-semibold text-primary">
          {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </span>
      </div>

      {/* Info */}
      <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
      <p className="text-sm text-accent font-medium mb-4">{member.role}</p>

      {/* Languages */}
      <div className="mb-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.team.languagesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {member.languages.map((lang) => (
            <span key={lang} className="text-xs px-2 py-1 bg-secondary rounded-md text-foreground/80">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Specialties */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{t.team.specialtiesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {member.specialties.map((specialty) => (
            <span key={specialty} className="text-xs px-2 py-1 bg-accent/10 rounded-md text-accent">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
