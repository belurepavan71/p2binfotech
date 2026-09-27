/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        'ink-soft': '#141F35',
        paper: '#F5F6F8',
        'paper-dim': '#EBEDF2',
        signal: '#0EA5A4',
        'signal-dim': '#0B8483',
        pulse: '#6D5DFC',
        'pulse-dim': '#5747E0',
        spark: '#FFB020',
        muted: '#5B6472',
        line: '#DFE2E8',
        'line-dark': '#25324A',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(14px, -18px)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
        pulseLine: 'pulseLine 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
