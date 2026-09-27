import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { updateJob } from '@/lib/actions/jobs';
import JobForm from '@/components/admin/JobForm';

export const metadata = {
  title: 'Edit opening — P2B Infotech Admin',
  robots: { index: false, follow: false },
};

export default async function EditJobPage({ params }) {
  const job = await prisma.job.findUnique({ where: { id: params.id } });
  if (!job) notFound();

  const updateJobWithId = updateJob.bind(null, job.id);

  return (
    <main className="min-h-screen bg-paper">
      <JobForm action={updateJobWithId} job={job} heading="Edit job opening" />
    </main>
  );
}
