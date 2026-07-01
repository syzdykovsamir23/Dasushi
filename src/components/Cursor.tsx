import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 25, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });
  const auraX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.8 });
  const auraY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor]');
      setHovering(!!interactive);
      if (interactive) {
        setLabel(interactive.getAttribute('data-cursor-label') || '');
      } else {
        setLabel('');
      }
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setHidden(true);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <>
      {/* Mouse-reactive aura spotlight */}
      <motion.div
        className="cursor-aura"
        style={{ x: auraX, y: auraY, opacity: hidden ? 0 : 1 }}
      />
      {/* Ring */}
      <motion.div
        className={`cursor-ring ${hovering ? 'hovering' : ''} ${clicking ? 'clicking' : ''}`}
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
      />
      {/* Label */}
      {label && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
          className="fixed top-0 left-0 z-[10001] pointer-events-none -translate-y-12 translate-x-5 rounded-full glass-red px-3 py-1 text-[10px] font-medium text-white tracking-wider whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x, y, opacity: hidden ? 0 : 1 }}
      />
    </>
  );
}
