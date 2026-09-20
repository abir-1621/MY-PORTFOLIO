# Portfolio Project Context

This portfolio is a static single-page site with a separate article reader retained for future publishing. The main site uses custom CSS and vanilla JavaScript, with no runtime Tailwind dependency.

## Main Files

- `index.html` contains the complete, crawlable homepage content, navigation, SEO metadata, and structured data.
- `work/ryogas.html` and `work/friends-and-fund.html` are static, indexable case studies.
- `css/styles.css` contains the complete design system, responsive layouts, and reduced-motion rules.
- `js/portfolio-data.js` retains structured profile, project, and article data for the article reader and future tooling.
- `js/render.js` is a retained rendering helper and is not loaded by the homepage.
- `js/main.js` handles the mobile navigation, sticky header state, current year, and scroll reveals.
- `article.html` reads `js/portfolio-data.js` and displays article content based on `?slug=...`; it remains `noindex` until articles are published as static pages.
- `assets/` contains local images, profile assets, and project logos.
- `BRAND_GUIDELINES.md` is the source of truth for personal-brand visuals and copy.
- `brand-tokens.json` provides the same core system in a machine-readable format.
- `AGENTS.md` directs AI and coding agents to apply the brand system.
- `robots.txt`, `sitemap.xml`, and `llms.txt` provide crawler discovery information.

## Editing Rules

- Edit `index.html` when changing homepage copy, project cards, experience, or capabilities; the HTML is the search-crawlable source of truth.
- Keep matching facts in `js/portfolio-data.js` aligned when they are used by articles or future tooling.
- Add finished project pages under `work/` and link them with ordinary `<a href>` elements.
- Add every canonical, indexable page to `sitemap.xml`. Do not add drafts or `noindex` pages.
- Keep verified outcomes specific. Do not introduce metrics that are not supported by the source material.
- Use local logo/image assets for real projects when available.
- Run `node --check js/portfolio-data.js`, `node --check js/render.js`, and `node --check js/main.js` after JavaScript edits.

## Current Positioning

Md Abir is positioned as a Data Science Master's student in Erlangen focused on:

- AI/Data Engineering
- LLMs and RAG
- Deep Learning
- Machine Learning in Finance
- Workflow Automation
- Business Intelligence and data visualization
- Product-minded software engineering

## Real Projects

### F&F - Friends and Fund

Live URL: `https://personal-finance-tau-five.vercel.app/dashboard`

Portfolio logo asset: `assets/friends-fund-logo.svg`

Original project logo reference from the app:

- `public/friends-fund-logo.svg`
- `components/brand-logo.tsx`

Description:

Friends & Fund is a private savings and deposit management platform built for trusted friend groups. It supports secure member logins, admin-managed user accounts, share-based contribution tracking, server-calculated monthly deposit amounts, receipt uploads, deposit approval workflows, audit logs, and monthly reporting. Built with Next.js, TypeScript, Tailwind CSS, Supabase Auth, PostgreSQL, and Row Level Security, the project focuses on role-based access, accurate financial records, and a clean dashboard experience for both admins and members.

### RyoGas

Live URL: `https://www.ryogas.com/`

Portfolio logo asset: `assets/ryogas-logo.svg`

Summary:

RyoGas is a fuel industry automation product connected to Abir's startup experience at HiLinkz Ltd. It should be presented as a founder/product/software case study around fuel station sales tracking, offline-first operations, reporting, UI/UX simplification, and future AI inventory forecasting.
