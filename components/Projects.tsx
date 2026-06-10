// ─────────────────────────────────────────────────────────────
// components/Projects.tsx
// بخش پروژه‌ها با کارت‌های شیشه‌ای گلاسمورفیسم
// ─────────────────────────────────────────────────────────────

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/constants";

// ───── کامپوننت یک کارت پروژه ─────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="glass-card overflow-hidden group h-full flex flex-col"
    >
      {/* ───── تصویر پروژه ───── */}
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        {/* پلاس‌هولدر تصویر */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${135 + index * 30}deg, 
              ${["#6366f1", "#06b6d4", "#f59e0b", "#10b981"][index % 4]}22,
              ${["#06b6d4", "#f59e0b", "#10b981", "#6366f1"][index % 4]}44)`,
          }}
        />
        {/* متن placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
              style={{
                background: `linear-gradient(135deg, 
                  ${["#6366f1", "#06b6d4", "#f59e0b", "#10b981"][index % 4]},
                  ${["#06b6d4", "#f59e0b", "#10b981", "#6366f1"][index % 4]})`,
                boxShadow: `0 8px 25px ${["#6366f140", "#06b6d440", "#f59e0b40", "#10b98140"][index % 4]}`,
              }}
            >
              {["💻", "🛍️", "📊", "📱"][index % 4]}
            </div>
            <span className="text-xs text-gray-400">تصویر پروژه</span>
          </div>
        </div>
        
        {/* افکت هاور روی تصویر */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* شماره پروژه */}
        <div className="absolute top-3 right-3 glass-card w-8 h-8 flex items-center justify-center text-xs font-bold text-indigo-600">
          {String(project.id).padStart(2, "۰")}
        </div>
      </div>

      {/* ───── محتوای کارت ───── */}
      <div className="p-6 flex flex-col flex-1">
        {/* عنوان */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>

        {/* توضیحات */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* تگ‌های تکنولوژی */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                background: "rgba(99, 102, 241, 0.08)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                color: "#6366f1",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* دکمه‌های لینک */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline flex-1 flex items-center justify-center gap-2 text-sm py-2"
          >
            <FaGithub size={16} />
            <span>کد</span>
          </motion.a>

          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient flex-1 flex items-center justify-center gap-2 text-sm py-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>دمو</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ───── کامپوننت اصلی بخش پروژه‌ها ─────
export default function Projects() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* پس‌زمینه تزئینی */}
      <div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "#06b6d4" }}
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
            PROJECTS
          </p>
          <h2 className="section-title">نمونه‌کارها</h2>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isTitleInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="title-underline"
        />

        {/* ───── گرید پروژه‌ها ───── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
