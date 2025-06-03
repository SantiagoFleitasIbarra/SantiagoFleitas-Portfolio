"use client";

import React, { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 20 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * duration;
      particle.style.animationDelay = `-${delay}s`;

      // Custom property for drift animation
      particle.style.setProperty('--drift-x', `${Math.random() * 200 - 100}px`);

      container.appendChild(particle);
    }
    // Cleanup function to remove particles when component unmounts
    return () => {
      if(container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };

  }, []);

  return <div ref={particleContainerRef} className="particles" aria-hidden="true"></div>;
}
