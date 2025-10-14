import { useState } from 'react';
import { motion } from 'motion/react';
import { Dot } from 'lucide-react';

import { Center } from '../ui/center';
import { useTimeOut } from '../hooks/use-time-out';
import { fade } from './variants';

const pageNames = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/contact': 'Contact'
};

const MotionComponent = motion(Center);

export function Preloader() {
  const [index, setIndex] = useState(0);
  const pageName = pageNames[location.pathname];

  useTimeOut({
    callback: () => {
      setIndex(prevIndex => prevIndex + 1);
    },
    duration: index === 0 ? 500 : 250,
    deps: [location.pathname],
  });

  /** @type {Object} */
  const pageTransition = {
    initial: {
      y: '100%',
      borderRadius: '100px 100px 0 0',
    },
    animate: {
      y: 0,
      borderRadius: '0px 0px 0 0',
      transition: { 
        duration: 0.6, 
        ease: [0.76, 0, 0.24, 1],
        borderRadius: { duration: 0.2, delay: 0.2 }
      },
    },
    exit: {
      y: '-100%',
      borderRadius: '0 0 100px 100px',
      transition: { 
        duration: 0.6, 
        ease: [0.76, 0, 0.24, 1], 
        delay: 0.1,
        borderRadius: { duration: 0.2 }
      },
    },
  };

  return (
    <motion.div
      className='fixed inset-0 z-50 flex items-center justify-center cursor-wait text-white'
      style={{ backgroundColor: '#1C1D20' }}
      variants={pageTransition}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <MotionComponent
        className='text-3xl md:text-4xl text-white'
        variants={fade}
        initial='initial'
        animate='enter'
      >
        <Dot size={48} className='me-3' />
        <p>{pageName}</p>
      </MotionComponent>
    </motion.div>
  );
}