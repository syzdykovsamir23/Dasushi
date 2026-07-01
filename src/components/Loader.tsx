import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from '../logo';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [draw, setDraw] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setDraw(true), 200);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    const t2 = setTimeout(() => setDone(true), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval);
    };
  }, []);

  const pct = Math.min(100, Math.round(progress));

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-[#050505]"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Aurora background */}
          <div className="absolute inset-0 bg-aurora opacity-40" />
          <div className="ambient-blob w-[400px] h-[400px] bg-crimson/15 top-1/3 left-1/3 animate-orb" />
          <div className="ambient-blob w-[300px] h-[300px] bg-pink-glow/10 bottom-1/4 right-1/4 animate-float-slow" />

          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.04]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,32,79,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,32,79,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Logo with animated SVG draw */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            {/* Bloom behind logo */}
            <motion.div
              className="absolute inset-0 blur-3xl rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,32,79,0.5), transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <AnimatedLogo size={130} draw={draw} />
          </motion.div>

          {/* Brand name letter reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative z-10 mt-8 flex items-center gap-3"
          >
            <span className="font-display text-2xl md:text-3xl tracking-[0.3em] text-white font-light">
              {'DASUSHI'.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.9 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </motion.div>

          {/* Japanese subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative z-10 mt-2 font-jp text-sm text-crimson-bright/60 tracking-[0.4em]"
          >
            だすし
          </motion.div>

          {/* Progress bar + percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="relative z-10 mt-10 flex flex-col items-center gap-3"
          >
            <div className="h-[1.5px] w-52 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg,#ff204f,#ff5c7a,#ff8fa6)' }}
                animate={{ width: `${pct}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans tabular-nums text-white/40 tracking-widest">
                {String(pct).padStart(3, '0')}
              </span>
              <span className="text-xs text-crimson-bright/50">— загрузка опыта</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
