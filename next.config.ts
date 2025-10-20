import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // basePath: '/next-web', // 👈 Replace with your repo name
  // assetPrefix: '/next-web/', // 👈 also add this line
  //  basePath: "", // leave empty since you are using a custom domain like vizlyx.com
  // assetPrefix: "./", // important for relative asset paths
  //  basePath: '/next-web',
  // assetPrefix: '/next-web/',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
