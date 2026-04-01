import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shadcnblocks.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
