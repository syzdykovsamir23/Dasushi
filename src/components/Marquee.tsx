export default function Marquee() {
  const items = [
    'Свежайшие морепродукты',
    'Авторские роллы',
    'Премиум сеты',
    'Доставка по Астане',
    '80+ блюд в меню',
    'Японская пицца',
    'Искусство вкуса',
  ];
  const row = [...items, ...items];
  return (
    <div className="relative py-8 md:py-10 border-y border-white/8 overflow-hidden bg-[#0a0a0a]">
      {/* Glow edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center mx-8 group">
            <span className="font-display text-3xl md:text-5xl text-white/70 font-light group-hover:text-gradient-red transition-all duration-500">{item}</span>
            <span className="mx-8 text-crimson text-2xl" style={{ filter: 'drop-shadow(0 0 6px rgba(255,32,79,0.6))' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
