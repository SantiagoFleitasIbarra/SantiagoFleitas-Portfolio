"use client";

import React, { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    const numParticles = 50; // Adjust for density
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 3 + 1; // Particle size 1px to 4px
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`; // Random horizontal start
      particle.style.top = `${Math.random() * 100}%`; // Random vertical start to distribute initially
      
      const duration = Math.random() * 20 + 10; // Animation duration 10s to 30s
      particle.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * duration; // Stagger animations
      particle.style.animationDelay = `-${delay}s`;

      // Custom property for drift animation
      particle.style.setProperty('--drift-x', `${Math.random() * 200 - 100}px`); // Horizontal drift between -100px and 100px

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
