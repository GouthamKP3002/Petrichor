import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["i.pinimg.com"],
    // Add a remote pattern for your placeholder images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Only use this temporarily if needed
  },
};

export default nextConfig;
