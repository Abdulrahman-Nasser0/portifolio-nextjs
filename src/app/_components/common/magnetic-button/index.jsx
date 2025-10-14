'use client';

import { useRef } from 'react';
import * as motion from 'motion/react-client';
import { useRouter } from 'next/navigation';

import { useMagnetic } from '../../../_hooks/use-magnetic';
import { cn } from '../../utils/cn';
import { MagneticItem } from './styled';
import { magneticVariance } from './variants';

/**
 * MagneticButton Component
 * 
 * A button with magnetic hover effect that can handle both navigation and click events.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.variant='default'] - Button style variant
 * @param {string} [props.size='default'] - Button size
 * @param {string} [props.to] - Navigation path (uses React Router)
 * @param {Function} [props.onClick] - Click handler function
 * @param {...Object} props - Additional props passed to the button element
 */
export function MagneticButton({
  children,
  className,
  variant = 'default',
  size = 'default',
  to,
  onClick,
  ...props
}) {
  const elementRef = useRef(null);
  const router = useRouter();
  
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  const handleClick = (e) => {
    if (to) {
      e.preventDefault();
      try {
        router.push(to);
        // Call onClick after successful navigation (useful for closing menus, etc.)
        if (onClick && typeof onClick === 'function') {
          onClick(e);
        }
      } catch (error) {
        console.error('Navigation error:', error);
        // If navigation fails, still call onClick if provided
        if (onClick && typeof onClick === 'function') {
          onClick(e);
        }
      }
    } else if (onClick && typeof onClick === 'function') {
      // Handle regular click without navigation
      onClick(e);
    }
  };

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size }), className)}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      {...props}
    >
      <MagneticItem>{children}</MagneticItem>
    </motion.button>
  );
}