// ─────────────────────────────────────────────────────────────
// next.config.js – تنظیمات Next.js
// (next.config.ts فقط در Next.js 15+ پشتیبانی می‌شود)
// ─────────────────────────────────────────────────────────────

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
