/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true
    }
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' }
    };
    return paths;
  },
}

module.exports = nextConfig
