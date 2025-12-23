'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Button from '@/components/shared/Button';
import { CheckCircle, Network, Zap, Lock } from 'lucide-react';

export default function EnterpriseSystemPage() {
  const features = [
    {
      icon: Network,
      title: 'System Integration',
      description: 'Seamlessly connect your existing enterprise systems and applications for unified operations.',
    },
    {
      icon: Zap,
      title: 'Enterprise Performance',
      description: 'High-availability solutions built to handle mission-critical workloads at enterprise scale.',
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Industry-leading security standards and regulatory compliance for peace of mind.',
    },
  ];

  const benefits = [
    'Unified data across multiple systems',
    'Reduced operational complexity',
    'Enhanced team collaboration',
    'Automated business processes',
    'Enterprise-grade security and support',
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
        <section className="relative pt-30 pb-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Enterprise System Integration
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Streamline your enterprise operations by integrating complex systems into a cohesive, efficient platform that drives organizational success.
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
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Why Choose Our Enterprise Solutions?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 transition-all"
                >
                  <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-8 bg-[#0d1224]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-white">
              What You Get
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-white text-[#0d1224]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg text-[#0048e5] mb-8 max-w-2xl mx-auto">
                Let's discuss your integration challenges and build a solution that scales with your organization.
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
                Schedule a Consultation

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
      </motion.main>

      <Footer />
    </>
  );
}
