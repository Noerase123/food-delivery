/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
}

export default nextConfig