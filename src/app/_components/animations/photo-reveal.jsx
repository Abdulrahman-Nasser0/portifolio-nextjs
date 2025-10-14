import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';

export function PhotoReveal({ 
  children, 
  delay = 1.2,
  duration = 1
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const variants = {
    initial: {
      scale: 0.9, 
      opacity: 0,
      y: 40, 
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2, 
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial='initial'
      animate={isVisible ? 'animate' : 'initial'}
      whileHover='hover'
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
