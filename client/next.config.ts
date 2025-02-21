import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/sign-up",
        destination: "https://forms.gle/ngDdviKZJ6RfBvHZ8",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
