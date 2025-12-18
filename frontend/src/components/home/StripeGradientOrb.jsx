'use client';

import React, { useRef, useEffect } from 'react';

export default function StripeGradientOrb() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let time = 0;

    function animate() {
      time += 0.003;

      ctx.clearRect(0, 0, w, h);

      const centerX = -w * 0.15 + Math.sin(time * 0.5) * 100;
      const centerY = h * 0.2 + Math.cos(time * 0.3) * 80;

      const mainGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, w * 0.9
      );

      mainGradient.addColorStop(0, 'rgba(99, 102, 241, 0.4)');
      mainGradient.addColorStop(0.3, 'rgba(139, 92, 246, 0.25)');
      mainGradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.15)');
      mainGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = mainGradient;
      ctx.fillRect(0, 0, w, h);

      const accentX = w * 0.3 + Math.cos(time * 0.4) * 120;
      const accentY = h * 0.15 + Math.sin(time * 0.6) * 100;

      const accentGradient = ctx.createRadialGradient(
        accentX, accentY, 0,
        accentX, accentY, w * 0.5
      );

      accentGradient.addColorStop(0, 'rgba(236, 72, 153, 0.3)');
      accentGradient.addColorStop(0.4, 'rgba(219, 39, 119, 0.15)');
      accentGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = accentGradient;
      ctx.fillRect(0, 0, w, h);

      const tertiaryX = w * 0.1 + Math.sin(time * 0.7) * 60;
      const tertiaryY = h * 0.4 + Math.cos(time * 0.5) * 70;

      const tertiaryGradient = ctx.createRadialGradient(
        tertiaryX, tertiaryY, 0,
        tertiaryX, tertiaryY, w * 0.4
      );

      tertiaryGradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
      tertiaryGradient.addColorStop(0.5, 'rgba(96, 165, 250, 0.12)');
      tertiaryGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = tertiaryGradient;
      ctx.fillRect(0, 0, w, h);

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(80px)' }}
    />
  );
}
