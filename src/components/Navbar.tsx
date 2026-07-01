import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, contactInfo } from '../data';
import { Logo } from '../logo';
import Magnetic from './Magnetic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      let current = '';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 160 && r.bottom >= 160) current = link.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 3.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div
            className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-700 ${
              scrolled ? 'liquid-glass border-glow bloom-soft' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <Magnetic strength={0.3}>
              <button onClick={() => go('hero')} className="flex items-center gap-3 group" data-cursor>
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Logo size={38} />
                </motion.span>
                <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-white">
                  DASUSHI
                </span>
              </button>
            </Magnetic>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <Magnetic key={l.id} strength={0.25}>
                  <button
                    onClick={() => go(l.id)}
                    data-cursor
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active === l.id ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {l.label}
                    {active === l.id && (
                      <motion.span
                        layoutId="navactive"
                        className="absolute inset-0 -z-10 rounded-full glass-red border-glow"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                </Magnetic>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.3} className="hidden md:block">
                <button
                  onClick={() => go('reservation')}
                  data-cursor
                  data-cursor-label="Бронь"
                  className="btn-liquid relative rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                >
                  <span className="relative z-10">Забронировать</span>
                </button>
              </Magnetic>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 text-white"
                aria-label="Меню"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9995] bg-[#090909]/95 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <Logo size={36} />
                <span className="font-display text-xl tracking-[0.2em]">DASUSHI</span>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-white" data-cursor>
                <X size={26} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 mt-6">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => go(l.id)}
                  className="flex items-baseline justify-between border-b border-white/8 py-4 group"
                >
                  <span className="font-display text-3xl text-white group-hover:text-gradient-red transition-all">
                    {l.label}
                  </span>
                  <span className="text-xs text-crimson/60 font-jp">{l.jp}</span>
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto p-6 space-y-3">
              <button
                onClick={() => go('reservation')}
                className="w-full btn-liquid rounded-full py-4 font-semibold text-white"
              >
                <span className="relative z-10">Забронировать столик</span>
              </button>
              <a
                href={`tel:${contactInfo.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center justify-center gap-2 text-white/70"
              >
                <Phone size={16} /> {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
