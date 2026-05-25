import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const supportedLocales = ['ko', 'en', 'zh', 'ja'] as const

async function getLocaleFromHeaders(): Promise<string> {
  const headersList = await headers()
  const locale = headersList.get('x-locale')
  if (locale && supportedLocales.includes(locale as any)) {
    return locale
  }
  return 'ko'
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});


const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "VISION 행정사사무소",
  "alternateName": "Vision Administrative Office",
  "url": "https://investkorea.co.kr",
  "description": "외국인 투자법인 설립, D-8 기업투자비자, D-7 주재원비자, F-5 영주권 전문 행정사사무소.",
  "telephone": "+82-2-363-2251",
  "address": { "@type": "PostalAddress", "streetAddress": "퇴계로 324, 3층", "addressLocality": "중구", "addressRegion": "서울특별시", "postalCode": "04614", "addressCountry": "KR" },
  "openingHours": "Mo-Fr 09:30-17:30",
  "priceRange": "$"
};
export const metadata: Metadata = {
  metadataBase: new URL('https://investkorea.co.kr'),
  title: 'Korea Company Registration Foreign Investor | D-8 visa · FDI · 외국인 법인 설립 | VISION 행정사사무소',
  description: 'Korea company registration, foreign investment (FDI), D-8 investor visa, D-7 visa, F-5 permanent residency — VISION Administrative Office, Seoul.',
  keywords: [
    '행정사', '외국인투자', 'FDI', '법인설립', 'D-8 비자', 'D-7 비자',
    'F-5 영주권', '투자이민', '부동산이민', 'Korea investment',
    'Korea visa', 'company establishment Korea', 'permanent residency Korea',
    'VISION Administrative Office', '비자컨설팅', '출입국',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://investkorea.co.kr',
    siteName: 'VISION 행정사사무소',
    title: 'VISION 행정사사무소 - 외국인 투자·비자 전문 컨설팅',
    description: '외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅 서비스를 제공하는 VISION 행정사사무소',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VISION 행정사사무소',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VISION 행정사사무소 - 외국인 투자·비자 전문 컨설팅',
    description: '외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅 서비스를 제공하는 VISION 행정사사무소',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://investkorea.co.kr',
    languages: {
      'ko': 'https://investkorea.co.kr',
      'en': 'https://investkorea.co.kr/en',
      'zh': 'https://investkorea.co.kr/zh',
      'ja': 'https://investkorea.co.kr/ja',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = await getLocaleFromHeaders()
  return (
    <html lang={lang}>
      <head>
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body className={`${playfair.variable} antialiased`} style={{ fontFamily: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G9PHYPB282" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9PHYPB282');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
