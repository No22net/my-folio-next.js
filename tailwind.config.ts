import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // رنگ‌های سفارشی برای سبک نیومورفیسم و گلاسمورفیسم
      colors: {
        "neu-bg": "#e8edf5",
        "neu-light": "#ffffff",
        "neu-dark": "#c5cdd8",
        "glass-bg": "rgba(255, 255, 255, 0.15)",
        "glass-border": "rgba(255, 255, 255, 0.3)",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        secondary: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
        },
      },
      // فونت فارسی وزیر
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
      },
      // سایه‌های نیومورفیسم
      boxShadow: {
        "neu-flat": "6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff",
        "neu-pressed": "inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff",
        "neu-hover": "8px 8px 16px #c5cdd8, -8px -8px 16px #ffffff",
        glass: "0 8px 32px rgba(99, 102, 241, 0.1)",
        "glass-hover": "0 16px 48px rgba(99, 102, 241, 0.2)",
      },
      // انیمیشن‌های سفارشی
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      // پس‌زمینه گرادیان
      backgroundImage: {
        "main-gradient":
          "linear-gradient(135deg, #e8edf5 0%, #dce4f0 50%, #e2e8f4 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
