# Quick Start Guide - PanTech Frontend

## 🚀 Start Development Server

```bash
cd C:\Users\pante\Downloads\panTechsoftware\frontend
npm run dev
```

Open browser to: **http://localhost:3000**

## 📂 File Structure Quick Reference

```
src/
├── app/                          # All pages & layouts
│   ├── layout.jsx               # Root layout (import Header/Footer here)
│   └── page.jsx                 # Homepage
├── components/
│   ├── shared/                  # Reusable components
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/                # Page sections
│       └── HeroSection.jsx
└── lib/
    ├── constants.js             # Configuration & constants
    └── utils.js                 # Helper functions
```

## 🎨 Creating Components

All components should be in `src/components/` with `.jsx` extension.

### Example - New Component

Create `src/components/shared/Card.jsx`:
```jsx
'use client';

import { motion } from 'framer-motion';

export default function Card({ title, description, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 border border-gray-200 rounded-lg bg-white"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </motion.div>
  );
}
```

Then import and use:
```jsx
import Card from '@/components/shared/Card';

<Card title="Example" description="This is a card">
  <button>Action</button>
</Card>
```

## 📄 Creating New Pages

Pages are created in `src/app/[route]/page.jsx`

### Example - Services Page

1. Create folder: `src/app/services`
2. Create file: `src/app/services/page.jsx`

```jsx
'use client';

import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 max-w-7xl mx-auto px-6"
    >
      <h1 className="text-5xl font-bold mb-8">Our Services</h1>
      {/* Page content */}
    </motion.section>
  );
}
```

3. Update Header navigation in `src/components/shared/Header.jsx`:
```jsx
const navItems = [
  { label: 'Services', href: '/services' },  // ← Add this
  { label: 'Products', href: '/products' },
  // ...
];
```

## 🎬 Animation Patterns

### Framer Motion Examples

**Entrance Animation:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Hover Effect:**
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

**Scroll Trigger:**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Appears on scroll
</motion.div>
```

## 🎨 Tailwind CSS Classes

Common utility classes used throughout:

```jsx
// Spacing
className="px-6 py-8"           // Padding
className="mb-4 gap-6"          // Margins & gaps

// Typography
className="text-4xl font-bold"  // Size & weight
className="text-gray-600"       // Color

// Layout
className="flex items-center justify-between"
className="grid grid-cols-3 gap-8"
className="max-w-7xl mx-auto"

// Colors
className="bg-black text-white"
className="border border-gray-200"
className="hover:bg-gray-100"

// Responsive
className="hidden md:flex"       // Hidden on mobile, flex on desktop
className="grid grid-cols-1 md:grid-cols-3"  // 1 col mobile, 3 cols desktop
```

## 🔧 Common Tasks

### Add a New Button Variant

Edit `src/components/shared/Button.jsx`:
```jsx
const variants = {
  primary: 'bg-black text-white hover:bg-gray-800',
  secondary: 'bg-gray-100 text-black hover:bg-gray-200',
  success: 'bg-green-600 text-white hover:bg-green-700',  // ← New
};
```

### Update Site Meta Information

Edit `src/app/layout.jsx`:
```jsx
export const metadata = {
  title: "PanTech - New Title",
  description: "Updated description",
};
```

### Add a New Constant

Edit `src/lib/constants.js`:
```jsx
export const TESTIMONIALS = [
  {
    author: "Jane Doe",
    company: "TechCorp",
    text: "Great experience working with PanTech!"
  },
];
```

Use it:
```jsx
import { TESTIMONIALS } from '@/lib/constants';

{TESTIMONIALS.map(testimonial => (
  <Testimonial key={testimonial.author} {...testimonial} />
))}
```

## ⚡ Performance Tips

1. **Always use Next.js Image component:**
   ```jsx
   import Image from 'next/image';
   
   <Image 
     src="/path/to/image.webp" 
     alt="Description"
     width={400}
     height={300}
   />
   ```

2. **Lazy load components:**
   ```jsx
   import dynamic from 'next/dynamic';
   const HeavyComponent = dynamic(() => import('@/components/Heavy'));
   ```

3. **Optimize animations:**
   ```jsx
   // Good - limited animations
   <motion.div whileHover={{ scale: 1.05 }} />
   
   // Avoid - too complex
   <motion.div animate={{ x: [0, 100, 0], y: [0, 100, 0] }} />
   ```

## 🚀 Deploy to Vercel

```bash
# Install Vercel CLI (first time only)
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect via Vercel dashboard.

## 🐛 Debugging Tips

- **Check console errors:** F12 → Console tab
- **Inspect elements:** Right-click → Inspect
- **React DevTools:** Install Chrome/Firefox extension
- **Network tab:** Check image sizes, loading times
- **Lighthouse:** F12 → Lighthouse tab (performance score)

## 📚 Documentation Files

- **Full Spec:** [PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md)
- **Detailed README:** [README.md](./README.md)

## 💡 Common Issues

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Styles not showing | Check if file has `.jsx` extension |
| Component not rendering | Check for `'use client'` directive |
| Build fails | `rm -rf .next && npm run build` |
| Images not loading | Use Next.js `Image` component, check path |

## 🎯 Next Steps

1. ✅ Frontend project created with React & Next.js
2. ✅ Components folder structure ready
3. ✅ Core components built (Button, Header, Footer, Hero)
4. 📝 Create additional pages (Services, Products, Blog)
5. 📝 Implement CMS integration (Sanity.io/Contentful)
6. 📝 Add schema markup & SEO enhancements
7. 📝 Deploy to Vercel

---

**Questions?** Check [PROJECT_SPECIFICATION.md](./PROJECT_SPECIFICATION.md) for full details!
