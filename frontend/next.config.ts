import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/ui/components"),
      "@styles": path.resolve(__dirname, "src/ui/styles"),
    };

    return config;
  }
};

export default nextConfig;
