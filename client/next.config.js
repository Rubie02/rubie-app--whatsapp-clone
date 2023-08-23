/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1781804360,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "41fe9ecbf3e66315482d96a085b92d7b"
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
