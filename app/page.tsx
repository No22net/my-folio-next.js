// ─────────────────────────────────────────────────────────────
// app/page.tsx
// صفحه اصلی – ترکیب تمام کامپوننت‌ها به ترتیب
// ─────────────────────────────────────────────────────────────

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* ───── ذره‌های پس‌زمینه ثابت ───── */}
      <div
        className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none z-0"
        style={{ background: "#6366f1" }}
      />
      <div
        className="fixed bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none z-0"
        style={{ background: "#06b6d4" }}
      />

      {/* ───── نوار ناوبری ───── */}
      <Navbar />

      {/* ───── بخش‌های اصلی ───── */}
      <div className="relative z-10">
        {/* Hero – معرفی */}
        <Hero />

        {/* Skills – مهارت‌ها */}
        <Skills />

        {/* Projects – پروژه‌ها */}
        <Projects />

        {/* Experience – تجربیات و تحصیلات */}
        <Experience />

        {/* Contact – تماس */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
