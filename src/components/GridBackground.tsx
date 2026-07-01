import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Animated SVG grid background with parallax depth
export default function GridBackground({
  opacity = 0.04,
  size = 60,
}: {
  opacity?: number;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const opacityMotion = useTransform(scrollYProgress, [0, 0.5, 1], [0, opacity, 0]);

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{ y, opacity: opacityMotion }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,32,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,32,79,0.5) 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)',
        }}
      />
    </motion.div>
  );
}
