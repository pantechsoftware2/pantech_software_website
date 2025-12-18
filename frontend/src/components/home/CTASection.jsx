'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

export default function CTASection() {
  return (
    <section className="py-24 bg-white text-[#0d1224] relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-6">
          <TypewriterText
            text="Ready to Build Something Great?"
            delay={80}
            startDelay={300}
            showCursor={true}
          />
        </h2>

        <p className="text-xl text-[#0048e5] mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can help you achieve your software and marketing goals.
        </p>

        <a
          href="/contactus"
          className="
            group inline-flex items-center gap-3
            bg-[#0048e5] text-white
            px-5 py-3
            rounded-full
            font-semibold text-lg
            transition-all duration-300
            hover:shadow-2xl hover:scale-105
          "
        >
          Start Your Project

          <svg
            className="w-3 h-3 overflow-visible"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              fillRule="evenodd"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M0 5h7" />
              <path d="M1 1l4 4-4 4" />
            </g>
          </svg>
        </a>

      </motion.div>
    </section>
  );
}
