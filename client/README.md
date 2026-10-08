# DUWiT Hacks site (Next.js)

Marketing site and mailing list for DUWiT Hacks 2027.

## Setup

From the repo root:

```bash
pnpm install
cp client/env.example client/.env.local
```

Fill in `client/.env.local` (see `env.example`). MailerLite credentials are required for sign-ups to work in production.

## Development

```bash
pnpm --filter @duwit-hacks/client dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| -------- | ------------- |
| `pnpm dev` | Dev server (from `client/`) |
| `pnpm build` | Production build |
| `pnpm check` | ESLint + TypeScript |
| `pnpm test` | Unit tests (Vitest) |

## Deploy

The site is built via Netlify ([`netlify.toml`](../netlify.toml) at repo root): install workspace deps and run `next build` for the client package.

## Blog

Set `blogEnabled` to `true` in [`src/lib/site.ts`](src/lib/site.ts) when posts should be public.
