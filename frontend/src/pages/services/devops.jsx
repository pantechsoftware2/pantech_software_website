'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Button from '@/components/shared/Button';
import { CheckCircle, Cloud, Zap, Lock } from 'lucide-react';

export default function DevOpsPage() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Deploy and manage your applications on AWS, Azure, or Google Cloud with expert guidance.',
    },
    {
      icon: Zap,
      title: 'CI/CD Automation',
      description: 'Streamlined deployment pipelines for faster, more reliable releases.',
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-level security practices and compliance with industry standards.',
    },
  ];

  const services = [
    'Kubernetes orchestration and management',
    'Containerization with Docker',
    'Infrastructure as Code (IaC)',
    'Monitoring and logging solutions',
    'Disaster recovery and backup',
    'Performance optimization',
    'Cost optimization strategies',
    'Security hardening and audits',
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
        <section className="relative pt-40 pb-20 px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                DevOps & Cloud Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mb-8">
                Modernize your infrastructure with scalable, secure, and automated cloud solutions.
              </p>
              <Button variant="primary">Transform Your Infrastructure</Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
              Professional DevOps Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 hover:border-orange-400 transition-all"
                >
                  <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
              Complete DevOps Suite
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-lg border border-orange-200"
                >
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Modernize Your Operations
              </h2>
              <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                Let our DevOps experts help you build a robust, scalable cloud infrastructure that supports your business growth.
              </p>
              <Button variant="outline">Request a Consultation</Button>
            </motion.div>
          </div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
