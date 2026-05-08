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
        source: "/:path*",
        has: [{ type: "host", value: "www.investkorea.co.kr" }],
        destination: "https://investkorea.co.kr/:path*",
        permanent: true,
      },
      // Old WordPress category/tag pages → blog listing
      { source: "/category/:slug*", destination: "/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/blog", permanent: true },
      // Old WordPress posts → equivalent Next.js pages
      { source: "/d-8-%EA%B8%B0%EC%97%85%ED%88%AC%EC%9E%90%EB%B9%84%EC%9E%90-%EB%B0%9C%EA%B8%89", destination: "/visa/d8", permanent: true },
      { source: "/d8%EB%B9%84%EC%9E%90-%EB%B0%9C%EA%B8%89-%EB%8C%80%EC%83%81-%EC%8B%A0%EC%B2%AD-%EC%A0%88%EC%B0%A8-%EB%B0%8F-%EA%B5%AC%EB%B9%84%EC%84%9C%EB%A5%98", destination: "/visa/d8", permanent: true },
      { source: "/%EC%99%B8%EA%B5%AD%EA%B8%B0%EC%97%85-%EA%B5%AD%EB%82%B4%EC%A7%80%EC%82%AC%EC%84%A4%EC%B9%98%EB%B0%8F-%EC%97%B0%EB%9D%BD%EC%82%AC%EB%AC%B4%EC%86%8C%EC%84%A4%EC%B9%98", destination: "/visa/d7", permanent: true },
    ];
  },
}

export default nextConfig
