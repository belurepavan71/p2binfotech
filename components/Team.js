'use client';

import { motion } from 'framer-motion';

const TEAM = [
  { name: 'Priya Bhatt', role: 'Co-founder & CEO', initials: 'PB', bio: 'Ex-infra lead, obsessed with uptime.' },
  { name: 'Rohan Deshmukh', role: 'Co-founder & CTO', initials: 'RD', bio: 'Platform architecture and security.' },
  { name: 'Ananya Iyer', role: 'Head of Product', initials: 'AI', bio: 'Ships fintech and edtech products.' },
  { name: 'Karan Mehta', role: 'Lead Engineer, Cloud', initials: 'KM', bio: 'Runs IaaS and PaaS delivery.' },
  { name: 'Sana Sheikh', role: 'Lead Designer', initials: 'SS', bio: 'Product and brand design systems.' },
  { name: 'Vikram Nair', role: 'Client Success', initials: 'VN', bio: 'Keeps launches on schedule.' },
];

const PALETTE = ['#0EA5A4', '#FFB020', '#0B1220', '#5B6472'];

export default function Team() {
  return (
    <section id="team" className="bg-paper py-24 md:py-32">
      <div className="container-content">
        <div className="max-w-[560px]">
          <span className="text-[14.5px] font-medium text-signal-dim">Team</span>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-ink mt-4 text-balance">
            A small team that ships fast.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted">
            P2B Infotech stays deliberately small — every person here touches
            the platforms our clients run on.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="flex items-center gap-4 py-5 border-b border-line"
            >
              <div
                className="h-14 w-14 rounded-full flex items-center justify-center font-display text-[15px] font-semibold text-paper shrink-0"
                style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
              >
                {m.initials}
              </div>
              <div>
                <h3 className="font-display text-[16.5px] font-semibold text-ink">{m.name}</h3>
                <p className="text-[13.5px] text-signal-dim mt-0.5">{m.role}</p>
                <p className="text-[13.5px] text-muted mt-0.5">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
