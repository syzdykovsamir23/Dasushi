import { useEffect, useRef } from 'react';

// Ambient floating particles + Japanese symbols background
export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let raf = 0;

    const symbols = ['寿', '司', '鮨', '魚', '米', '心', '技', '味', '和', '魂'];
    const count = window.innerWidth < 768 ? 14 : 28;
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: 12 + Math.random() * 36,
      vy: 0.1 + Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.2,
      char: symbols[Math.floor(Math.random() * symbols.length)],
      alpha: 0.03 + Math.random() * 0.06,
      rot: Math.random() * Math.PI,
      vrot: (Math.random() - 0.5) * 0.005,
    }));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.y -= p.vy;
        p.x += p.vx;
        p.rot += p.vrot;
        if (p.y < -50) {
          p.y = h + 50;
          p.x = Math.random() * w;
        }
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.font = `${p.size}px serif`;
        ctx.fillStyle = `rgba(255, 32, 79, ${p.alpha})`;
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden
    />
  );
}
