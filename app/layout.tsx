import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://investkorea.co.kr'),
  title: 'VISION 행정사사무소 - 외국인 투자·비자 전문 컨설팅',
  description: '외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅 서비스를 제공하는 VISION 행정사사무소',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
