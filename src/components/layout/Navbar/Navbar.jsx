import React from 'react';
import { navLinks } from '../../../data/portfolioData';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import './Navbar.css';

export function Navbar() {
  const sectionIds = navLinks.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-fixed-header">
      <nav className="navbar-capsule glass-panel" aria-label="Main Navigation">
        {navLinks.map((item) => {
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
