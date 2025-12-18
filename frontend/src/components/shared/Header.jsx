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
      setScrolled(window.scrollY > 10);
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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center leading-none">
          <motion.div whileHover={{ scale: 1.01 }} className="flex items-center">
            <Image
              src="/pantech_log.png"
              alt="PanTech Software"
              width={160}
              height={40}
              priority
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                whileHover={{ y: -1 }}
                className="text-sm font-medium text-gray-800 hover:text-black transition"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:block">
            <button className="text-sm bg-[#0048e5] text-white px-5 py-2 rounded-md hover:bg-indigo-800 transition">
              Get Started
            </button>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-black/5 transition text-xl"
            aria-label="Open Menu"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-white font-medium hover:text-black"
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setOpen(false)}>
                <button className="w-full bg-[#0048e5] text-white py-2 rounded-md">
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
