import React from 'react';
import './Chip.css';

export function Chip({
  label,
  children,
  variant = 'default',
  size = 'md',
  interactive = true,
  className = ''
}) {
  const content = label || children;
  const chipClass = `chip-badge chip-${variant} chip-${size} ${interactive ? 'chip-interactive' : ''} ${className}`.trim();

  return (
    <span className={chipClass}>
      {content}
    </span>
  );
}
