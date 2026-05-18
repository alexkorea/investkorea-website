import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.investkorea.co.kr' }],
        destination: 'https://investkorea.co.kr/:path*',
        permanent: true,
      },
      // Old WordPress category/tag pages → blog listing
      { source: '/category/:slug*', destination: '/blog', permanent: true },
      { source: '/tag/:slug*', destination: '/blog', permanent: true },
      // Old WordPress posts → equivalent Next.js pages
      { source: '/d-8-%EA%B8%B0%EC%97%85%ED%88%AC%EC%9E%90%EB%B9%84%EC%9E%90-%EB%B0%9C%EA%B8%89', destination: '/visa/d8', permanent: true },
      { source: '/d8%EB%B9%84%EC%9E%90-%EB%B0%9C%EA%B8%89-%EB%8C%80%EC%83%81-%EC%8B%A0%EC%B2%AD-%EC%A0%88%EC%B0%A8-%EB%B0%8F-%EA%B5%AC%EB%B9%84%EC%84%9C%EB%A5%98', destination: '/visa/d8', permanent: true },
      { source: '/%EC%99%B8%EA%B5%AD%EA%B8%B0%EC%97%85-%EA%B5%AD%EB%82%B4%EC%A7%80%EC%82%AC%EC%84%A4%EC%B9%98%EB%B0%8F-%EC%97%B0%EB%9D%BD%EC%82%AC%EB%AC%B4%EC%86%8C%EC%84%A4%EC%B9%98', destination: '/visa/d7', permanent: true },
      // Duplicate content 301 redirects — language mixing cleanup
      { source: '/blog/foreign-company-incorporation-korea-2026', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-direct-investment-corporation-setup-2026', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-invested-corporation-setup-complete-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-investment-company-setup-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-investor-corporation-procedure-and-costs', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-jusikhoesa-full-establishment-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-stock-company-procedure-cost-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-stock-company-setup', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-stock-corporation-establishment-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-stockco-incorporation-procedure-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-corporation-setup-full-procedure-costs', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-joint-stock-co-setup-complete', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-jusikhoesa-procedure-cost-summary', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-jusikhoesa-roadmap-fees', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-jusikhoesa-setup-cost-guide', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-stock-corporation-complete-procedure-cost', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreigner-stock-corporation-setup-procedure-cost', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/d8-investment-visa-application-guide-2026', destination: '/blog/d8-corporate-investment-visa-guide', permanent: true },
      { source: '/blog/d8-visa-guide', destination: '/blog/d8-corporate-investment-visa-guide', permanent: true },
      { source: '/blog/foreign-investment-registration-report-difference', destination: '/blog/foreign-investment-report-vs-registration', permanent: true },
      { source: '/blog/foreign-company-korea', destination: '/blog/foreign-stock-company-establishment-procedure-cost', permanent: true },
      { source: '/blog/foreign-single-member-company', destination: '/blog/foreigner-one-person-corp-requirements', permanent: true },
    ];
  },
}

export default nextConfig
