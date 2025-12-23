'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Image
              src="/pantech_log.png"
              alt="PanTech Software"
              width={160}
              height={40}
              priority
              className="object-contain w-32 sm:w-40 md:w-44"
            />
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                whileHover={{ y: -2 }}
                className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition-colors"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link href="/contactus" className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm lg:text-base bg-[#0048e5] text-white px-5 py-2.5 rounded-lg hover:bg-[#003acc] transition-colors font-medium"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="text-2xl">
              {open ? '✕' : '☰'}
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contactus"
                onClick={() => setOpen(false)}
                className="mt-3"
              >
                <button className="w-full bg-[#0048e5] text-white py-3.5 rounded-xl font-medium text-lg hover:bg-[#003acc] transition-colors active:bg-[#002b99]">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}