import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react';
import { useTimeOut } from '../hooks/use-time-out';
import { Preloader } from './index';

/** @param {import('react').PropsWithChildren<{ duration?: number }>} */
export function TransitionWrapper({ children, duration = 1000 }) {
  // Skip this wrapper's preloader the very first time a route mounts (after the app-level preloader)
  let skipPreloader = false;
  if (typeof window !== 'undefined') {
    if (!window.__ROUTE_HAS_RENDERED_ONCE) {
      // first route render after initial app preloader
      window.__ROUTE_HAS_RENDERED_ONCE = true;
      skipPreloader = true;
    }
  }

  const [isLoading, setLoading] = useState(!skipPreloader);

  useTimeOut({
    callback: () => {
      if (!skipPreloader) {
        setLoading(false);
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }
    },
    duration,
    deps: [],
  });

  /** @type {Object} */
  const pageContentSlideUp = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1 // Small delay after preloader exits
      },
    },
  };

  return (
    <div className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {!isLoading ? (
        <motion.div 
          className='min-h-screen'
          variants={pageContentSlideUp}
          initial='initial'
          animate='animate'
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  );
}