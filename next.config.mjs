/** @type {import('next').NextConfig} */
 
const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };
  /* module.exports = {
    eslint: {
      ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
    },
    // other configurations can go here...
  };
  */ 
  export default nextConfig;