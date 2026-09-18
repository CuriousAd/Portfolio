import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlurText inspired by React Bits (https://reactbits.dev/text-animations/blur-text)
 * Animates text with staggered entrance and subtle blur de-focusing
 */
export const BlurText = ({
  text = '',
  delay = 0.08,
  className = '',
  style = {},
}) => {
  const words = text.split(' ');

  return (
    <span className={`blur-text-wrap ${className}`} style={{ display: 'inline-block', ...style }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 14 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
            willChange: 'filter, opacity, transform',
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
