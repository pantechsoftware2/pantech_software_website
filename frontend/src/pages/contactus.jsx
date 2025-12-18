import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ContactForm from '../components/ContactForm';

export default function ContactUsPage() {
  const faqs = [
    {
      q: 'How long does a typical project take?',
      a: 'Timelines vary by scope — small projects 2-4 weeks, medium 1-3 months, larger engagements depend on requirements.',
    },
    {
      q: 'Do you offer ongoing maintenance?',
      a: 'Yes — we offer retainer and support packages to keep your product secure and up-to-date.',
    },
    {
      q: 'What industries do you work with?',
      a: 'We work with SaaS, fintech, e-commerce, and B2B service companies.',
    },
    {
      q: 'Can you help with strategy and discovery?',
      a: 'Absolutely — we run discovery workshops to align scope, timeline and budget before engineering.',
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* ---------------- HERO ---------------- */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 ">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-900 via-indigo-800 to-indigo-800 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? We're here to help — fill out the form or reach us via email or phone.
            </p>
          </div>
        </section>

        {/* ---------------- CONTACT FORM (FIXED BG) ---------------- */}
        <section className="relative w-full mb-20">
          {/* Background (FULL WIDTH) */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

          {/* Soft blobs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-32 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="mb-8 pt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Send us a Message
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Fill out the form below and we'll respond as soon as possible.
              </p>
            </div> */}

            <ContactForm />
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center 
    bg-gradient-to-r from-cyan-900 via-indigo-800 to-indigo-800 
    bg-clip-text text-transparent">
    Frequently Asked Questions
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {faqs.map((f, i) => (
      <div
        key={i}
        className="
          group
          bg-white
          p-6
          rounded-xl
          border border-gray-200
          shadow-sm
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:shadow-lg
          hover:border-gray-300
        "
      >
        {/* subtle hover overlay (keeps white) */}
        <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <h3 className="
          relative
          font-semibold mb-2
          text-gray-900
          transition-colors duration-300
        ">
          {f.q}
        </h3>

        <p className="
          relative
          text-sm text-gray-600
          leading-relaxed
        ">
          {f.a}
        </p>
      </div>
    ))}
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
