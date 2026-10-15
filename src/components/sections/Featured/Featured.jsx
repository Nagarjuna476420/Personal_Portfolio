import React, { useEffect, useState, useRef } from 'react';
import { featuredSteps } from '../../../data/portfolioData';
import { Chip } from '../../common/Chip/Chip';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './Featured.css';

export function Featured() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      
      if (scrollableHeight <= 0) return;

      const currentProgress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
      setProgress(currentProgress);

      const calculatedIndex = Math.min(
        featuredSteps.length - 1,
        Math.floor(currentProgress * featuredSteps.length)
      );
      setActiveStepIndex(calculatedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orbTransform = prefersReducedMotion
    ? 'none'
    : `translateY(${(progress - 0.5) * -120}px) scale(${0.8 + progress * 0.45})`;

  return (
    <section id="feat" ref={containerRef} className="featured-scroll-wrapper" aria-label="Featured Project Story">
      <div className="featured-sticky-viewport">
        {/* Ambient Morphing Glowing Orb */}
        <div
          className="featured-ambient-orb"
          style={{ transform: orbTransform }}
          aria-hidden="true"
        />

        {/* Dynamic Story Cards */}
        <div className="featured-steps-stage">
          {featuredSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={step.step}
                className={`featured-step-slide ${isActive ? 'is-active-slide' : ''}`}
                aria-hidden={!isActive}
              >
                <div className="featured-step-number">{step.step} / 06</div>
                <span className="featured-step-subtitle muted">{step.subtitle}</span>
                <h2 className="featured-step-title">
                  {idx === 0 ? <span className="gradient-text">{step.title}</span> : step.title}
                </h2>
                <p className="featured-step-desc">{step.desc}</p>

                {step.chips && (
                  <div className="featured-step-chips">
                    {step.chips.map((chip) => (
                      <Chip key={chip} variant="accent" size="md">
                        {chip}
                      </Chip>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scroll Progress Bar */}
        <div className="featured-progress-bar-track">
          <div
            className="featured-progress-bar-fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
