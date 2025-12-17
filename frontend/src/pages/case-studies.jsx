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
      <Header />
      <main className="min-h-screen pt-28 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Detailed breakdowns: Problem → Solution → Code → Results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent -z-10 blur-xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-100/50 rounded-3xl p-8 hover:bg-white/100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 border border-purple-200 mb-6">
                    {study.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1">Problem</h4>
                        <p className="text-slate-600 leading-relaxed">{study.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1">Solution</h4>
                        <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1">Result</h4>
                        <p className="text-slate-600 leading-relaxed font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-8">
                    <div className="absolute -top-4 -left-4 -right-4 h-24 bg-gradient-to-b from-slate-900/20 to-transparent rounded-2xl" />
                    <pre className="bg-slate-900/5 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 text-xs font-mono overflow-x-auto">
                      <code className="text-slate-700 block">{study.codeSnippet}</code>
                    </pre>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                    <div className="text-sm text-slate-500">
                      {study.date} • {study.duration}
                    </div>
                    <button className="group/btn flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95">
                      <span>View Case</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
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
