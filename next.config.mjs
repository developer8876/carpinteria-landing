/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    // Images are already WebP — skip Next.js optimization (avoids loopback issues on Railway)
    unoptimized: true,
  },
}

export default nextConfig;
