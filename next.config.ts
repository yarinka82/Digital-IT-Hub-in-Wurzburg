import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BUILD_TIME_VERSION: Date.now().toString(),
  },
};

export default nextConfig;
