/** @type {Object} */
export const slideUp = {
  initial: {
    y: '100vh', // Start completely below screen
  },
  animate: {
    y: 0, // Cover entire screen
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: '-100vh', // Slide up off screen
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

/** @type {Object} */
export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 0.5, delay: 0.4 }, // Delay until after cover animation
  },
};