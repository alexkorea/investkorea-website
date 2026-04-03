import { type Locale, defaultLocale } from "./translations";

export function getLocalePath(locale: Locale, path: string = "/"): string {
  if (locale === defaultLocale) {
    return path;
  }
  return `/${locale}${path === "/" ? "" : path}`;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment === "en" || firstSegment === "zh" || firstSegment === "ja") {
    return firstSegment;
  }
  return defaultLocale;
}
