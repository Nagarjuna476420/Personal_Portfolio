import React from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'glass',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  target,
  rel,
  disabled = false,
  type = 'button',
  ...props
}) {
  const combinedClassName = `btn-custom btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
