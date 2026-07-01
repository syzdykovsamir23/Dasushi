import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { AnimatedLogo } from '../logo';
import PremiumButton from './PremiumButton';
import GridBackground from './GridBackground';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // Mouse-reactive parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });
  const logoX = useTransform(px, [-0.5, 0.5], [-25, 25]);
  const logoY = useTransform(py, [-0.5, 0.5], [-15, 15]);
  const glowX = useTransform(px, [-0.5, 0.5], [-40, 40]);
  const glowY = useTransform(py, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0 depth-layer" style={{ y, scale }}>
        <img
          src="/images/hero-sushi.jpg"
          alt="Премиальное суши Dasushi"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/80 via-[#090909]/30 to-[#090909]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909]/90 via-transparent to-[#090909]/50" />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 40%, transparent 30%, rgba(9,9,9,0.8) 100%)' }}
        />
      </motion.div>

      {/* Animated grid */}
      <GridBackground opacity={0.05} size={80} />

      {/* Mouse-reactive ambient glows */}
      <motion.div
        className="ambient-blob w-[700px] h-[700px] -top-40 -left-40 animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(255,32,79,0.15), transparent 70%)', x: glowX, y: glowY }}
      />
      <motion.div
        className="ambient-blob w-[500px] h-[500px] bottom-0 right-0 animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(255,143,166,0.08), transparent 70%)' }}
      />

      {/* Floating logo mark with mouse parallax */}
      <motion.div
        className="absolute top-1/2 right-[5%] -translate-y-1/2 z-10 hidden xl:block"
        initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ x: logoX, y: logoY }}
      >
        <div className="relative animate-float-slow">
          <motion.div
            className="absolute inset-0 blur-3xl rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,32,79,0.5), transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <AnimatedLogo size={260} draw />
          {/* Orbiting ring */}
          <div className="absolute inset-0 animate-spin-slower flex items-center justify-center">
            <div
              className="w-[340px] h-[340px] rounded-full border border-crimson/10"
              style={{ borderTopColor: 'rgba(255,32,79,0.3)' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating decorative kanji */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute top-[20%] left-[8%] z-5 font-jp text-[120px] text-crimson pointer-events-none hidden lg:block"
        style={{ x: glowX, y: glowY }}
      >
        鮨
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex min-h-screen flex-col justify-end pb-16 md:pb-24 px-5 md:px-12 max-w-7xl mx-auto"
        style={{ opacity, y: textY, scale: textScale }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.7 + i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Star size={14} className="fill-crimson text-crimson" style={{ filter: 'drop-shadow(0 0 4px rgba(255,32,79,0.6))' }} />
              </motion.span>
            ))}
          </span>
          <span className="fluid-eyebrow text-white/70">Премиальный суши-ресторан · Астана</span>
        </motion.div>

        {/* Kinetic hero typography */}
        <h1 className="fluid-hero font-display font-light text-white">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Искусство
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-gradient-animated italic"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              вкуса
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 2.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              в каждой детали
            </motion.span>
          </span>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 3.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/60 font-light leading-relaxed"
        >
          Dasushi — это симфония японских традиций и современной роскоши.
          Свежайшие ингредиенты, авторская подача, атмосфера, которая запоминается навсегда.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <PremiumButton
            cursorLabel="Смотреть"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Открыть меню
            <ArrowDown size={16} />
          </PremiumButton>
          <PremiumButton
            variant="ghost"
            cursorLabel="Забронировать"
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Забронировать столик
          </PremiumButton>
        </motion.div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="mt-14 flex flex-wrap items-center gap-8 md:gap-12 border-t border-white/8 pt-6"
        >
          {[
            { label: 'Оценка', value: '4.9 / 5', sub: '2 400+ отзывов' },
            { label: 'Меню', value: '80+ блюд', sub: 'Сеты · Роллы · Пицца' },
            { label: 'Локация', value: 'Астана', sub: 'пр. Тауелсіздік, 5' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/30">{item.label}</p>
              <p className="font-display text-lg text-white mt-1">{item.value}</p>
              <p className="text-xs text-white/40">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Листайте</span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-crimson to-transparent"
          style={{ boxShadow: '0 0 8px rgba(255,32,79,0.5)' }}
        />
      </motion.div>
    </section>
  );
}
