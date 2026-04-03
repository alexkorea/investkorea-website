"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { type Locale, localeNames, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"

function getMenuItems(t: ReturnType<typeof getTranslations>) {
  return [
    { title: t.nav.home, href: "/" },
    {
      title: t.nav.companyEstablishment,
      href: "/company-establishment",
      children: [
        { title: t.nav.fdi, href: "/company-establishment/fdi" },
        { title: t.nav.branchOffice, href: "/company-establishment/branch-office" },
        {
          title: t.nav.liaisonOffice,
          href: "/company-establishment/liaison-office",
        },
      ],
    },
    {
      title: t.nav.d8Visa,
      href: "/d8-visa",
      children: [
        { title: t.nav.d8Eligibility, href: "/d8-visa/eligibility" },
      ],
    },
    {
      title: t.nav.d7Visa,
      href: "/d7-visa",
      children: [
        { title: t.nav.d7Eligibility, href: "/d7-visa/eligibility" },
      ],
    },
    {
      title: t.nav.f5Investment,
      href: "/f5-investment",
      children: [
        { title: t.nav.permanentResidency, href: "/f5-investment/permanent-residency" },
        { title: t.nav.realEstate, href: "/f5-investment/real-estate" },
        { title: t.nav.publicInterest, href: "/f5-investment/public-interest" },
      ],
    },
    { title: t.nav.aboutUs, href: "/about" },
  ]
}

const localeOptions: { code: Locale; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
]

export function Header({ locale = "ko" }: { locale?: Locale }) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const t = getTranslations(locale)
  const menuItems = getMenuItems(t)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/50 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={getLocalePath(locale, "/")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">V</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
              VISION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/5 text-foreground/80 hover:text-foreground text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 p-3">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={getLocalePath(locale, child.href)}
                                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-relaxed text-foreground">
                                    {child.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={getLocalePath(locale, item.href)}
                        className="inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/5 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{localeNames[locale]}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {localeOptions.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild className="cursor-pointer">
                    <Link href={getLocalePath(lang.code, "/")}>
                      {lang.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              {t.nav.bookConsultation}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={getLocalePath(locale, item.href)}
                        className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={getLocalePath(locale, child.href)}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">{t.nav.language}</p>
                    <div className="flex gap-3">
                      {localeOptions.map((lang) => (
                        <Button key={lang.code} variant="outline" size="sm" asChild>
                          <Link href={getLocalePath(lang.code, "/")}>
                            {lang.label}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t.nav.bookConsultation}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
