import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Gamepad2, ShieldCheck, Trophy, Users } from 'lucide-react';
import { casters, contentMetrics, games } from '@/lib/data';
import { verifyAdminToken, SESSION_COOKIE_NAME } from '@/lib/auth';

const metricList = [
  { label: 'Casters ativos', value: '18', icon: Users },
  { label: 'Jogos cadastrados', value: '12', icon: Gamepad2 },
  { label: 'Eventos', value: '14', icon: Trophy },
  { label: 'Sistema', value: 'Online', icon: ShieldCheck }
];

export default function AdminPage() {
  const cookieStore = cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    redirect('/admin/login');
  }

  try {
    verifyAdminToken(token);
  } catch {
    redirect('/admin/login');
  }

  return (
    <main className="min-h-screen p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff858c]">Administração</p>
            <h1 className="mt-2 text-3xl font-black">Centro de gestão ItsTomiTV</h1>
          </div>

          <form action="/api/auth/logout" method="POST">
            <button type="submit" className="secondary-button">
              Sair
            </button>
          </form>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          {metricList.map(({ label, value, icon: Icon }) => (
            <div key={label} className="panel p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">{label}</p>
                <Icon className="text-[#E50914]" size={18} />
              </div>
              <p className="mt-4 text-3xl font-black">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="panel p-5">
            <h2 className="text-xl font-bold">Jogos cadastrados</h2>

            <div className="mt-5 space-y-4">
              {games.map((game) => (
                <div key={game.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-lg font-semibold">{game.name}</p>
                    <p className="text-sm text-white/55">{game.genre}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-white/75">{game.players.toLocaleString()} players</p>
                    <span className="mt-1 inline-block rounded-full border border-[#E50914]/20 bg-[#E50914]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#ff9ea3]">
                      {game.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h2 className="text-xl font-bold">Casters e status</h2>

            <div className="mt-5 space-y-4">
              {casters.map((caster) => (
                <div key={caster.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-lg font-semibold">{caster.name}</p>
                    <p className="text-sm text-white/55">{caster.twitchTag}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[#E50914]/20 bg-[#E50914]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#ff9ea3]">
                      {caster.status}
                    </span>
                    <span className="text-sm text-white/75">{caster.viewers.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 panel p-5">
          <h2 className="text-xl font-bold">Métricas de conteúdo</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {contentMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-sm text-white/55">{metric.label}</p>
                <p className="mt-3 text-3xl font-black">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
