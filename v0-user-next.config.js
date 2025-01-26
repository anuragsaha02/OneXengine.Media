/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "development" ? "" : "/OneXengine.Media",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v0.blob.com",
      },
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig

