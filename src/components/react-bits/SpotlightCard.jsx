import React, { useRef, useState } from 'react';

/**
 * SpotlightCard inspired by React Bits (https://reactbits.dev/components/spotlight-card)
 * Monochrome Edition: Subtle silver-white cursor tracking glow on dark surface
 */
export const SpotlightCard = ({
  children,
  className = '',
  contentClassName = '',
  contentStyle = {},
  spotlightColor = 'rgba(255, 255, 255, 0.07)',
  style = {},
  ...props
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`spotlight-card ${className}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.25s ease, box-shadow 0.3s ease',
        ...style,
      }}
      {...props}
    >
      {/* Dynamic mouse spotlight layer */}
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
          zIndex: 1,
        }}
      />
      {/* Content Container */}
      <div
        className={`spotlight-content ${contentClassName}`}
        style={{ position: 'relative', zIndex: 2, height: '100%', width: '100%', ...contentStyle }}
      >
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
