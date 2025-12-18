//   // 'use client';

//   // import React, { useState, useEffect, useRef } from 'react';
//   // import { motion } from 'framer-motion';
//   // import Button from '@/components/shared/Button';
//   // import { SERVICES } from '@/lib/constants';
//   'use client';

//   import React from 'react';
//   import { motion } from 'framer-motion';
//   import Button from '@/components/shared/Button';
//   import { SERVICES } from '@/lib/constants';

//   import StripeGradientOrb from '@/components/home/StripeGradientOrb';
//   import TypewriterText from '@/components/home/TypewriterText';
//   import ServicesSection from '@/components/home/ServicesSection';
//   import PerformanceSection from '@/components/home/PerformanceSection';
//   import CTASection from '@/components/home/CTASection';

//   export default function HeroSection() {
//     const containerVariants = {
//       hidden: { opacity: 0 },
//       visible: {
//         opacity: 1,
//         transition: {
//           staggerChildren: 0.15,
//           delayChildren: 0.2,
//         },
//       },
//     };

//     const itemVariants = {
//       hidden: { opacity: 0, y: 12 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: 'easeOut' },
//       },
//     };

//     return (
//       <>
//         <section
//           role="region"
//           aria-label="Hero"
//           className="relative bg-white pt-28 pb-16 overflow-hidden min-h-screen flex items-center"
//         >
//           <div className="absolute inset-0 z-0">
//             <StripeGradientOrb />
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
//           >
//             <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 bg-black/5 border border-black/10 rounded-full backdrop-blur-sm">
//               <span className="text-sm font-medium text-gray-700">Engineering Your Growth</span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8"
//             >
//               <span className="bg-gradient-to-r from-cyan-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent">
//                 <TypewriterText text="Custom Software Meets " delay={60} startDelay={200} showCursor={false} />
//               </span>
//               <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 <TypewriterText text="Marketing Tech" delay={60} startDelay={1800} showCursor={true} />
//               </span>
//             </motion.h1>

//             <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
//               We bridge the gap between enterprise-grade software engineering and modern marketing technology. Fast, reliable, conversion-focused.
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
//             >
//               <button
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-gray-900 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-xl"
//               >
//                 Start a Project
//               </button>

//               <a
//                 href="/book-demo"
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
//               >
//                 Explore Our Work
//               </a>
//             </motion.div>

//             <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <span className="ml-auto text-xs text-gray-500 font-mono">app.tsx</span>
//                 </div>
//                 <pre className="text-sm font-mono text-left overflow-x-auto">
//                   <code className="text-gray-300">
// {"export default function Page() {\n  return (\n    <Component\n      performance=\"optimized\"\n      conversion=\"focused\"\n      speed=\"blazing\"\n    />\n  );\n}" }
//                   </code>
//                 </pre>
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <p className="text-gray-500 text-sm mb-6">Trusted by leading companies</p>
//               <div className="flex flex-wrap justify-center gap-8 opacity-60">
//                 {['Company A', 'Company B', 'Company C', 'Company D'].map((client) => (
//                   <div key={client} className="h-12 bg-gray-100 rounded-lg px-8 flex items-center justify-center border border-gray-200">
//                     <span className="text-sm font-semibold text-gray-700">{client}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//           >
//             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </motion.div>
//         </section>

//         <ServicesSection containerVariants={containerVariants} itemVariants={itemVariants} />

//         <PerformanceSection containerVariants={containerVariants} itemVariants={itemVariants} />

//         <CTASection />
//       </>
//     );
//   }

//     return (
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ filter: 'blur(80px)' }}
//       />
//     );
//   }

//   // Custom Typewriter Component
//   function TypewriterText({ text, delay = 80, startDelay = 0, showCursor = true }) {
//     const [displayedText, setDisplayedText] = useState('');
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//       if (startDelay > 0) {
//         const timer = setTimeout(() => setIndex(1), startDelay);
//         return () => clearTimeout(timer);
//       } else {
//         setIndex(1);
//       }
//     }, [startDelay]);

//     useEffect(() => {
//       if (index > 0 && index <= text.length) {
//         const timeout = setTimeout(() => {
//           setDisplayedText(text.slice(0, index));
//           setIndex(index + 1);
//         }, delay);
//         return () => clearTimeout(timeout);
//       }
//     }, [index, text, delay]);

