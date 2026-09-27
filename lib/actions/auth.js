'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { createSessionToken, SESSION_COOKIE } from '@/lib/auth';

export async function loginAction(formData) {
  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString() || '';

  if (!username || !password) {
    redirect('/admin/login?error=1');
  }

  const user = await prisma.adminUser.findUnique({ where: { username } });
  if (!user) {
    redirect('/admin/login?error=1');
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    redirect('/admin/login?error=1');
  }

  const token = await createSessionToken(user.username);
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect('/admin');
}

export async function logoutAction() {
  cookies().delete(SESSION_COOKIE);
  redirect('/admin/login');
}
