import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "quaint-clownfish-778.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "clear-warthog-340.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
