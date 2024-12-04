import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  experimental: {
    ppr: 'incremental',
    after: true,
  },
  appIsrStatus: true,
  buildActivity: true,
  buildActivityPosition: 'bottom-right',
};

/**
 * @type {import('next').NextConfig}
 */

module.exports = nextConfig;

export default nextConfig;
