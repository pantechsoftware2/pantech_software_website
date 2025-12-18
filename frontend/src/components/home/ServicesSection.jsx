'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

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
              className="group relative p-10 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <motion.div 
                whileHover={{ x: 5 }} 
                className="inline-flex items-center text-gray-900 font-semibold cursor-pointer group-hover:text-indigo-600 transition-colors"
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
