import React, { useRef, useEffect } from 'react';
import { navLinks } from '../../../data/portfolioData';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import './Navbar.css';

export function Navbar() {
  const sectionIds = navLinks.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);
  const capsuleRef = useRef(null);

  // Auto-scroll the pill capsule on mobile to keep active section in view
  useEffect(() => {
    if (!capsuleRef.current) return;
    const activeEl = capsuleRef.current.querySelector('.nav-link-item.is-active');
    if (activeEl) {
      const capsule = capsuleRef.current;
      const elLeft = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const capsuleWidth = capsule.clientWidth;
      capsule.scrollTo({
        left: elLeft - (capsuleWidth / 2) + (elWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-fixed-header">
      <nav ref={capsuleRef} className="navbar-capsule glass-panel" aria-label="Main Navigation">
        {/* Sleek Brand Logo Pill */}
        <a
          href="#home"
          className={`nav-brand-logo ${activeSection === 'home' ? 'is-active' : ''}`}
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Nagarjuna Reddy Chintala - Home"
        >
          <span className="nav-logo-badge">NR</span>
        </a>

        {navLinks.filter((item) => item.id !== 'home').map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link-item ${isActive ? 'is-active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.label}
              {isActive && <span className="nav-active-indicator" layoutid="nav-indicator" />}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
