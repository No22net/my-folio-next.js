// ─────────────────────────────────────────────────────────────
// app/layout.tsx
// لایه اصلی Next.js 16 – تنظیم فونت فارسی، متادیتا و viewport
// ─────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import "./globals.css";

// ───── Viewport (در Next.js 15+ باید جدا از Metadata باشد) ─────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

// ───── متادیتای سئو ─────
export const metadata: Metadata = {
  title: "متین قادریان | توسعه‌دهنده فرانت‌اند",
  description:
    "رزومه حرفه‌ای متین قادریان، توسعه‌دهنده فرانت‌اند متخصص در React و Next.js",
  keywords: ["توسعه‌دهنده", "فرانت‌اند", "React", "Next.js", "رزومه", "فریلنسر"],
  authors: [{ name: "متین قادریان", url: "https://github.com/No22net" }],
  openGraph: {
    title: "متین قادریان | توسعه‌دهنده فرانت‌اند",
    description:
      "رزومه حرفه‌ای متین قادریان، توسعه‌دهنده فرانت‌اند متخصص در React و Next.js",
    type: "website",
    locale: "fa_IR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-vazir antialiased">{children}</body>
    </html>
  );
}
