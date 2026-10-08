# ItsTomiTV

Plataforma moderna para marcar presença digital e gerir conteúdos, streamers, casters e jogos da marca ItsTomiTV.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL

## Requisitos
- Node.js 20+
- PostgreSQL
- Variáveis de ambiente configuradas

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Crie o ficheiro `.env` baseado no `.env.example`:

```bash
cp .env.example .env
```

3. Configure as variáveis de ambiente:
- `DATABASE_URL`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `TWITCH_CLIENT_ID`
- `TWITCH_CLIENT_SECRET`

4. Gere a base de dados Prisma:

```bash
npx prisma generate
npx prisma db push
```

5. Inicie o projeto:

```bash
npm run dev
```

## Páginas principais
- `/` — landing page
- `/dashboard` — dashboard da marca
- `/admin/login` — autenticação de admin
- `/admin` — painel administrativo

## Deploy no Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Adicione as variáveis de ambiente no painel do Netlify

## Segurança
- Nunca publiques credenciais no código ou no GitHub
- Use `.env` / Netlify environment variables
- A autenticação do admin está protegida por cookie HTTP-only com JWT

## Estrutura preparada para crescer
- gestão de conteúdo
- gestão de streamers
- gestão de casters
- gestão de jogos
- integração Twitch
- painel administrativo
- arquitetura escalável para novas funcionalidades
