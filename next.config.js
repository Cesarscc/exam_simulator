/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  target: "serverless",
};

module.exports = nextConfig;
