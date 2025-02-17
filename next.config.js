/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [], // Add any external image domains if needed
  },
  basePath: '/naxos', // Since your repo is named 'naxos'
}

module.exports = nextConfig 