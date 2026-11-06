/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
