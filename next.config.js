/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['www.saq.com', 'rsh.nyc3.digitaloceanspaces.com', 'www.labatt.com', 'd2x42bnn0tswa4.cloudfront.net', 'www.gooseisland.com', 'aem.lcbo.com', 'becks.de']
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
      // '/8': { page: '/8' },
      // '/9': { page: '/9' },
      '/login': { page: '/login' },
      '/WelcomePage': { page: '/WelcomePage' },
      '/login-test': { page: '/login-test' },
    };
    return paths;
  },
}

module.exports = nextConfig
