/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "assets.yclients.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://myway-nextjs.vercel.app/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
