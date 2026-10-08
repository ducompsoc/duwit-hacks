import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.5.136"],
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/mailinglist",
        permanent: true,
      },
    ]
  },
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
