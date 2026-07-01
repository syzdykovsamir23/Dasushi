import { motion } from 'framer-motion';
import { Bike, Clock, Shield, Package } from 'lucide-react';
import { Reveal, TextReveal } from './Reveal';
import PremiumButton from './PremiumButton';

const steps = [
  { icon: Package, title: 'Заказ на сайте', text: 'Соберите заказ из меню за пару минут.' },
  { icon: Shield, title: 'Премиум-упаковка', text: 'Термоконтейнеры сохраняют вкус и температуру.' },
  { icon: Bike, title: 'Доставка 45 минут', text: 'По всей Астане.' },
  { icon: Clock, title: 'Ежедневно 10:30–23:00', text: 'Заказывайте к точному времени.' },
];

export default function Delivery() {
  return (
    <section className="relative py-24 md:py-36 px-5 md:px-12 overflow-hidden">
      <div className="ambient-blob w-[500px] h-[500px] bg-pink-glow/8 top-0 left-1/4 animate-orb" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <span className="fluid-eyebrow text-crimson-bright">Доставка · 配達</span>
              <h2 className="fluid-title font-display font-light text-white mt-4">
                <TextReveal text="Dasushi" />{' '}
                <span className="text-gradient-red italic">дома</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-white/55 leading-relaxed">
                Премиальная доставка суши по Астане. Те же ингредиенты, та же подача —
                в комфорте вашего дома. Бесплатная доставка от 15 000 ₸.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={0.2 + i * 0.08}>
                  <motion.div whileHover={{ y: -6 }} className="liquid-glass rounded-2xl p-5 border-glow group hover:shadow-dynamic transition-shadow">
                    <div className="w-11 h-11 rounded-xl glass-red flex items-center justify-center mb-3 transition-transform group-hover:scale-110 group-hover:bloom-crimson">
                      <s.icon size={18} className="text-crimson-bright" />
                    </div>
                    <h4 className="font-display text-lg text-white">{s.title}</h4>
                    <p className="text-xs text-white/45 mt-1">{s.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <div className="mt-8">
                <PremiumButton cursorLabel="Заказать">Заказать доставку</PremiumButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              <motion.div
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl overflow-hidden aspect-[4/5] liquid-glass border-glow"
              >
                <img src="/images/dasushi.png" alt="Доставка Dasushi" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
                <div className="absolute inset-0 glass-reflection" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -left-4 md:-left-8 liquid-glass rounded-2xl p-5 border-glow bloom-soft"
              >
                <p className="font-display text-4xl text-gradient-red">45 мин</p>
                <p className="text-xs text-white/60 mt-1">среднее время доставки</p>
              </motion.div>
              {/* Floating kanji */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.08 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute -top-6 -right-2 font-jp text-6xl text-crimson pointer-events-none"
              >
                配達
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
