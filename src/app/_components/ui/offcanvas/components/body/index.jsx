// eslint-disable-next-line no-unused-vars
import * as motion  from 'motion/react-client';
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
      <div>
          <NavigationLinks onMenuClose={onMenuClose} />
      </div>

    </motion.div>
  );
}