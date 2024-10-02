/** @type {import('next').NextConfig} */
 
const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };

  // next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
  export default nextConfig;