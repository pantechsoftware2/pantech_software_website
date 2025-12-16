# Pantech Software Website
**Date:** December 14, 2025

## Project Goal
Build a high-performance, conversion-focused website with a premium "Stripe-like" aesthetic.

## Core Identity
A software consultancy bridging the gap between custom enterprise engineering and marketing-tech products.

---

## 1. Design Philosophy & Aesthetic ("The Stripe Standard")

The "Stripe look" is not just about colors; it is about precision, depth, and motion.

### Key Design Principles:
- **Visual Hierarchy**: Clean sans-serif typography (e.g., Inter, Söhne, or custom distinct fonts) with high contrast.
- **Gradients & Depth**: Use of subtle mesh gradients, glassmorphism (blur effects), and angled section dividers to create dynamism. Avoid flat, solid colors.
- **Micro-interactions**: Every button hover, card click, and scroll event should have a smoothed, physics-based animation. The site must feel "alive."
- **Isometric Illustrations**: Use 3D/abstract visuals to represent abstract software concepts (e.g., "API integration" represented by connecting floating blocks).
- **Code-First Vibe**: Since we sell software, we must show code. Use syntax-highlighted "code blocks" as design elements to showcase technical prowess.

---

## 2. Information Architecture (Sitemap)

### Homepage
- Hero Section: Animated value prop ("Engineering Your Growth")
- Social Proof: "Trusted by" ticker (logos)
- The Dual Offering: Split section linking to "Custom Engineering" vs. "Marketing Products"
- Interactive Demo: A small interactive element showing a snippet of what we build

### Services (Consultancy)
- Custom Software Development
- Mobile App Development
- Cloud Infrastructure & DevOps

### Products (Pantech Labs)
- Showcase internal marketing tools (even if beta)
- Give each a dedicated landing page

### Case Studies
- Detailed breakdowns of past projects (Problem → Solution → Code Snippet → Result)

### Blog/Resources
- Critical for SEO and thought leadership

### Contact/Hire Us
- High-conversion form with low friction

---

## 3. Technical Stack

### Frontend Framework: **Next.js (React)**
- **Why**: Industry standard for high-performance, SEO-friendly React sites with Server Side Rendering (SSR)

### Styling: **Tailwind CSS**
- **Why**: Rapid development and easy maintenance of a design system

### Animation Library: **Framer Motion + GSAP**
- **Why**: Handle complex scroll-triggered animations and the "smooth" feel that Stripe is famous for

### Content Management System: **Sanity.io or Contentful (Headless CMS)**
- **Why**: Decouples content from code, allows marketing team to edit without touching codebase, keeps frontend blazing fast

### Hosting: **Vercel or Netlify**
- **Why**: Optimized for Next.js with Edge Network (CDN) for global performance

### CI/CD: **GitHub + Vercel Integration**
- **Why**: Automatic preview links on every push, review before going public

---

## 4. Long-Term SEO & Performance Strategy

### Core Web Vitals Target: 90+ on Google PageSpeed Insights

#### Performance Optimization
- Image optimization (WebP formats)
- Lazy loading for off-screen assets
- Font subsetting

#### Semantic HTML
- Use proper `<article>`, `<section>`, `<aside>` tags
- Help AI search bots (ChatGPT, Google SGE) understand content

#### Schema Markup
- Hardcode JSON-LD schema for "SoftwareApplication" and "ProfessionalService"
- Enable rich snippets (star ratings, price range) in Google search results

#### Programmatic SEO Foundation
- Build blog templates to handle "programmatic" pages later
- Example: Generate landing pages for "Custom Software for [Industry]" dynamically

---

## 5. Hosting & Infrastructure

### Domain & DNS
- Keep domain on secure registrar (Cloudflare or Namecheap)

### Hosting
- **Vercel** or **Netlify** (optimized for Next.js)
- Edge Network (CDN) for global distribution

### CI/CD Pipeline
- Connect GitHub repository to Vercel
- Automatic preview links on push
- Review changes live before going public

---

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.jsx           # Homepage
│   │   ├── layout.jsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── shared/            # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── ServicesSection.jsx
│   │       └── CaseStudiesSection.jsx
│   ├── lib/                   # Utilities & helpers
│   │   ├── utils.js
│   │   └── constants.js
│   ├── styles/               # Custom CSS & design tokens
│   │   └── variables.css
│   └── pages/                # Additional pages (services, products, blog)
├── public/                   # Static assets
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── README.md
```

---

## Development Guidelines

1. **Component Organization**: All UI components should be in `components/` folder
   - `shared/` for reusable components (Button, Header, Footer)
   - `sections/` for larger page sections

2. **Styling**: Use Tailwind CSS utility classes with custom CSS for complex animations

3. **Animations**: Implement with Framer Motion for React components and GSAP for complex scroll effects

4. **Performance**: 
   - Always optimize images
   - Lazy load off-screen content
   - Use Next.js Image component for automatic optimization

5. **SEO**: 
   - Implement semantic HTML
   - Add meta tags and JSON-LD schema
   - Ensure accessibility (WCAG standards)

---

## Next Steps

1. ✅ Set up Next.js project with React and Tailwind CSS
2. ✅ Install animation libraries (Framer Motion, GSAP)
3. Create core components (Header, Footer, Navigation)
4. Design and implement Hero Section with animations
5. Build Services and Products pages
6. Integrate with Sanity.io/Contentful CMS
7. Set up blog infrastructure
8. Implement SEO and schema markup
9. Deploy to Vercel
10. Monitor Core Web Vitals and optimize

---

**Last Updated:** December 15, 2025
