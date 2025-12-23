'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Button from '@/components/shared/Button';
import { CheckCircle, Smartphone, Zap, Shield } from 'lucide-react';

export default function MobileAppsPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Native and cross-platform solutions for iOS, Android, and web platforms.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with smooth animations and responsive interfaces.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Robust security measures to protect your users and sensitive data.',
    },
  ];

  const capabilities = [
    'Native iOS and Android development',
    'React Native and Flutter expertise',
    'Progressive Web Apps (PWAs)',
    'Real-time synchronization',
    'Offline-first architecture',
    'App Store and Google Play deployment',
  ];

  return (
    <>
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white min-h-screen"
      >
        {/* Hero Section */}
        <section className="relative pt-30 pb-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0d1224] mb-6">
                Mobile App Development
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Create engaging mobile applications that connect with your users across all devices and platforms.
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
            hover:shadow-xl hover:scale-110
          "
        >
          Start Building

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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Comprehensive Mobile Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:border-purple-400 transition-all"
                >
                  <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-6 lg:px-8 bg-[#0d1224]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">
              Our Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg border border-purple-200"
                >
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{capability}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
<section className="relative py-20 px-6 lg:px-8 bg-white text-white overflow-hidden">
  {/* BOTTOM WAVE DIVIDER - Smooth curve exiting the section to white background */}
  <div className="absolute inset-x-0 bottom-0 w-full">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-[120px]"
      style={{ transform: 'translateY(1px)' }} // Slight overlap to prevent any gap
    >
      <path
        d="M0,40 C240,100 480,0 720,60 C960,120 1200,80 1440,40 L1440,120 L0,120 Z"
        fill="#ffffff"
      />
    </svg>
  </div>

  <div className="relative max-w-4xl mx-auto text-center z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0bbfff] to-[#ff3d00] font-bold mb-4 leading-none pb-2">
        Launch Your Mobile App Today
      </h2>
      <p className="text-lg text-purple-100 mb-8 max-w-4xl mx-auto bg-clip-text text-transparent bg-[#0d1224] font-bold mb-4 leading-none pb-2">
        Our expert team will guide you from concept to launch with cutting-edge mobile technology.
      </p>
      <Button variant="outline" onClick={() => window.location.href = '/contactus'}>
        Get in Touch
      </Button>
    </motion.div>
  </div>
</section>
      </motion.main>

      <Footer />
    </>
  );
}
