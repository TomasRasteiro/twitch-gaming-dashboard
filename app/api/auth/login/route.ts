import { NextResponse } from 'next/server';
import { verifyAdminToken, signAdminSession, SESSION_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      { error: 'Configuração do admin não encontrada. Adicione ADMIN_EMAIL e ADMIN_PASSWORD ao ambiente.' },
      { status: 500 }
    );
  }

  const trimmedEmail = String(email || '').trim().toLowerCase();
  const trimmedPassword = String(password || '');

  if (trimmedEmail !== adminEmail.toLowerCase() || trimmedPassword !== adminPassword) {
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
  }

  const token = signAdminSession(trimmedEmail);
  const response = NextResponse.json({ ok: true, message: 'Autenticado com sucesso.' });

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Use POST para autenticar.' });
}
