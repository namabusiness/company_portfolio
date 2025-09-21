import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ This skips ESLint errors/warnings during `next build`
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
