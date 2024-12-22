import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["i.pinimg.com"],
  },
};

export default nextConfig;
