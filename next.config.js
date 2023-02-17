/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'www.piaic.org', "cdn.i-scmp.com", "1.bp.blogspot.com", "media.istockphoto.com", "shutterstock.com", "mir-s3-cdn-cf.behance.net"],
  },
}

module.exports = nextConfig
