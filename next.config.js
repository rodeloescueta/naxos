/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [], // Add any external image domains if needed
  },
  basePath: '/your-repo-name', // Replace with your repository name
}

module.exports = nextConfig 