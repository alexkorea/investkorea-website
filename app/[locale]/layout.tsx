import { type Locale, locales } from "@/lib/translations"

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "ko")
    .map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return <>{children}</>
}
