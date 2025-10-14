import * as motion from 'motion/react-client';

export function PhotoReveal({ 
  children, 
  delay = 1.2,
  duration = 1
}) {
  const variants = {
    initial: {
      scale: 0.9, // Slightly less scaling for smoother animation
      opacity: 0,
      y: 40, // Reduced vertical movement
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut", // Simpler easing function
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2, // Faster hover animation
        ease: "easeOut",
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
