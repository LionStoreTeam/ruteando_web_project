import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.uaem.mx",
      },
      {
        protocol: "https",
        hostname: "static-00.iconduck.com",
      },
    ],
  },
};

export default nextConfig;
