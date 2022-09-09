/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/1': { page: '/1' },
      '/2': { page: '/2' },
      '/3': { page: '/3' },
      '/4': { page: '/4' },
      '/5': { page: '/5' },
      '/6': { page: '/6' },
      '/7': { page: '/7' },
      '/8': { page: '/8' },
      '/login': { page: '/login' },
      '/WelcomePage': { page: '/WelcomePage' },
      '/login-test': { page: '/login-test' },
    };
    return paths;
  },
}

module.exports = nextConfig
