/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: "out",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
    domains: ["placeimg.com", "mobirise.com"],
  },
};

module.exports = nextConfig;
