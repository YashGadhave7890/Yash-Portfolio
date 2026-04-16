"use client";

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const [isClient, setIsClient] = useState(false);

  // Smooth scroll spring animation
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Parallax effects
  const parallaxY = useTransform(smoothScrollY, [0, 1000], [0, -50]);
  const parallaxScale = useTransform(smoothScrollY, [0, 1000], [1, 0.8]);
  const parallaxOpacity = useTransform(smoothScrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <motion.div
      style={{
        y: parallaxY,
        scale: parallaxScale,
        opacity: parallaxOpacity
      }}
      className="transition-all duration-300"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimations;
