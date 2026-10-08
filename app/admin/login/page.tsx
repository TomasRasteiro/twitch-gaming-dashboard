'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('itstomitv.business@gmail.com');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setError(data.error || 'Credenciais inválidas.');
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 shadow-redGlow">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914] text-xl font-black text-white">
            IT
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#ff858c]">Admin</p>
          <h1 className="mt-3 text-3xl font-black">ItsTomiTV</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white/70">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/35 focus:border-[#E50914]/70"
              placeholder="itstomitv.business@gmail.com"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white/70">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-[#E50914]/70"
              placeholder="••••••••"
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 px-3 py-2 text-sm text-[#ffb3b6]">
              {error}
            </div>
          ) : null}

          <button type="submit" disabled={isSubmitting} className="primary-button w-full disabled:opacity-70">
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </main>
  );
}
