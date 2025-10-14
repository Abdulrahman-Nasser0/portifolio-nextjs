'use client';

import * as motion from 'motion/react-client';
import { AnimatePresence } from "motion/react";

import { useState, useEffect } from "react";
import { MagneticButton } from "../magnetic-button";

export function FloatingMenuButton({ isMenuOpen, onToggle }) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down past the header
      const scrollTop = window.scrollY;
      const threshold = 100; // Show after scrolling 100px
      
      const newShouldShow = scrollTop > threshold;
      setShouldShow(newShouldShow);
    };

    // Initial check with a small delay to ensure animation
    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <AnimatePresence mode="wait">
      {(shouldShow || isMenuOpen) && (
        <motion.div
          key="floating-button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.4
          }}
          className="!fixed top-6 right-4 md:right-6"
          style={{ 
            zIndex: isMenuOpen ? 60 : 50,
            transformOrigin: "center"
          }}
        >
          <MagneticButton
            className={`w-20 h-20 ${isMenuOpen ? '!bg-blue-600' : ''}`}
            onClick={onToggle}
            variant="ghost"
          >
            <span className="relative z-10 block w-max">
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                {/* Top line */}
                <motion.span
                  className="block w-8 h-0.5 bg-white absolute rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -3,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                
                {/* Bottom line */}
                <motion.span
                  className="block w-8 h-0.5 bg-white absolute rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 3,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
