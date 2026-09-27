import { SignJWT, jwtVerify } from 'jose';

export const SESSION_COOKIE = 'p2b_admin_session';

function getSecretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error(
      'AUTH_SECRET is not set. Add a long random string to your .env file (see .env.example).'
    );
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionToken(username) {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecretKey());
}

export async function verifySessionToken(token) {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload;
  } catch {
    return null;
  }
}
