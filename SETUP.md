# Nahid Islam — QA Engineer Portfolio

Built on [tbakerx/react-resume-template](https://github.com/tbakerx/react-resume-template)
(Next.js 14 + TypeScript + Tailwind). All content has been rewritten for a mid‑level QA
Engineer profile.

## Run it locally

You need **Node 18+** and **Yarn** (this machine currently has neither installed).

```bash
# install Node with nvm, then:
corepack enable            # provides yarn
yarn install
yarn dev                   # http://localhost:3000
```

Production build / preview:

```bash
yarn build && yarn start
```

## What was customized

Almost everything lives in one file: `src/data/data.tsx`.

| Section | What's in it now |
|---|---|
| `homePageMeta` | Title/description for a QA Engineer |
| `heroData` | Name, headline, intro paragraphs |
| `aboutData` | Bio + about grid (location, experience, ISTQB, etc.) |
| `skills` | 4 groups: Test automation / API & performance / Languages & DBs / Process & tooling |
| `portfolioItems` | 6 QA project cards (automation framework, API suite, CI gates, perf, mobile, writing) |
| `education` | ISTQB CTFL + BSc Computer Science |
| `experience` | QA Engineer → QA Analyst → Junior QA Engineer |
| `testimonial` | 3 role‑based quotes |
| `contact` / `socialLinks` | Email, location, LinkedIn, GitHub |

Also edited: `src/components/Sections/Footer.tsx` (copyright name),
`src/components/Layout/Page.tsx` + `next-sitemap.js` (canonical URL placeholder),
`src/components/Sections/Resume/index.tsx` (skills blurb).

## Before you publish — replace the placeholders

1. **Real details** in `src/data/data.tsx`: name, city, email (`nahid.islam.qa@example.com`),
   LinkedIn/GitHub handles, employer names, dates, and the project `url`s.
2. **Images** in `src/images/` — swap `profilepic.jpg`, `header-background.webp`, and
   `portfolio/portfolio-1..6.jpg` for your own; imports are at the top of `data.tsx`.
3. **Resume PDF**: add `public/assets/resume.pdf` (the Hero "Resume" button links to it).
4. **Icons**: optionally add `public/icon.svg` and `public/apple-touch-icon.png`.
5. **Canonical domain**: replace `https://nahid-islam.vercel.app` in `Page.tsx` and
   `next-sitemap.js` with your real domain.
6. **Contact form**: wire an email provider in
   `src/components/Sections/Contact/ContactForm.tsx` (SendGrid is suggested by the template).

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config for Next.js.
