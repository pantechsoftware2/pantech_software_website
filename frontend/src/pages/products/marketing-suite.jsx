'use client';

import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function MarketingSuite() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 bg-white">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
    <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#00b0ff] to-[#ff3d00] font-bold mb-4 leading-none pb-2">
  PanTech Marketing Suite
</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive marketing automation and campaign management platform built for modern marketers.
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-lg">Email Marketing:</strong> Create, automate, and optimize email campaigns with advanced personalization.
                  </li>
                  <li>
                    <strong className="text-lg">Social Media Management:</strong> Manage all your social channels from one unified dashboard.
                  </li>
                  <li>
                    <strong className="text-lg">Landing Pages:</strong> Build high-converting landing pages without any coding required.
                  </li>
                  <li>
                    <strong className="text-lg">Lead Scoring:</strong> Automatically identify and prioritize your most valuable leads.
                  </li>
                  <li>
                    <strong className="text-lg">Marketing Automation:</strong> Automate repetitive tasks and nurture leads at scale.
                  </li>
                  <li>
                    <strong className="text-lg">A/B Testing:</strong> Test and optimize every element of your campaigns.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Why Choose Pantech Marketing Suite</h2>
                <ul className="space-y-2">
                  <li>✓ All-in-one marketing platform</li>
                  <li>✓ Easy to use, powerful features</li>
                  <li>✓ Real-time analytics and reporting</li>
                  <li>✓ Seamless integrations with popular tools</li>
                  <li>✓ Dedicated support and onboarding</li>
                  <li>✓ Enterprise-grade security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
                <p>
                  We offer flexible pricing plans to fit businesses of all sizes. Our plans start with essential features and scale up to enterprise solutions with advanced customization.
                </p>
                <p className="mt-4">
                  <strong>Starter, Professional, Business, and Enterprise plans available.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p>
                  Transform your marketing with the Pantech Marketing Suite. Start your free trial or schedule a personalized demo.
                </p>
                <a href="/contactus" className="inline-block mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                  Start Free Trial
                </a>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
