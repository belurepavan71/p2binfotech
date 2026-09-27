'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { verifySessionToken, SESSION_COOKIE } from '@/lib/auth';

async function requireAdmin() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;
  if (!session) {
    redirect('/admin/login');
  }
  return session;
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function readJobFields(formData) {
  const requirements = (formData.get('requirements')?.toString() || '')
    .split('\n')
    .map((r) => r.trim())
    .filter(Boolean);

  return {
    title: formData.get('title')?.toString().trim() || '',
    department: formData.get('department')?.toString().trim() || '',
    location: formData.get('location')?.toString().trim() || '',
    type: formData.get('type')?.toString().trim() || 'Full-time',
    summary: formData.get('summary')?.toString().trim() || '',
    description: formData.get('description')?.toString().trim() || '',
    requirements,
    isPublished: formData.get('isPublished') === 'on',
  };
}

export async function createJob(formData) {
  await requireAdmin();
  const fields = readJobFields(formData);

  let slug = slugify(fields.title);
  const existing = await prisma.job.findUnique({ where: { slug } });
  if (existing) slug = `${slug}-${Date.now().toString(36)}`;

  await prisma.job.create({ data: { ...fields, slug } });

  revalidatePath('/careers');
  revalidatePath('/admin');
  redirect('/admin');
}

export async function updateJob(id, formData) {
  await requireAdmin();
  const fields = readJobFields(formData);

  await prisma.job.update({ where: { id }, data: fields });

  revalidatePath('/careers');
  revalidatePath(`/careers/${fields.slug || ''}`);
  revalidatePath('/admin');
  redirect('/admin');
}

export async function deleteJob(id) {
  await requireAdmin();
  await prisma.job.delete({ where: { id } });
  revalidatePath('/careers');
  revalidatePath('/admin');
}

export async function togglePublish(id, nextValue) {
  await requireAdmin();
  await prisma.job.update({ where: { id }, data: { isPublished: nextValue } });
  revalidatePath('/careers');
  revalidatePath('/admin');
}
