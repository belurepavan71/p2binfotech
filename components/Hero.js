'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const headline = ['We build the platform.', 'You build the business.'];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { y: 34, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const STRIP = [
  { value: '40+', label: 'Platforms shipped' },
  { value: '3', label: 'Core industries' },
  { value: '99.9%', label: 'Infra uptime target' },
  { value: '24/7', label: 'Engineering support' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper bg-mesh-brand pt-[132px] pb-20 md:pt-[168px] md:pb-28">
      <div className="container-content grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-8 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[14.5px] font-medium text-signal-dim mb-5"
          >
            IaaS · PaaS · SaaS · E-commerce, engineered for regulated industries
          </motion.p>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-[42px] leading-[1.08] sm:text-[52px] sm:leading-[1.06] lg:text-[58px] font-semibold text-ink text-balance"
          >
            {headline.map((l) => (
              <span key={l} className="block overflow-hidden pb-1">
                <motion.span variants={line} className="block">
                  {l}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-muted"
          >
            P2B Infotech is a startup technology partner for fintech, edtech and
            healthcare companies. We design and run the cloud infrastructure,
            software and storefronts that carry your product from first user to
            scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.76 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[15px] font-medium pl-6 pr-5 py-3.5 transition-[background-image] duration-300"
            >
              Talk to an engineer
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink border-b border-ink/25 pb-0.5 hover:border-ink transition-colors"
            >
              See what we build
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <StackGraphic />
        </motion.div>
      </div>

      <div className="container-content mt-16 md:mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 border-t border-line pt-8">
          {STRIP.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[26px] font-semibold text-ink">{s.value}</div>
              <div className="text-[13.5px] text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackGraphic() {
  const nodes = [
    { cx: 300, cy: 70, r: 30, fill: '#0EA5A4', label: 'SaaS' },
    { cx: 120, cy: 190, r: 26, fill: '#FFB020', label: 'PaaS' },
    { cx: 300, cy: 300, r: 26, fill: '#0B1220', label: 'IaaS' },
    { cx: 460, cy: 190, r: 22, fill: '#5B6472', label: 'Store' },
  ];

  return (
    <div className="relative mx-auto aspect-square max-w-[480px]">
      <svg viewBox="0 0 560 380" className="w-full h-full overflow-visible" aria-hidden="true">
        <g stroke="#DFE2E8" strokeWidth="1.5">
          <line x1="300" y1="70" x2="120" y2="190" />
          <line x1="120" y1="190" x2="300" y2="300" />
          <line x1="300" y1="300" x2="460" y2="190" />
          <line x1="460" y1="190" x2="300" y2="70" />
          <line x1="300" y1="70" x2="300" y2="300" />
        </g>
        {nodes.map((n, i) => (
          <g key={n.label} className="animate-drift" style={{ animationDelay: `${i * 0.6}s` }}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
            <text
              x={n.cx}
              y={n.cy + 4}
              textAnchor="middle"
              className="font-display"
              fontSize="12.5"
              fontWeight="600"
              fill={n.fill === '#FFB020' || n.fill === '#0EA5A4' ? '#0B1220' : '#F5F6F8'}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
