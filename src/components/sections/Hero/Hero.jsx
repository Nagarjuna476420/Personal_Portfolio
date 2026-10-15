import React, { useEffect, useState } from 'react';
import { personalInfo } from '../../../data/portfolioData';
import { Button } from '../../common/Button/Button';
import { ArrowDown, FileText, Send, Sparkles } from 'lucide-react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './Hero.css';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (prefersReducedMotion || isMobile) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  // Subtle parallax translation and opacity fade on desktop only
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const parallaxOffset = (prefersReducedMotion || isMobile) ? 0 : Math.min(scrollY * 0.25, 200);
  const opacityFade = (prefersReducedMotion || isMobile) ? 1 : Math.max(1 - scrollY / 700, 0.2);

  return (
    <section id="home" className="hero-section" aria-label="Home">
      <div
        className="hero-inner-container"
        style={{
          transform: isMobile ? 'none' : `translate3d(0, ${parallaxOffset}px, 0)`,
          opacity: isMobile ? 1 : opacityFade
        }}
      >
        <div className="hero-badge">
          <Sparkles size={14} className="hero-badge-icon" />
          <span>{personalInfo.role} · {personalInfo.specialization}</span>
        </div>

        <h1 className="hero-title">
          <span>{personalInfo.name}</span>
          <span className="gradient-text hero-surname">{personalInfo.surname}</span>
        </h1>

        <div className="hero-headline">{personalInfo.headline}</div>

        <p className="hero-bio muted">{personalInfo.bio}</p>

        <div className="hero-actions-row">
          <Button
            variant="primary"
            size="lg"
            href="#projects"
            icon={<ArrowDown size={16} />}
          >
            View My Work
          </Button>

          <Button
            variant="glass"
            size="lg"
            href={`mailto:${personalInfo.email}?subject=Resume%20Request%20-%20Nagarjuna%20Reddy`}
            icon={<FileText size={16} />}
          >
            Download Resume
          </Button>

          <Button
            variant="glass"
            size="lg"
            href="#contact"
            icon={<Send size={16} />}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
