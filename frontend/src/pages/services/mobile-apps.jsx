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
        <section className="relative pt-40 pb-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Mobile App Development
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Create engaging mobile applications that connect with your users across all devices and platforms.
              </p>
              <Button variant="primary">Start Building</Button>
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
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
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
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Launch Your Mobile App Today
              </h2>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Our expert team will guide you from concept to launch with cutting-edge mobile technology.
              </p>
              <Button variant="outline">Get in Touch</Button>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
