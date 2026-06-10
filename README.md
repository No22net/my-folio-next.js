<div align="right" dir="rtl">

# 🧑‍💻 پورتفولیوی شخصی – متین قادریان

یک سایت رزومه و پورتفولیو مدرن با طراحی **Glassmorphism + Neumorphism** ساخته شده با **Next.js 16** و **React 19**.

---

## ✨ ویژگی‌ها

- 🇮🇷 **فارسی (RTL)** — پشتیبانی کامل از راست‌به‌چپ با فونت Vazirmatn
- 🎨 **Glassmorphism + Neumorphism** — طراحی مدرن با افکت شیشه‌ای و سه‌بعدی
- 🌀 **انیمیشن‌های روان** — با Framer Motion
- 📱 **ریسپانسیو** — واکنش‌گرا برای موبایل، تبلت و دسکتاپ
- ⚡ **Next.js 16 + Turbopack** — بارگذاری فوق‌سریع
- 🔍 **سئو‌بهینه** — متادیتا، Open Graph و Robots
- 🔒 **امنیت** — سرصفحه‌های امنیتی HTTP

## 🛠️ تکنولوژی‌ها

| ابزار | نسخه |
|-------|-------|
| **Next.js** | 16.x |
| **React** | 19.x |
| **TypeScript** | 6.x |
| **Tailwind CSS** | 3.4.x |
| **Framer Motion** | 12.x |
| **Lucide React** | 1.x |

## 🗂️ ساختار پروژه

```
my-folio/
├── app/
│   ├── layout.tsx      # لایه اصلی + متادیتا
│   ├── page.tsx        # صفحه اصلی
│   └── globals.css     # استایل‌های پایه
├── components/
│   ├── Navbar.tsx      # نوار ناوبری
│   ├── Hero.tsx        # بخش معرفی
│   ├── Skills.tsx      # مهارت‌ها
│   ├── Projects.tsx    # پروژه‌ها
│   ├── Experience.tsx  # تجربیات و تحصیلات
│   ├── Contact.tsx     # فرم تماس
│   └── Footer.tsx      # فوتر
├── constants/
│   └── index.ts        # داده‌های رزومه (اینجا ویرایش کنید!)
└── public/
    └── image/
        └── profile.jpg # عکس پروفایل
```

## 🚀 راه‌اندازی

### پیش‌نیازها
- **Node.js** نسخه ۱۸ یا بالاتر
- **npm** یا **yarn**

### نصب

```bash
# کلون کردن
git clone https://github.com/No22net/my-folio.git
cd my-folio

# نصب وابستگی‌ها
npm install

# اجرا در حالت توسعه
npm run dev
```

سایت روی `http://localhost:3000` در دسترس خواهد بود.

### ساخت نسخه نهایی

```bash
npm run build
npm run start
```

## ✏️ شخصی‌سازی

تمام اطلاعات رزومه در یک فایل است:

**`constants/index.ts`**

```ts
export const PERSONAL_INFO = {
  name: "نام شما",
  title: "عنوان شغلی",
  email: "email@example.com",
  github: "https://github.com/username",
  // ...
};
```

برای تغییر عکس پروفایل، فایل `public/image/profile.jpg` را جایگزین کنید.

## 📦 دیپلوی

برای دیپلوی روی **Vercel**:

```bash
npx vercel
```

## 📄 لایسنس

MIT © [متین قادریان](https://github.com/No22net)

</div>
