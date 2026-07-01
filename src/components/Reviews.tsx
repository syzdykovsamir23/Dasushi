import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, TextReveal } from './Reveal';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '../data';

export default function Reviews() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % reviews.length);
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="relative py-24 md:py-36 px-5 md:px-12 overflow-hidden">
      <div className="ambient-blob w-[600px] h-[600px] bg-crimson/10 top-1/4 left-1/2 -translate-x-1/2 animate-orb" />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="fluid-eyebrow text-crimson-bright">Отзывы · 声</span>
            <h2 className="fluid-title font-display font-light text-white mt-4">
              <TextReveal text="Слова наших" />{' '}
              <span className="text-gradient-red italic">гостей</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative liquid-glass border-glow rounded-3xl p-8 md:p-14 min-h-[340px] shadow-dynamic overflow-hidden">
            {/* Decorative quote */}
            <Quote className="absolute top-8 left-8 text-crimson/15" size={64} />
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(255,32,79,0.15), transparent 70%)' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(reviews[active].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <Star size={16} className="fill-crimson text-crimson" style={{ filter: 'drop-shadow(0 0 4px rgba(255,32,79,0.5))' }} />
                    </motion.span>
                  ))}
                </div>
                <p className="font-display text-2xl md:text-3xl text-white/90 text-center leading-relaxed font-light italic">
                  «{reviews[active].text}»
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg bloom-crimson"
                    style={{ background: 'linear-gradient(135deg,#ff204f,#ff5c7a)' }}>
                    {reviews[active].avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium">{reviews[active].name}</p>
                    <p className="text-xs text-white/45">{reviews[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button onClick={prev} data-cursor className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-crimson-bright transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} data-cursor className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-crimson-bright transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              data-cursor
              className={`h-2 rounded-full transition-all duration-400 ${
                active === i ? 'w-10 bg-crimson bloom-crimson' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
