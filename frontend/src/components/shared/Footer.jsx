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
    ],
    Products: [
      { label: 'Marketing Suite', href: '/products/marketing-suite' },
      { label: 'Analytics', href: '/products/analytics' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contactus' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
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
      className="bg-[#0d1224] text-white pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-10
          mb-20
          lg:flex
          lg:justify-between
        ">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:max-w-sm">
            <h3 className="text-2xl font-bold mb-3 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">
              Pantech
            </h3>

            <p className="text-white text-sm leading-relaxed mb-6">
              Bridging custom engineering with innovative marketing solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    text-cyan-400
                    transition-all
                    duration-300
                    ease-out
                    hover:text-white
                    hover:scale-105
                    hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.45)]
                  "
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-gray-300 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-4 mt-6">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Pantech Software. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
