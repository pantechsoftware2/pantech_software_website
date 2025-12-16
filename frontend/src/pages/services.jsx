import React from 'react';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-sm sm:text-base text-gray-600">Custom Software, Mobile Apps, Cloud & DevOps.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
