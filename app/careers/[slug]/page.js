import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, MapPin, Briefcase, Building2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

async function getJob(slug) {
  return prisma.job.findFirst({ where: { slug, isPublished: true } });
}

export async function generateMetadata({ params }) {
  const job = await getJob(params.slug);
  if (!job) return { title: 'Role not found — P2B Infotech' };
  return {
    title: `${job.title} — Careers at P2B Infotech`,
    description: job.summary,
  };
}

export default async function JobPage({ params }) {
  const job = await getJob(params.slug);
  if (!job) notFound();

  const mailtoHref = `mailto:careers@p2binfotech.com?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}&body=${encodeURIComponent(
    `Hi P2B Infotech team,\n\nI'd like to apply for the ${job.title} role.\n\n[Tell us a bit about yourself and attach your resume]\n`
  )}`;

  return (
    <>
      <Header />
      <main className="bg-paper pt-[120px] pb-24 md:pt-[152px] md:pb-32">
        <div className="container-content max-w-[760px]">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft size={15} /> All open roles
          </Link>

          <div className="mt-8">
            <span className="text-[13px] font-medium text-signal-dim">{job.department}</span>
            <h1 className="font-display text-[30px] sm:text-[38px] leading-[1.15] font-semibold text-ink mt-3 text-balance">
              {job.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={14} /> {job.type}
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 size={14} /> {job.department}
              </span>
            </div>

            <a
              href={mailtoHref}
              className="inline-flex items-center gap-1.5 mt-8 rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[15px] font-medium pl-6 pr-5 py-3.5 transition-[background-image] duration-300"
            >
              Apply for this role
              <ArrowUpRight size={16} strokeWidth={2.25} />
            </a>

            <div className="mt-12 pt-10 border-t border-line">
              <h2 className="font-display text-[18px] font-semibold text-ink">About the role</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted max-w-[620px]">
                {job.description}
              </p>
            </div>

            {job.requirements?.length > 0 && (
              <div className="mt-10">
                <h2 className="font-display text-[18px] font-semibold text-ink">
                  What we&apos;re looking for
                </h2>
                <ul className="mt-4 space-y-3">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-spark shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-12 rounded-2xl border border-line bg-paper-dim p-7">
              <p className="text-[14.5px] text-muted">
                Don&apos;t check every box? Reach out anyway — we&apos;d rather hear from
                you than have you self-select out.
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-1.5 mt-4 text-[14.5px] font-medium text-ink border-b border-ink/25 pb-0.5 hover:border-ink transition-colors"
              >
                Email us at careers@p2binfotech.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
