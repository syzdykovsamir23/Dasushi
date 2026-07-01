import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '../data';

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(value);
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }
    const isFloat = value.includes('.');
    const controls = animate(0, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(isFloat ? v.toFixed(1) : Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-2xl">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden liquid-glass">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0a0a] p-8 md:p-10 text-center group hover:bg-crimson/5 transition-colors duration-500 relative overflow-hidden"
          >
            {/* Hover glow spot */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255,32,79,0.1), transparent 70%)' }} />
            <p className="font-display text-5xl md:text-6xl text-gradient-red font-light relative z-10">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-xs md:text-sm text-white/50 uppercase tracking-wider relative z-10">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
