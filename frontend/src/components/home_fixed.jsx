'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/shared/Button';
import { SERVICES } from '@/lib/constants';

import Header from '@/components/shared/Header';
// import Footer from '@/components/shared/Footer';
import StripeGradientOrb from '@/components/home/StripeGradientOrb';
import TypewriterText from '@/components/home/TypewriterText';
import ServicesSection from '@/components/home/ServicesSection';
import PerformanceSection from '@/components/home/PerformanceSection';
import CTASection from '@/components/home/CTASection';
import FeaturesPlanet from '@/components/home/planet';  // ✅ Capitalized component name



function HeroSectionContent() {
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
    <section
      role="region"
      aria-label="Hero"
      className="relative bg-white pt-28 pb-16 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <StripeGradientOrb />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 bg-black/5 border border-black/20 rounded-full backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-700">Engineering Your Growth</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <TypewriterText text="Custom Software Meets " delay={60} startDelay={200} showCursor={false} />
          </span>
          <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2">
            <TypewriterText text="Marketing Tech" delay={60} startDelay={1800} showCursor={true} />
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          We bridge the gap between enterprise-grade software engineering and modern marketing technology. Fast, reliable, conversion-focused.
        </motion.p>

     <motion.div
  variants={itemVariants}
  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
>
  {/* Start a Project → Contact Us */}
  <a
    href="/contactus"
    className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-gray-900 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-xl text-center"
  >
    Start a Project
  </a>

  {/* Explore Our Work */}
  <a
    href="/aboutus"
    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
  >
    Explore Our Work
  </a>
</motion.div>


        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-xs text-gray-500 font-mono">app.tsx</span>
            </div>
            <pre className="text-sm font-mono text-left overflow-x-auto">
              <code className="text-gray-300">
{`export default function Page() {
  return (
    <Component
      performance="optimized"
      conversion="focused"
      speed="blazing"
    />
  );
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* <motion.div variants={itemVariants}>
          <p className="text-gray-500 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((client) => (
              <div key={client} className="h-12 bg-gray-100 rounded-lg px-8 flex items-center justify-center border border-gray-200">
                <span className="text-sm font-semibold text-gray-700">{client}</span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroSectionContent />
      <ServicesSection />
      <PerformanceSection />
      {/* <FeaturesPlanet /> */}
      <CTASection />
      {/* <Footer /> */}
    </>
  );
}
