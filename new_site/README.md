# Inxource Landing Page

The public-facing marketing site for [Inxource](https://inxource.com) — a business intelligence platform built for African SMEs and enterprises.

Built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Pages

| Route | Description |
|---|---|
| `/` | SME landing page |
| `/enterprise` | Enterprise landing page |
| `/user-guide` | Product walkthrough guide |

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (runs on port 3000)
pnpm dev
```

## CI/CD

Pushes to `main-prime` trigger automated deployment to the VPS via GitHub Actions (SSH). The pipeline lints and builds the project before deploying.

Secrets required in GitHub:
- `REMOTE_HOST`
- `REMOTE_USER`
- `SSH_PRIVATE_KEY`

## Production

```bash
pnpm build
pnpm start   # runs on port 5000
```

Managed with **PM2** on the VPS as `landing-page`.
