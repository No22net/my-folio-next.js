// ─────────────────────────────────────────────────────────────
// components/Navbar.tsx
// نوار ناوبری ثابت با پس‌زمینه شیشه‌ای و لینک‌های اسکرول صاف
// ─────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
  // وضعیت باز/بسته منوی موبایل
  const [isOpen, setIsOpen] = useState(false);
  // آیا کاربر اسکرول کرده (برای تغییر پس‌زمینه)
  const [scrolled, setScrolled] = useState(false);
  // بخش فعال
  const [activeSection, setActiveSection] = useState("hero");

  // تشخیص اسکرول برای تغییر ظاهر navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // تشخیص بخش فعال
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const sec of sections.reverse()) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اسکرول صاف به بخش مورد نظر
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-lg shadow-indigo-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* لوگو */}
          <motion.button
            onClick={() => scrollTo("#hero")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              No22net
            </span>
          </motion.button>

          {/* لینک‌های دسکتاپ */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {/* نقطه فعال */}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-indigo-50/80 rounded-xl border border-indigo-200/50"
                  />
                )}
                <span className="relative">{link.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* دکمه تماس – دسکتاپ */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#contact")}
            className="hidden md:flex btn-gradient text-sm py-2 px-5"
          >
            تماس بگیرید
          </motion.button>

          {/* دکمه همبرگر – موبایل */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center glass-card"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </motion.button>
        </div>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="backdrop-blur-xl bg-white/25 border-t border-white/30 px-4 py-4 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-right px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-indigo-50/80 text-indigo-600"
                      : "text-gray-600 hover:bg-white/40 hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-gradient w-full text-sm py-3"
                >
                  تماس با من
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
