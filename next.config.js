const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [
      360, 414, 512, 640, 750, 828, 1080, 1200, 1536, 1920, 2048, 3840,
    ],
  },
  async redirects() {
    return [
      // Redirect old blog URLs to English version
      {
        source: '/blog',
        destination: '/en/blog',
        permanent: true, // 301 redirect
      },
      {
        source: '/blog/:slug',
        destination: '/en/blog/:slug',
        permanent: true,
      },
      {
        source: '/blog/categories/:category',
        destination: '/en/blog/categories/:category',
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
