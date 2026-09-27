'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const FEEDBACK = [
  {
    quote:
      "P2B rebuilt our lending ledger in eight weeks and it hasn't gone down once since. They think about failure modes before we even ask.",
    name: 'Meera Kulkarni',
    role: 'CTO, a digital lending startup',
  },
  {
    quote:
      'We went from a spreadsheet-run classroom tool to a platform holding live sessions for thousands of students, without a single infra fire drill.',
    name: 'Arjun Rao',
    role: 'Founder, an edtech platform',
  },
  {
    quote:
      'Healthcare compliance is unforgiving. P2B understood our access-control requirements better than our previous vendor did after a year.',
    name: 'Dr. Neha Kapoor',
    role: 'Operations Lead, a telehealth clinic network',
  },
  {
    quote:
      'Our storefront launched three weeks after kickoff and handled a flash sale on day one without breaking a sweat.',
    name: 'Farah Ali',
    role: 'Founder, a D2C commerce brand',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (dir) => setIndex((i) => (i + dir + FEEDBACK.length) % FEEDBACK.length);
  const current = FEEDBACK[index];

  return (
    <section id="feedback" className="bg-ink py-24 md:py-32 overflow-hidden">
      <div className="container-content">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[14.5px] font-medium text-signal">Client feedback</span>
            <h2 className="font-display text-[32px] sm:text-[38px] leading-[1.15] font-semibold text-paper mt-4 text-balance">
              What founders say after launch.
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-paper/70 hover:text-paper hover:border-white/40 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-paper/70 hover:text-paper hover:border-white/40 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[180px]">
          <Quote size={40} strokeWidth={1.5} className="text-signal/40 mb-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <p className="font-display text-[22px] sm:text-[26px] leading-[1.4] font-medium text-paper max-w-[720px] text-balance">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-6 text-[14.5px] text-paper/60">
                <span className="text-paper font-medium">{current.name}</span> — {current.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex sm:hidden gap-2 mt-8">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-paper/70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="h-11 w-11 rounded-full border border-white/15 flex items-center justify-center text-paper/70"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex gap-2 mt-10">
          {FEEDBACK.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-signal' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
