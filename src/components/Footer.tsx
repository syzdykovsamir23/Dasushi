import { Instagram, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { Logo } from '../logo';
import { contactInfo, navLinks, openingHours } from '../data';
import Magnetic from './Magnetic';
import { Reveal } from './Reveal';
import GridBackground from './GridBackground';

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contact" className="relative pt-24 pb-10 px-5 md:px-12 overflow-hidden border-t border-white/8">
      <GridBackground opacity={0.02} size={50} />
      <div className="ambient-blob w-[700px] h-[700px] bg-crimson/8 bottom-0 left-1/2 -translate-x-1/2 animate-orb" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top CTA */}
        <Reveal>
          <div className="text-center mb-16">
            <span className="fluid-eyebrow text-crimson-bright">Контакты · 連絡</span>
            <h2 className="fluid-title font-display font-light text-white mt-4">
              До встречи в <span className="text-gradient-red italic">Dasushi</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <span className="font-display text-2xl tracking-[0.2em] text-white">DASUSHI</span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed">
              Премиальный суши-ресторан в Астане. Искусство японской кухни в каждой детали.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: '#', label: 'Instagram', external: false },
                { icon: MessageCircle, href: `https://wa.me/77008009094?text=${encodeURIComponent('Здравствуйте! Хочу забронировать столик в Dasushi')}`, label: 'WhatsApp', external: true },
                { icon: Phone, href: `tel:${contactInfo.phone.replace(/[^\d+]/g,'')}`, label: 'Phone', external: false },
              ].map((s) => (
                <Magnetic key={s.label} strength={0.5}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    data-cursor
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-crimson-bright hover:shadow-dynamic transition-all"
                  >
                    <s.icon size={17} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="fluid-eyebrow text-white/40 mb-5">Навигация</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} data-cursor className="text-sm text-white/55 hover:text-crimson-bright transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-crimson transition-all duration-300" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="fluid-eyebrow text-white/40 mb-5">Связаться</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/55">
                <MapPin size={16} className="text-crimson-bright mt-0.5 flex-shrink-0" />
                {contactInfo.address}
              </li>
              <li>
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g,'')}`} data-cursor className="flex items-center gap-3 text-white/55 hover:text-crimson-bright transition-colors">
                  <Phone size={16} className="text-crimson-bright flex-shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} data-cursor className="flex items-center gap-3 text-white/55 hover:text-crimson-bright transition-colors">
                  <Mail size={16} className="text-crimson-bright flex-shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-white/55">
                Instagram: <span className="text-crimson-bright">{contactInfo.instagram}</span>
              </li>
            </ul>
          </div>

          {/* Hours + Map */}
          <div>
            <h4 className="fluid-eyebrow text-white/40 mb-5">Часы работы</h4>
            <ul className="space-y-2 text-sm mb-5">
              {openingHours.map((o) => (
                <li key={o.day} className="flex flex-col">
                  <span className="text-white/40 text-xs">{o.day}</span>
                  <span className="text-white/75">{o.time}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl overflow-hidden liquid-glass border-glow h-32 relative">
              <iframe
                title="Карта Dasushi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=71.40%2C51.14%2C71.50%2C51.20&layer=mapnik&marker=51.1694%2C71.4491"
                className="w-full h-full grayscale invert opacity-70"
                loading="lazy"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, transparent, rgba(255,32,79,0.05))' }} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/8">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Dasushi. Все права защищены. だすし · Астана, Казахстан
          </p>
          <div className="flex items-center gap-6">
            <button data-cursor className="text-xs text-white/35 hover:text-white/60 transition-colors">Политика конфиденциальности</button>
            <Magnetic>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-cursor data-cursor-label="Наверх"
                className="w-10 h-10 rounded-full glass-red flex items-center justify-center text-crimson-bright hover:scale-110 transition-transform">
                <ArrowUp size={16} />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
}
