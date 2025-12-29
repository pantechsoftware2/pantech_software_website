import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  PhoneIcon,
  CloudIcon,
  GlobeAltIcon,
  BuildingLibraryIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Custom Software Development',
    badge: 'Enterprise Engineering',
    description:
      'High‑throughput, mission‑critical systems engineered for growth. From domain‑driven monoliths to distributed microservices, we design architectures that scale with your roadmap.',
    codeLabel: 'Event‑driven microservice pipeline',
    codeSnippet: `// Real-time data sync across 50+ microservices
const syncPipeline = async (events) => {
  return Promise.all(
    events.map(async (event) => {
      await kafka.produce('user-events', event);
      await elastic.index(event);
      return event.id;
    })
  );
};`,
  },
  {
    icon: PhoneIcon,
    title: 'Mobile App Development',
    badge: 'Product Experience',
    description:
      'Native-feel iOS & Android apps using React Native. 60fps interactions, offline-first data layers, and analytics hooks baked in from day one.',
    codeLabel: 'Cross-platform push workflow',
    codeSnippet: `// Cross-platform push notifications
PushNotification.localNotification({
  title: 'Order Shipped!',
  message: 'Your package is on its way.',
  bigText: trackingData.summary,
  playSound: true,
});`,
  },
  {
    icon: CloudIcon,
    title: 'Cloud Infrastructure & DevOps',
    badge: 'Platform & Reliability',
    description:
      'Cloud-native infrastructure on AWS, GCP, or Azure. Kubernetes, GitOps, and fully automated CI/CD so you can ship faster with zero-downtime releases.',
    codeLabel: 'Terraform ECS cluster blueprint',
    codeSnippet: `resource "aws_ecs_cluster" "PanTech" {
  name = "PanTech-prod-cluster"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}`,
  },
  {
    icon: GlobeAltIcon,
    title: 'Web Application Development',
    badge: 'Digital Experience',
    description:
      'Modern, responsive web applications built with cutting-edge frameworks. Optimized for performance, SEO, and conversion with real-time user engagement features.',
    codeLabel: 'Next.js server component pattern',
    codeSnippet: `// Server component with real-time updates
export default async function Dashboard() {
  const data = await fetchUserAnalytics();
  return (
    <div className="grid gap-4">
      <AnalyticsCard data={data} />
      <PerformanceChart metrics={data.metrics} />
    </div>
  );
}`,
  },
  {
    icon: BuildingLibraryIcon,
    title: 'Enterprise System Integration',
    badge: 'Legacy Modernization',
    description:
      'Seamlessly integrate legacy systems with modern platforms. API gateways, data synchronization, and unified workflows that reduce complexity and operational overhead.',
    codeLabel: 'Enterprise API gateway routing',
    codeSnippet: `// Unified API gateway with service mesh
router.post('/api/data', async (req, res) => {
  const legacy = await legacyService.query(req.body);
  const modern = await modernDB.transform(legacy);
  cache.set(req.id, modern, '1h');
  res.json(modern);
});`,
  },
  {
    icon: SparklesIcon,
    title: 'AI Powered Solutions',
    badge: 'Intelligent Automation',
    description:
      'Machine learning models and AI systems that solve real business problems. From predictive analytics to intelligent automation, we deliver measurable ROI through data-driven innovation.',
    codeLabel: 'ML model training pipeline',
    codeSnippet: `// TensorFlow model pipeline
const model = tf.sequential({
  layers: [
    tf.layers.dense({units: 128, activation: 'relu'}),
    tf.layers.dropout({rate: 0.2}),
    tf.layers.dense({units: 1, activation: 'sigmoid'})
  ]
});`,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/pantech-logo1.png" />
        <meta name="twitter:image" content="/pantech-logo1.png" />
      </Head>
      <Header />
      <main className="min-h-[calc(100vh-80px)] pt-0 bg-slate-750 antialiased">
        {/* ✅ WHITE HERO - Clean white background */}
        <section
          aria-labelledby="services-hero-heading"
          className="relative bg-white overflow-hidden border-b border-gray-200/50"
        >
          {/* Subtle glows on white */}
          <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_top,_black,_transparent_70%)]">
            <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-r from-pink-400/20 via-transparent to-purple-400/20 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-gradient-to-t from-indigo-400/15 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center"
            >
              {/* ✅ Tag - Dark text on white bg */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900/5 backdrop-blur-xl border border-gray-200/50 px-5 py-2 text-sm font-medium tracking-wider text-gray-800 shadow-lg shadow-black/5"
              >
                Services
                <div className="h-px w-4 bg-gradient-to-r from-emerald-500 to-transparent" />
                Engineering your growth
              </motion.div>

              {/* ✅ Hero heading - Dark gradient on white */}
              <h1
                id="services-hero-heading"
                className="mt-8 lg:mt-12 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="inline bg-gradient-to-r from-cyan-900 via-indigo-800 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm">
                  Custom engineering for  
                </span>
                <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                  products that scale and convert
                </span>
              </h1>

              {/* ✅ Hero text - Dark gray on white */}
              <p className="mt-8 text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                PanTech builds at the intersection of enterprise engineering and marketing technology. 
                Reliable platforms. Measurable revenue impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ✅ DARK SERVICES SECTION - High contrast */}
        <section
          aria-labelledby="services-grid-heading"
          className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 bg-slate-750"
        >
          <div className="absolute inset-x-0 top-0 -mt-px h-px bg-white" />

          <div className="relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              {/* ✅ Section heading - Pure white */}
              <h2
                id="services-grid-heading"
                className="text-3xl lg:text-4xl font-bold text-[#0d1224] tracking-tight mb-4"
              >
                Consulting services
              </h2>
              {/* ✅ Section intro - Light gray */}
              <p className="text-lg text-cyan-700 max-w-xl mx-auto leading-relaxed">
                From greenfield platforms to legacy modernization. We partner with product teams to ship 
                software that drives revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/15 bg-[#0a2540] backdrop-blur-2xl p-7 lg:p-9 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_35px_100px_-20px_rgba(236,72,153,0.4)] hover:border-white/30 transition-all duration-500"
                >
                  {/* Vibrant gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative h-full flex flex-col">
                    {/* Icon + Badge - Bright accents */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/30 shadow-xl backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-pink-500/40 transition-all duration-400"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <service.icon className="w-8 h-8 text-pink-300 drop-shadow-lg" />
                      </motion.div>
                      
                      <span className="rounded-full bg-white/10 border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-sm shadow-lg">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title - Pure white */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Description - Crisp light gray */}
                    <p className="text-slate-200/90 mb-8 flex-1 leading-relaxed text-sm lg:text-base">
                      {service.description}
                    </p>

                    {/* ✅ WHITE CODE BLOCK - High contrast */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4 text-xs font-mono tracking-wider text-slate-300 uppercase">
                        <span className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg" />
                          {service.codeLabel}
                        </span>
                        <span className="text-slate-400 bg-white/10 px-2 py-1 rounded-full border border-white/30 backdrop-blur-sm">
                          PanTech.{index + 1}.ts
                        </span>
                      </div>

                      <div className="relative bg-white/90 border border-white/50 rounded-2xl p-6 shadow-2xl shadow-black/20 backdrop-blur-xl overflow-hidden group-hover:border-white group-hover:shadow-white/20">
                        {/* Code dots - Vibrant */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                          <div className="h-3 w-3 rounded-full bg-red-500/90 shadow-lg" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500/90 shadow-lg" />
                          <div className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-lg" />
                        </div>

                        <pre className="text-xs lg:text-sm font-mono text-gray-900 leading-relaxed overflow-x-auto pt-3 pl-10 scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-gray-100/50">
                          <code>{service.codeSnippet}</code>
                        </pre>

                        {/* Subtle bottom glow */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/100 via-white/60 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* CTA Button - Premium glass */}
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-base font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/60 px-6 py-3 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      Learn more
                      <motion.div 
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                        className="w-5 h-5"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
