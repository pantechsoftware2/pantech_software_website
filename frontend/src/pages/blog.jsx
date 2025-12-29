import React from 'react';
import Link from 'next/link';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

// Local articles data - replace with CMS later
const articles = [
  {
    slug: 'seo-engineering-2026',
    title: 'SEO Engineering for 2026: Beyond Keywords',
    excerpt: 'How we built a SGE-ready content system that ranks #1 for competitive terms using structured data and performance engineering.',
    category: 'SEO',
    readTime: '12'
  },
  {
    slug: 'nextjs-stripe-patterns',
    title: 'Stripe UI Patterns in Next.js 15',
    excerpt: 'Replicating Stripe\'s glassmorphism, mesh gradients, and 60fps scroll animations using Framer Motion and Tailwind.',
    category: 'React',
    readTime: '8'
  },
  {
    slug: 'core-web-vitals-90',
    title: 'Achieving 90+ Core Web Vitals',
    excerpt: 'Our methodology for LCP under 1.5s, CLS under 0.1, and INP under 200ms using Next.js App Router and Vercel Edge.',
    category: 'Performance',
    readTime: '10'
  },
  {
    slug: 'headless-cms-sanity',
    title: 'Sanity + Next.js: Production CMS Setup',
    excerpt: 'Step-by-step guide to integrating Sanity.io with Next.js 15 including GROQ queries, image optimization, and ISR.',
    category: 'CMS',
    readTime: '15'
  },
  {
    slug: 'api-rate-limiting',
    title: 'Enterprise API Rate Limiting',
    excerpt: 'Building Stripe-grade rate limiting with Redis, sliding windows, and adaptive throttling for 10M+ req/day.',
    category: 'Architecture',
    readTime: '9'
  },
  {
    slug: 'framer-motion-scroll',
    title: 'Scroll-Triggered Animations Done Right',
    excerpt: 'Physics-based scroll animations using Framer Motion\'s useScroll and useTransform hooks with 60fps guarantee.',
    category: 'Animation',
    readTime: '7'
  }
];

export const metadata = {
  title: 'Blog & Resources - PanTech Software | Engineering Your Growth',
  description: 'Technical deep dives, SEO strategies, and software engineering insights from PanTech. Learn how we build high-performance marketing systems.',
  openGraph: {
    images: ['/pantech-logo.jpeg'],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section - Fixed gap, #0a2540 bg */}
        <section className="relative bg-slate-100 overflow-hidden">
          <div className="absolute inset-0" />
          <div className="absolute inset-0 " />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-400 to-gray-400 bg-clip-text text-transparent mb-6 leading-tight pb-2">
                Engineering<br className="sm:hidden" />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl text-cyan-800 max-w-2xl mx-auto mb-8 leading-relaxed">
                Deep technical dives into SEO systems, performance engineering, and scalable software architecture.
              </p>
              
              {/* Code Block - Stripe terminal style */}
              <div className="max-w-2xl mx-auto bg-[#0a2540]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <pre className="text-sm font-mono text-gray-100 leading-relaxed overflow-x-auto">
                  <code>{`const growth = await PanTech.engineer({
  performance: "90+ CWV",
  seo: "SGE-ready", 
  architecture: "Stripe-grade"
});`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.slice(0, 6).map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="bg-[#0d1224] backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-mono rounded-full border border-purple-500/30 font-medium">
                        {article.category}
                      </span>
                      <motion.div 
                        className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [0, 1] }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-all duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-xs text-gray-400 font-mono">
                        {article.readTime} min read
                      </span>
                      {/* <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1">
                        Read <span>→</span>
                      </span> */}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20 lg:mt-24"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0048e5] text-white font-semibold rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5 group relative overflow-hidden border-0"
            >
              <span>View All Articles</span>
              <motion.div
                className="w-2 h-2 bg-white/50 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Link>
            <p className="text-black mt-6 text-sm max-w-md mx-auto leading-relaxed">
              New articles weekly covering SEO engineering, performance optimization, and scalable architecture.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
