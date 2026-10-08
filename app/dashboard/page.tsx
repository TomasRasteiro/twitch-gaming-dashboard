import { ArrowUpRight, Gamepad2, Radio, TrendingUp, Users } from 'lucide-react';
import { games, casters } from '@/lib/data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#ff858c]">Dashboard</p>
            <h1 className="mt-2 text-3xl font-black">Visão geral da marca</h1>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-3 py-2 text-sm text-[#ff9ea3]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E50914]" /> Live
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-4">
          <div className="panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Viewers</p>
              <Radio className="text-[#E50914]" size={18} />
            </div>
            <p className="mt-4 text-3xl font-black">24.8K</p>
            <p className="mt-2 text-sm text-[#ff9ea3]">+12.4% vs. semana passada</p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Peak</p>
              <TrendingUp className="text-[#E50914]" size={18} />
            </div>
            <p className="mt-4 text-3xl font-black">31.4K</p>
            <p className="mt-2 text-sm text-white/60">Maior pico recente</p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Seguidores</p>
              <Users className="text-[#E50914]" size={18} />
            </div>
            <p className="mt-4 text-3xl font-black">42.4K</p>
            <p className="mt-2 text-sm text-[#ff9ea3]">+4.8% este mês</p>
          </div>

          <div className="panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Jogos ativos</p>
              <Gamepad2 className="text-[#E50914]" size={18} />
            </div>
            <p className="mt-4 text-3xl font-black">12</p>
            <p className="mt-2 text-sm text-white/60">Categorias em foco</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="panel p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">Casters em destaque</h2>
              <button className="inline-flex items-center gap-2 text-sm text-[#ff9ea3]">
                Ver tudo <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="space-y-4">
              {casters.map((caster) => (
                <div key={caster.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-lg font-semibold">{caster.name}</p>
                    <p className="text-sm text-white/55">{caster.game} • {caster.twitchTag}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold">{caster.viewers.toLocaleString()}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">{caster.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <h2 className="text-xl font-bold">Estatísticas rápidas</h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-white/55">Canal</p>
                <p className="mt-2 text-lg font-semibold">@Its_TomiTv</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-white/55">Último stream</p>
                <p className="mt-2 text-base font-medium">CS2 • análise de equipa e review</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-white/55">Próximo foco</p>
                <p className="mt-2 text-base font-medium">Streaming + conteúdo editorial</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 panel p-5">
          <h2 className="text-xl font-bold">Jogos em destaque</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {games.map((game) => (
              <div key={game.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{game.name}</p>
                  <span className="rounded-full border border-[#E50914]/20 bg-[#E50914]/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#ff9ea3]">
                    {game.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/55">{game.genre}</p>
                <p className="mt-4 text-2xl font-black">{game.players.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
