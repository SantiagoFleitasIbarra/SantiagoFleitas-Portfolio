
"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface SpaceBlobProps {
  className?: string;
}

// Generate a random number within a range
const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function SpaceBlobAnimation({ className }: SpaceBlobProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure animations run only on client
  }, []);

  if (!isMounted) {
    // Placeholder for SSR to avoid layout shifts and hydration errors
    return <div className={cn("relative w-full aspect-square", className)} />;
  }

  return (
    <div className={cn("relative w-full h-full flex items-center justify-center overflow-hidden aspect-square", className)}>
      <div
        className="absolute w-[150%] h-[150%] rounded-full opacity-50 animate-space-blob-rotate"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, hsl(var(--primary) / 0.5) 40%, hsl(var(--background) / 0) 70%)',
          animationDelay: `${random(0, 2)}s`,
          animationDuration: `${random(20, 30)}s`,
        }}
      />
      <div
        className="absolute w-[120%] h-[120%] rounded-full opacity-40 animate-space-blob-rotate-reverse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--secondary) / 0.5) 35%, hsl(var(--background) / 0) 65%)',
          animationDelay: `${random(1, 3)}s`,
          animationDuration: `${random(25, 35)}s`,
        }}
      />
       <div
        className="absolute w-[100%] h-[100%] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-60 animate-space-blob-pulse-drift"
        style={{
          background: 'linear-gradient(45deg, hsl(var(--accent) / 0.7) 0%, hsl(var(--primary) / 0.6) 50%, hsl(var(--background) / 0) 90%)',
          animationDelay: `${random(0.5, 2.5)}s`,
          animationDuration: `${random(15, 25)}s`,
        }}
      />
    </div>
  );
}
