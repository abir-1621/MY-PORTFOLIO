# Portfolio Project Context

This portfolio is a static single-page site with a separate article reader.

## Main Files

- `index.html` contains the page shell, navigation, section containers, and base Tailwind setup.
- `js/portfolio-data.js` is the primary content source for profile copy, focus areas, experience, projects, education, skills, articles, roles, and contact details.
- `js/render.js` renders dynamic content from `window.portfolioData`.
- `js/main.js` handles UI behavior such as mobile navigation, scroll reveal, filtering, copy email, and smooth scrolling.
- `article.html` reads `js/portfolio-data.js` and displays article content based on `?slug=...`.
- `assets/` contains local images, profile assets, and project logos.

## Editing Rules

- Prefer editing `js/portfolio-data.js` for content updates.
- Prefer editing `js/render.js` only when the visual structure or available fields need to change.
- Keep real projects above conceptual projects in the `projects` array.
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
