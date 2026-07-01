import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, Mail, Check, MessageSquare, AlertCircle } from 'lucide-react';
import { Reveal, TextReveal } from './Reveal';
import { openingHours, contactInfo } from '../data';
import PremiumButton from './PremiumButton';

// Номер WhatsApp ресторана (только цифры, с кодом страны, без плюса и пробелов)
const WHATSAPP_NUMBER = "77008009094";

export default function Reservation() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '19:00', guests: '2', notes: '',
  });

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (error) setError('');
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация обязательных полей
    if (!form.name.trim()) { setError('Пожалуйста, укажите ваше имя'); return; }
    if (!form.phone.trim()) { setError('Пожалуйста, укажите номер телефона'); return; }
    if (!form.date) { setError('Пожалуйста, выберите дату'); return; }
    if (!form.time) { setError('Пожалуйста, выберите время'); return; }
    if (!form.guests) { setError('Пожалуйста, укажите количество гостей'); return; }

    setError('');

    // Формирование сообщения для WhatsApp
    const message =
      `🍣 Новая бронь\n\n` +
      `👤 Имя: ${form.name}\n` +
      `📞 Телефон: ${form.phone}\n` +
      `📧 Email: ${form.email || '—'}\n` +
      `📅 Дата: ${form.date}\n` +
      `🕒 Время: ${form.time}\n` +
      `👥 Гостей: ${form.guests}\n` +
      `📝 Пожелания: ${form.notes || '—'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Очищаем форму и показываем успех
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', email: '', date: '', time: '19:00', guests: '2', notes: '' });
    }, 4000);

    // Открываем WhatsApp в новой вкладке с правильными параметрами
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const times = ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'];

  return (
    <section id="reservation" className="relative py-24 md:py-36 px-5 md:px-12 overflow-hidden">
      <div className="ambient-blob w-[700px] h-[700px] bg-crimson/10 top-0 right-0 animate-orb" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div>
            <Reveal>
              <span className="fluid-eyebrow text-crimson-bright">Бронирование · 予約</span>
              <h2 className="fluid-title font-display font-light text-white mt-4">
                <TextReveal text="Забронируйте" />{' '}
                <span className="text-gradient-red italic">вечер</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-white/55 leading-relaxed">
                Заполните форму, и наш менеджер свяжется с вами в течение 15 минут для подтверждения брони.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 liquid-glass rounded-2xl p-6 border-glow">
                <h3 className="fluid-eyebrow text-white/70 mb-4">Часы работы</h3>
                <div className="space-y-3">
                  {openingHours.map((o) => (
                    <div key={o.day} className="flex items-center justify-between text-sm border-b border-white/5 pb-2 last:border-0">
                      <span className="text-white/55">{o.day}</span>
                      <span className="text-white font-medium">{o.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g,'')}`} data-cursor className="liquid-glass rounded-full px-5 py-3 text-sm text-white flex items-center gap-2 hover:shadow-dynamic transition-shadow">
                  <Phone size={15} className="text-crimson-bright" /> {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} data-cursor className="liquid-glass rounded-full px-5 py-3 text-sm text-white flex items-center gap-2 hover:shadow-dynamic transition-shadow">
                  <Mail size={15} className="text-crimson-bright" /> {contactInfo.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.2}>
            <form onSubmit={submit} className="liquid-glass rounded-3xl p-8 border-glow relative overflow-hidden shadow-dynamic">
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,32,79,0.1), transparent 70%)' }} />

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#090909]/95 backdrop-blur-2xl rounded-3xl"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center bloom-crimson-strong"
                      style={{ background: 'linear-gradient(135deg,#ff204f,#ff5c7a)' }}
                    >
                      <Check size={36} className="text-white" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="mt-6 font-display text-3xl text-white"
                    >
                      Заявка отправлена!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="mt-2 text-white/55 text-sm"
                    >
                      Открываем WhatsApp для подтверждения брони...
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-5 relative z-10">
                <Field icon={User} label="Имя">
                  <input required value={form.name} onChange={(e)=>update('name',e.target.value)} type="text" placeholder="Ваше имя"
                    className="w-full bg-transparent text-white placeholder-white/30 outline-none" />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field icon={Phone} label="Телефон">
                    <input required value={form.phone} onChange={(e)=>update('phone',e.target.value)} type="tel" placeholder="+7 ___ ___ __ __"
                      className="w-full bg-transparent text-white placeholder-white/30 outline-none" />
                  </Field>
                  <Field icon={Mail} label="Email">
                    <input value={form.email} onChange={(e)=>update('email',e.target.value)} type="email" placeholder="email@mail.kz"
                      className="w-full bg-transparent text-white placeholder-white/30 outline-none" />
                  </Field>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Field icon={Calendar} label="Дата">
                    <input required value={form.date} onChange={(e)=>update('date',e.target.value)} type="date"
                      className="w-full bg-transparent text-white outline-none [color-scheme:dark]" />
                  </Field>
                  <Field icon={Clock} label="Время">
                    <select value={form.time} onChange={(e)=>update('time',e.target.value)}
                      className="w-full bg-transparent text-white outline-none [color-scheme:dark]">
                      {times.map((t)=><option key={t} value={t} className="bg-[#141414]">{t}</option>)}
                    </select>
                  </Field>
                  <Field icon={Users} label="Гости">
                    <select value={form.guests} onChange={(e)=>update('guests',e.target.value)}
                      className="w-full bg-transparent text-white outline-none [color-scheme:dark]">
                      {['1','2','3','4','5','6','7','8','10+'].map((g)=><option key={g} value={g} className="bg-[#141414]">{g}</option>)}
                    </select>
                  </Field>
                </div>

                <Field icon={MessageSquare} label="Пожелания">
                  <textarea value={form.notes} onChange={(e)=>update('notes',e.target.value)} rows={3} placeholder="Аллергии, особые пожелания, повод..."
                    className="w-full bg-transparent text-white placeholder-white/30 outline-none resize-none" />
                </Field>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-3 rounded-xl border border-crimson/30 bg-crimson/8 px-4 py-3 overflow-hidden"
                    >
                      <AlertCircle size={18} className="text-crimson-bright flex-shrink-0" />
                      <span className="text-sm text-white/80">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <PremiumButton type="submit" cursorLabel="Отправить" className="w-full">
                  Подтвердить бронь
                </PremiumButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-white/50 mb-2 block">{label}</span>
      <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/8 px-4 py-3 focus-within:border-crimson/40 focus-within:shadow-dynamic transition-all">
        <Icon size={16} className="text-crimson-bright flex-shrink-0" />
        {children}
      </div>
    </label>
  );
}
