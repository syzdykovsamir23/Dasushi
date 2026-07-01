import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal, TextReveal } from './Reveal';

const features = [
  {
    img: '/images/атмосфера.png',
    title: 'Атмосфера',
    jp: '空間',
    text: 'Атмосфера прямо из Японии',
  },
  {
    img: '/images/подача.png',
    title: 'Свежесть',
    jp: '鮮',
    text: 'Только свежайшие ингредиенты: лосось, тунец, гребешок, креветка. Каждый день — новая поставка морепродуктов.',
  },
  {
    img: '/images/разнообразие.png',
    title: 'Разнообразие',
    jp: '多様',
    text: 'Более 80 блюд в меню: сеты, роллы, пицца, рамен и закуски. Найдём идеальный вкус для каждого гостя.',
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%']);

  return (
    <section id="experience" ref={containerRef} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="ambient-blob w-[600px] h-[600px] bg-crimson/8 top-0 right-0 animate-orb" />

        <div className="max-w-7xl mx-auto w-full px-5 md:px-12 mb-10 relative z-10">
          <Reveal>
            <span className="fluid-eyebrow text-crimson-bright">Атмосфера · 空間</span>
            <h2 className="fluid-title font-display font-light text-white smt-4 max-w-3xl">
              <TextReveal text="Пространство, где" />{' '}
              <span className="text-gradient-red italic">Время Замирает</span>
            </h2>
          </Reveal>
        </div>

        <motion.div style={{ x }} className="flex gap-6 px-5 md:px-12 relative z-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[80vw] md:w-[42vw] lg:w-[34vw] flex-shrink-0 rounded-3xl overflow-hidden liquid-glass border-glow group shadow-dynamic"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
                <div className="absolute inset-0 glass-reflection" />
                {/* Floating JP char */}
                <span className="absolute top-5 right-5 font-jp text-2xl text-crimson-bright/60">{f.jp}</span>
                {/* Number */}
                <span className="absolute top-5 left-5 font-display text-5xl text-white/10">0{i + 1}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl text-white">{f.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{f.text}</p>
              </div>
              {/* Hover edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,32,79,0.2), inset 0 0 60px -10px rgba(255,32,79,0.2)' }} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 px-5 md:px-12 max-w-7xl mx-auto w-full relative z-10">
          <div className="h-[2px] w-full bg-white/8 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full glow-line"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
