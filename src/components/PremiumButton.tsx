import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  cursorLabel?: string;
  type?: 'button' | 'submit';
};

export default function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  cursorLabel = '',
  type = 'button',
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      type={type}
      data-cursor
      data-cursor-label={cursorLabel}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`relative rounded-full px-8 py-4 text-sm font-semibold transition-colors duration-500 ${
        variant === 'primary' ? 'btn-liquid text-white bloom-crimson' : 'liquid-glass border-glow text-white hover:text-crimson-bright'
      } ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>
      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 shimmer opacity-0 hover:opacity-100" />
      </span>
    </motion.button>
  );
}
