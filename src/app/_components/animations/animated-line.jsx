// eslint-disable-next-line no-unused-vars
import * as motion from 'motion/react-client';

export function AnimatedLine() {
  
  return (
  <motion.path
      d="M0,50 Q300,100 600,50 T1200,50"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}
