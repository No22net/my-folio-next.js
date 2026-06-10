// ─────────────────────────────────────────────────────────────
// app/layout.tsx
// لایه اصلی Next.js – تنظیم فونت فارسی و متادیتا
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "متین قادریان | توسعه‌دهنده فرانت‌اند",
  description:
    "رزومه حرفه‌ای متین قادریان، توسعه‌دهنده فرانت‌اند متخصص در React و Next.js",
  keywords: ["توسعه‌دهنده", "فرانت‌اند", "React", "Next.js", "رزومه"],
  authors: [{ name: "متین قادریان" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="fa" و dir="rtl" برای پشتیبانی کامل از متون فارسی
    <html lang="fa" dir="rtl">
      <head>
        {/* preconnect به CDN فونت برای بارگذاری سریع‌تر */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      </head>
      <body className="font-vazir antialiased">{children}</body>
    </html>
  );
}
