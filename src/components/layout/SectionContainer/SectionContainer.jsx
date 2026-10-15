import React, { useEffect, useRef, useState } from 'react';
import './SectionContainer.css';

export function SectionContainer({
  id,
  children,
  className = '',
  fullWidth = false,
  noPadding = false,
  ariaLabel
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const sectionClasses = [
    'section-container',
    fullWidth ? 'is-fullwidth' : '',
    noPadding ? 'no-padding' : '',
    isVisible ? 'is-revealed' : 'is-hidden',
    className
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      ref={sectionRef}
      className={sectionClasses}
      aria-label={ariaLabel || id}
    >
      <div className="section-inner-wrapper">
        {children}
      </div>
    </section>
  );
}
