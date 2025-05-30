import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
       {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/seed/picsum/**',
        search: '',
      },
    ]
  }
};

export default nextConfig;
