// ─────────────────────────────────────────────────────────────
// next.config.ts – تنظیمات Next.js 16
// ─────────────────────────────────────────────────────────────

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // فعال‌سازی strict mode برای React
  reactStrictMode: true,

  // بهینه‌سازی تصاویر
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // سرصفحه‌های امنیتی
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
