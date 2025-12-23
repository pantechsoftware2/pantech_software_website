'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './shared/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const formRef = useRef(null);
  const fieldsRef = useRef([]);

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

  /* ---------------- GSAP (NO COLOR, CLEAN) ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        fieldsRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbz26DsdveOIN-GqInGvbvJuBiNgH_czPCXa-r3w770f_t3mZqLPGOa4WlqSqbuQ2hik/exec',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
          mode: 'no-cors',
        }
      );

      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        address: '',
        service: '',
        message: '',
      });
    } catch {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div ref={formRef} className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-6"
      >
        {[
          { label: 'Name', name: 'name', type: 'text', placeholder: 'John Doe' },
    { 
      label: 'Mobile', 
      name: 'mobile', 
      type: 'tel', 
      placeholder: '+1234567890 (include country code)',
      maxlength: '16',
      pattern: '\\+?[0-9]{0,15}',
      title: 'Enter in international format, e.g., +1234567890',
      inputMode: 'tel'
    },
          { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com' },
          { label: 'Address', name: 'address', type: 'text', placeholder: '123 Main St' },
          { label: 'Service', name: 'service', type: 'text', placeholder: 'Web Development' },
        ].map((field, i) => (
          <div
            key={field.name}
            ref={(el) => (fieldsRef.current[i] = el)}
          >
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              placeholder={field.placeholder}
              className="
                w-full px-4 py-3
                border border-gray-300 rounded-lg text-sm
                focus:outline-none focus:ring-0
                transition-all duration-200
                hover:shadow-sm
                focus:shadow-md focus:scale-[1.01]
              "
            />
          </div>
        ))}

        {/* MESSAGE */}
        <div ref={(el) => (fieldsRef.current[5] = el)}>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your needs..."
            className="
              w-full px-4 py-3
              border border-gray-300 rounded-lg text-sm
              focus:outline-none focus:ring-0
              transition-all duration-200
              hover:shadow-sm
              focus:shadow-md focus:scale-[1.01]
              resize-none
            "
          />
        </div>

        {/* SUBMIT */}
        <div
          ref={(el) => (fieldsRef.current[6] = el)}
          className="flex justify-end"
        >
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={loading}
            className="
              w-full sm:w-auto
              transition-transform duration-200
              bg-indigo-700
              hover:scale-[1.03]
              active:scale-[0.97]
            "
          >
            {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {error}
          </div>
        )}

        {submitted && !loading && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}
      </form>
    </div>
  );
}
