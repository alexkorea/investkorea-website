import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["ko", "en", "zh", "ja"];
const defaultLocale = "ko";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    const locale = locales.find(
      (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
    ) || defaultLocale;
    const response = NextResponse.next();
    response.headers.set("x-locale", locale);
    return response;
  }

  // For the root and non-locale paths, serve as default locale (ko) without redirect
  const response = NextResponse.next();
  response.headers.set("x-locale", defaultLocale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)" ],
};
