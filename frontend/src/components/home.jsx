  // 'use client';

  // import React, { useState, useEffect, useRef } from 'react';
  // import { motion } from 'framer-motion';
  // import Button from '@/components/shared/Button';
  // import { SERVICES } from '@/lib/constants';

  // // Stripe's signature left-corner gradient orb animation
  // function StripeGradientOrb() {
  //   const canvasRef = useRef(null);
  //   const animationRef = useRef(null);

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;

  //     const ctx = canvas.getContext('2d');
  //     let w = canvas.width = window.innerWidth;
  //     let h = canvas.height = window.innerHeight;

  //     let time = 0;

  //     function animate() {
  //       time += 0.003;

  //       // Clear canvas
  //       ctx.clearRect(0, 0, w, h);

  //       // Create main gradient orb positioned in top-left
  //       const centerX = -w * 0.15 + Math.sin(time * 0.5) * 100;
  //       const centerY = h * 0.2 + Math.cos(time * 0.3) * 80;

  //       // Large radial gradient (main orb)
  //       const mainGradient = ctx.createRadialGradient(
  //         centerX, centerY, 0,
  //         centerX, centerY, w * 0.9
  //       );

  //       mainGradient.addColorStop(0, 'rgba(99, 220, 241, 0.4)');    // Indigo
  //       mainGradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.25)'); // Purple
  //       mainGradient.addColorStop(0.6, 'rgba(150, 40, 253, 0.15)'); // Violet
  //       mainGradient.addColorStop(1, 'rgba(213, 253, 66, 0)');     // Transparent

  //       ctx.fillStyle = mainGradient;
  //       ctx.fillRect(0, 0, w, h);

  //       // Secondary accent orb
  //       const accentX = w * 0.3 + Math.cos(time * 0.4) * 120;
  //       const accentY = h * 0.15 + Math.sin(time * 0.6) * 100;

  //       const accentGradient = ctx.createRadialGradient(
  //         accentX, accentY, 0,
  //         accentX, accentY, w * 0.5
  //       );

  //       accentGradient.addColorStop(0, 'rgba(236, 72, 153, 0.3)');   // Pink
  //       accentGradient.addColorStop(0.4, 'rgba(219, 39, 119, 0.15)'); // Deep pink
  //       accentGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  //       ctx.globalCompositeOperation = 'screen';
  //       ctx.fillStyle = accentGradient;
  //       ctx.fillRect(0, 0, w, h);

  //       // Tertiary subtle orb
  //       const tertiaryX = w * 0.1 + Math.sin(time * 0.7) * 60;
  //       const tertiaryY = h * 0.4 + Math.cos(time * 0.5) * 70;

  //       const tertiaryGradient = ctx.createRadialGradient(
  //         tertiaryX, tertiaryY, 0,
  //         tertiaryX, tertiaryY, w * 0.4
  //       );

  //       tertiaryGradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');  // Blue
  //       tertiaryGradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.12)');
  //       tertiaryGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  //       ctx.fillStyle = tertiaryGradient;
  //       ctx.fillRect(0, 0, w, h);

  //       animationRef.current = requestAnimationFrame(animate);
  //     }

  //     animate();

  //     const handleResize = () => {
  //       w = canvas.width = window.innerWidth;
  //       h = canvas.height = window.innerHeight;
  //     };

  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //       if (animationRef.current) {
  //         cancelAnimationFrame(animationRef.current);
  //       }
  //     };
  //   }, []);

  //   return (
  //     <canvas
  //       ref={canvasRef}
  //       className="absolute inset-0 w-full h-full"
  //       style={{ filter: 'blur(80px)' }}
  //     />
  //   );
  // }

  // // Custom Typewriter Component
  // function TypewriterText({ text, delay = 80, startDelay = 0, showCursor = true }) {
  //   const [displayedText, setDisplayedText] = useState('');
  //   const [index, setIndex] = useState(0);

  //   useEffect(() => {
  //     if (startDelay > 0) {
  //       const timer = setTimeout(() => setIndex(1), startDelay);
  //       return () => clearTimeout(timer);
  //     } else {
  //       setIndex(1);
  //     }
  //   }, [startDelay]);

  //   useEffect(() => {
  //     if (index > 0 && index <= text.length) {
  //       const timeout = setTimeout(() => {
  //         setDisplayedText(text.slice(0, index));
  //         setIndex(index + 1);
  //       }, delay);
  //       return () => clearTimeout(timeout);
  //     }
  //   }, [index, text, delay]);

  //   return (
  //     <span>
  //       {displayedText}
  //       {showCursor && index <= text.length && <span className="animate-pulse">|</span>}
  //     </span>
  //   );
  // }

  // export default function HeroSection() {
  //   const containerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         staggerChildren: 0.15,
  //         delayChildren: 0.2,
  //       },
  //     },
  //   };

  //   const itemVariants = {
  //     hidden: { opacity: 0, y: 12 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: { duration: 0.6, ease: 'easeOut' },
  //     },
  //   };

  //   return (
  //     <>
  //       <section
  //         role="region"
  //         aria-label="Hero"
  //         className="relative bg-white pt-28 pb-16 overflow-hidden"
  //       >
  //         {/* Stripe Left-Corner Gradient Orb Background */}
  //         <div className="absolute inset-0 z-0">
  //           <StripeGradientOrb />
  //         </div>

  //         <motion.div
  //           variants={containerVariants}
  //           initial="hidden"
  //           animate="visible"
  //           className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
  //         >
  //           <motion.div variants={itemVariants} className="inline-block mb-4 px-3 py-1 bg-black/5 border border-black/10 rounded-full">
  //             <span className="text-xs sm:text-sm font-medium text-gray-700">Engineering Your Growth</span>
  //           </motion.div>

  //           <motion.h1
  //             variants={itemVariants}
  //             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-snug tracking-tight mb-6 bg-gradient-to-r from-cyan-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent"
  //           >
  //             <TypewriterText text="Custom Software Meets " delay={80} startDelay={200} showCursor={false} />
  //             <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
  //               <TypewriterText text="Marketing" delay={80} startDelay={2000} showCursor={true} />
  //             </span>
  //           </motion.h1>

  //           <motion.p variants={itemVariants} className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
  //             Pantech bridges the gap between enterprise-grade software engineering and modern marketing technology. We build fast, reliable, conversion-focused experiences.
  //           </motion.p>

  //           <motion.div
  //             variants={itemVariants}
  //             className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
  //           >
  //             {/* START A PROJECT */}
  //             <button
  //               className="w-full sm:w-auto px-4 md:px-8 py-3 md:py-4
  //                          rounded-full
  //                          bg-transparent
  //                          border border-cyan-300
  //                          text-sm font-medium uppercase tracking-wider text-black
  //                          flex items-center gap-2 justify-center
  //                          transition-all duration-200 hover:gap-3
  //                          hover:border-gray-400
  //                          md:font-semibold"
  //             >
  //               <span>Start a Project</span>
  //             </button>

  //             {/* EXPLORE OUR WORK */}
  //             <a
  //               href="/book-demo"
  //               className="w-full sm:w-auto flex items-center justify-center gap-2
  //                          rounded-full bg-gradient-to-r from-indigo-500 to-purple-700
  //                          px-4 md:px-6 py-3 md:py-4
  //                          text-sm font-medium uppercase tracking-wider text-white
  //                          transition-all duration-200
  //                          hover:scale-105 hover:shadow-lg  
  //                          md:font-semibold"
  //             >
  //               <span>Explore Our Work</span>
  //             </a>
  //           </motion.div>

  //           <motion.div variants={itemVariants} className="mt-12">
  //             <div className="mx-auto max-w-xl bg-white border border-gray-100/60 rounded-lg p-4 sm:p-6 shadow-sm">
  //               <pre className="text-xs sm:text-sm font-mono text-gray-700 overflow-x-auto">
  //                 <code>{`// Optimized for conversion\nexport default function Page() {\n  return (\n    <Component performance="optimized" conversion="focused" speed="blazing" />\n  );\n}`}</code>
  //               </pre>
  //             </div>
  //           </motion.div>

  //           <motion.div variants={itemVariants} className="mt-12">
  //             <p className="text-gray-500 text-xs sm:text-sm">Trusted by leading companies</p>
  //             <div className="mt-4 flex flex-wrap justify-center gap-4 opacity-70">
  //               {['Client 1', 'Client 2', 'Client 3', 'Client 4'].map((client) => (
  //                 <div key={client} className="h-10 sm:h-12 bg-gray-200 rounded-md w-28 sm:w-32 flex items-center justify-center">
  //                   <span className="text-sm text-gray-600 truncate">{client}</span>
  //                 </div>
  //               ))}
  //             </div>
  //           </motion.div>
  //         </motion.div>

  //         <motion.div
  //           animate={{ y: [0, 8, 0] }}
  //           transition={{ duration: 2.5, repeat: Infinity }}
  //           className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
  //         >
  //           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  //           </svg>
  //         </motion.div>
  //       </section>

  //       <section className="py-20 bg-white">
  //         <div className="max-w-7xl mx-auto px-6">
  //           <motion.div
  //             initial={{ opacity: 0, y: 40 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8 }}
  //             viewport={{ once: true }}
  //             className="text-center mb-16"
  //           >
  //             <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
  //             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">We deliver custom engineering solutions and cutting-edge marketing technology</p>
  //           </motion.div>

  //           <motion.div
  //             variants={containerVariants}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true }}
  //             className="grid grid-cols-1 md:grid-cols-3 gap-8"
  //           >
  //             {SERVICES.map((service) => (
  //               <motion.div
  //                 key={service.id}
  //                 variants={itemVariants}
  //                 className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg hover:border-black transition-all duration-300 hover:shadow-2xl"
  //               >
  //                 <div className="text-5xl mb-4">{service.icon}</div>
  //                 <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
  //                 <p className="text-gray-600 mb-6">{service.description}</p>
  //                 <motion.div whileHover={{ x: 5 }} className="inline-flex items-center text-black font-semibold cursor-pointer">
  //                   Learn more →
  //                 </motion.div>
  //               </motion.div>
  //             ))}
  //           </motion.div>
  //         </div>
  //       </section>

  //       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
  //         <div className="max-w-7xl mx-auto px-6">
  //           <motion.div
  //             initial={{ opacity: 0, y: 40 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8 }}
  //             viewport={{ once: true }}
  //             className="text-center mb-16"
  //           >
  //             <h2 className="text-4xl sm:text-5xl font-bold mb-4">Built for Performance</h2>
  //             <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Every line of code is optimized for speed, conversion, and user experience</p>
  //           </motion.div>

  //           <motion.div
  //             variants={containerVariants}
  //             initial="hidden"
  //             whileInView="visible"
  //             viewport={{ once: true }}
  //             className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  //           >
  //             <motion.div variants={itemVariants} className="space-y-6">
  //               {[
  //                 { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally' },
  //                 { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO' },
  //                 { title: 'Schema Markup', desc: 'Rich snippets in search results' },
  //                 { title: 'Edge Network', desc: 'CDN-powered delivery worldwide' },
  //               ].map((feature, idx) => (
  //                 <div key={idx} className="flex gap-4">
  //                   <div className="text-2xl">✓</div>
  //                   <div>
  //                     <h4 className="font-bold text-lg">{feature.title}</h4>
  //                     <p className="text-gray-600">{feature.desc}</p>
  //                   </div>
  //                 </div>
  //               ))}
  //             </motion.div>

  //             <motion.div variants={itemVariants} className="bg-black text-white p-8 rounded-lg">
  //               <pre className="font-mono text-sm overflow-x-auto">
  //                 <code>{`// Optimized for conversion\nexport default function Page() {\n  return (\n    <Component\n      performance="optimized"\n      conversion="focused"\n      speed="blazing"\n    />\n  );\n}`}</code>
  //               </pre>
  //             </motion.div>
  //           </motion.div>
  //         </div>
  //       </section>

  //       <section className="py-20 bg-black text-white">
  //         <motion.div
  //           initial={{ opacity: 0, y: 40 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           viewport={{ once: true }}
  //           className="max-w-4xl mx-auto px-6 text-center"
  //         >
  //           <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
  //           <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Let's discuss how we can help you achieve your software and marketing goals.</p>
  //           <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">Start Your Project</Button>
  //         </motion.div>
  //       </section>
  //     </>
  //   );
  // }






  'use client';

  import React, { useState, useEffect, useRef } from 'react';
  import { motion } from 'framer-motion';
  import Button from '@/components/shared/Button';
  import { SERVICES } from '@/lib/constants';

  // Stripe's signature left-corner gradient orb animation
  function StripeGradientOrb() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;

      let time = 0;

      function animate() {
        time += 0.003;

        // Clear canvas
        ctx.clearRect(0, 0, w, h);

        // Create main gradient orb positioned in top-left
        const centerX = -w * 0.15 + Math.sin(time * 0.5) * 100;
        const centerY = h * 0.2 + Math.cos(time * 0.3) * 80;

        // Large radial gradient (main orb)
        const mainGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, w * 0.9
        );

        mainGradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');    // Indigo
        mainGradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.25)'); // Purple
        mainGradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.15)'); // Violet
        mainGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');     // Transparent

        ctx.fillStyle = mainGradient;
        ctx.fillRect(0, 0, w, h);

        // Secondary accent orb
        const accentX = w * 0.3 + Math.cos(time * 0.4) * 120;
        const accentY = h * 0.15 + Math.sin(time * 0.6) * 100;

        const accentGradient = ctx.createRadialGradient(
          accentX, accentY, 0,
          accentX, accentY, w * 0.5
        );

        accentGradient.addColorStop(0, 'rgba(236, 72, 153, 0.3)');   // Pink
        accentGradient.addColorStop(0.4, 'rgba(219, 39, 119, 0.15)'); // Deep pink
        accentGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = accentGradient;
        ctx.fillRect(0, 0, w, h);

        // Tertiary subtle orb
        const tertiaryX = w * 0.1 + Math.sin(time * 0.7) * 60;
        const tertiaryY = h * 0.4 + Math.cos(time * 0.5) * 70;

        const tertiaryGradient = ctx.createRadialGradient(
          tertiaryX, tertiaryY, 0,
          tertiaryX, tertiaryY, w * 0.4
        );

        tertiaryGradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');  // Blue
        tertiaryGradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.12)');
        tertiaryGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = tertiaryGradient;
        ctx.fillRect(0, 0, w, h);

        animationRef.current = requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(80px)' }}
      />
    );
  }

  // Custom Typewriter Component
  function TypewriterText({ text, delay = 80, startDelay = 0, showCursor = true }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (startDelay > 0) {
        const timer = setTimeout(() => setIndex(1), startDelay);
        return () => clearTimeout(timer);
      } else {
        setIndex(1);
      }
    }, [startDelay]);

    useEffect(() => {
      if (index > 0 && index <= text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index));
          setIndex(index + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [index, text, delay]);

    return (
      <span>
        {displayedText}
        {showCursor && index <= text.length && <span className="animate-pulse">|</span>}
      </span>
    );
  }

  export default function HeroSection() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      },
    };

    return (
      <>
        {/* Hero Section with Stripe Gradient */}
        <section
          role="region"
          aria-label="Hero"
          className="relative bg-white pt-28 pb-16 overflow-hidden min-h-screen flex items-center"
        >
          {/* Stripe Left-Corner Gradient Orb Background */}
          <div className="absolute inset-0 z-0">
            <StripeGradientOrb />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full"
          >
            <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-2 bg-black/5 border border-black/10 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium text-gray-700">Engineering Your Growth</span>
            </motion.div>

            {/* Hero Headline - Premium Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8"
            >
              <span className="bg-gradient-to-r from-cyan-500 via-pink-600 to-yellow-400 bg-clip-text text-transparent">
                <TypewriterText text="Custom Software Meets " delay={60} startDelay={200} showCursor={false} />
              </span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <TypewriterText text="Marketing Tech" delay={60} startDelay={1800} showCursor={true} />
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We bridge the gap between enterprise-grade software engineering and modern marketing technology. Fast, reliable, conversion-focused.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-gray-900 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-xl"
              >
                Start a Project
              </button>

              <a
                href="/book-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Our Work
              </a>
            </motion.div>

            {/* Code Snippet - "Code-First Vibe" */}
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-auto text-xs text-gray-500 font-mono">app.tsx</span>
                </div>
                <pre className="text-sm font-mono text-left overflow-x-auto">
                  <code className="text-gray-300">
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Page</span>() {'{\n'}
                    {'  '}<span className="text-purple-400">return</span> {'(\n'}
                    {'    '}<span className="text-gray-500">{'<'}</span><span className="text-green-400">Component</span>{'\n'}
                    {'      '}<span className="text-blue-300">performance</span>=<span className="text-orange-400">"optimized"</span>{'\n'}
                    {'      '}<span className="text-blue-300">conversion</span>=<span className="text-orange-400">"focused"</span>{'\n'}
                    {'      '}<span className="text-blue-300">speed</span>=<span className="text-orange-400">"blazing"</span>{'\n'}
                    {'    '}<span className="text-gray-500">{'/>'}</span>{'\n'}
                    {'  '}){'\n'}
                    {'}'}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-500 text-sm mb-6">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {['Company A', 'Company B', 'Company C', 'Company D'].map((client) => (
                  <div key={client} className="h-12 bg-gray-100 rounded-lg px-8 flex items-center justify-center border border-gray-200">
                    <span className="text-sm font-semibold text-gray-700">{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>

        {/* Services Section - "The Dual Offering" */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom engineering solutions meets cutting-edge marketing technology
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
                  className="group relative p-10 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl hover:border-gray-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    className="inline-flex items-center text-gray-900 font-semibold cursor-pointer group-hover:text-indigo-600 transition-colors"
                  >
                    Learn more →
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Performance Section - With Isometric Style */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">Built for Performance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every line of code optimized for speed, conversion, and user experience
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              {/* Features List */}
              <motion.div variants={itemVariants} className="space-y-8">
                {[
                  { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally', icon: '⚡' },
                  { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO', icon: '🤖' },
                  { title: 'Schema Markup', desc: 'Rich snippets in search results', icon: '⭐' },
                  { title: 'Edge Network', desc: 'CDN-powered delivery worldwide', icon: '🌍' },
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex gap-6 items-start"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Code Block */}
              <motion.div variants={itemVariants}>
                <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-auto text-xs text-gray-500 font-mono">performance.ts</span>
                  </div>
                  <pre className="font-mono text-sm overflow-x-auto">
                    <code className="text-gray-300">
                      <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Page</span>() {'{\n'}
                      {'  '}<span className="text-purple-400">return</span> {'(\n'}
                      {'    '}<span className="text-gray-500">{'<'}</span><span className="text-green-400">Component</span>{'\n'}
                      {'      '}<span className="text-blue-300">performance</span>=<span className="text-orange-400">"optimized"</span>{'\n'}
                      {'      '}<span className="text-blue-300">conversion</span>=<span className="text-orange-400">"focused"</span>{'\n'}
                      {'      '}<span className="text-blue-300">speed</span>=<span className="text-orange-400">"blazing"</span>{'\n'}
                      {'    '}<span className="text-gray-500">{'/>'}</span>{'\n'}
                      {'  '}){'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Dark Theme */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">Ready to Build Something Great?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your software and marketing goals.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </Button>
          </motion.div>
        </section>
      </>
    );
  }