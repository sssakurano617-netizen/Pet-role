// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ← これがポイント（ビルド中にESLintで止めない）
  },
};

export default nextConfig;

