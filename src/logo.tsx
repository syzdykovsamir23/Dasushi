// DA monogram logo as inline SVG string, used throughout the site

export function logoSvg(size = 48): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="daG${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF204F"/>
      <stop offset="100%" stop-color="#FF5C7A"/>
    </linearGradient>
    <radialGradient id="daGl${size}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF204F" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#FF204F" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="49" fill="#090909"/>
  <circle cx="50" cy="50" r="49" fill="url(#daGl${size})"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="url(#daG${size})" stroke-width="1" opacity="0.5"/>
  <text x="50" y="51" text-anchor="middle" dominant-baseline="central"
        font-family="'Helvetica Neue', Arial, sans-serif" font-size="42" font-weight="800"
        fill="url(#daG${size})" letter-spacing="-2">DA</text>
</svg>`;
}

export function Logo({ size = 44 }: { size?: number }) {
  return <span dangerouslySetInnerHTML={{ __html: logoSvg(size) }} />;
}

// Animated logo component with SVG path-draw circle (for loader & hero)
export function AnimatedLogo({ size = 120, draw = false }: { size?: number; draw?: boolean }) {
  const r = 47;
  const circumference = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="alg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF204F" />
          <stop offset="50%" stopColor="#FF5C7A" />
          <stop offset="100%" stopColor="#FF8FA6" />
        </linearGradient>
        <radialGradient id="algl" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF204F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF204F" stopOpacity="0" />
        </radialGradient>
        <filter id="albloom">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Glow circle */}
      <circle cx="50" cy="50" r={r + 2} fill="url(#algl)" />
      {/* Animated draw circle */}
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#alg)"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: draw ? 0 : circumference,
          transition: 'stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1)',
          filter: 'drop-shadow(0 0 6px rgba(255,32,79,0.6))',
        }}
        transform="rotate(-90 50 50)"
      />
      {/* Inner ring */}
      <circle cx="50" cy="50" r={r - 4} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      {/* DA text */}
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="40"
        fontWeight="800"
        fill="url(#alg)"
        letterSpacing="-2"
        filter="url(#albloom)"
      >
        DA
      </text>
    </svg>
  );
}
