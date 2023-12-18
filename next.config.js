/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
module.exports = {
    images: {
      loader: 'imgix',
      path: 'https://example.com/myaccount/',
    },
  }
  