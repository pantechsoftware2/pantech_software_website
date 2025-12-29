# PanTech Software - Frontend

A high-performance, conversion-focused website built with Next.js, React, and Tailwind CSS. Features a premium "Stripe-like" aesthetic with smooth animations and optimization for Core Web Vitals.

## 🎯 Project Overview

PanTech Software Website showcases a software consultancy that bridges custom enterprise engineering with marketing-tech products. Built to industry standards with focus on performance, SEO, and user experience.

**Key Features:**
- ✨ Smooth micro-interactions with Framer Motion & GSAP
- 🚀 Server-side rendering (SSR) for SEO optimization
- 📱 Fully responsive design
- ♿ Semantic HTML & accessibility-first
- 🎨 Gradient & glassmorphism design patterns
- 📊 Schema markup & JSON-LD structured data
- ⚡ Image optimization & lazy loading
- 🌍 Edge Network ready (Vercel/Netlify)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Development

```bash
cd frontend
npm install  # (Already completed)
npm run dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.jsx       # Root layout with Header/Footer
│   │   ├── page.jsx         # Homepage
│   │   └── globals.css
│   ├── components/
│   │   ├── shared/          # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/        # Page sections
│   │       ├── HeroSection.jsx
│   │       └── (more to come)
│   ├── lib/
│   │   ├── constants.js     # App configuration
│   │   └── utils.js         # Utility functions
│   └── styles/
│       └── variables.css    # CSS variables
├── public/                  # Static assets
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── PROJECT_SPECIFICATION.md # Full requirements document
└── README.md               # This file
```

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16+ - React framework with SSR & static generation
- React 19+ - UI library
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - React animations
- GSAP - Advanced animation library

**Development:**
- ESLint - Code quality
- Node.js 18+ - Runtime

**Deployment:**
- Vercel (recommended) - Native Next.js support
- Netlify - Alternative hosting

## 📊 Performance Targets

- **Core Web Vitals Score:** 90+
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Image Optimization:** WebP + lazy loading
- **Code Splitting:** Via Next.js routing
- **CSS:** Inline critical CSS via Tailwind

## 📋 Components

### Button.jsx
Reusable animated button with multiple variants.

```jsx
<Button variant="primary" size="lg">Action</Button>
```
**Variants:** primary, secondary, outline | **Sizes:** sm, md, lg

### Header.jsx
Fixed navigation with smooth animations and responsive menu.

### Footer.jsx
Multi-column footer with links and social media.

### HeroSection.jsx
Landing section with staggered animations, code preview, and CTA buttons.

## 🎨 Design System

- **Colors:** Black, White, Gray scale with gradients
- **Typography:** Inter (system fonts)
- **Spacing:** Tailwind 4px base unit
- **Border Radius:** 8px (`rounded-lg`)
- **Shadows:** Layered for depth

## 📝 Adding New Pages

Create a new route:
```bash
# 1. Create folder in src/app
# 2. Add page.jsx file
# 3. Update Header.jsx navigation
# 4. Update constants.js if needed
```

## 🎬 Animation Approach

- **Framer Motion** for component animations, hover effects, entrance animations
- **GSAP** for complex scroll-triggered effects
- **Physics-based** transitions for natural motion
- **Limited viewport animations** to maintain performance

## 🔍 SEO & Accessibility

- Semantic HTML tags
- Meta tags in layout
- JSON-LD schema ready
- Responsive design
- WCAG accessibility standards

## 📚 Useful Commands

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Check code quality
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Automatic deployment on GitHub push.

### Netlify
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build fails | `rm -rf .next node_modules && npm install` |
| Styles not applying | Ensure `.jsx` extension on files |
| Animations laggy | Check DevTools, reduce complexity |

## 📖 Documentation & Resources

- **Full Specification:** [PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Web Vitals Guide](https://web.dev/vitals/)

## 📄 License

Internal Pantech Software Project

---

**Last Updated:** December 15, 2025  
**Status:** 🚀 In Development  
**Node Version:** 18+  
**Package Manager:** npm
