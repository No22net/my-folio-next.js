// ─────────────────────────────────────────────────────────────
// components/Hero.tsx
// بخش هرو – معرفی اولیه با عکس، نام، تیتر و دکمه‌ها
// ─────────────────────────────────────────────────────────────

"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

// ───── variant‌های انیمیشن ─────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* ───── ذره‌های پس‌زمینه تزئینی ───── */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#6366f1" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* ───── متن سمت راست ───── */}
          <div className="flex-1 text-center lg:text-right">
            {/* برچسب معرفی */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span className="text-sm text-gray-600 font-medium">
                  در دسترس برای همکاری
                </span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
            </motion.div>

            {/* نام */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-800 mb-3 leading-tight"
            >
              سلام، من{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
                {/* خط تزئینی زیر نام */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full origin-right"
                />
              </span>{" "}
              هستم
            </motion.h1>

            {/* تیتر شغلی */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-gray-500 mb-6"
            >
              {PERSONAL_INFO.title}
              <span className="text-indigo-400"> / </span>
              {PERSONAL_INFO.subtitle}
            </motion.p>

            {/* بیوگرافی */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* موقعیت */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 justify-center lg:justify-end text-gray-400 text-sm mb-8"
            >
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{PERSONAL_INFO.location}</span>
            </motion.div>

            {/* دکمه‌ها */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-gradient flex items-center justify-center gap-2"
              >
                <span>تماس با من</span>
                <ArrowLeft className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>دانلود رزومه</span>
              </motion.a>
            </motion.div>

            {/* آمار سریع */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-3 gap-4 max-w-xs mx-auto lg:mx-0 lg:mr-auto"
            >
              {[
                { value: "3+", label: "سال تجربه" },
                { value: "10+", label: "پروژه" },
                { value: "5+", label: "مشتری" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-3 text-center">
                  <div className="text-xl font-black text-indigo-600">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ───── عکس پروفایل سمت چپ ───── */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
          >
            {/* دایره‌های تزئینی پشت عکس */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-200/40 to-cyan-200/40 blur-xl" />
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-indigo-300/40 animate-spin" style={{ animationDuration: "20s" }} />

            {/* کانتینر عکس با سبک نیومورفیسم + شیشه */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* پلاس‌هولدر عکس */}
              <div
                className="w-full h-full rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #e8edf5 0%, #dce4f0 100%)",
                  boxShadow: "12px 12px 24px #c5cdd8, -12px -12px 24px #ffffff",
                }}
              >
                {/* داخل پلاس‌هولدر */}
                <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
                  {/* پس‌زمینه گرادیانت داخلی */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/60 to-cyan-100/40" />
                  
                  {/* آیکون نمادین */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)",
                        boxShadow: "0 8px 25px rgba(99,102,241,0.4)",
                      }}
                    >
                      {/* سیلوئت ساده انسان */}
                      <svg viewBox="0 0 60 60" className="w-14 h-14 fill-white/90">
                        <circle cx="30" cy="20" r="12" />
                        <path d="M6 54c0-13.255 10.745-24 24-24s24 10.745 24 24" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-400 font-medium">
                      عکس من اینجا
                    </p>
                  </div>
                </div>
              </div>

              {/* برچسب تجربه – گوشه‌ای */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -right-4 glass-card px-4 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">۴</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-700">سال</div>
                    <div className="text-xs text-gray-500">تجربه</div>
                  </div>
                </div>
              </motion.div>

              {/* برچسب React – گوشه دیگر */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -left-4 glass-card px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-500 text-lg font-bold">⚛</span>
                  <span className="text-xs font-bold text-gray-700">React Dev</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ───── فلش اسکرول به پایین ───── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400">اسکرول کنید</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 bg-indigo-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
