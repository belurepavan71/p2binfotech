'use client';

import { motion } from 'framer-motion';
import { Server, Layers, AppWindow, ShoppingCart } from 'lucide-react';

const SERVICES = [
  {
    code: 'IaaS',
    icon: Server,
    title: 'Infrastructure as a Service',
    body: 'Cloud environments, networking and security provisioned and managed so your engineers build product instead of babysitting servers.',
    tags: ['Cloud provisioning', 'Networking & VPC', 'Monitoring', 'DR & backups'],
  },
  {
    code: 'PaaS',
    icon: Layers,
    title: 'Platform as a Service',
    body: 'Managed deployment pipelines, databases and runtime platforms that let your team ship features on the first day, not the first month.',
    tags: ['CI/CD pipelines', 'Managed databases', 'Autoscaling', 'API gateways'],
  },
  {
    code: 'SaaS',
    icon: AppWindow,
    title: 'Software as a Service',
    body: 'Full product builds — from first wireframe to a multi-tenant application your customers log into every day.',
    tags: ['Product design', 'Multi-tenancy', 'Billing & auth', 'Admin tooling'],
  },
  {
    code: 'E-com',
    icon: ShoppingCart,
    title: 'E-commerce platforms',
    body: 'Storefronts, checkout and inventory systems built to carry real transaction volume from launch week onward.',
    tags: ['Storefront builds', 'Payments', 'Inventory', 'Order management'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="container-content">
        <div className="max-w-[560px]">
          <span className="text-[14.5px] font-medium text-signal">What we build</span>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-paper mt-4 text-balance">
            Four layers, one team.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/60">
            Take one service or the whole stack — infrastructure, platform,
            application and storefront, all handed off cleanly to your team.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid md:grid-cols-[100px_1fr_1.1fr] gap-4 md:gap-10 py-9 md:items-center"
            >
              <div className="flex items-center gap-3 md:block">
                <s.icon size={22} strokeWidth={1.75} className="text-signal" />
                <span className="font-display text-[15px] font-semibold text-paper/50 md:mt-2 md:block">
                  {s.code}
                </span>
              </div>

              <h3 className="font-display text-[22px] font-semibold text-paper">{s.title}</h3>

              <div>
                <p className="text-[15px] leading-relaxed text-paper/60 max-w-[460px]">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[13px] text-paper/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
