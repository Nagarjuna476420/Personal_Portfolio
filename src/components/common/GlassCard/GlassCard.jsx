import React from 'react';
import { useTiltEffect } from '../../../hooks/useTiltEffect';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './GlassCard.css';

export function GlassCard({
  children,
  tilt = false,
  maxTilt = 8,
  glowOnHover = true,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const tiltHook = useTiltEffect(maxTilt);

  const shouldTilt = tilt && !prefersReducedMotion;
  const handlers = shouldTilt ? {
    onPointerMove: tiltHook.onPointerMove,
    onPointerLeave: tiltHook.onPointerLeave,
    ref: tiltHook.ref
  } : {};

  const cardClasses = [
    'glass-card-container',
    'glass-panel',
    glowOnHover ? 'has-glow' : '',
    shouldTilt ? 'is-tiltable' : '',
    onClick ? 'is-clickable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      style={style}
      onClick={onClick}
      {...handlers}
      {...props}
    >
      {children}
    </div>
  );
}
