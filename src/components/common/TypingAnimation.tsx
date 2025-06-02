"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className,
}: TypingAnimationProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker: NodeJS.Timeout;

    if (isDeleting) {
      ticker = setTimeout(() => {
        setSubText(prev => prev.substring(0, prev.length - 1));
      }, deletingSpeed);
    } else {
      ticker = setTimeout(() => {
        setSubText(prev => texts[textIndex].substring(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && subText === texts[textIndex]) {
      clearTimeout(ticker);
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && subText === '') {
      clearTimeout(ticker);
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(ticker);
  }, [subText, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration, loopNum]);

  return (
    <span className={cn("inline-block border-r-2 border-accent pr-1", className)}>
      {subText}
    </span>
  );
}
