import Link from "next/link"
import { type Locale, getTranslations } from "@/lib/translations"
import { getLocalePath } from "@/lib/locale-utils"
import { BreadcrumbJsonLd } from "./structured-data"

type BreadcrumbEntry = { label: string; path: string }

const homeLabel: Record<Locale, string> = {
  ko: "홈",
  en: "Home",
  zh: "首页",
  ja: "ホーム",
}

export function PageBreadcrumb({
  items,
  locale = "ko",
}: {
  items: BreadcrumbEntry[]
  locale?: Locale
}) {
  const allItems = [{ label: homeLabel[locale], path: "/" }, ...items]

  return (
    <>
      <BreadcrumbJsonLd
        items={allItems.map((i) => ({ name: i.label, path: i.path }))}
        locale={locale}
      />
      <nav aria-label="breadcrumb" className="max-w-7xl mx-auto px-6 pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {allItems.map((item, idx) => (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <span className="text-gray-300" aria-hidden="true">/</span>
              )}
              {idx < allItems.length - 1 ? (
                <Link
                  href={getLocalePath(locale, item.path)}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
