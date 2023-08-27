/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com']
  },
  i18n: {
    locales: ["en-US", "th-TH"],
    defaultLocale: "en-US",
    localeDetection: false
  }
}

module.exports = nextConfig
