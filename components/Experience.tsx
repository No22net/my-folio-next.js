// ─────────────────────────────────────────────────────────────
// components/Experience.tsx
// بخش تجربه کاری و تحصیلی با خط زمان (Timeline)
// ─────────────────────────────────────────────────────────────

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { EXPERIENCES, EDUCATIONS } from "@/constants";

type TimelineItem = {
  id: number;
  company?: string;
  institution?: string;
  role?: string;
  degree?: string;
  period: string;
  description: string;
  type: "work" | "education";
};

// ───── کامپوننت یک آیتم تایم‌لاین ─────
function TimelineItem({
  item,
  index,
  isLeft,
}: {
  item: TimelineItem;
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isWork = item.type === "work";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative flex items-start gap-4 lg:gap-6"
    >
      {/* ───── آیکون نقطه ───── */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{
            background: isWork
              ? "linear-gradient(135deg, #6366f1, #4f46e5)"
              : "linear-gradient(135deg, #06b6d4, #0284c7)",
            boxShadow: isWork
              ? "0 4px 15px rgba(99,102,241,0.4)"
              : "0 4px 15px rgba(6,182,212,0.4)",
          }}
        >
          {isWork ? (
            <Briefcase className="w-5 h-5 text-white" />
          ) : (
            <GraduationCap className="w-5 h-5 text-white" />
          )}
        </div>
      </div>

      {/* ───── کارت محتوا ───── */}
      <div className="glass-card p-5 flex-1 group hover:shadow-glass-hover">
        {/* تاریخ */}
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background: isWork
                ? "rgba(99,102,241,0.1)"
                : "rgba(6,182,212,0.1)",
              color: isWork ? "#6366f1" : "#06b6d4",
              border: `1px solid ${isWork ? "rgba(99,102,241,0.2)" : "rgba(6,182,212,0.2)"}`,
            }}
          >
            {item.period}
          </span>
          <span className="text-xs text-gray-400">
            {isWork ? "کار" : "تحصیل"}
          </span>
        </div>

        {/* عنوان */}
        <h3 className="font-bold text-gray-800 text-base group-hover:text-indigo-600 transition-colors">
          {item.role || item.degree}
        </h3>
        <p className="text-sm font-medium text-gray-500 mb-3">
          {item.company || item.institution}
        </p>

        {/* توضیحات */}
        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ───── کامپوننت اصلی ─────
export default function Experience() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  // ادغام تجربه و تحصیل در یک آرایه
  const allItems: TimelineItem[] = [
    ...(EXPERIENCES as TimelineItem[]),
    ...(EDUCATIONS as TimelineItem[]),
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      {/* پس‌زمینه */}
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#6366f1" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ───── تایتل ───── */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-sm font-semibold text-indigo-500 tracking-widest mb-2">
            TIMELINE
          </p>
          <h2 className="section-title">تجربیات و تحصیلات</h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isTitleInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="title-underline"
        />

        {/* ───── تایم‌لاین ───── */}
        <div className="relative">
          {/* خط عمودی وسط */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isTitleInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute right-[22px] top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: "linear-gradient(to bottom, #6366f1, #06b6d4, transparent)",
            }}
          />

          <div className="space-y-8 pr-20">
            {allItems.map((item, i) => (
              <TimelineItem
                key={`${item.type}-${item.id}`}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
