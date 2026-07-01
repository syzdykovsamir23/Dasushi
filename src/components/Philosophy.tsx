import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, TextReveal } from './Reveal';
import { AnimatedLogo } from '../logo';
import GridBackground from './GridBackground';

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-28 md:py-48 px-5 md:px-12 overflow-hidden">
      {/* Animated grid */}
      <GridBackground opacity={0.03} size={50} />

      {/* Central glow */}
      <motion.div
        className="ambient-blob w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(255,32,79,0.12), transparent 70%)',
          scale,
          opacity,
        }}
      />

      {/* Floating logo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ y, scale, opacity: useTransform(opacity, (v) => v * 0.15) }}
      >
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-crimson/30 rounded-full animate-breathe" />
          <AnimatedLogo size={400} draw />
        </div>
      </motion.div>

      {/* Text */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="flex justify-center mb-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 blur-2xl bg-crimson/40 rounded-full animate-breathe" />
              <AnimatedLogo size={80} draw />
            </motion.div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-white/90 leading-[1.15] font-light text-balance">
            <TextReveal text="Мы не готовим суши." delay={0.1} />{' '}
            <span className="text-gradient-animated italic">
              <TextReveal text="Мы создаём моменты," delay={0.4} />
            </span>{' '}
            <TextReveal text="которые остаются с вами навсегда." delay={0.7} />
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <motion.div
              animate={{ width: ['15%', '55%', '15%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-px glow-line"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
