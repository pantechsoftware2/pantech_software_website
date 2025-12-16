'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import { SERVICES } from '@/lib/constants';

// Custom Typewriter Component (no external deps)
function TypewriterText({ text, delay = 80, startDelay = 0, showCursor = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startDelay > 0) {
      const timer = setTimeout(() => setIndex(1), startDelay);
      return () => clearTimeout(timer);
    } else {
      setIndex(1);
    }
  }, [startDelay]);

  useEffect(() => {
    if (index > 0 && index <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && index <= text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      <section
        role="region"
        aria-label="Hero"
        className="relative bg-gradient-to-br from-white via-white to-gray-50 pt-28 pb-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 bg-black/5 border border-black/10 rounded-full">
            <span className="text-xs sm:text-sm font-medium text-gray-700">Engineering Your Growth</span>
          </motion.div>

          {/* Fixed: Truly one-line headline with typewriter effect */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-snug tracking-tight mb-6 bg-gradient-to-r from-cyan-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent"
          >
            <TypewriterText text="Custom Software Meets " delay={80} startDelay={200} showCursor={false} />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              <TypewriterText text="Marketing" delay={80} startDelay={2000} showCursor={true} />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Pantech bridges the gap between enterprise-grade software engineering and modern marketing technology. We build fast, reliable, conversion-focused experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="primary" size="md" className="w-full sm:w-auto">Start a Project</Button>
            <Button variant="outline" size="md" className="w-full sm:w-auto">Explore Our Work</Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="mx-auto max-w-xl bg-white border border-gray-100/60 rounded-lg p-4 sm:p-6 shadow-sm">
              <pre className="text-xs sm:text-sm font-mono text-gray-700 overflow-x-auto">
                <code>{`// Optimized for conversion\nexport default function Page() {\n  return (\n    <Component performance="optimized" conversion="focused" speed="blazing" />\n  );\n}`}</code>
              </pre>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-gray-500 text-xs sm:text-sm">Trusted by leading companies</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 opacity-70">
              {['Client 1', 'Client 2', 'Client 3', 'Client 4'].map((client) => (
                <div key={client} className="h-10 sm:h-12 bg-gray-200 rounded-md w-28 sm:w-32 flex items-center justify-center">
                  <span className="text-sm text-gray-600 truncate">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">We deliver custom engineering solutions and cutting-edge marketing technology</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg hover:border-black transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <motion.div whileHover={{ x: 5 }} className="inline-flex items-center text-black font-semibold cursor-pointer">
                  Learn more →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for Performance</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Every line of code is optimized for speed, conversion, and user experience</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {[
                { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally' },
                { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO' },
                { title: 'Schema Markup', desc: 'Rich snippets in search results' },
                { title: 'Edge Network', desc: 'CDN-powered delivery worldwide' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="bg-black text-white p-8 rounded-lg">
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{`// Optimized for conversion\nexport default function Page() {\n  return (\n    <Component\n      performance="optimized"\n      conversion="focused"\n      speed="blazing"\n    />\n  );\n}`}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how we can help you achieve your software and marketing goals.</p>
          <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">Start Your Project</Button>
        </motion.div>
      </section>
    </>
  );
}