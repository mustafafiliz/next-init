/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    NEXT_API_BASE: process.env.NEXT_API_BASE,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_SITENAME: process.env.NEXT_PUBLIC_SITENAME,
    NEXT_PUBLIC_TITLE: process.env.NEXT_PUBLIC_TITLE,
    NEXT_PUBLIC_DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION,
    NEXT_PUBLIC_UPLOADS: process.env.NEXT_PUBLIC_UPLOADS,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
