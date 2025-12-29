'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const caseStudies = [
  {
    id: 1,
    category: 'E-Commerce',
    title: 'Scalable Checkout System',
    problem: 'Legacy monolith causing 40% cart abandonment during peak sales.',
    solution: 'Migrated to microservices with real-time inventory sync.',
    result: 'Conversion rate up 28%, checkout time reduced from 12s to 2.3s.',
    codeSnippet: `const CheckoutAPI = async (cart) => {
  const { inventory, payment } = await Promise.all([
    checkInventory(cart),
    processPayment(cart)
  ]);
  return { success: true, orderId: 'ORD-' + Date.now() };
};`,
    date: 'Q4 2025',
    duration: '3 months'
  },
  {
    id: 2,
    category: 'FinTech',
    title: 'Real-time Fraud Detection',
    problem: 'Manual review delays blocking 15% of legitimate transactions.',
    solution: 'ML-powered anomaly detection with 99.7% accuracy.',
    result: 'False positives down 82%, approval rate up 12%.',
    codeSnippet: `const detectFraud = (txn) => {
  const score = mlModel.predict(txn.features);
  return score > 0.85 ? 'BLOCK' : 'APPROVE';
};`,
    date: 'Q3 2025',
    duration: '2 months'
  },
  {
    id: 3,
    category: 'SaaS',
    title: 'Marketing Automation Engine',
    problem: 'Campaign delivery lagged 48hrs behind scheduling.',
    solution: 'Event-driven architecture with Redis queueing.',
    result: 'Delivery time: 48hrs → 3.2s. 99.99% uptime.',
    codeSnippet: `const campaignQueue = new RedisQueue();
await campaignQueue.enqueue('sendEmail', {
  templateId: 42,
  recipients: userIds
});`,
    date: 'Q2 2025',
    duration: '4 months'
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/pantech-logo1.png" />
        <meta name="twitter:image" content="/pantech-logo1.png" />
      </Head>
      <Header />

      <main className="min-h-screen pt-20 overflow-hidden bg-white">

        {/* ================= HERO SECTION ================= */}
        <section className="relative min-h-screen overflow-hidden bg-white -mt-20">

          {/* Background Visual (Planet Replacement) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full max-w-5xl mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-[#00d4ff]/10 via-transparent to-purple-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="w-full max-w-7xl mx-auto relative h-full flex items-center lg:items-start lg:pt-20">

                {/* Left Content */}
                <div className="flex-1 lg:w-1/2 max-w-lg">
                  <section className="Copy text-[#0d1224]">
                    <header className="Copy__header mb-8">
                      <h2 className="Copy__caption text-lg font-semibold text-[#00d4ff] uppercase tracking-wide mb-4">
                        Global Impact
                      </h2>
   <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-[#0d1224] via-slate-700 to-slate-900 bg-clip-text text-transparent">
  Engineering Excellence
</h1>

                    </header>

                    <div className="Copy__body text-xl sm:text-2xl text-slate-600 max-w-lg leading-relaxed">
                      Transformative solutions for ambitious companies.
                      From legacy systems to cutting-edge architectures.
                    </div>
                  </section>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 lg:left-12 xl:left-16 flex flex-wrap sm:flex-nowrap gap-6 lg:gap-8 max-w-2xl">

                  {[
                    ['50+', 'Projects delivered with 99.99% uptime'],
                    ['3.2s', 'Average performance improvement'],
                    ['82%', 'Average efficiency gains'],
                    ['100%', 'Client satisfaction']
                  ].map(([value, label]) => (
                    <section key={value} className="Copy flex-1 text-left">
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d1224] mb-1">
                        {value}
                      </h1>
                      <p className="text-slate-500 text-sm sm:text-base leading-snug">
                        {label}
                      </p>
                    </section>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* Guide Lines */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-20">
            <div className="absolute right-0 top-1/4 h-1/2 w-1 bg-gradient-to-b from-[#00d4ff] to-transparent" />
            <div className="absolute right-0 top-1/2 h-1/4 w-1 bg-gradient-to-b from-purple-400 to-transparent" />
            <div className="absolute right-0 top-3/4 h-1/3 w-1 bg-gradient-to-b from-indigo-400 to-transparent" />
          </div>
        </section>

        {/* ================= CASE STUDIES ================= */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-white">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#0d1224] border border-slate-500 rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >

                <span className="inline-block px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-[#00d4ff]/10 to-purple-500/10 text-white border border-[#00d4ff]/20 mb-6">
                  {study.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff]">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-8">
                  <p className="text-slate-300 group-hover:text-black"><b>Problem:</b> {study.problem}</p>
                  <p className="text-slate-300 group-hover:text-black"><b>Solution:</b> {study.solution}</p>
                  <p className="text-slate-300 group-hover:text-black font-semibold"><b>Result:</b> {study.result}</p>
                </div>

                <pre className="bg-slate-50 rounded-2xl p-6 text-xs overflow-x-auto mb-6">
                  <code className="text-[#0d1224]">{study.codeSnippet}</code>
                </pre>

                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>{study.date} • {study.duration}</span>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00d4ff] to-purple-600 text-white font-semibold hover:scale-105 transition">
                    View Case →
                  </button>
                </div>

              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
