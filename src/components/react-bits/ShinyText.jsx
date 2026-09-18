import React from 'react';

/**
 * ShinyText inspired by React Bits (https://reactbits.dev/text-animations/shiny-text)
 * Creates a sweeping metallic sheen across text
 */
export const ShinyText = ({
  text,
  children,
  disabled = false,
  speed = 4,
  className = '',
  style = {},
  color = '#B5B5B5',
  shineColor = '#FFFFFF',
}) => {
  const content = text || children;

  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        display: 'inline-block',
        color: color,
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} 38%, ${shineColor} 50%, ${color} 62%, ${color} 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: disabled ? 'none' : `shinyTextSweep ${speed}s linear infinite`,
        ...style,
      }}
    >
      {content}
      <style>{`
        @keyframes shinyTextSweep {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
