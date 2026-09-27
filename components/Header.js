'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Domains', href: '/#domains' },
  { label: 'Vision', href: '/#vision' },
  { label: 'Team', href: '/#team' },
  { label: 'Careers', href: '/careers' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(11,18,32,0.04)]' : 'bg-transparent'
      }`}
    >
      <div className="container-content flex items-center justify-between h-[72px]">
        <Link href="/" className="relative z-10">
          <Logo tone="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-[14.5px] font-medium text-ink/80 hover:text-ink transition-colors"
            >
              {link.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-signal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[14px] font-medium pl-5 pr-4 py-2.5 transition-[background-image] duration-300"
          >
            Start a project
            <ArrowUpRight size={15} strokeWidth={2.25} />
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-10 p-2 -mr-2 text-ink"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden bg-paper border-b border-line px-6 pb-6 pt-2"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 text-[17px] font-medium text-ink border-b border-line/70 last:border-none"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gradient-brand text-paper text-[14.5px] font-medium px-5 py-3"
            >
              Start a project
              <ArrowUpRight size={15} strokeWidth={2.25} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
