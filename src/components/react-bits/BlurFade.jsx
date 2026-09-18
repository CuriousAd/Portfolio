import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlurFade entrance animation
 * Combines gentle upward translation, fade, and slight unblur
 */
export const BlurFade = ({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 22,
  className = '',
  style = {},
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // fluid cubic bezier
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
