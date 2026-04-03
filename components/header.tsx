"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Menu, X, ChevronDown } from "lucide-react"
import { type Locale, localeNames, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

const localeOptions: { code: Locale; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
]

type DropdownItem = { name: string; href: string }
type NavItem = { name: string; href: string; dropdown?: DropdownItem[] }

function getNavItems(t: ReturnType<typeof getTranslations>, locale: Locale): NavItem[] {
  const lp = (path: string) => getLocalePath(locale, path)
  return [
    { name: t.nav.home, href: lp("/") },
    {
      name: t.nav.companySetup,
      href: lp("/company/fdi"),
      dropdown: [
        { name: t.nav.fdi, href: lp("/company/fdi") },
        { name: t.nav.branch, href: lp("/company/branch") },
        { name: t.nav.liaison, href: lp("/company/liaison") },
        { name: t.nav.liaisonProcess, href: lp("/company/liaison-process") },
      ],
    },
    {
      name: t.nav.d8Visa,
      href: lp("/visa/d8"),
      dropdown: [
        { name: t.nav.d8Detail, href: lp("/visa/d8") },
        { name: t.nav.d8Process, href: lp("/visa/d8-process") },
      ],
    },
    {
      name: t.nav.d7Visa,
      href: lp("/visa/d7"),
      dropdown: [
        { name: t.nav.d7Detail, href: lp("/visa/d7") },
        { name: t.nav.d7Details, href: lp("/visa/d7-details") },
      ],
    },
    {
      name: t.nav.f5Investment,
      href: lp("/visa/f5"),
      dropdown: [
        { name: t.nav.f5Visa, href: lp("/visa/f5") },
        { name: t.nav.f5Strategies, href: lp("/visa/f5-strategies") },
        { name: t.nav.realEstate, href: lp("/immigration/real-estate") },
        { name: t.nav.publicInterest, href: lp("/immigration/public-interest") },
      ],
    },
    { name: t.nav.about, href: lp("/about") },
    { name: t.nav.blog, href: lp("/blog") },
    { name: t.nav.contact, href: lp("/contact") },
  ]
}

export function Header({ locale = "ko" }: { locale?: Locale }) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [isLangOpen, setIsLangOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null)
  const t = getTranslations(locale)
  const navigation = getNavItems(t, locale)
  const dropdownTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClick = () => {
      setIsLangOpen(false)
      setOpenDropdown(null)
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setOpenDropdown(name)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={getLocalePath(locale, "/")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">V</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-semibold text-gray-900">VISION</span>
              <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">행정사사무소</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50/50"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute left-0 top-full pt-1 z-50">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[280px]">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsLangOpen(!isLangOpen)
                }}
                className="hidden md:flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-100"
              >
                <Globe className="h-4 w-4" />
                <span>{localeNames[locale]}</span>
              </button>
              {isLangOpen && (
                <div
                  className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {localeOptions.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalePath(lang.code, "/")}
                      className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        lang.code === locale ? "text-blue-600 font-medium" : "text-gray-600"
                      }`}
                      onClick={() => setIsLangOpen(false)}
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={getLocalePath(locale, "/contact")}
              className="hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 h-9 rounded-lg transition-colors font-medium"
            >
              {t.nav.consultation}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-900"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 mt-2 pt-4 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.name ? null : item.name)
                        }
                        className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-blue-50/50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileExpanded === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="ml-4 border-l-2 border-blue-100 pl-3 mb-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block text-sm text-gray-500 hover:text-blue-600 transition-colors py-1.5"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-blue-50/50"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400 mb-2">{t.nav.language}</p>
              <div className="flex gap-2 flex-wrap">
                {localeOptions.map((lang) => (
                  <Link
                    key={lang.code}
                    href={getLocalePath(lang.code, "/")}
                    className={`text-xs px-3 py-1.5 border rounded-md transition-colors ${
                      lang.code === locale
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-gray-200 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={getLocalePath(locale, "/contact")}
              className="mt-4 w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm h-10 rounded-lg transition-colors font-medium"
              onClick={() => setIsMobileOpen(false)}
            >
              {t.nav.consultation}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
