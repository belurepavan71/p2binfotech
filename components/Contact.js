'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-paper py-24 md:py-32">
      <div className="container-content grid lg:grid-cols-[1fr_0.85fr] gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[14.5px] font-medium text-signal-dim">Start a project</span>
          <h2 className="font-display text-[32px] sm:text-[40px] leading-[1.12] font-semibold text-ink mt-4 text-balance">
            Tell us what you&apos;re building. We&apos;ll tell you what it takes to ship it.
          </h2>

          <div className="mt-10 space-y-4">
            <a href="mailto:hello@p2binfotech.com" className="flex items-center gap-3 text-[15px] text-ink group w-fit">
              <span className="h-10 w-10 rounded-full bg-paper-dim flex items-center justify-center shrink-0">
                <Mail size={16} strokeWidth={1.75} />
              </span>
              <span className="border-b border-transparent group-hover:border-ink/30 transition-colors">
                hello@p2binfotech.com
              </span>
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-3 text-[15px] text-ink group w-fit">
              <span className="h-10 w-10 rounded-full bg-paper-dim flex items-center justify-center shrink-0">
                <Phone size={16} strokeWidth={1.75} />
              </span>
              <span className="border-b border-transparent group-hover:border-ink/30 transition-colors">
                +91 12345 67890
              </span>
            </a>
            <div className="flex items-center gap-3 text-[15px] text-ink">
              <span className="h-10 w-10 rounded-full bg-paper-dim flex items-center justify-center shrink-0">
                <MapPin size={16} strokeWidth={1.75} />
              </span>
              Pune, Maharashtra, India
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-paper-dim border border-line rounded-2xl p-7 sm:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" id="name" type="text" placeholder="Your name" />
            <Field label="Company" id="company" type="text" placeholder="Company name" />
          </div>
          <div className="mt-4">
            <Field label="Email" id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-[13px] font-medium text-ink/70 mb-1.5">
              What are you building?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your product, timeline and stack..."
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-signal transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[15px] font-medium py-3.5 transition-[background-image] duration-300"
          >
            Send message
            <ArrowUpRight size={16} strokeWidth={2.25} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, id, type, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink/70 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-signal transition-colors"
      />
    </div>
  );
}
