'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Services: [
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'DevOps & Cloud', href: '/services/devops' },
       { label: 'Web Application Development', href: '/services/web-application' },
      { label: 'Enterprise System Integration', href: '/services/enterprise-system' },
      { label: 'AI Powered Solutions', href: '/services/ai-solutions' },
    ],
    Products: [
      { label: 'Marketing Suite', href: '/products/marketing-suite' },
      { label: 'Analytics', href: '/products/analytics' },
    ],
    Company: [
      { label: 'About', href: '/aboutus' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contactus' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms&conditions' },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com/' },
    { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
    { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com/' },
    { Icon: Youtube, label: 'YouTube', href: 'https://youtube.com/' },
    { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0d1224] text-white pt-28 pb-12 overflow-hidden"
    >
      {/* ================= VISIBLE TOP CURVE ================= */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          {/* PAGE BACKGROUND COLOR */}
          <path
            d="M0,80 C240,20 480,20 720,60 960,100 1200,100 1440,60 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16 lg:flex lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:max-w-sm">
            <h3 className="text-2xl font-bold mb-3">
              PanTech Software
            </h3>

            <p className="text-sm leading-relaxed mb-6 text-gray-200">
              Bridging custom engineering with innovative marketing solutions.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-cyan-400 hover:text-white transition-all hover:scale-110"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-4 mt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Pantech Software. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
