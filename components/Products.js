'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'P2B Ledger',
    domain: 'Fintech',
    body: 'A white-label core banking and ledger engine for digital lenders and neobanks.',
    stat: 'Handles 2M+ transactions/day in staging benchmarks',
  },
  {
    name: 'P2B Classroom',
    domain: 'Edtech',
    body: 'Live-class and cohort infrastructure with built-in progress analytics.',
    stat: 'Sub-200ms video join time at 5,000 concurrent seats',
  },
  {
    name: 'P2B Care',
    domain: 'Healthcare',
    body: 'Scheduling, records and telehealth in one HIPAA-aware platform.',
    stat: 'Built for role-based access across clinics and pharmacies',
  },
  {
    name: 'P2B Cart',
    domain: 'E-commerce',
    body: 'A headless storefront and checkout kit for fast-moving D2C brands.',
    stat: 'Launch-ready storefront in under three weeks',
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-paper-dim py-24 md:py-32">
      <div className="container-content">
        <div className="max-w-[560px]">
          <span className="text-[14.5px] font-medium text-signal-dim">Products</span>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-ink mt-4 text-balance">
            Platforms we&apos;ve taken from blueprint to production.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-paper border border-line rounded-2xl p-7 hover:border-ink/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[12.5px] font-medium text-signal-dim">{p.domain}</span>
                  <h3 className="font-display text-[21px] font-semibold text-ink mt-1">{p.name}</h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/30 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                />
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted max-w-[380px]">{p.body}</p>
              <p className="mt-5 text-[13px] text-ink/50 border-t border-line pt-4">{p.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
