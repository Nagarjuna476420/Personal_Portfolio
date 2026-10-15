import React from 'react';
import { techMarqueeItems } from '../../../data/portfolioData';
import './TechMarquee.css';

export function TechMarquee() {
  // Quadruple items to ensure seamless infinite looping even on ultra-wide screens
  const duplicatedItems = [
    ...techMarqueeItems,
    ...techMarqueeItems,
    ...techMarqueeItems,
    ...techMarqueeItems
  ];

  return (
    <div className="marquee-outer-container" aria-label="Technologies Marquee">
      <div className="marquee-track">
        {duplicatedItems.map((tech, index) => (
          <span key={`${tech}-${index}`} className="marquee-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
