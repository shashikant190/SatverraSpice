/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = false; // 🔥 disables eval-source-map
    }
    return config;
  },
};

export default nextConfig;
