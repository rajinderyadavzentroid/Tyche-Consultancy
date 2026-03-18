/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
  experimental: {
    swcPlugins: [],
  },
};

export default nextConfig;
