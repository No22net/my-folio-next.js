📄 README.md – نسخه‌ی حرفه‌ای
markdown
<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC" alt="Tailwind CSS" />
</div>

<br />

<div align="center">
  <h1>✨ My Folio – Personal Portfolio</h1>
  <p>
    <strong>یک پورتفولیوی شخصی مدرن با طراحی ترکیبی Glassmorphism + Neumorphism</strong>
  </p>
  <p>
    <a href="#-فارسی">فارسی</a> •
    <a href="#-english">English</a>
  </p>
</div>

---

## 🇮🇷 فارسی

### 🚀 معرفی

**My Folio** یک سایت رزومه و پورتفولیوی شخصی است که با **طراحی ترکیبی Glassmorphism و Neumorphism** ساخته شده تا تجربه‌ای مدرن، زیبا و تعاملی برای نمایش مهارت‌ها، پروژه‌ها و سوابق کاری شما فراهم کند.

این پروژه با بهره‌گیری از جدیدترین ابزارهای توسعه وب از جمله **Next.js 16**، **React 19** و **TypeScript** توسعه یافته و عملکردی فوق‌العاده سریع و بهینه دارد.

### ✨ ویژگی‌های کلیدی

| ویژگی | توضیح |
|-------|-------|
| 🌐 **پشتیبانی کامل از RTL** | پشتیبانی کامل از زبان فارسی با فونت زیبای Vazirmatn |
| 🎨 **طراحی مدرن** | ترکیب افکت‌های Glassmorphism (شیشه‌ای) و Neumorphism (سه‌بعدی) |
| 🎬 **انیمیشن‌های روان** | پیاده‌سازی شده با Framer Motion برای تعاملات جذاب |
| 📱 **واکنش‌گرا** | سازگاری کامل با موبایل، تبلت و دسکتاپ |
| ⚡ **سرعت فوق‌العاده** | استفاده از Turbopack در Next.js 16 |
| 🔍 **بهینه‌سازی SEO** | شامل متادیتا، Open Graph و Robots |
| 🔒 **امنیت بالا** | پیاده‌سازی هدرهای امنیتی HTTP |

### 🛠️ تکنولوژی‌های استفاده شده

| ابزار | نسخه |
|-------|------|
| **Next.js** | 16.x |
| **React** | 19.x |
| **TypeScript** | 6.x |
| **Tailwind CSS** | 3.4.x |
| **Framer Motion** | 12.x |
| **Lucide React** | 1.x |

### 📁 ساختار پروژه
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
│ └── index.ts # 📌 داده‌های رزومه (اینجا ویرایش کنید!)
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

# اجرا در حالت توسعه
npm run dev
سایت روی آدرس http://localhost:3000 در دسترس خواهد بود.

ساخت نسخه نهایی
bash
npm run build
npm run start
✏️ شخصی‌سازی (سفارشی‌سازی)
برای اعمال اطلاعات شخصی خود، کافی است فایل constants/index.ts را ویرایش کنید:

typescript
export const PERSONAL_INFO = {
  name: "متین قادریان",
  title: "طراح فرانت‌اند",
  email: "matin22.com@gmail.com",
  github: "https://github.com/No22net",
};
همچنین برای تعویض عکس پروفایل، فایل public/image/profile.jpg را جایگزین نمایید.

🌐 استقرار (Deployment)
ساده‌ترین روش استفاده از Vercel است:

bash
npx vercel
🤝 نحوه مشارکت
مخزن (Repository) را Fork کنید.

یک Branch جدید برای تغییرات خود ایجاد کنید:

bash
git checkout -b feature/AmazingFeature
تغییرات را Commit کنید:

bash
git commit -m 'Add some AmazingFeature'
روی Branch خود Push کنید:

bash
git push origin feature/AmazingFeature
یک Pull Request باز کنید.

📄 لایسنس
این پروژه تحت لایسنس MIT منتشر شده است. برای جزئیات بیشتر به فایل LICENSE مراجعه کنید.

📬 ارتباط با من
گزارش مشکلات (Issues): صفحه Issues در گیت‌هاب

ایمیل: matin.ghaderian@example.com (لطفاً در فایل constants به‌روز کنید)

🙏 قدردانی
با تشکر از جامعه متن‌باز و تمام افرادی که از ابزارهای فوق‌العاده‌ای مانند Next.js، React، Tailwind CSS و Framer Motion استفاده می‌کنند.


🇬🇧 English
🚀 Introduction
My Folio is a modern personal resume and portfolio website with a Glassmorphism + Neumorphism hybrid design. Built with cutting-edge web technologies including Next.js 16 and React 19, it provides a fast, beautiful, and interactive experience for showcasing your skills, projects, and work experience.

✨ Key Features
Feature	Description
🌐 Full RTL Support	Complete Persian language support with Vazirmatn font
🎨 Modern Design	Glassmorphism + Neumorphism visual effects
🎬 Smooth Animations	Powered by Framer Motion for engaging interactions
📱 Fully Responsive	Optimized for mobile, tablet, and desktop
⚡ Blazing Fast	Turbopack integration in Next.js 16
🔍 SEO Optimized	Metadata, Open Graph, and Robots included
🔒 High Security	HTTP security headers implemented
🛠️ Technologies Used
Tool	Version
Next.js	16.x
React	19.x
TypeScript	6.x
Tailwind CSS	3.4.x
Framer Motion	12.x
Lucide React	1.x
📁 Project Structure
text
my-folio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page
│   └── globals.css       # Base styles
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Introduction section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Experience.tsx    # Experience & education
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── constants/
│   └── index.ts          # 📌 Resume data (edit here!)
└── public/
    └── image/
        └── profile.jpg   # Profile picture
🚀 Quick Start
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
✏️ Customization
To personalize your information, simply edit the constants/index.ts file:

typescript
export const PERSONAL_INFO = {
  name: "Matin Ghaderian",
  title: "Front-end Developer",
  email: "matin22.com@gmail.com",
  github: "https://github.com/No22net",
};
To change your profile picture, replace the file at public/image/profile.jpg.

🌐 Deployment
The easiest way is to use Vercel:

bash
npx vercel
🤝 How to Contribute
Fork the repository.

Create a new Branch:

bash
git checkout -b feature/AmazingFeature
Commit your changes:

bash
git commit -m 'Add some AmazingFeature'
Push to the branch:

bash
git push origin feature/AmazingFeature
Open a Pull Request.

📄 License
This project is released under the MIT License. See the LICENSE file for details.

📬 Contact
Report Issues: GitHub Issues page

Email: matin.ghaderian@example.com (sample - please update in constants)

🙏 Acknowledgments
Thanks to the open-source community and everyone who uses amazing tools like Next.js, React, Tailwind CSS, and Framer Motion.


<div align="center"> Made with ❤️ by <a href="https://github.com/No22net">Matin Ghaderian</a> </div> ```
