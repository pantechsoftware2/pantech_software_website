'use client';

import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 bg-white">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">About Pantech Software</h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p>
                  Pantech Software is a leading provider of custom software engineering and cutting-edge marketing technology solutions. We bridge the gap between enterprise-grade software development and innovative marketing tools, delivering high-performance, conversion-focused experiences that drive business growth.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p>
                  To empower businesses with intelligent, scalable solutions that combine superior software engineering with marketing innovation. We believe in building fast, reliable, and user-centric products that deliver measurable results.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-lg">Innovation:</strong> We constantly push boundaries and explore new technologies to create cutting-edge solutions.
                  </li>
                  <li>
                    <strong className="text-lg">Quality:</strong> We are committed to delivering high-quality products and services that exceed expectations.
                  </li>
                  <li>
                    <strong className="text-lg">Collaboration:</strong> We work closely with our clients to understand their needs and deliver tailored solutions.
                  </li>
                  <li>
                    <strong className="text-lg">Performance:</strong> Every line of code is optimized for speed, conversion, and user experience.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
                    <p>
                      We craft tailor-made software solutions for complex enterprise challenges, built to scale and optimized for performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                    <p>
                      Native iOS and Android apps built with the latest technologies, designed for seamless user experiences and high engagement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure & DevOps</h3>
                    <p>
                      Optimize your infrastructure for performance and reliability with our expert cloud and DevOps solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Marketing Technology</h3>
                    <p>
                      Cutting-edge marketing tools and analytics to help you understand your customers and drive conversions.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-xl font-bold text-cyan-500">✓</span>
                    <span>Expert team with years of experience in software engineering and marketing technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl font-bold text-cyan-500">✓</span>
                    <span>Proven track record of delivering high-performance solutions for leading companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl font-bold text-cyan-500">✓</span>
                    <span>Commitment to quality, innovation, and customer success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl font-bold text-cyan-500">✓</span>
                    <span>End-to-end support from planning and development to deployment and optimization</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p>
                  Ready to transform your business with innovative software and marketing solutions? Let's talk about how Pantech Software can help you achieve your goals.
                </p>
                <a href="/contactus" className="inline-block mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                  Contact Us
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
