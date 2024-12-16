import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // Add 'via.placeholder.com' to the whitelist
  },
  experimental: {
    serverSourceMaps: true,
  },
};

export default nextConfig;
