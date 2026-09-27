import Link from 'next/link';
import Logo from './Logo';

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Vision', href: '/#vision' },
      { label: 'Team', href: '/#team' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'IaaS', href: '/#services' },
      { label: 'PaaS', href: '/#services' },
      { label: 'SaaS', href: '/#services' },
      { label: 'E-commerce', href: '/#services' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Fintech', href: '/#domains' },
      { label: 'Edtech', href: '/#domains' },
      { label: 'Healthcare', href: '/#domains' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="container-content">
        <div className="grid sm:grid-cols-[1.2fr_repeat(3,1fr)] gap-12 sm:gap-8">
          <div>
            <Logo tone="light" />
            <p className="mt-5 text-[14px] leading-relaxed text-paper/50 max-w-[280px]">
              Cloud infrastructure and software for fintech, edtech and
              healthcare startups.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[13px] font-medium text-paper/40">{col.heading}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14.5px] text-paper/75 hover:text-paper transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-paper/40">
            © {new Date().getFullYear()} P2B Infotech. All rights reserved.
          </p>
          <p className="text-[13px] text-paper/40">Pune, India</p>
        </div>
      </div>
    </footer>
  );
}
