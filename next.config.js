/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig