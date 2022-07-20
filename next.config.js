/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
  },
  images: {
    domains: ['www.notion.so', 'notion.so', 's3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  redirects() {
    return [
      {
        source: '/coc',
        destination: '/code-of-conduct',
        permanent: true,
      },
      {
        source: '/pp',
        destination: '/privacy-policy',
        permanent: true,
      },
    ]
  },
}
