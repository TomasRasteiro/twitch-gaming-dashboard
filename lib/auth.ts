import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const SESSION_COOKIE_NAME = 'its_tomi_session';

export type AdminSession = {
  sub: string;
  role: 'admin';
  iat?: number;
  exp?: number;
};

const JWT_SECRET = process.env.JWT_SECRET || 'development-secret';

export function signAdminSession(email: string) {
  return jwt.sign(
    {
      sub: email,
      role: 'admin'
    },
    JWT_SECRET,
    {
      expiresIn: '7d'
    }
  );
}

export function verifyAdminToken(token: string): AdminSession {
  return jwt.verify(token, JWT_SECRET) as AdminSession;
}

export function getServerSession(): AdminSession | null {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!token) {
      return null;
    }

    return verifyAdminToken(token);
  } catch {
    return null;
  }
}

export function requireAdminSession() {
  const session = getServerSession();

  if (!session) {
    redirect('/admin/login');
  }

  return session;
}
