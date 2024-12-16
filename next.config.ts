import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // Add 'via.placeholder.com' to the whitelist
  },
};

export default nextConfig;
