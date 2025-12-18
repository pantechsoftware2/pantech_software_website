'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PerformanceSection({ containerVariants, itemVariants }) {
  const services = [
    { name: 'Custom Software', top: '10%', left: '50%', delay: 0.1 },
    { name: 'Mobile Apps', top: '28%', left: '20%', delay: 0.2 },
    { name: 'Cloud & DevOps', top: '28%', left: '80%', delay: 0.3 },
    { name: 'Marketing Tech', top: '65%', left: '15%', delay: 0.4 },
    { name: 'API Integrations', top: '65%', left: '85%', delay: 0.5 },
    { name: 'Enterprise Solutions', top: '45%', left: '50%', delay: 0.6 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
            Built for Pantech SaaS Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging custom enterprise engineering and powerful marketing-tech products
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE — UNCHANGED */}
          <motion.div variants={itemVariants} className="space-y-8 order-2 lg:order-1">
            {[
              { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally', icon: '⚡' },
              { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO', icon: '🤖' },
              { title: 'Schema Markup', desc: 'Rich snippets in search results', icon: '⭐' },
              { title: 'Edge Network', desc: 'CDN-powered delivery worldwide', icon: '🌍' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 items-start bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ x: 16, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="text-5xl">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE — STRIPE STYLE (FIXED) */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            {/* shifted slightly left */}
            <div className="relative w-full max-w-2xl h-[600px] -translate-x-6">
              {/* SVG flow lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="stripeFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>

                <path d="M300 90 Q 150 200 120 300" stroke="url(#stripeFlow)" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M300 90 Q 450 200 480 300" stroke="url(#stripeFlow)" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M140 320 Q 300 400 460 320" stroke="url(#stripeFlow)" strokeWidth="2" fill="none" opacity="0.45" />
                <path d="M300 220 Q 300 300 300 380" stroke="url(#stripeFlow)" strokeWidth="2" fill="none" opacity="0.45" />
              </svg>

              {/* Capability nodes */}
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: service.delay,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 260,
                  }}
                  whileHover={{ scale: 1.12, y: -8 }}
                  className="absolute rounded-2xl border border-white/30 backdrop-blur-xl"
                  style={{
                    top: service.top,
                    left: service.left,
                    transform: 'translate(-50%, -50%)',
                    width: 128,
                    height: 128,
                    background:
                      'linear-gradient(135deg, #06b6d4 0%, #67e8f9 100%)',
                    boxShadow: '0 18px 55px rgba(6,182,212,0.35)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center px-3 text-center">
                    <span className="font-medium text-xs tracking-wide uppercase text-gray-900">
                      {service.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
