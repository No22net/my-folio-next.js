
# My Folio - Next.js Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4)](https://tailwindcss.com/)

A modern, fully customizable online resume and portfolio built with **Next.js 14**, featuring a unique **Neumorphism + Glassmorphism** design aesthetic. It includes smooth Framer Motion animations, a Persian font (Vazirmatn) with RTL support, and a centralized data structure for easy personalization.

![Project Screenshot Placeholder](public/screenshot.png) *Replace with an actual screenshot*

##  Features

- **Modern Stack:** Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
- **Unique Design System:** Combines Neumorphism and Glassmorphism UI effects.
- **Smooth Animations:** Page transitions and element animations powered by `framer-motion`.
- **Fully Customizable:** All portfolio data (personal info, skills, projects, experience) lives in a single file (`constants/index.ts`).
- **RTL Ready:** Includes the Vazirmatn font, suitable for Persian/Arabic scripts, though easily adaptable to LTR.
- **Responsive:** Looks great on all device sizes.

##  Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 18.x or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/No22net/my-folio-next.js.git
    cd my-folio-next.js
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Run the development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open your browser
Navigate to http://localhost:3000 to see the result.

 Project Structure
text
my-folio-next.js/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles (Neumorphism/Glassmorphism)
│   ├── layout.tsx          # Root layout (includes font & structure)
│   └── page.tsx            # Home page (assembles components)
├── components/             # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── constants/              # 📝 Centralized data for easy customization
│   └── index.ts            # <-- Edit this file with your information
├── public/                 # Static assets (images, icons, etc.)
│   └── image/              # Place your project & profile images here
└── ... (config files)
 Customization Guide
To make this portfolio your own, you only need to edit one file: constants/index.ts.

Inside this file, you will find the following export objects. Replace the example data with your own:

PERSONAL_INFO : Your name, title (e.g., "Frontend Developer"), short bio, and social media links (GitHub, LinkedIn, etc.).

SKILLS : A list of your technical skills and proficiency percentage (e.g., { name: "React", level: 90 }).

PROJECTS : Details of your work. For each project, add a title, description, tech stack, links, and the image filename (place images in /public/image).

EXPERIENCES / EDUCATIONS : Your work history and academic background with dates, titles, and descriptions.

Adding a Profile Picture
Place your profile image in the public/image/ folder.

Open components/Hero.tsx.

Replace the placeholder <div> with a standard Next.js Image component:

tsx
import Image from 'next/image';

// Inside the Hero component
<div className="relative w-32 h-32 mx-auto mb-6">
  <Image
    src="/image/your-profile-pic.jpg" // Path to your image
    alt="Profile Picture"
    fill
    className="rounded-full object-cover"
  />
</div>
 Built With
Next.js 14 - React framework with App Router

TypeScript - Type safety

Tailwind CSS - Utility-first CSS framework

Framer Motion - Animation library

Vazirmatn - Persian/Arabic font

 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

 License
Distributed under the MIT License. See LICENSE file for more information.

 Contact
Project Maintainer - @No22net

Project Link: https://github.com/No22net/my-folio-next.js

 Star this project on GitHub — it helps a lot!

text

This `README.md` is structured to be immediately usable for your GitHub project, highlighting its unique design, ease of customization, and professional setup.
