'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const products = [
  {
    title: 'Campaign Intelligence',
    description:
      'Real-time marketing analytics with event-level tracking, attribution, and funnel insights.',
    tag: 'Analytics · Beta',
  },
  {
    title: 'Lead Signal Engine',
    description:
      'Identify high-intent leads using behavioral scoring and server-side enrichment.',
    tag: 'Growth · Beta',
  },
  {
    title: 'Automation APIs',
    description:
      'Developer-first APIs to connect CRMs, ads platforms, and internal tools.',
    tag: 'API · Private Beta',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/pantech-logo1.png" />
        <meta name="twitter:image" content="/pantech-logo1.png" />
      </Head>
      <Header />

      <main className="relative overflow-hidden">
        {/* ===== Background Gradient ===== */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-cyan-500/20 blur-3xl" />
        </div>

        {/* ===== Hero ===== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-[#0d1224]"
          >
            PanTech Labs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-gray-600"
          >
            Marketing-tech products built with the same engineering rigor we
            apply to enterprise software. Developer-first. Performance-driven.
          </motion.p>
        </section>

        {/* ===== Products Grid ===== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <span className="inline-block text-xs font-medium text-indigo-600">
                  {product.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 text-sm font-medium text-indigo-600 group-hover:underline">
                  Learn more →
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ===== Code-First Section ===== */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Built for engineers, trusted by marketers
              </h2>
              <p className="mt-4 text-gray-600 max-w-lg">
                Our products are designed with clean APIs, predictable data
                models, and infrastructure that scales from day one.
              </p>
            </div>

            {/* Code Block */}
            <motion.pre
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#0B0F19] p-6 text-sm text-gray-200 shadow-2xl overflow-x-auto"
            >
              <code>
{`import { trackEvent } from '@pantech/analytics';

await trackEvent({
  userId: 'u_42',
  event: 'signup_completed',
  properties: {
    plan: 'pro',
    source: 'campaign-intel'
  }
});`}
              </code>
            </motion.pre>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h3 className="text-3xl font-bold">
              Want early access?
            </h3>
            <p className="mt-4 text-gray-600">
              We’re onboarding design partners and beta users.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contactus"
              className="inline-flex mt-8 items-center justify-center rounded-full bg-[#0048e5] px-8 py-3 text-sm font-medium text-white shadow-lg"
            >
              Request Access
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
