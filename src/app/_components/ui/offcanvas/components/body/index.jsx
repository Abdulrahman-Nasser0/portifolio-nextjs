// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { NavigationLinks } from './links';
import { opacity } from './variants';

export function MenuBody({ onMenuClose }) {
  return (
    <motion.div
      className="flex flex-col justify-between h-full"
      variants={opacity}
      initial="initial"
      animate="enter"
    >
      {/* Navigation Links */}
      <div className="">
          <NavigationLinks onMenuClose={onMenuClose} />
      </div>

      {/* Additional content can go here */}
    </motion.div>
  );
}