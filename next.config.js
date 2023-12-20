/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images:{
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
