import React from 'react';
import './SectionHeading.css';

export function SectionHeading({
  title,
  gradientText,
  subtitle,
  tag,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-heading-wrapper align-${align} ${className}`}>
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className="section-title">
        {title}{' '}
        {gradientText && <span className="gradient-text">{gradientText}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
