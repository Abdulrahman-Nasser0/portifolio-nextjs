import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

export function PhotoReveal({ 
  children, 
  delay = 1.2,
  duration = 1
}) {
  const variants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      y: 60,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
