import { createJob } from '@/lib/actions/jobs';
import JobForm from '@/components/admin/JobForm';

export const metadata = {
  title: 'Add opening — P2B Infotech Admin',
  robots: { index: false, follow: false },
};

export default function NewJobPage() {
  return (
    <main className="min-h-screen bg-paper">
      <JobForm action={createJob} heading="Add a job opening" />
    </main>
  );
}
