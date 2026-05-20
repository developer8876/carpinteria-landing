/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output: reduces deploy size, required for Railway/Docker
  output: 'standalone',
}

export default nextConfig;
