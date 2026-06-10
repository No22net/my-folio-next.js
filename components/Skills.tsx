// ─────────────────────────────────────────────────────────────
// components/Skills.tsx
// بخش مهارت‌ها با نوارهای pill-shape (استوانه‌ای)
// ─────────────────────────────────────────────────────────────

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/constants";

// ───── کامپوننت یک ردیف مهارت ─────
function SkillBar({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[0];
  index: number;
}) {
  const ref = useRef(null);
  // وقتی عنصر وارد viewport شد، انیمیشن شروع می‌شه
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="group"
    >
      <div className="glass-card p-4 hover:shadow-glass-hover transition-all duration-300">
        {/* ردیف نام و درصد */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {/* نقطه رنگی مهارت */}
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
              {skill.name}
            </span>
          </div>
          {/* درصد */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.07 + 0.4 }}
            className="text-sm font-bold text-indigo-600"
          >
            {skill.percent}٪
          </motion.span>
        </div>

        {/* استوانه/pill نوار مهارت */}
        <div
          className="relative h-5 rounded-full overflow-hidden"
          style={{
            background: "#e8edf5",
            boxShadow: "inset 3px 3px 6px #c5cdd8, inset -3px -3px 6px #ffffff",
          }}
        >
          {/* پر شدگی از راست به چپ (RTL) */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percent}%` } : {}}
            transition={{
              delay: index * 0.07 + 0.2,
              duration: 0.9,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute top-0 right-0 h-full rounded-full"
            style={{
              background: `linear-gradient(to left, ${skill.color}cc, ${skill.color})`,
              boxShadow: `0 2px 8px ${skill.color}50`,
            }}
          >
            {/* درخشش داخل نوار */}
            <div className="absolute top-0.5 right-2 left-2 h-1 bg-white/30 rounded-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ───── کامپوننت اصلی بخش مهارت‌ها ─────
export default function Skills() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ───── تایتل بخش ───── */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-sm font-semibold text-indigo-500 tracking-widest mb-2">
            SKILLS
          </p>
          <h2 className="section-title">مهارت‌های فنی</h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isTitleInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="title-underline"
        />

        {/* ───── گرید مهارت‌ها ───── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* ───── یادداشت پایین ───── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          * درصدها بر اساس میزان تسلط عملی و تجربه کاری در هر حوزه است
        </motion.p>
      </div>
    </section>
  );
}
