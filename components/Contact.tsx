// ─────────────────────────────────────────────────────────────
// components/Contact.tsx
// بخش تماس با اطلاعات ارتباطی و فرم تماس
// ─────────────────────────────────────────────────────────────

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PERSONAL_INFO } from "@/constants";

// ───── آیتم‌های اطلاعات تماس ─────
const contactItems = [
  {
    icon: Mail,
    label: "ایمیل",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    color: "#6366f1",
  },
  {
    icon: FaLinkedin,
    label: "لینکدین",
    value: "www.linkedin.com/in/matin-ghaderyan",
    href: PERSONAL_INFO.linkedin,
    color: "#0077b5",
  },
  {
    icon: FaGithub,
    label: "گیت‌هاب",
    value: "github.com/No22net",
    href: PERSONAL_INFO.github,
    color: "#24292e",
  },
  {
    icon: MapPin,
    label: "موقعیت",
    value: PERSONAL_INFO.location,
    href: "#",
    color: "#06b6d4",
  },
];

// ───── کامپوننت فرم تماس ─────
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  // شبیه‌سازی ارسال فرم
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 text-center h-full flex flex-col items-center justify-center gap-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        <h3 className="text-xl font-bold text-gray-800">پیام ارسال شد!</h3>
        <p className="text-gray-500 text-sm">
          ممنون از پیامتون. در اسرع وقت پاسخ می‌دم.
        </p>
        <button
          onClick={() => setSent(false)}
          className="btn-outline text-sm py-2 px-6 mt-2"
        >
          ارسال پیام جدید
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-6 sm:p-8">
      <h3 className="text-lg font-bold text-gray-800 mb-6">برایم پیام بفرستید</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* نام */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            required
            placeholder="مثال: علی رضایی"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 outline-none transition-all focus:ring-2 focus:ring-indigo-400/50"
            style={{
              background: "#e8edf5",
              boxShadow: "inset 3px 3px 6px #c5cdd8, inset -3px -3px 6px #ffffff",
              border: "1px solid transparent",
            }}
          />
        </div>

        {/* ایمیل */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">
            آدرس ایمیل
          </label>
          <input
            type="email"
            required
            placeholder="example@email.com"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 outline-none transition-all focus:ring-2 focus:ring-indigo-400/50"
            style={{
              background: "#e8edf5",
              boxShadow: "inset 3px 3px 6px #c5cdd8, inset -3px -3px 6px #ffffff",
            }}
          />
        </div>

        {/* موضوع */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">
            موضوع
          </label>
          <input
            type="text"
            required
            placeholder="موضوع پیام شما"
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 outline-none transition-all focus:ring-2 focus:ring-indigo-400/50"
            style={{
              background: "#e8edf5",
              boxShadow: "inset 3px 3px 6px #c5cdd8, inset -3px -3px 6px #ffffff",
            }}
          />
        </div>

        {/* پیام */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">
            پیام
          </label>
          <textarea
            required
            rows={4}
            placeholder="متن پیام خود را بنویسید..."
            className="w-full px-4 py-3 rounded-xl text-sm text-gray-700 outline-none transition-all focus:ring-2 focus:ring-indigo-400/50 resize-none"
            style={{
              background: "#e8edf5",
              boxShadow: "inset 3px 3px 6px #c5cdd8, inset -3px -3px 6px #ffffff",
            }}
          />
        </div>

        {/* دکمه ارسال */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={sending}
          className="btn-gradient w-full flex items-center justify-center gap-2 py-3 disabled:opacity-70"
        >
          {sending ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>در حال ارسال...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>ارسال پیام</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}

// ───── کامپوننت اصلی بخش تماس ─────
export default function Contact() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* پس‌زمینه */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ───── تایتل ───── */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-sm font-semibold text-cyan-500 tracking-widest mb-2">
            CONTACT
          </p>
          <h2 className="section-title">تماس با من</h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isTitleInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="title-underline"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ───── اطلاعات تماس ───── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                خوشحال می‌شم باهم صحبت کنیم 🙌
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                چه برای همکاری در پروژه، چه سؤال فنی یا هر موضوع دیگه‌ای، از طریق هر کدام از
                راه‌های ارتباطی زیر می‌تونید با من در تماس باشید.
              </p>

              <div className="space-y-3">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    whileHover={{ x: -4 }}
                    className="flex items-center gap-4 p-3 rounded-xl transition-all hover:bg-white/30 group"
                  >
                    {/* آیکون */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </div>
                    {/* متن */}
                    <div>
                      <div className="text-xs text-gray-400 font-medium">
                        {item.label}
                      </div>
                      <div
                        className="text-sm font-semibold transition-colors group-hover:text-indigo-600"
                        style={{ color: "#374151" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* وضعیت آنلاین */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-lg">✅</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-700">
                  در دسترس برای پروژه جدید
                </div>
                <div className="text-xs text-gray-400">
                  معمولاً ظرف ۲۴ ساعت پاسخ می‌دم
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ───── فرم تماس ───── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isTitleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
