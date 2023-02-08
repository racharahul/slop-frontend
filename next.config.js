/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SLOP_API_URL: process.env.SLOP_API_URL,
  },
};

module.exports = nextConfig;
