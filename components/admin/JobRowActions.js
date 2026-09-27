'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { Pencil, Trash2, Eye, EyeOff } from 'lucide-react';
import { deleteJob, togglePublish } from '@/lib/actions/jobs';

export default function JobRowActions({ job }) {
  const [isPending, startTransition] = useTransition();
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  const handleDelete = () => {
    if (!confirm(`Delete "${job.title}"? This can't be undone.`)) return;
    startTransition(async () => {
      await deleteJob(job.id);
      setHidden(true);
    });
  };

  const handleToggle = () => {
    startTransition(async () => {
      await togglePublish(job.id, !job.isPublished);
    });
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={handleToggle}
        disabled={isPending}
        title={job.isPublished ? 'Unpublish' : 'Publish'}
        className="h-9 w-9 flex items-center justify-center rounded-lg text-ink/50 hover:text-ink hover:bg-paper-dim transition-colors disabled:opacity-50"
      >
        {job.isPublished ? <Eye size={16} /> : <EyeOff size={16} />}
      </button>
      <Link
        href={`/admin/jobs/${job.id}/edit`}
        title="Edit"
        className="h-9 w-9 flex items-center justify-center rounded-lg text-ink/50 hover:text-ink hover:bg-paper-dim transition-colors"
      >
        <Pencil size={16} />
      </Link>
      <button
        onClick={handleDelete}
        disabled={isPending}
        title="Delete"
        className="h-9 w-9 flex items-center justify-center rounded-lg text-ink/50 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
