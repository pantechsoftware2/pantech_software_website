import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
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
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    let animationId;
    let camera, scene, renderer, globe, particles;

    const initGlobe = () => {
      // Scene setup
      scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera - Centered properly
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(-1.5, 0, 4);

      // Renderer
      const canvas = canvasRef.current;
      if (!canvas) return;

      renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true,
        antialias: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      // Globe geometry
      const geometry = new THREE.SphereGeometry(1.8, 64, 64);
      
      // Globe material
      const material = new THREE.MeshPhongMaterial({
        color: 0x1a1a2e,
        emissive: 0x16213e,
        shininess: 100,
        transparent: true,
        opacity: 0.9
      });

      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
      scene.add(ambientLight);

      const pointLight1 = new THREE.PointLight(0x00d4ff, 1, 10);
      pointLight1.position.set(1, 2, 2);
      scene.add(pointLight1);

      const pointLight2 = new THREE.PointLight(0xff6b6b, 0.8, 10);
      pointLight2.position.set(-1, -1, 2);
      scene.add(pointLight2);

      // Particles
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        const spherical = new THREE.Spherical();
        spherical.radius = Math.random() * 0.3 + 2.05;
        spherical.phi = Math.random() * Math.PI * 2;
        spherical.theta = Math.random() * Math.PI;

        positions[i] = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
        positions[i + 1] = spherical.radius * Math.cos(spherical.phi);
        positions[i + 2] = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x00d4ff,
        size: 0.015,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Animate
      const animate = () => {
        animationId = requestAnimationFrame(animate);

        globe.rotation.y += 0.003;
        globe.rotation.x += 0.001;
        particles.rotation.y += 0.002;

        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        if (camera && renderer) {
         const aspect = window.innerWidth / window.innerHeight;
         camera.aspect = aspect;
         camera.updateProjectionMatrix();
         renderer.setSize(window.innerWidth, window.innerHeight);
         camera.position.set(-1.2 * (aspect > 1 ? 1 : 0.8), 0, 4);
        }
      };
      window.addEventListener('resize', handleResize);
    };

    initGlobe();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', () => {});
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 overflow-hidden bg-white">
        {/* Hero Section - White Background */}
        <section className="relative h-screen overflow-hidden bg-white -mt-20">
          {/* Animated Globe Canvas */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl mx-auto">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="w-full max-w-7xl mx-auto relative h-full flex items-center lg:items-start lg:pt-20">
                
                {/* Left Column - Main Content */}
                <div className="flex-1 lg:w-1/2 max-w-lg">
                  <section className="Copy text-[#0d1224]">
                    <header className="Copy__header mb-8">
                      <h2 className="Copy__caption text-lg font-semibold text-[#00d4ff] uppercase tracking-wide mb-4">
                        Global Impact
                      </h2>
                      <h1 className="Copy__title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-[#0d1224] via-slate-700 to-slate-900 bg-clip-text text-transparent">
                        Engineering Excellence
                      </h1>
                    </header>
                    <div className="Copy__body text-xl sm:text-2xl text-slate-600 max-w-lg leading-relaxed">
                      Transformative solutions for ambitious companies. 
                      From legacy systems to cutting-edge architectures.
                    </div>
                  </section>
                </div>

              {/* Bottom Left Stats - FIXED POSITION */}
<div className="absolute bottom-12 left-8 lg:left-12 xl:left-16 flex flex-col sm:flex-row gap-6 lg:gap-8 max-w-2xl">

  {/* Stat 1 */}
  <section className="Copy flex-1 text-left">
    <header className="Copy__header">
      <h1 className="Copy__title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d1224] mb-1">
        50+
      </h1>
    </header>
    <div className="Copy__body text-slate-500 text-sm sm:text-base leading-snug">
      Projects delivered with 99.99% uptime
    </div>
  </section>

  {/* Stat 2 */}
  <section className="Copy flex-1 text-left">
    <header className="Copy__header">
      <h1 className="Copy__title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d1224] mb-1">
        3.2s
      </h1>
    </header>
    <div className="Copy__body text-slate-500 text-sm sm:text-base leading-snug">
      Average performance improvement
    </div>
  </section>

  {/* Stat 3 */}
  <section className="Copy flex-1 text-left">
    <header className="Copy__header">
      <h1 className="Copy__title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d1224] mb-1">
        82%
      </h1>
    </header>
    <div className="Copy__body text-slate-500 text-sm sm:text-base leading-snug">
      Average efficiency gains
    </div>
  </section>

  {/* Stat 4 */}
  <section className="Copy flex-1 text-left">
    <header className="Copy__header">
      <h1 className="Copy__title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0d1224] mb-1">
        100%
      </h1>
    </header>
    <div className="Copy__body text-slate-500 text-sm sm:text-base leading-snug">
      Client satisfaction
    </div>
  </section>

</div>

              </div>
            </div>
          </div>

          {/* Subtle guide lines overlay */}
          <div className="Guides absolute inset-0 pointer-events-none z-20 opacity-20">
            <div className="Guides__container absolute right-0 top-1/4 h-1/2 w-1 bg-gradient-to-b from-[#00d4ff] to-transparent" />
            <div className="Guides__container absolute right-0 top-1/2 h-1/4 w-1 bg-gradient-to-b from-purple-400 to-transparent" />
            <div className="Guides__container absolute right-0 top-3/4 h-1/3 w-1 bg-gradient-to-b from-indigo-400 to-transparent" />
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-transparent -z-10 blur-xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-[#0d1224] backdrop-blur-xl border border-slate-500 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-[#0d1224]/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00d4ff]/10 to-purple-500/10 text-white border border-[#00d4ff]/20 mb-6">
                    {study.category}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300 leading-tight">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white  group-hover:text-black uppercase tracking-wide mb-1">Problem</h4>
                        <p className="text-slate-300 group-hover:text-black leading-relaxed">{study.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white  group-hover:text-black  uppercase tracking-wide mb-1">Solution</h4>
                        <p className="text-slate-300 group-hover:text-black leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white  group-hover:text-black  uppercase tracking-wide mb-1">Result</h4>
                        <p className="text-slate-300 group-hover:text-black leading-relaxed font-semibold">{study.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mb-8">
                    <div className="absolute -top-4 -left-4 -right-4 h-24 bg-gradient-to-b from-[#0d1224]/5 to-transparent rounded-2xl" />
                    <pre className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 text-xs font-mono overflow-x-auto">
                      <code className="text-[#0d1224] block">{study.codeSnippet}</code>
                    </pre>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                    <div className="text-sm text-slate-500">
                      {study.date} • {study.duration}
                    </div>
                    <button className="group/btn flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00d4ff] to-purple-600 text-white font-semibold rounded-xl hover:from-[#00d4ff]/90 hover:to-purple-700 shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 transform hover:scale-105 active:scale-95">
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
