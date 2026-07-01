import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Reveal, TextReveal } from './Reveal';

const items = [
  { span: 'md:col-span-2 md:row-span-2', title: 'Сеты', jp: 'セット', kanji: '盛' },
  { span: '', title: 'Холодные роллы', jp: '巻物', kanji: '巻' },
  { span: '', title: 'Запечённые', jp: '焼き', kanji: '炉' },
  { span: 'md:col-span-2', title: 'Темпура', jp: '天ぷら', kanji: '揚' },
  { span: '', title: 'Рамен', jp: 'ラーメン', kanji: '麺' },
  { span: '', title: 'Пицца', jp: 'ピザ', kanji: '焼' },
];

function GalleryItem({ item }: { item: { span: string; title: string; jp: string; kanji: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const glowX = useTransform(mx, (v) => `${v}%`);
  const glowY = useTransform(my, (v) => `${v}%`);
  const glow = useTransform([glowX, glowY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,32,79,0.3), transparent 50%)`);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <Reveal className={item.span}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        whileHover={{ scale: 0.97 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full rounded-2xl overflow-hidden liquid-glass border-glow group cursor-pointer"
        data-cursor
        data-cursor-label="Смотреть"
        style={{ background: 'linear-gradient(135deg, rgba(255,32,79,0.05), rgba(255,92,122,0.02))' }}
      >
        {/* Giant kanji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-jp text-8xl md:text-9xl select-none"
            style={{ color: 'rgba(255,32,79,0.1)' }}
            whileHover={{ scale: 1.15, opacity: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.kanji}
          </motion.span>
        </div>
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 100%, rgba(255,32,79,0.08), transparent 70%)' }} />
        {/* Mouse glow */}
        <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: glow }} />
        {/* Reveal content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="font-jp text-sm text-crimson-bright mb-1">{item.jp}</span>
          <span className="font-display text-2xl text-white">{item.title}</span>
        </div>
        {/* Edge glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(255,32,79,0.3), inset 0 0 60px -10px rgba(255,32,79,0.3)' }} />
      </motion.div>
    </Reveal>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-36 px-5 md:px-12">
      <div className="ambient-blob w-[500px] h-[500px] bg-pink-glow/6 bottom-1/4 right-0 animate-orb" />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="fluid-eyebrow text-crimson-bright">Галерея · 写真</span>
              <h2 className="fluid-title font-display font-light text-white mt-4">
                <TextReveal text="Визуальный" />{' '}
                <span className="text-gradient-red italic">праздник</span>
              </h2>
            </div>
            <p className="max-w-sm text-white/55 text-sm leading-relaxed">
              Каждое блюдо — визуальное произведение. Наведите курсор, чтобы увидеть детали.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {items.map((item, i) => (
            <GalleryItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
