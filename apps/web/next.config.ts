import { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    optimizePackageImports: ["@jamsrui/react"],
  },
  reactStrictMode: false,
};

export default nextConfig;
