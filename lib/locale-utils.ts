import { type Locale, defaultLocale, locales } from "./translations";

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

export function stripLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function switchLocalePath(pathname: string, newLocale: Locale): string {
  const basePath = stripLocaleFromPath(pathname);
  return getLocalePath(newLocale, basePath);
}
