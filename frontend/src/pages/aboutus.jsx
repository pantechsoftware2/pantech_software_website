'use client';

import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              About PanTech Software
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging enterprise-grade engineering with innovative marketing technology
            </p>
          </motion.div>

          <div className="prose prose-lg max-w-none space-y-16 text-gray-700">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg leading-relaxed">
                Pantech Software is a leading provider of custom software engineering and cutting-edge marketing technology solutions. We bridge the gap between enterprise-grade software development and innovative marketing tools, delivering high-performance, conversion-focused experiences that drive business growth.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To empower businesses with intelligent, scalable solutions that combine superior software engineering with marketing innovation. We believe in building fast, reliable, and user-centric products that deliver measurable results.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Innovation", desc: "We constantly push boundaries and explore new technologies to create cutting-edge solutions." },
                  { title: "Quality", desc: "We are committed to delivering high-quality products and services that exceed expectations." },
                  { title: "Collaboration", desc: "We work closely with our clients to understand their needs and deliver tailored solutions." },
                  { title: "Performance", desc: "Every line of code is optimized for speed, conversion, and user experience." },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold text-cyan-600 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-10">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  { title: "Custom Software Development", desc: "We craft tailor-made software solutions for complex enterprise challenges, built to scale and optimized for performance." },
                  { title: "Mobile App Development", desc: "Native iOS and Android apps built with the latest technologies, designed for seamless user experiences and high engagement." },
                  { title: "Cloud Infrastructure & DevOps", desc: "Optimize your infrastructure for performance and reliability with our expert cloud and DevOps solutions." },
                  { title: "Marketing Technology", desc: "Cutting-edge marketing tools and analytics to help you understand your customers and drive conversions." },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-700">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-10">Why Choose Us</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                {[
                  "Expert team with years of experience in software engineering and marketing technology",
                  "Proven track record of delivering high-performance solutions for leading companies",
                  "Commitment to quality, innovation, and customer success",
                  "End-to-end support from planning and development to deployment and optimization",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md border border-gray-100"
                  >
                    <span className="text-3xl font-bold text-cyan-500 mt-1">✓</span>
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Ready to transform your business with innovative software and marketing solutions? Let's talk about how Pantech Software can help you achieve your goals.
              </p>
              <a
                href="/contactus"
                className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.section>

            {/* New Office Address Card at the bottom */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Office</h2>
                <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Headquarters</h3>
                    <p className="text-gray-300 leading-relaxed">
                      PanTech Software Pvt. Ltd.<br />
                     16, Strand Road, Diamond Heritage,<br />
                      1st Floor, Suite No. 201E,<br />
                       Kolkata 700001
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Contact Info</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Phone: +91 9831216414<br />
                      Email: pantechsoftware2@gmail.com<br />
                      {/* Support: support@pantechsoftware.com */}
                    </p>
                  </div>
                </div>
                <p className="text-center mt-10 text-gray-400">
                  We’d love to welcome you for a coffee and a chat about your next project.
                </p>
              </div>
            </motion.section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}