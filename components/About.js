'use client';

import { motion } from 'framer-motion';

const PILLARS = [
  {
    title: 'Founded on infrastructure',
    body: 'We started as a small infra crew provisioning cloud environments for early-stage founders — that discipline still shapes every product we ship.',
  },
  {
    title: 'Built for regulated industries',
    body: 'Fintech, edtech and healthcare all carry compliance weight most agencies avoid. We design for it from day one, not as an afterthought.',
  },
  {
    title: 'One team, full stack',
    body: 'Infrastructure, platform, application and storefront sit under one roof, so nothing gets lost in translation between vendors.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="container-content grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[14.5px] font-medium text-signal-dim">About P2B Infotech</span>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-ink mt-4 text-balance">
            A startup technology partner, run like one ourselves.
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted max-w-[440px]">
            P2B Infotech is a young company building cloud infrastructure and
            software for other young companies. We know what it&apos;s like to ship
            under pressure with a small team — so we build platforms that stay
            out of your way and scale when you need them to.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={i === 2 ? 'sm:col-span-2 sm:max-w-[480px]' : ''}
            >
              <div className="h-px w-10 bg-spark mb-4" />
              <h3 className="font-display text-[19px] font-semibold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
