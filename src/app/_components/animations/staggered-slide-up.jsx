import React from 'react';

import * as motion from 'motion/react-client';

export function StaggeredSlideUp({ 
  children, 
  staggerDelay = 0.1, 
  initialDelay = 2.5 
}) {
  const containerVariants = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: 300,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      animate='enter'
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
