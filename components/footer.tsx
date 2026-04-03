import Link from "next/link"
import { type Locale, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

export function Footer({ locale = "ko" }: { locale?: Locale }) {
  const t = getTranslations(locale)

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">V</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">VISION</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="space-y-1 text-base text-muted-foreground">
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
              <p>{t.footer.address}</p>
            </div>
          </div>

          {/* Column 2: Company Establishment */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.companyEstablishment}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.fdi}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.branchOffice}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.liaisonOffice}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Visa Guide */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.visaGuide}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.d8Visa}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.d7Visa}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.permanentResidency}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.f5Investment}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Investment Immigration */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.footer.investmentImmigration}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.realEstate}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.publicInterest}
                </Link>
              </li>
              <li>
                <Link href={getLocalePath(locale, "/")} className="text-muted-foreground hover:text-white transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Registration */}
        <div className="border-t border-gray-800 pt-8 mb-6">
          <p className="text-sm text-gray-500 text-center">
            비전행정사사무소 | 사업자등록번호: 405-05-54079 | 대표: 이원중 | 개인정보관리자: 김영주
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-base text-muted-foreground">
            <Link href={getLocalePath(locale, "/")} className="hover:text-gray-300 transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href={getLocalePath(locale, "/")} className="hover:text-gray-300 transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
