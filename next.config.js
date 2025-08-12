// next.config.js
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 🚀 skip ESLint errors in Vercel
  },
};

module.exports = nextConfig;