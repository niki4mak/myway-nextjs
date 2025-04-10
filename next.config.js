/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "assets.yclients.com", "be.cdn.yclients.com"],
  },
};

module.exports = nextConfig;
