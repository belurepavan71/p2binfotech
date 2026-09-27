import Link from 'next/link';
import { Plus, LogOut } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { logoutAction } from '@/lib/actions/auth';
import Logo from '@/components/Logo';
import JobRowActions from '@/components/admin/JobRowActions';

export const metadata = {
  title: 'Admin — P2B Infotech',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const jobs = await prisma.job.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <main className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <div className="container-content flex items-center justify-between h-[72px]">
          <Logo tone="dark" />
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted hover:text-ink transition-colors"
            >
              <LogOut size={15} /> Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="container-content py-12">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-[24px] font-semibold text-ink">Job listings</h1>
            <p className="mt-1 text-[14px] text-muted">
              {jobs.length} total · {jobs.filter((j) => j.isPublished).length} published on
              /careers
            </p>
          </div>
          <Link
            href="/admin/jobs/new"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[14px] font-medium pl-5 pr-4 py-2.5 transition-[background-image] duration-300"
          >
            <Plus size={15} /> Add opening
          </Link>
        </div>

        <div className="mt-10 border border-line rounded-2xl overflow-hidden">
          {jobs.length === 0 ? (
            <div className="py-16 text-center text-[14.5px] text-muted">
              No job listings yet — add your first opening.
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line bg-paper-dim/60">
                  <th className="px-5 py-3 text-[12.5px] font-medium text-muted">Role</th>
                  <th className="px-5 py-3 text-[12.5px] font-medium text-muted hidden sm:table-cell">
                    Department
                  </th>
                  <th className="px-5 py-3 text-[12.5px] font-medium text-muted hidden md:table-cell">
                    Location
                  </th>
                  <th className="px-5 py-3 text-[12.5px] font-medium text-muted">Status</th>
                  <th className="px-5 py-3 text-[12.5px] font-medium text-muted text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-b border-line last:border-none">
                    <td className="px-5 py-4">
                      <div className="text-[14.5px] font-medium text-ink">{job.title}</div>
                      <div className="text-[13px] text-muted sm:hidden">{job.department}</div>
                    </td>
                    <td className="px-5 py-4 text-[14px] text-muted hidden sm:table-cell">
                      {job.department}
                    </td>
                    <td className="px-5 py-4 text-[14px] text-muted hidden md:table-cell">
                      {job.location}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium ${
                          job.isPublished
                            ? 'bg-signal/10 text-signal-dim'
                            : 'bg-paper-dim text-muted'
                        }`}
                      >
                        {job.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end">
                        <JobRowActions job={job} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
