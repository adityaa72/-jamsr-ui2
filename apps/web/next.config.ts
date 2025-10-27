import { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  typedRoutes: true,
  experimental: {
    typedRoutes: true,
    typedEnv: true,
  },
};

export default nextConfig;
