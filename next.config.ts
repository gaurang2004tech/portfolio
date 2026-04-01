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
  // Add a rewrite so requests to /rps.png (short, safe name) map to the
  // existing file in `public/` which contains punctuation and spaces.
  // The destination uses URL-encoding for the filename characters.
  async rewrites() {
    return [
      {
        source: '/rps.png',
        destination: '/Rock%2CPaper%26Scissors%20game.png',
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
