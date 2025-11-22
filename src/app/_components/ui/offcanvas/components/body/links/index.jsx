import * as motion from 'motion/react-client';
import { useState, useEffect } from 'react';
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

  // Reset hover state when pathname changes
  useEffect(() => {
    setHoveredIndex(null);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    // Check if pathname matches exactly or starts with the href followed by a slash
    return pathname === href || pathname.startsWith(href + '/');
  };

  const handleClick = () => {
    // Reset hover state and close menu immediately when clicking a link
    setHoveredIndex(null);
    if (onMenuClose) {
      onMenuClose();
    }
  };

  return (
    <nav className="flex flex-col gap-4 md:gap-6 items-start">
      {navItems.map((data, index) => {
        const active = isActive(data.href);
        const showDot = active || hoveredIndex === index;

        return (
          <motion.div
            key={`${data.href}-${index}`}
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
              className="absolute -left-8 top-1/2 -translate-y-1/2 rounded-full bg-white w-4 h-4 hidden md:block"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white w-4 h-4 md:hidden"
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
              onClick={handleClick}
              className="relative text-5xl! transition-colors duration-300 group md:pl-8"
            >
              {data.title}
            </MagneticButton>
          </motion.div>
        );
      })}
    </nav>
  );
}