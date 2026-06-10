// ─────────────────────────────────────────────────────────────
// next.config.ts – تنظیمات Next.js
// ─────────────────────────────────────────────────────────────

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // بهینه‌سازی تصاویر خارجی اگر نیاز بود
  images: {
    remotePatterns: [],
  },
  // فعال‌سازی strict mode برای React
  reactStrictMode: true,
};

export default nextConfig;
