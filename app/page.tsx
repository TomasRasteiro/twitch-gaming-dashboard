import Link from 'next/link';
import { ArrowRight, Play, Twitch, Zap } from 'lucide-react';
import { brand, highlights, liveStats } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E50914]/40 bg-[#E50914] font-black text-white">
            IT
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight">{brand.name}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#focus" className="nav-link">Focus</a>
          <a href="#dashboard" className="nav-link">Dashboard</a>
          <a href="#admin" className="nav-link">Admin</a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="secondary-button">
            Ver conteúdo
          </Link>
          <a href="https://www.twitch.tv/Its_TomiTv" target="_blank" rel="noreferrer" className="primary-button">
            Twitch
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <span className="inline-flex rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff7b82]">
            STREAMER • CONTENT CREATOR • CASTER
          </span>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white md:text-7xl">
            ITS TOMI TV
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            {brand.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/dashboard" className="primary-button">
              Ver conteúdo <ArrowRight className="ml-2" size={18} />
            </Link>

            <a href="https://www.twitch.tv/Its_TomiTv" target="_blank" rel="noreferrer" className="secondary-button">
              <Twitch className="mr-2" size={18} /> Twitch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-grid panel relative overflow-hidden p-6 shadow-redGlow">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Canal em destaque</p>
              <h2 className="mt-2 text-2xl font-bold">{brand.name}</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-2.5 py-1 text-xs font-medium text-[#ff9da2]">
              <span className="h-2 w-2 rounded-full bg-[#E50914]" /> LIVE
            </span>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d0d0d] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">Categoria</p>
                <p className="mt-1 text-lg font-semibold">CS2</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                24.8K Viewers
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-[#E50914] to-[#991118] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Stream principal</p>
              <p className="mt-3 text-3xl font-black text-white">ITSTOMITV</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-white/50">Peak</p>
                <p className="mt-2 text-2xl font-bold">31.4K</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-white/50">Seguidores</p>
                <p className="mt-2 text-2xl font-bold">42.4K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {liveStats.map((stat) => (
            <div key={stat.label} className="panel p-5">
              <p className="text-sm text-white/55">{stat.label}</p>
              <p className="mt-4 text-3xl font-black text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="focus" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#ff7b82]">Focus</p>
          <h3 className="mt-3 text-3xl font-black text-white">Mais do que um canal de gaming.</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="panel p-6">
            <Play className="mb-4 text-[#E50914]" size={24} />
            <h4 className="text-xl font-bold">Streaming</h4>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Conteúdo vivo, energia e presença constante para criar comunidade.
            </p>
          </div>

          <div className="panel p-6">
            <Zap className="mb-4 text-[#E50914]" size={24} />
            <h4 className="text-xl font-bold">Esports</h4>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Acompanhamento, análise e foco em competitividade e performance.
            </p>
          </div>

          <div className="panel p-6">
            <Twitch className="mb-4 text-[#E50914]" size={24} />
            <h4 className="text-xl font-bold">Caster</h4>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Personalidade, transmissão técnica e presença forte no ecossistema de gaming.
            </p>
          </div>

          <div className="panel p-6">
            <ArrowRight className="mb-4 text-[#E50914]" size={24} />
            <h4 className="text-xl font-bold">Conteúdo</h4>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Produção de conteúdo para fortalecer a marca e ampliar o alcance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
