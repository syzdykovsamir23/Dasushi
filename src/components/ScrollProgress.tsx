import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9999]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #ff204f, #ff5c7a, #ff8fa6)',
        boxShadow: '0 0 12px rgba(255,32,79,0.7)',
      }}
    />
  );
}
