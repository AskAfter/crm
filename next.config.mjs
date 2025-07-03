/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/all-leads-dashboard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;