import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1"],
  async rewrites() {
    return [
      {
        source: "/snapshots/2026",
        destination: "/snapshots/2026/index.html",
      },
    ]
  },
};

export default nextConfig;
