import Link from "next/link"
import { Mail, Globe2, Phone, MapPin } from "lucide-react"
import { type Locale, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

export function Footer({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  const footerLinks = {
    companyEstablishment: {
      title: t.footer.companyEstablishment,
      links: [
        { label: t.footer.fdi, href: "/company-establishment/fdi" },
        { label: t.footer.branchOffice, href: "/company-establishment/branch-office" },
        { label: t.footer.liaisonOffice, href: "/company-establishment/liaison-office" },
      ],
    },
    visaGuide: {
      title: t.footer.visaGuide,
      links: [
        { label: t.footer.d8Visa, href: "/d8-visa" },
        { label: t.footer.d7Visa, href: "/d7-visa" },
        { label: t.footer.permanentResidency, href: "/f5-investment/permanent-residency" },
        { label: t.footer.f5Investment, href: "/f5-investment" },
      ],
    },
    investmentImmigration: {
      title: t.footer.investmentImmigration,
      links: [
        { label: t.footer.realEstate, href: "/f5-investment/real-estate" },
        { label: t.footer.publicInterest, href: "/f5-investment/public-interest" },
        { label: t.footer.aboutUs, href: "/about" },
      ],
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href={getLocalePath(locale, "/")} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">V</span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">
                VISION
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`tel:${t.footer.phone}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t.footer.phone}
              </a>
              <a
                href={`mailto:${t.footer.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                {t.footer.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                {t.footer.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Globe2 className="w-4 h-4" />
                English · 中文 · 日本語
              </div>
            </div>
          </div>

          {/* Company Establishment */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.companyEstablishment.title}</h4>
            <ul className="space-y-3">
              {footerLinks.companyEstablishment.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Guide */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.visaGuide.title}</h4>
            <ul className="space-y-3">
              {footerLinks.visaGuide.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Immigration */}
          <div>
            <h4 className="font-semibold mb-4">{footerLinks.investmentImmigration.title}</h4>
            <ul className="space-y-3">
              {footerLinks.investmentImmigration.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <Link href={getLocalePath(locale, "/privacy")} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href={getLocalePath(locale, "/terms")} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
