'use client';

import { motion } from 'framer-motion';

export default function StripeGradientBackground() {
  return (
    <div className="absolute inset-0  overflow-hidden pointer-events-none">
      
      {/* Base soft wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 10% -10%, rgba(33, 33, 248, 0.18), transparent 40%),' +
            'radial-gradient(1000px 500px at 90% 10%, rgba(253, 55, 154, 0.14), transparent 45%),' +
            'radial-gradient(900px 500px at 50% 100%, rgba(253, 253, 253, 0.14), transparent 45%)',
        }}
      />

      {/* Animated gradient layer (bram.us-like drift) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(252, 252, 252, 0.08), rgba(245, 245, 245, 0.08), rgba(228, 234, 235, 0.08), rgba(168, 170, 241, 0.08))',
          filter: 'blur(120px)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