//     return (
//       <span>
//         {displayedText}
//         {showCursor && index <= text.length && <span className="animate-pulse">|</span>}
//       </span>
//     );
//   }

//   export default function HeroSection() {
//     const containerVariants = {
//       hidden: { opacity: 0 },
//       visible: {
//         opacity: 1,
//         transition: {
//           staggerChildren: 0.15,
//           delayChildren: 0.2,
//         },
//       },
//     };

//     const itemVariants = {
//       hidden: { opacity: 0, y: 12 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: 'easeOut' },
//       },
//     };

//     return (
//       <>
//         {/* Hero Section with Stripe Gradient */}
//         <section
//           role="region"
//           aria-label="Hero"
//           className="relative bg-white pt-28 pb-16 overflow-hidden min-h-screen flex items-center"
//         >
//           {/* Stripe Left-Corner Gradient Orb Background */}
//           <div className="absolute inset-0 z-0">
//             <StripeGradientOrb />
//           </div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
//           >
//             <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 bg-black/5 border border-black/10 rounded-full backdrop-blur-sm">
//               <span className="text-sm font-medium text-gray-700">Engineering Your Growth</span>
//             </motion.div>

//             {/* Hero Headline - Premium Typography */}
//             <motion.h1
//               variants={itemVariants}
//               className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8"
//             >
//               <span className="bg-gradient-to-r from-cyan-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent">
//                 <TypewriterText text="Custom Software Meets " delay={60} startDelay={200} showCursor={false} />
//               </span>
//               <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 <TypewriterText text="Marketing Tech" delay={60} startDelay={1800} showCursor={true} />
//               </span>
//             </motion.h1>

//             {/* Value Proposition */}
//             <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
//               We bridge the gap between enterprise-grade software engineering and modern marketing technology. Fast, reliable, conversion-focused.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
//             >
//               <button
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-gray-900 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-xl"
//               >
//                 Start a Project
//               </button>

//               <a
//                 href="/book-demo"
//                 className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
//               >
//                 Explore Our Work
//               </a>
//             </motion.div>

//             {/* Code Snippet - "Code-First Vibe" */}
//             <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
//               <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                   <span className="ml-auto text-xs text-gray-500 font-mono">app.tsx</span>
//                 </div>
//                 <pre className="text-sm font-mono text-left overflow-x-auto">
//                   <code className="text-gray-300">
//                     <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Page</span>() {'{\n'}
//                     {'  '}<span className="text-purple-400">return</span> {'(\n'}
//                     {'    '}<span className="text-gray-500">{'<'}</span><span className="text-green-400">Component</span>{'\n'}
//                     {'      '}<span className="text-blue-300">performance</span>=<span className="text-orange-400">"optimized"</span>{'\n'}
//                     {'      '}<span className="text-blue-300">conversion</span>=<span className="text-orange-400">"focused"</span>{'\n'}
//                     {'      '}<span className="text-blue-300">speed</span>=<span className="text-orange-400">"blazing"</span>{'\n'}
//                     {'    '}<span className="text-gray-500">{'/>'}</span>{'\n'}
//                     {'  '}){'\n'}
//                     {'}'}
//                   </code>
//                 </pre>
//               </div>
//             </motion.div>

//             {/* Social Proof */}
//             <motion.div variants={itemVariants}>
//               <p className="text-gray-500 text-sm mb-6">Trusted by leading companies</p>
//               <div className="flex flex-wrap justify-center gap-8 opacity-60">
//                 {['Company A', 'Company B', 'Company C', 'Company D'].map((client) => (
//                   <div key={client} className="h-12 bg-gray-100 rounded-lg px-8 flex items-center justify-center border border-gray-200">
//                     <span className="text-sm font-semibold text-gray-700">{client}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
//           >
//             <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </motion.div>
//         </section>

