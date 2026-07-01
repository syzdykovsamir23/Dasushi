import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faq } from '../data';
import { Reveal, TextReveal } from './Reveal';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36 px-5 md:px-12">
      <div className="ambient-blob w-[400px] h-[400px] bg-crimson/6 top-1/3 left-0 animate-orb" />
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="fluid-eyebrow text-crimson-bright">Вопросы · 質問</span>
            <h2 className="fluid-title font-display font-light text-white mt-4">
              <TextReveal text="Часто" />{' '}
              <span className="text-gradient-red italic">спрашивают</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`rounded-2xl overflow-hidden transition-all duration-500 ${open === i ? 'liquid-glass border-conic' : 'glass'}`}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  data-cursor
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-white group-hover:text-gradient-red transition-all duration-300">{item.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 135 : 0 }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-9 h-9 flex-shrink-0 rounded-full glass-red flex items-center justify-center"
                  >
                    <Plus size={18} className="text-crimson-bright" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-white/55 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
