# رزومه آنلاین – امیرحسین محمدی

پروژه Next.js 14 با طراحی Neumorphism + Glassmorphism، فونت فارسی Vazirmatn و انیمیشن‌های Framer Motion.

## راه‌اندازی

```bash
npm install
npm run dev
```

سایت روی `http://localhost:3000` اجرا می‌شود.

## ساختار فایل‌ها

```
resume-site/
├── app/
│   ├── globals.css       ← استایل‌های سراسری
│   ├── layout.tsx        ← لایه اصلی + فونت
│   └── page.tsx          ← صفحه اصلی
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── constants/
│   └── index.ts          ← تمام داده‌های رزومه اینجاست
└── public/               ← تصاویر پروژه را اینجا بگذارید
```

## شخصی‌سازی

فقط فایل `constants/index.ts` را ویرایش کنید:
- `PERSONAL_INFO` → نام، تیتر، بیوگرافی، لینک‌ها
- `SKILLS` → مهارت‌ها و درصد تسلط
- `PROJECTS` → پروژه‌ها (تصاویر را در `/public` بگذارید)
- `EXPERIENCES` / `EDUCATIONS` → سوابق کاری و تحصیلی

برای عکس پروفایل، در `components/Hero.tsx` بخش placeholder را با `<Image>` از Next.js جایگزین کنید.
