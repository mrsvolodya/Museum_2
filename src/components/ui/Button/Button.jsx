import React from 'react';
import './Button.scss';

const Button = ({
  children,
  variant = 'primary',
  size = 'xs',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    fullWidth && 'button--full-width',
    disabled && 'button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
