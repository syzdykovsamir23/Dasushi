import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Plus, Flame, Search, X } from 'lucide-react';
import { menu, categories, formatPrice, type MenuItem } from '../data';
import { Reveal, TextReveal } from './Reveal';

function Card({ item }: { item: MenuItem }) {
  const [hover, setHover] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(useTransform(rx, [-0.5, 0.5], ['10deg', '-10deg']), { stiffness: 200, damping: 18 });
  const rotateY = useSpring(useTransform(ry, [-0.5, 0.5], ['-10deg', '10deg']), { stiffness: 200, damping: 18 });

  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glowX = useTransform(gx, (v) => `${v}%`);
  const glowY = useTransform(gy, (v) => `${v}%`);
  const glowPos = useTransform([glowX, glowY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,32,79,0.25), transparent 50%)`);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set(py - 0.5);
    ry.set(px - 0.5);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
    setHover(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="perspective"
    >
      <motion.div
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformPerspective: 1400 }}
        className="group relative rounded-3xl overflow-hidden bg-black"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: glowPos }}
        />

        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
            animate={{ scale: hover ? 1.15 : 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent" />
          <div className="absolute inset-0 glass-reflection" />

          {item.signature && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bloom-crimson"
              style={{ background: 'linear-gradient(135deg,#ff204f,#ff5c7a)' }}
            >
              <Flame size={11} /> Фирменное
            </motion.div>
          )}

<div
  className="absolute top-4 right-4 z-50 rounded-full px-4 py-2"
  style={{
    background: "rgba(255,32,79,0.18)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,32,79,0.3)",
  }}
>
  <span className="text-sm font-bold text-white">
    {formatPrice(item.price)}
  </span>
</div>
          <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap max-w-[70%]">
            {item.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-wider text-white/70 glass rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative p-5 z-10" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl text-white leading-tight">{item.name}</h3>
            <span className="text-xs text-white/40 whitespace-nowrap mt-1">{item.weight}</span>
          </div>
          <p className="mt-2 text-xs text-white/50 leading-relaxed line-clamp-2">{item.description}</p>

          <button
            data-cursor
            data-cursor-label="Добавить"
            className="mt-4 flex items-center gap-2 text-sm font-medium text-crimson-bright group/btn"
          >
            <span className="w-8 h-8 rounded-full glass-red flex items-center justify-center transition-all duration-300 group-hover/btn:rotate-90 group-hover/btn:scale-110">
              <Plus size={14} />
            </span>
            В корзину
          </button>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,32,79,0.3), inset 0 0 80px -20px rgba(255,32,79,0.3)' }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let result = active === 'all' ? menu : menu.filter((m) => m.category === active || (active === 'signature' && m.signature));
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (m) => m.name.toLowerCase().includes(q) || m.description.toLowerCase().includes(q) || m.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [active, search]);

  return (
    <section id="menu" className="relative py-24 md:py-36 px-5 md:px-12">
      <div className="ambient-blob w-[500px] h-[500px] bg-crimson/8 top-1/3 -left-40 animate-orb" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="fluid-eyebrow text-crimson-bright">Меню · メニュー</span>
              <h2 className="fluid-title font-display font-light text-white mt-4">
                <TextReveal text="Каждое блюдо —" />{' '}
                <span className="text-gradient-red italic">история</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/55 text-sm leading-relaxed">
              Авторское меню, созданное шеф-поваром Дайсаку. Только сезонные ингредиенты, выловленные в экологически чистых водах.
            </p>
          </div>
        </Reveal>

        {/* Search bar */}
        <Reveal delay={0.05}>
          <div className="relative mb-8 max-w-md">
            <div className="flex items-center gap-3 rounded-full liquid-glass border-glow px-5 py-3.5 focus-within:shadow-dynamic transition-shadow">
              <Search size={18} className="text-crimson-bright flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск по меню..."
                className="w-full bg-transparent text-white placeholder-white/30 outline-none text-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="text-white/40 hover:text-white transition-colors flex-shrink-0">
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Category filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10 no-scrollbar">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                data-cursor
                className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-400 ${
                  active === c.id
                    ? 'text-white bloom-crimson'
                    : 'text-white/50 hover:text-white liquid-glass'
                }`}
                style={active === c.id ? { background: 'linear-gradient(135deg,#ff204f,#ff5c7a)' } : {}}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {c.label}
                  <span className="text-[10px] opacity-50 font-sans">{c.jp}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Results count */}
        <div className="mb-6 text-xs text-white/40">
          Найдено: {filtered.length} {filtered.length === 1 ? 'блюдо' : filtered.length < 5 ? 'блюда' : 'блюд'}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-white/40">Ничего не найдено</p>
            <p className="text-sm text-white/30 mt-2">Попробуйте изменить запрос или категорию</p>
          </div>
        )}
      </div>
    </section>
  );
}
