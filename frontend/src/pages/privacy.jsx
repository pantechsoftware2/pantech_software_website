'use client';

import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function Privacy() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Introduction</h2>
                <p>
                  At PanTech Software, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the site includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, email address, phone number, etc.)</li>
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, clickstream data)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Use of Your Information</h2>
                <p>
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, operate, and maintain our website</li>
                  <li>To improve, personalize, and expand our website</li>
                  <li>To understand and analyze how you use our website</li>
                  <li>To respond to your comments, questions, and requests</li>
                  <li>To send promotional communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Disclosure of Your Information</h2>
                <p>
                  We may disclose your information when required by law or in good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with any applicable law, regulation, legal process or governmental request</li>
                  <li>Enforce our Terms & Conditions and other agreements</li>
                  <li>Protect the security or integrity of our website</li>
                  <li>Protect the rights, privacy, safety, or property of PanTech Software, you, or others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="font-semibold">
                  PanTech Software<br />
                  Email: pantechsoftware2@gmail.com<br />
                  Phone: +91 9831216414<br></br>
                  Adress: 16, Strand Road, Diamond Heritage, 1st Floor, Suite No. 201E, Kolkata 700001
                </p>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
