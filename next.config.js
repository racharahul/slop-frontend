/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SLOP_API_URL: process.env.SLOP_API_URL,
  },
  images: {
    domains: ["d1csarkz8obe9u.cloudfront.net", "localhost"],
  },
};

module.exports = nextConfig;
