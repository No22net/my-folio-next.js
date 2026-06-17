# My Folio - Personal Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC" alt="Tailwind CSS" />
</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

My Folio is a modern, professional personal portfolio website built with a hybrid design approach combining Glassmorphism and Neumorphism visual effects. The project demonstrates modern web development practices using Next.js 16, React 19, and TypeScript.

The portfolio includes full support for both English and Persian (Farsi) languages with proper right-to-left (RTL) text direction handling. It features smooth animations, responsive design, and optimized performance through Turbopack integration.

## Features

| Feature | Description |
|---------|-------------|
| RTL Support | Complete Persian language support with Vazirmatn font |
| Modern Design | Hybrid Glassmorphism and Neumorphism visual effects |
| Smooth Animations | Framer Motion powered interactive transitions |
| Responsive Layout | Full compatibility across mobile, tablet, and desktop devices |
| Performance | Turbopack integration for optimized Next.js 16 builds |
| SEO Optimization | Comprehensive metadata, Open Graph, and Robots configuration |
| Security | HTTP security headers implementation |
| Bilingual | Seamless switching between English and Persian interfaces |

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.x | React framework and server-side rendering |
| React | 19.x | UI library and component management |
| TypeScript | 6.x | Type-safe JavaScript development |
| Tailwind CSS | 3.4.x | Utility-first CSS framework |
| Framer Motion | 12.x | Animation and motion library |
| Lucide React | 1.x | Icon library |

## Project Structure

```
my-folio/
├── app/
│   ├── layout.tsx           # Root layout and metadata configuration
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero/introduction section
│   ├── Skills.tsx           # Skills showcase section
│   ├── Projects.tsx         # Portfolio projects section
│   ├── Experience.tsx       # Work experience and education
│   ├── Contact.tsx          # Contact form component
│   └── Footer.tsx           # Footer section
├── constants/
│   └── index.ts             # Portfolio content data
├── public/
│   └── image/
│       └── profile.jpg      # Profile picture
└── package.json             # Project dependencies
```

## Quick Start

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/No22net/my-folio-next.js.git
cd my-folio-next.js

# Install project dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:3000` in your browser.

### Production Build

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## Customization

### Update Personal Information

Edit the `constants/index.ts` file to personalize your portfolio:

```typescript
export const PERSONAL_INFO = {
  name: "Your Full Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
};
```

### Update Profile Picture

Replace the default profile picture at `public/image/profile.jpg` with your own image of the same dimensions.

### Customize Content

All portfolio content (skills, projects, experience) is stored in `constants/index.ts`. Update the respective data structures to reflect your information, projects, and professional experience.

### Modify Styling

The design system is built on Tailwind CSS with custom Glassmorphism and Neumorphism effects. Adjust the configuration in:
- `tailwind.config.ts` for Tailwind settings
- `app/globals.css` for global CSS variables and base styles

## Deployment

### Deploy with Vercel (Recommended)

Vercel is the recommended deployment platform for Next.js applications:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

### Deploy with Other Platforms

The application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify
- DigitalOcean

Follow each platform's documentation for Next.js deployment.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add YourFeatureName'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate documentation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for complete details.

## Support

For issues, questions, or suggestions:

- Open an issue on [GitHub Issues](https://github.com/No22net/my-folio-next.js/issues)
- Contact via email: matin22.com@gmail.com

## Acknowledgments

Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Special thanks to the open-source community for these exceptional tools and libraries.

---

Developed by [Matin Ghaderian](https://github.com/No22net)
