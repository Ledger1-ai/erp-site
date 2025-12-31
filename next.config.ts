import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore type and ESLint errors during build as requested
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
