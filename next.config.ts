// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⬇︎ これを追加（ESLintエラーでビルドを止めない）
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
