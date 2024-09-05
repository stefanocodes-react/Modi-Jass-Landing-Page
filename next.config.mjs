/** @type {import('next').NextConfig} */

const withFonts = require("next-fonts");
module.exports = withFonts();
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // removed
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
