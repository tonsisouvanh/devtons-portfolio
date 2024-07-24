/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
