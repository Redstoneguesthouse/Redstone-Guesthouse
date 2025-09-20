/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // redstone
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
