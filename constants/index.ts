// ─────────────────────────────────────────────────────────────
// constants/index.ts
// داده‌های استاتیک رزومه – مهارت‌ها
// ─────────────────────────────────────────────────────────────

// ───── اطلاعات شخصی ─────
export const PERSONAL_INFO = {
  name: "متین قادریان",
  title: "توسعه‌دهنده فرانت‌اند",
  subtitle: "متخصص React & Next.js",
  bio: "یک توسعه‌دهنده فرانت‌اند با بیش از 2 سال تجربه در ساخت رابط‌های کاربری مدرن و واکنش‌گرا. علاقه‌مند به طراحی تجربه کاربری (UX) و خلق تجربه‌های دیجیتال که هم زیبا و هم کارآمد باشند. همیشه دنبال یادگیری فناوری‌های جدید و حل مسائل چالش‌برانگیز هستم.",
  email: "matin22.com@gmail.com",
  linkedin: "https://www.linkedin.com/in/matin-ghaderyan-48a54a320/",
  github: "https://github.com/No22net",
  location: "بوکان، ایران",
};

// ───── مهارت‌ها – هر آیتم: نام + درصد تسلط ─────
export const SKILLS = [
  { name: "JavaScript", percent: 90, color: "#f7df1e" },
  { name: "TypeScript", percent: 10, color: "#3178c6" },
  { name: "React.js", percent: 70, color: "#61dafb" },
  { name: "Next.js", percent: 40, color: "#000000" },
  { name: "Tailwind CSS", percent: 80, color: "#06b6d4" },
  { name: "Node.js", percent: 80, color: "#339933" },
  { name: "AI-Assisted Development", percent: 90, color: "#e10098" },
  { name: "Git & GitHub", percent: 95, color: "#f05032" },
  { name: "HTML & CSS", percent: 98, color: "#f24e1e" },
  { name: "Docker", percent: 60, color: "#2496ed" },
];

// ───── پروژه‌ها ─────
export const PROJECTS = [
  {
    id: 1,
    title: "پنل مدیریت وبسایت",
    description:
      "یک اپلیکیشن مدیریت وظایف تیمی با قابلیت‌های همکاری زمان واقعی، درگ‌اند‌دراپ و داشبورد آنالیتیکس. ساخته‌شده با Next.js، Socket.io و PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL"],
    image: "/placeholder-project.png",
    github: "https://github.com/amirhossein/task-manager",
    demo: "https://taskmanager.example.com",
  },
  {
    id: 2,
    title: "فروشگاه آنلاین مدرن",
    description:
      "یک پلتفرم تجارت الکترونیک کامل با سیستم پرداخت، مدیریت موجودی، پنل ادمین و بهینه‌سازی سئو. استفاده از Stripe برای پرداخت‌های امن.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder-project.png",
    github: "https://github.com/amirhossein/ecommerce",
    demo: "https://shop.example.com",
  },
  {
    id: 3,
    title: "داشبورد تحلیل داده",
    description:
      "داشبورد تعاملی برای نمایش و تحلیل داده‌های بزرگ با نمودارهای پویا، فیلترهای پیشرفته و قابلیت خروجی گزارش PDF.",
    tags: ["React", "D3.js", "TailwindCSS", "REST API"],
    image: "/placeholder-project.png",
    github: "https://github.com/amirhossein/analytics-dashboard",
    demo: "https://analytics.example.com",
  },
  {
    id: 4,
    title: "اپ موبایل خبر",
    description:
      "اپلیکیشن موبایل خواندن اخبار با دسته‌بندی موضوعی، امکان ذخیره مقالات، اعلان‌های پوش و پشتیبانی از حالت آفلاین.",
    tags: ["React Native", "Expo", "Redux", "Firebase"],
    image: "/placeholder-project.png",
    github: "https://github.com/amirhossein/news-app",
    demo: "#",
  },
];

// ───── تجربه کاری ─────
export const EXPERIENCES = [
  {
    id: 1,
    company: "استارتاپ فناوری پروپارک",
    role: "توسعه‌دهنده ارشد فرانت‌اند",
    period: "1404 – اکنون",
    description:
      "طراحی و پیاده‌سازی معماری فرانت‌اند پلتفرم اصلی شرکت با Next.js و TypeScript. رهبری تیم 4 نفره توسعه‌دهنده و مشارکت در تصمیمات فنی محصول.",
    type: "work",
  },
  {
    id: 2,
    company: "همکاری یا فریلنسر های حرفه ای",
    role: "توسعه‌دهنده فرانت‌اند",
    period: "1401 – اکنون",
    description:
      "ساخت وب‌سایت‌ها و وب‌اپ‌های مختلف برای مشتریان متنوع. تجربه کار روی پروژه‌های بانکی، تجارت الکترونیک و پورتال‌های خبری.",
    type: "work",
  },
  {
    id: 3,
    company: "فریلنسر",
    role: "توسعه‌دهنده وب",
    period: "۱۳۹۸ – ۱۴۰۰",
    description:
      "انجام پروژه‌های فریلنسری متنوع در حوزه‌های طراحی وب، ساخت لندینگ پیج و توسعه اپ‌های کوچک وب.",
    type: "work",
  },
];

// ───── تحصیلات ─────
export const EDUCATIONS = [
  {
    id: 1,
    institution: "دانشگاه ازاد  بوکان",
    degree: "کارشناسی مهندسی کامپیوتر",
    period: "1401 – 1405",
    description:
      "تمرکز بر مهندسی نرم‌افزار و سیستم‌های توزیع‌شده. پایان‌نامه در زمینه بهینه‌سازی رابط کاربری با یادگیری ماشین.",
    type: "education",
  },
  {
    id: 2,
    institution: "دوره‌های آنلاین Udemy & Coursera",
    degree: "گواهینامه‌های تخصصی",
    period: "1401 – اکنون",
    description:
      "گذراندن دوره‌های تخصصی React Advanced Patterns، Node.js Microservices و System Design.",
    type: "education",
  },
];

// ───── لینک‌های ناوبری ─────
export const NAV_LINKS = [
  { label: "خانه", href: "#hero" },
  { label: "مهارت‌ها", href: "#skills" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "تجربیات", href: "#experience" },
  { label: "تماس", href: "#contact" },
];
