# nahid-portfolio

Personal portfolio site for a QA Engineer — test automation, API testing, and CI/CD quality.

**Live:** https://nahid-portfolio.vercel.app <!-- update after deploy -->

Built with **Next.js 14** (Pages Router), **TypeScript**, and **Tailwind CSS**.
Based on [tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template),
with the Yarn toolchain swapped for plain npm and the portfolio/testimonials
sections removed.

## Develop

Requires **Node 18+**.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command | Description |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (runs `next-sitemap` afterwards) |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint via `next lint` |

## Edit content

Everything shown on the site is in **`src/data/data.tsx`** — hero, about, skills,
work experience, education, contact and social links. Section components live in
`src/components/Sections/`.

Images are in `src/images/` (imported in `data.tsx`); static files (icons, OG
image, resume PDF) are in `public/`.

## Configuration

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for `<link rel="canonical">`, `og:url` and the sitemap. Defaults to `https://nahid-portfolio.vercel.app`. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com) — makes the contact form actually send email. Without it the form is disabled. |

## Deploy

Import the repo at [vercel.com/new](https://vercel.com/new) (Next.js is detected
automatically). Set the env vars above in the Vercel project settings. Every push
to `main` redeploys.

## Regenerate icons / OG image

```bash
npm run gen:assets   # rebuilds public/icon.svg → PNG icons + og.png
```

## License

MIT — see [LICENSE](LICENSE).
