'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PerformanceSection() {
  const services = [
    { name: 'Custom Software', topMobile: '12%', leftMobile: '50%', top: '10%', left: '50%', delay: 0.1 },
    { name: 'Mobile Apps', topMobile: '28%', leftMobile: '28%', top: '28%', left: '20%', delay: 0.2 },
    { name: 'Cloud & DevOps', topMobile: '28%', leftMobile: '72%', top: '28%', left: '80%', delay: 0.3 },
    { name: 'Marketing Tech', topMobile: '62%', leftMobile: '28%', top: '65%', left: '15%', delay: 0.4 },
    { name: 'API Integrations', topMobile: '62%', leftMobile: '72%', top: '65%', left: '85%', delay: 0.5 },
    { name: 'Enterprise Solutions', topMobile: '45%', leftMobile: '50%', top: '45%', left: '50%', delay: 0.6 },
  ];

  const containerRef = useRef(null);
  const featureRefs = useRef([]);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.heading',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.heading',
            start: 'top 85%',
            once: true,
          },
        }
      );

      featureRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power3.out',
              delay: idx * 0.15,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }
      });

      nodeRefs.current.forEach((el, idx) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.85, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: 'back.out(1.4)',
              delay: services[idx].delay,
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                once: true,
              },
            }
          );

          gsap.to(el, {
            y: -12,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: services[idx].delay,
          });

          el.addEventListener('mouseenter', () => {
            gsap.to(el, { scale: 1.15, y: -20, rotationY: 15, rotationX: 10, z: 100, duration: 0.4, ease: 'power2.out' });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(el, { scale: 1, y: -12, rotationY: 0, rotationX: 0, z: 0, duration: 0.4, ease: 'power2.out' });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#0d1224] relative">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* TOP WAVE DIVIDER - Visible curve coming into the dark section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px] translate-y-full"
        >
          <path
            d="M0,80 C240,20 480,20 720,60 C960,100 1200,100 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* BOTTOM WAVE DIVIDER - Smooth curve exiting the section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,40 C240,100 480,100 720,60 C960,20 1200,20 1440,40 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="heading text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ddf1ff] to-[#ffa245] leading-tight pb-2 ">
            Built for PanTech SaaS Marketing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Bridging custom enterprise engineering and powerful marketing-tech products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {[
              { title: '90+ PageSpeed Score', desc: 'Lightning-fast load times globally', icon: '⚡' },
              { title: 'Semantic HTML', desc: 'AI-friendly markup for better SEO', icon: '🤖' },
              { title: 'Schema Markup', desc: 'Rich snippets in search results', icon: '⭐' },
              { title: 'Edge Network', desc: 'CDN-powered delivery worldwide', icon: '🌍' },
            ].map((feature, idx) => (
              <div
                key={idx}
                ref={(el) => (featureRefs.current[idx] = el)}
                className="flex gap-5 items-center bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-white/20 opacity-0 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-cyan-500/20"
              >
                <div className="text-4xl shrink-0">{feature.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex justify-center relative" style={{ perspective: '1200px' }}>
            <div className="relative w-full max-w-lg lg:max-w-2xl h-[500px] sm:h-[600px] lg:h-[600px]">
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <defs>
                  <linearGradient id="stripeFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#67e8f9" />
                  </linearGradient>
                </defs>

                <path d="M 50% 12% Q 20% 30% 18% 52%" stroke="url(#stripeFlow)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 50% 12% Q 80% 30% 82% 52%" stroke="url(#stripeFlow)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 18% 52% Q 50% 75% 82% 52%" stroke="url(#stripeFlow)" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 50% 35% V 65%" stroke="url(#stripeFlow)" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>

              {services.map((service, idx) => (
                <div
                  key={service.name}
                  ref={(el) => (nodeRefs.current[idx] = el)}
                  className="absolute rounded-2xl border border-cyan-300/40 backdrop-blur-xl shadow-2xl cursor-pointer"
                  style={{
                    top: `clamp(${service.topMobile}, 8vw, ${service.top})`,
                    left: `clamp(${service.leftMobile}, 8vw, ${service.left})`,
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(100px, 20vw, 128px)',
                    height: 'clamp(100px, 20vw, 128px)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #67e8f9 100%)',
                    boxShadow: '0 20px 60px rgba(6,182,212,0.4)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center px-3 text-center">
                    <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase text-gray-900">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}