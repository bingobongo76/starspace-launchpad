import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionOffsets = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: ScrollRevealProps) => {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: offset.y,
        x: offset.x
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