//         {/* Services Section - "The Dual Offering" */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-20"
//             >
//               <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">Our Services</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Custom engineering solutions meets cutting-edge marketing technology
//               </p>
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             >
//               {SERVICES.map((service) => (
//                 <motion.div
//                   key={service.id}
//                   variants={itemVariants}
//                   className="group relative p-10 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
//                 >
//                   <div className="text-6xl mb-6">{service.icon}</div>
//                   <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
//                   <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//                   <motion.div 
//                     whileHover={{ x: 5 }} 
//                     className="inline-flex items-center text-gray-900 font-semibold cursor-pointer group-hover:text-indigo-600 transition-colors"
//                   >
//                     Learn more →
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Performance Section - With Isometric Style */}
//         <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//           {/* Subtle Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0" style={{
//               backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
//               backgroundSize: '40px 40px'
//             }}></div>
//           </div>

//           <div className="max-w-7xl mx-auto px-6 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-center mb-20"
//             >
//               <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">Built for Performance</h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Every line of code optimized for speed, conversion, and user experience
//               </p>
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
//             >
//               {/* Features List */}
//               <motion.div variants={itemVariants} className="space-y-8">
//                 {[
//                   { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally', icon: '⚡' },
//                   { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO', icon: '🤖' },
//                   { title: 'Schema Markup', desc: 'Rich snippets in search results', icon: '⭐' },
//                   { title: 'Edge Network', desc: 'CDN-powered delivery worldwide', icon: '🌍' },
//                 ].map((feature, idx) => (
//                   <motion.div 
//                     key={idx} 
//                     className="flex gap-6 items-start"
//                     whileHover={{ x: 10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="text-4xl">{feature.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h4>
//                       <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Code Block */}
//               <motion.div variants={itemVariants}>
//                 <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
//                   <div className="flex items-center gap-2 mb-6">
//                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                     <span className="ml-auto text-xs text-gray-500 font-mono">performance.ts</span>
//                   </div>
//                   <pre className="font-mono text-sm overflow-x-auto">
//                     <code className="text-gray-300">
//                       <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Page</span>() {'{\n'}
//                       {'  '}<span className="text-purple-400">return</span> {'(\n'}
//                       {'    '}<span className="text-gray-500">{'<'}</span><span className="text-green-400">Component</span>{'\n'}
//                       {'      '}<span className="text-blue-300">performance</span>=<span className="text-orange-400">"optimized"</span>{'\n'}
//                       {'      '}<span className="text-blue-300">conversion</span>=<span className="text-orange-400">"focused"</span>{'\n'}
//                       {'      '}<span className="text-blue-300">speed</span>=<span className="text-orange-400">"blazing"</span>{'\n'}
//                       {'    '}<span className="text-gray-500">{'/>'}</span>{'\n'}
//                       {'  '}){'\n'}
//                       {'}'}
//                     </code>
//                   </pre>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>
        

//  {/* CTA Section - White Theme (UNCHANGED BG) */}
// <section className="py-24 bg-white text-[#0d1224] relative overflow-hidden">
//   <div className="absolute inset-0 bg-white"></div>

//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//     className="max-w-4xl mx-auto px-6 text-center relative z-10"
//   >
//     {/* Custom Typewriter Heading */}
//     <h2 className="text-5xl sm:text-6xl font-bold mb-6">
//       <TypewriterText
//         text="Ready to Build Something Great?"
//         delay={80}
//         startDelay={300}
//         showCursor={true}
//       />
//     </h2>

//     <p className="text-xl text-[#0048e5] mb-10 max-w-2xl mx-auto leading-relaxed">
//       Let's discuss how we can help you achieve your software and marketing goals.
//     </p>
// <a
//   href="/contactus"
//   className="
//     group inline-flex items-center gap-3
//     bg-[#0048e5] text-white
//     px-5 py-3
//     rounded-full
//     font-semibold text-lg
//     transition-all duration-300
//     hover:shadow-2xl hover:scale-105
//   "
// >
//   Start Your Project

//   <svg
//     className="w-3 h-3 overflow-visible"
//     viewBox="0 0 10 10"
//     aria-hidden="true"
//   >
//     <g
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       fillRule="evenodd"
//       className="transition-transform duration-300 group-hover:translate-x-1"
//     >
//       <path d="M0 5h7" />
//       <path d="M1 1l4 4-4 4" />
//     </g>
//   </svg>
// </a>

//   </motion.div>
// </section>

//       </>
//     );
//   }