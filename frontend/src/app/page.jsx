'use client';

import HeroSection from '@/components/sections/HeroSection';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import Button from '@/components/shared/Button';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver custom engineering solutions and cutting-edge marketing technology
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
                className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg hover:border-black transition-all duration-300 hover:shadow-2xl"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-black font-semibold cursor-pointer"
                >
                  Learn more →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Built for Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every line of code is optimized for speed, conversion, and user experience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {[
                { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally' },
                { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO' },
                { title: 'Schema Markup', desc: 'Rich snippets in search results' },
                { title: 'Edge Network', desc: 'CDN-powered delivery worldwide' },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black text-white p-8 rounded-lg"
            >
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{`// Optimized for conversion
export default function Page() {
  return (
    <Component
      performance="optimized"
      conversion="focused"
      speed="blazing"
    />
  );
}`}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your software and marketing goals.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            Start Your Project
          </Button>
        </motion.div>
      </section>
    </>
  );
}
