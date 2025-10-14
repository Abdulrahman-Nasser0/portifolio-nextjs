import * as motion from 'motion/react-client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { slide } from './variants';
import { MagneticButton } from '../../../../../common/magnetic-button';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

export function NavigationLinks({ onMenuClose }) {
const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex flex-col gap-4 md:gap-6 items-start">
      {navItems.map((data, index) => {
        const active = isActive(data.href);
        const showDot = active || hoveredIndex === index;

        return (
          <motion.div
            key={index}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative w-full md:w-fit"
          >
            {/* Desktop dot - positioned relative to button */}
            <motion.span
              className="absolute -left-8 top-1/2 -translate-y-1/2 rounded-full bg-white w-[1rem] h-[1rem] hidden md:block"
              initial={{ scale: 0 }}
              animate={{
                scale: showDot ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            />
            
            {/* Mobile dot - positioned at far right of container */}
            <motion.span
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white w-[1rem] h-[1rem] md:hidden"
              initial={{ scale: 0 }}
              animate={{
                scale: showDot ? 1 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            />
            
            <MagneticButton
              to={data.href}
              onClick={onMenuClose}
              className="relative !text-5xl transition-colors duration-300 group md:pl-8"
            >
              {data.title}
            </MagneticButton>
          </motion.div>
        );
      })}
    </nav>
  );
}