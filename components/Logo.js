'use client';

export default function Logo({ tone = 'dark', className = '' }) {
  const wordColor = tone === 'dark' ? 'text-ink' : 'text-paper';
  const subColor = tone === 'dark' ? 'text-muted' : 'text-paper/60';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 240" width="100%" height="100%">
  <defs>
    <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <linearGradient id="cubeSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
  </defs>
  <g transform="translate(50, 20)">
    <path d="M 40,60 L 80,35 L 80,165 L 40,140 Z" fill="url(#cubeTop)" />
    <path d="M 80,35 L 130,65 L 130,100 L 80,70 Z" fill="url(#cubeSide)" />
    <path d="M 80,105 L 135,135 L 95,160 L 40,130 Z" fill="#60A5FA" opacity="0.9" />
    <path d="M 95,160 L 135,135 L 135,170 L 95,190 Z" fill="url(#cubeSide)" />

    <text x="180" y="115" font-family="'Segoe UI', Roboto, sans-serif" font-size="74" font-weight="900" letter-spacing="-0.5" fill="#0F172A">P2B</text>
    <text x="182" y="152" font-family="'Segoe UI', Roboto, sans-serif" font-size="25" font-weight="900" letter-spacing="12" fill="#3B82F6">INFOTECH</text>
    <rect x="182" y="165" width="240" height="4" rx="1.5" fill="#0F172A" />
  </g>
</svg>
    </span>
  );
}


