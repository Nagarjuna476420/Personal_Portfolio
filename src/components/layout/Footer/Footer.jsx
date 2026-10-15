import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-copy">
          © {new Date().getFullYear()} Nagarjuna Reddy Chinthala. Designed &amp; built with React &amp; clean architecture.
        </p>
        <button
          className="back-to-top-btn glass-panel"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}
