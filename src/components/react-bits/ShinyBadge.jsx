import React from 'react';

/**
 * ShinyBadge inspired by React Bits Shiny Text & Shimmer Badge
 * Adds a modern, eye-catching animated light streak
 */
export const ShinyBadge = ({
  children,
  className = '',
  variant = 'coral', // 'coral' | 'amber' | 'neutral'
  icon = null,
  style = {},
  ...props
}) => {
  const getColors = () => {
    switch (variant) {
      case 'amber':
        return {
          bg: 'rgba(245, 158, 11, 0.12)',
          border: 'rgba(245, 158, 11, 0.3)',
          text: '#B45309',
          shimmer: 'rgba(255, 255, 255, 0.7)'
        };
      case 'neutral':
        return {
          bg: 'rgba(25, 27, 34, 0.05)',
          border: 'rgba(25, 27, 34, 0.1)',
          text: 'var(--text-primary)',
          shimmer: 'rgba(255, 255, 255, 0.8)'
        };
      case 'coral':
      default:
        return {
          bg: 'rgba(232, 99, 58, 0.1)',
          border: 'rgba(232, 99, 58, 0.28)',
          text: 'var(--accent-coral)',
          shimmer: 'rgba(255, 255, 255, 0.75)'
        };
    }
  };

  const colors = getColors();

  return (
    <span
      className={`shiny-badge ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.32rem 0.85rem',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: colors.text,
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: 'var(--radius-full)',
        overflow: 'hidden',
        backdropFilter: 'blur(8px)',
        whiteSpace: 'nowrap',
        ...style
      }}
      {...props}
    >
      {/* Light shimmer bar */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '70%',
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${colors.shimmer}, transparent)`,
          transform: 'skewX(-25deg)',
          animation: 'shimmer 3.5s infinite ease-in-out',
          pointerEvents: 'none',
        }}
      />
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>

      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          30% { left: 160%; }
          100% { left: 160%; }
        }
      `}</style>
    </span>
  );
};

export default ShinyBadge;
