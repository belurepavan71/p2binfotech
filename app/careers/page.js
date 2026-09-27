import Link from 'next/link';
import { ArrowUpRight, MapPin, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { prisma } from '@/lib/prisma';

export const metadata = {
  title: 'Careers — P2B Infotech',
  description: 'Open roles at P2B Infotech across engineering, infrastructure and design.',
};

export const dynamic = 'force-dynamic';

async function getJobs() {
  return prisma.job.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      department: true,
      location: true,
      type: true,
      summary: true,
    },
  });
}

export default async function CareersPage() {
  const jobs = await getJobs();
  const departments = [...new Set(jobs.map((j) => j.department))];

  return (
    <>
      <Header />
      <main className="bg-paper">
        <section className="relative overflow-hidden bg-paper-dim bg-mesh-brand pt-[140px] pb-20 md:pt-[168px] md:pb-24">
          <div className="container-content relative">
            <span className="text-[14.5px] font-medium text-signal-dim">Careers</span>
            <h1 className="font-display text-[36px] sm:text-[46px] leading-[1.12] font-semibold text-ink mt-4 max-w-[640px] text-balance">
              Build the platforms other startups run on.
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-muted max-w-[520px]">
              We&apos;re a small, full-stack team working across fintech, edtech
              and healthcare. If that sounds like your kind of problem, we&apos;d
              like to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-content">
            {jobs.length === 0 ? (
              <div className="border border-line rounded-2xl py-20 text-center max-w-[480px] mx-auto">
                <h2 className="font-display text-[20px] font-semibold text-ink">
                  No open roles right now
                </h2>
                <p className="mt-3 text-[14.5px] text-muted">
                  We&apos;re not actively hiring at the moment, but we&apos;re always
                  glad to hear from strong engineers and designers.
                </p>
                <a
                  href="mailto:careers@p2binfotech.com"
                  className="inline-flex items-center gap-1.5 mt-6 text-[14.5px] font-medium text-ink border-b border-ink/25 pb-0.5 hover:border-ink transition-colors"
                >
                  Say hello anyway
                </a>
              </div>
            ) : (
              <div className="space-y-14">
                {departments.map((dept) => (
                  <div key={dept}>
                    <h2 className="font-display text-[13px] font-medium tracking-wide text-muted uppercase mb-5">
                      {dept}
                    </h2>
                    <div className="divide-y divide-line border-y border-line">
                      {jobs
                        .filter((j) => j.department === dept)
                        .map((job) => (
                          <Link
                            key={job.id}
                            href={`/careers/${job.slug}`}
                            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 hover:bg-paper-dim/50 -mx-4 px-4 rounded-xl transition-colors"
                          >
                            <div>
                              <h3 className="font-display text-[19px] font-semibold text-ink">
                                {job.title}
                              </h3>
                              <p className="mt-1.5 text-[14px] text-muted max-w-[480px]">
                                {job.summary}
                              </p>
                              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-ink/50">
                                <span className="flex items-center gap-1.5">
                                  <MapPin size={13} /> {job.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <Briefcase size={13} /> {job.type}
                                </span>
                              </div>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink shrink-0">
                              View role
                              <ArrowUpRight
                                size={15}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                              />
                            </span>
                          </Link>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
