/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/simple-github-pages",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
