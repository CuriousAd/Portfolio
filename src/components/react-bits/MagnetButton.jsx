import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagnetButton inspired by React Bits (https://reactbits.dev/animations/magnet)
 * Monochrome Edition: Stark contrast, tactile spring physics
 */
export const MagnetButton = ({
  children,
  className = '',
  strength = 0.25,
  onClick,
  href,
  target,
  rel,
  style = {},
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  ...props
}) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: 'rgba(255, 255, 255, 0.04)',
          color: '#EDEDED',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: '#EDEDED',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        };
      case 'primary':
      default:
        return {
          backgroundColor: '#FFFFFF',
          color: '#08080A',
          border: '1px solid #FFFFFF',
          boxShadow: '0 4px 18px rgba(255, 255, 255, 0.12)',
        };
    }
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    padding: '0.78rem 1.6rem',
    borderRadius: 'var(--radius-full)',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    position: 'relative',
    textDecoration: 'none',
    overflow: 'hidden',
    userSelect: 'none',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
    ...getVariantStyles(),
    ...style,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      style={baseStyle}
      className={`magnet-button ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagnetButton;
