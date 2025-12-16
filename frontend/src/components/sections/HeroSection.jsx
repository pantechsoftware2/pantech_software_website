'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-white via-white to-gray-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        {/* Floating badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 px-4 py-2 bg-black/5 border border-black/10 rounded-full"
        >
          <span className="text-sm font-medium text-gray-700">
            ✨ Engineering Your Growth
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Custom Software{' '}
          <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
            Meets Marketing
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Pantech bridges the gap between enterprise-grade software engineering and cutting-edge
          marketing technology. We build solutions that drive growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <Button variant="primary" size="lg">
            Start a Project
          </Button>
          <Button variant="outline" size="lg">
            Explore Our Work
          </Button>
        </motion.div>

        {/* Floating code block preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative"
        >
          <div className="bg-black/5 backdrop-blur border border-black/10 rounded-lg p-6 max-w-2xl mx-auto">
            <code className="text-sm text-gray-700 font-mono">
              <span className="text-blue-600">&lt;Component</span>
              <br />
              <span className="ml-4">performance</span>
              <span className="text-blue-600">=</span>
              <span className="text-red-600">"optimized"</span>
              <br />
              <span className="ml-4">conversion</span>
              <span className="text-blue-600">=</span>
              <span className="text-red-600">"focused"</span>
              <br />
              <span className="text-blue-600">/&gt;</span>
            </code>
          </div>
        </motion.div>

        {/* Trusted by section */}
        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <p className="text-gray-500 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex justify-center gap-8 opacity-60">
            {['Client 1', 'Client 2', 'Client 3', 'Client 4'].map((client) => (
              <div key={client} className="h-12 bg-gray-300 rounded-lg w-32 flex items-center justify-center">
                <span className="text-gray-600 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
