import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    domains: ["i.pinimg.com"], // allow external images
  },
};

export default nextConfig;
