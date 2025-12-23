'use client';

import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';
import StripeGradientBackground from '@/components/backgrounds/StripeGradientBackground';

export default function Analytics() {
  return (
    <>
      <Header />

 <main className="relative pt-28 bg-white overflow-hidden">

        
        {/* bram.us / Stripe gradient background */}
        <StripeGradientBackground />

        {/* Content layer */}
        <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0277bd] to-[#ef6c00]">
              PanTech Analytics
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Advanced analytics platform for understanding customer behavior and optimizing conversions.
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <ul className="space-y-4">
                  <li><strong>Real-time Dashboards:</strong> Monitor your key metrics in real-time.</li>
                  <li><strong>Advanced Segmentation:</strong> Segment users by behavior and attributes.</li>
                  <li><strong>Conversion Tracking:</strong> Optimize conversions across channels.</li>
                  <li><strong>Predictive Analytics:</strong> Forecast churn and behavior.</li>
                  <li><strong>Custom Reports:</strong> Business-ready insights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Benefits</h2>
                <ul className="space-y-2">
                  <li>✓ Understand your customers better</li>
                  <li>✓ Optimize campaigns</li>
                  <li>✓ Increase conversions</li>
                  <li>✓ Data-driven decisions</li>
                  <li>✓ Reduce acquisition cost</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
                <p>
                  Ready to transform your analytics? Contact our team to schedule a demo.
                </p>
                <a
                  href="/contactus"
                  className="inline-block mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Request a Demo
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
