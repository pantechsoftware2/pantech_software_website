'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function TermsConditions() {
  return (
    <>
      <Head>
        <meta property="og:image" content="/pantech-logo1.png" />
        <meta name="twitter:image" content="/pantech-logo1.png" />
      </Head>
      <Header />
      <main className="min-h-screen pt-28 pb-16 bg-white">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Agreement to Terms</h2>
                <p>
                  These Terms & Conditions ("Agreement") constitute a legal agreement between you ("User", "you", or "your") and PanTech Software ("we", "us", "our", or "Company"). By accessing and using this website, you accept and agree to be bound by and comply with these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on PanTech Software's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Disclaimer</h2>
                <p>
                  The materials on PanTech Software's website are on an 'as-is' basis. PanTech Software makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Limitations</h2>
                <p>
                  In no event shall PanTech Software or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PanTech Software's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Accuracy of Materials</h2>
                <p>
                  The materials appearing on PanTech Software's website could include technical, typographical, or photographic errors. PanTech Software does not warrant that any of the materials on its website are accurate, complete, or current. PanTech Software may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Links</h2>
                <p>
                  PanTech Software has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PanTech Software of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Modifications</h2>
                <p>
                  PanTech Software may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 mt-8">Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
