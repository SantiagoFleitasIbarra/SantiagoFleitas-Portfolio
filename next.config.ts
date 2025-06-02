
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure resolve and fallback objects exist before assigning
      config.resolve = config.resolve || {};
      config.resolve.fallback = config.resolve.fallback || {};
      // Provide an empty module for async_hooks on the client
      config.resolve.fallback.async_hooks = false;
    }
    return config;
  },
};

export default nextConfig;
