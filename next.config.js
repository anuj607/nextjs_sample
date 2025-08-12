const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip ESLint during vercel build
  },
};

module.exports = nextConfig;
