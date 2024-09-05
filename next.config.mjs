/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // removed
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
