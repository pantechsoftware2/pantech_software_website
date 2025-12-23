'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Updated SERVICES
const SERVICES = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built from scratch to meet your unique business needs and drive growth.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'custom-software', // added slug for routing
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native iOS and Android apps built to scale.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    slug: 'mobile-apps',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Optimize your infrastructure for performance and reliability.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    slug: 'devops',
  },
  {
    id: 4,
    title: 'Web Application Development',
    description: 'Automate deployments, improve release cycles, and ensure reliable delivery with modern DevOps practices.',
    imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?w=800&h=400&fit=crop',
    slug: 'web-application',
  },
  {
    id: 5,
    title: 'Enterprise System Integration',
    description: 'Seamlessly connect disparate systems, APIs, and third-party services for unified data flow and efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    slug: 'enterprise-system',
  },
  {
    id: 6,
    title: 'AI Powered Solutions',
    description: 'Integrate intelligent automation, predictive analytics, and custom ML models into your business processes.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    slug: 'ai-solutions',
  },
];

export default function ServicesSection({ containerVariants, itemVariants }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom engineering solutions meets cutting-edge marketing technology
          </p>
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
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Top half: Photo */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Bottom half: Content */}
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Conditional "Learn more" link only for first 3 services */}
                {service.slug ? (
                  <Link href={`/services/${service.slug}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-gray-900 font-semibold cursor-pointer group-hover:text-indigo-600 transition-colors"
                    >
                      Learn more →
                    </motion.div>
                  </Link>
                ) : (
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-gray-900 font-semibold cursor-pointer opacity-50"
                  >
                    Learn more →
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}