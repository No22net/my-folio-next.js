<div dir="rtl" align="center">
  
# 🧑‍💻 پورتفولیوی شخصی – متین قادریان

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

[🇬🇧 English Version](#-english-version)

</div>

---

## فارسی

###  معرفی
یک سایت رزومه و پورتفولیو مدرن با طراحی ترکیبی **Glassmorphism + Neumorphism**. این پروژه با استفاده از جدیدترین ابزارهای توسعه وب شامل **Next.js 16** و **React 19** ساخته شده تا تجربه‌ای سریع، زیبا و تعاملی را برای نمایش مهارت‌ها و پروژه‌های شما فراهم کند.

###  ویژگی‌های کلیدی
- 🇮🇷 **پشتیبانی کامل از زبان فارسی (RTL)** با فونت Vazirmatn
- 🎨 **طراحی نوین Glassmorphism + Neumorphism** (افکت شیشه‌ای و سه‌بعدی)
- 🌀 **انیمیشن‌های روان و جذاب** با استفاده از Framer Motion
- 📱 **طراحی کاملاً واکنش‌گرا** (Responsive) برای موبایل، تبلت و دسکتاپ
- ⚡ **سرعت فوق‌العاده** با بهره‌گیری از Turbopack در Next.js 16
- 🔍 **بهینه برای موتورهای جستجو (SEO)** – شامل متادیتا، Open Graph و Robots
  امنیت بالا** با پیاده‌سازی هدرهای امنیتی HTTP

### تکنولوژی‌های استفاده شده
| ابزار | نسخه |
|-------|------|
| **Next.js** | 16.x |
| **React** | 19.x |
| **TypeScript** | 6.x |
| **Tailwind CSS** | 3.4.x |
| **Framer Motion** | 12.x |
| **Lucide React** | 1.x |

### ساختار پروژه
my-folio/
├── app/
│ ├── layout.tsx # لایه اصلی + متادیتا
│ ├── page.tsx # صفحه اصلی
│ └── globals.css # استایل‌های پایه
├── components/
│ ├── Navbar.tsx # نوار ناوبری
│ ├── Hero.tsx # بخش معرفی
│ ├── Skills.tsx # مهارت‌ها
│ ├── Projects.tsx # پروژه‌ها
│ ├── Experience.tsx # تجربیات و تحصیلات
│ ├── Contact.tsx # فرم تماس
│ └── Footer.tsx # فوتر
├── constants/
│ └── index.ts #  داده‌های رزومه (اینجا ویرایش کنید!)
└── public/
└── image/
└── profile.jpg # عکس پروفایل

text

### 🚀 راه‌اندازی سریع

#### پیش‌نیازها
- **Node.js** نسخه ۱۸ یا بالاتر
- **npm** یا **yarn**

#### مراحل نصب و اجرا
```bash
# کلون کردن مخزن
git clone https://github.com/No22net/my-folio-next.js.git
cd my-folio-next.js

# نصب وابستگی‌ها
npm install

# اجرا در حالت توسعه (توسعه)
npm run dev
سایت روی آدرس http://localhost:3000 در دسترس خواهد بود.

ساخت نسخه نهایی برای انتشار
bash
npm run build
npm run start
شخصی‌سازی (سفارشی‌سازی)
برای اعمال اطلاعات شخصی خود، فقط کافی است فایل constants/index.ts را ویرایش کنید:

typescript
export const PERSONAL_INFO = {
  name: "متین قادریان",
  title: "طراح فرانت اند",
  email: "matin22.com@gmail.com",
  github: "https://github.com/No22net",
  // ... سایر اطلاعات
};
همچنین برای تعویض عکس پروفایل، فایل public/image/profile.jpg را جایگزین نمایید.

🌐 استقرار (Deployment)
ساده‌ترین روش استفاده از Vercel است:

bash
npx vercel
 نحوه مشارکت
مخزن (Repository) را Fork کنید.

یک Branch جدید برای تغییرات خود ایجاد کنید (git checkout -b feature/AmazingFeature).

تغییرات را Commit کنید (git commit -m 'Add some AmazingFeature').

روی Branch خود Push کنید (git push origin feature/AmazingFeature).

یک Pull Request باز کنید.

 لایسنس
این پروژه تحت لایسنس MIT منتشر شده است. برای جزئیات بیشتر به فایل LICENSE مراجعه کنید.

 ارتباط با من
گزارش مشکلات (Issues): صفحه Issues در گیت‌هاب

ایمیل: matin.ghaderian@example.com (ایمیل نمونه - لطفاً در فایل constants به‌روز کنید)

 قدردانی
با تشکر از جامعه متن‌باز و تمام افرادی که از ابزارهای فوق‌العاده‌ای مانند Next.js، React، Tailwind CSS و Framer Motion استفاده می‌کنند.

<div dir="ltr" align="center">
🇬🇧 English Version
 Personal Portfolio – Matin Ghaderian
https://img.shields.io/badge/License-MIT-green.svg
https://img.shields.io/badge/Next.js-16-black
https://img.shields.io/badge/React-19-blue
https://img.shields.io/badge/TypeScript-6-blue
https://img.shields.io/badge/Tailwind-3.4-38B2AC

</div>
 Introduction
A modern resume and portfolio website with a Glassmorphism + Neumorphism design. Built with cutting-edge web technologies including Next.js 16 and React 19 to provide a fast, beautiful, and interactive experience for showcasing your skills and projects.

 Key Features
🇮🇷 Full Persian (RTL) support with Vazirmatn font

 Modern Glassmorphism + Neumorphism design (glass-like and 3D effects)

 Smooth and engaging animations using Framer Motion

 Fully responsive design for mobile, tablet, and desktop

 Blazing fast performance with Next.js 16 and Turbopack

 SEO optimized – includes metadata, Open Graph, and Robots

 High security with HTTP security headers

 Technologies Used
Tool	Version
Next.js	16.x
React	19.x
TypeScript	6.x
Tailwind CSS	3.4.x
Framer Motion	12.x
Lucide React	1.x
 Project Structure
text
my-folio/
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Base styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Introduction section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx  # Experience & education
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── constants/
│   └── index.ts        # Resume data (edit here!)
└── public/
    └── image/
        └── profile.jpg # Profile picture
 Quick Start
Prerequisites
Node.js version 18 or higher

npm or yarn

Installation & Running
bash
# Clone the repository
git clone https://github.com/No22net/my-folio-next.js.git
cd my-folio-next.js

# Install dependencies
npm install

# Run in development mode
npm run dev
The site will be available at http://localhost:3000.

Production Build
bash
npm run build
npm run start
 Customization
To personalize your information, simply edit the constants/index.ts file:

typescript
export const PERSONAL_INFO = {
  name: "Matin Ghaderyan",
  title: "Front-end",
  email: "matin22.com@gmail.com",
  github: "https://github.com/No22net",
};


 Deployment
The easiest way is to use Vercel:

bash
npx vercel
 How to Contribute
Fork the repository.

Create a new Branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

 License
This project is released under the MIT License. See the LICENSE file for details.

 Contact
Issues: GitHub Issues page

Email: matin.ghaderian@example.com (sample - please update in constants)

 Acknowledgments
Thanks to the open-source community and everyone who uses amazing tools like Next.js, React, Tailwind CSS, and Framer Motion.

<div align="center"> Made with ❤️ by Matin Ghaderian </div> ```
