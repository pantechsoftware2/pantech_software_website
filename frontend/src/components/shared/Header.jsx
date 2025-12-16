'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
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
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="text-2xl font-bold text-black"
            whileHover={{ scale: 1.05 }}
          >
            Pantech Software
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                className="text-gray-700 hover:text-black transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/contact">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get Started
            </button>
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}
