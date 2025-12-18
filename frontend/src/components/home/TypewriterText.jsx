'use client';

import React, { useState, useEffect } from 'react';

export default function TypewriterText({ text, delay = 80, startDelay = 0, showCursor = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startDelay > 0) {
      const timer = setTimeout(() => setIndex(1), startDelay);
      return () => clearTimeout(timer);
    } else {
      setIndex(1);
    }
  }, [startDelay]);

  useEffect(() => {
    if (index > 0 && index <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, text, delay]);

  return (
    <span>
      {displayedText}
      {showCursor && index <= text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}
