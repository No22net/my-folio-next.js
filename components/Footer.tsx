// ─────────────────────────────────────────────────────────────
// components/Footer.tsx
// فوتر با کپی‌رایت و لینک‌های سوشیال
// ─────────────────────────────────────────────────────────────

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // تبدیل سال میلادی به شمسی تقریبی
  const persianYear = currentYear - 621;

  const socials = [
    {
      icon: Github,
      href: PERSONAL_INFO.github,
      label: "گیت‌هاب",
      color: "hover:text-gray-800",
    },
    {
      icon: Linkedin,
      href: PERSONAL_INFO.linkedin,
      label: "لینکدین",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: "ایمیل",
      color: "hover:text-indigo-600",
    },
  ];

  return (
    <footer className="relative py-8 overflow-hidden">
      {/* خط جداکننده */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="h-px mb-8 rounded-full"
          style={{
            background: "linear-gradient(to right, transparent, #6366f140, #06b6d440, transparent)",
          }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* لوگو و متن */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-500">
              {PERSONAL_INFO.name}
            </span>
          </motion.div>

          {/* کپی‌رایت */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1.5 text-sm text-gray-400"
          >
            <span>ساخته شده با</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>توسط {PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>© {persianYear} شمسی</span>
          </motion.div>

          {/* آیکون‌های شبکه اجتماعی */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 glass-card flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
