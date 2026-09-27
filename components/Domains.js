'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Landmark, GraduationCap, HeartPulse } from 'lucide-react';

const DOMAINS = [
  {
    key: 'fintech',
    label: 'Fintech',
    icon: Landmark,
    headline: 'Ledgers, payments and platforms that hold up under audit.',
    points: [
      'PCI-aware payment and ledger architecture',
      'Fraud monitoring and transaction logging',
      'Core banking and lending platform builds',
    ],
  },
  {
    key: 'edtech',
    label: 'Edtech',
    icon: GraduationCap,
    headline: 'Learning platforms that stay fast at thousands of concurrent users.',
    points: [
      'Classroom, cohort and content management systems',
      'Video delivery and live-session infrastructure',
      'Progress tracking and assessment engines',
    ],
  },
  {
    key: 'healthcare',
    label: 'Healthcare',
    icon: HeartPulse,
    headline: 'Patient data systems built around privacy from the ground up.',
    points: [
      'HIPAA-aware data storage and access controls',
      'Scheduling, records and telehealth platforms',
      'Interoperability with existing clinical systems',
    ],
  },
];

export default function Domains() {
  const [active, setActive] = useState(DOMAINS[0].key);
  const current = DOMAINS.find((d) => d.key === active);

  return (
    <section id="domains" className="bg-paper py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-[520px]">
            <span className="text-[14.5px] font-medium text-signal-dim">Industries</span>
            <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-ink mt-4 text-balance">
              Built for the industries that can&apos;t afford to break.
            </h2>
          </div>

          <div className="flex gap-2 border border-line rounded-full p-1 self-start">
            {DOMAINS.map((d) => (
              <button
                key={d.key}
                onClick={() => setActive(d.key)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-medium transition-colors ${
                  active === d.key ? 'text-paper' : 'text-ink/70 hover:text-ink'
                }`}
              >
                {active === d.key && (
                  <motion.span
                    layoutId="domain-pill"
                    className="absolute inset-0 bg-ink rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <d.icon size={15} strokeWidth={2} className="relative z-10" />
                <span className="relative z-10">{d.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid md:grid-cols-[1fr_1fr] gap-10 md:gap-20 border-t border-line pt-10"
            >
              <h3 className="font-display text-[26px] sm:text-[30px] leading-[1.25] font-semibold text-ink text-balance">
                {current.headline}
              </h3>
              <ul className="space-y-4">
                {current.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[15.5px] leading-relaxed text-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
