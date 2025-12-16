'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './shared/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz26DsdveOIN-GqInGvbvJuBiNgH_czPCXa-r3w770f_t3mZqLPGOa4WlqSqbuQ2hik/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required for Google Apps Script web apps
      });

      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        address: '',
        service: '',
        message: '',
      });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-6"
      >
        <motion.div custom={0} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </motion.div>

        <motion.div custom={1} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-900 mb-2">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="000000000000000000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </motion.div>

        <motion.div custom={2} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </motion.div>

        <motion.div custom={3} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="address" className="block text-sm font-medium text-gray-900 mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="123 Main St, City, Country"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </motion.div>

        <motion.div custom={4} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
            Service
          </label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            placeholder="e.g. Web Development, SEO, etc."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
          />
        </motion.div>

        <motion.div custom={5} variants={fieldVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your needs..."
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition resize-none"
          />
        </motion.div>

        <motion.div
          custom={6}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            disabled={loading}
          >
            {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
          </Button>
        </motion.div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {error}
          </div>
        )}

        {submitted && !loading && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}