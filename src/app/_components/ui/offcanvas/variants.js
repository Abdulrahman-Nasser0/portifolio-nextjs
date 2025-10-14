export const slideLeft = {
  initial: {
    x: '100%',
  },
  enter: {
    x: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
