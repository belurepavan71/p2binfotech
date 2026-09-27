import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote'];

export default function JobForm({ action, job, heading }) {
  return (
    <div className="container-content py-12 max-w-[680px]">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted hover:text-ink transition-colors"
      >
        <ArrowLeft size={15} /> Back to dashboard
      </Link>

      <h1 className="font-display text-[24px] font-semibold text-ink mt-6">{heading}</h1>

      <form action={action} className="mt-8 space-y-5">
        <Field label="Job title" id="title" name="title" defaultValue={job?.title} required />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            label="Department"
            id="department"
            name="department"
            defaultValue={job?.department}
            placeholder="Engineering"
            required
          />
          <div>
            <label htmlFor="type" className="block text-[13px] font-medium text-ink/70 mb-1.5">
              Employment type
            </label>
            <select
              id="type"
              name="type"
              defaultValue={job?.type || 'Full-time'}
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors"
            >
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Field
          label="Location"
          id="location"
          name="location"
          defaultValue={job?.location}
          placeholder="Pune, India (Hybrid)"
          required
        />

        <Field
          label="Short summary"
          id="summary"
          name="summary"
          defaultValue={job?.summary}
          placeholder="One sentence shown on the careers list page"
          required
        />

        <div>
          <label htmlFor="description" className="block text-[13px] font-medium text-ink/70 mb-1.5">
            Full description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            defaultValue={job?.description}
            required
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors resize-none"
          />
        </div>

        <div>
          <label htmlFor="requirements" className="block text-[13px] font-medium text-ink/70 mb-1.5">
            Requirements <span className="text-muted font-normal">(one per line)</span>
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={5}
            defaultValue={job?.requirements?.join('\n')}
            placeholder={'3+ years of experience with...\nComfort working with...'}
            className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors resize-none"
          />
        </div>

        <label className="flex items-center gap-2.5 text-[14.5px] text-ink">
          <input
            type="checkbox"
            name="isPublished"
            defaultChecked={job ? job.isPublished : true}
            className="h-4 w-4 rounded border-line accent-signal"
          />
          Published (visible on the careers page)
        </label>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[14.5px] font-medium px-6 py-3 transition-[background-image] duration-300"
          >
            {job ? 'Save changes' : 'Create listing'}
          </button>
          <Link
            href="/admin"
            className="text-[14.5px] font-medium text-muted hover:text-ink transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

function Field({ label, id, name, defaultValue, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-medium text-ink/70 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors"
      />
    </div>
  );
}
