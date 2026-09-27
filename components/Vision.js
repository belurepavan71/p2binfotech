'use client';

import { motion } from 'framer-motion';
import { Target, Compass, Sparkles } from 'lucide-react';

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Outcomes over hours',
    body: 'We measure ourselves by what launches and stays up, not by time logged.',
  },
  {
    icon: Compass,
    title: 'Compliance by default',
    body: 'Fintech, edtech and healthcare rules are built into how we design, not bolted on after.',
  },
  {
    icon: Sparkles,
    title: 'Small team, full ownership',
    body: 'Every engineer here owns a real slice of a client platform, end to end.',
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand" />
      <div className="absolute inset-0 bg-ink/35" />

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-[680px]"
        >
          <span className="text-[14.5px] font-medium text-paper/80">Our vision</span>
          <h2 className="font-display text-[30px] sm:text-[38px] leading-[1.2] font-semibold text-paper mt-4 text-balance">
            A world where a three-person startup can run technology as reliable
            as a bank&apos;s — without a bank&apos;s budget.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-paper/80 max-w-[540px]">
            Our mission is simpler: give fintech, edtech and healthcare
            founders the infrastructure, platforms and storefronts to focus on
            their customers, not their uptime.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-6"
            >
              <p.icon size={20} strokeWidth={1.75} className="text-paper" />
              <h3 className="font-display text-[16.5px] font-semibold text-paper mt-4">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-paper/75">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
