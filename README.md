# Portfolio

A modern, single-page portfolio built with HTML, Tailwind CSS, and vanilla JavaScript. Optimized for static hosting on [Vercel](https://vercel.com).

## Local preview

Open `index.html` in your browser, or run a simple server:

```bash
npx serve .
```

## Customize your content

Edit `index.html` and search for these sections to update:

| Section | What to change |
|---------|----------------|
| `<title>` & meta | Your name and role |
| Nav logo `AB.` | Your initials |
| Hero | Headline, bio, availability badge |
| About | Photo URL, stats, story |
| Skills | Skill bars and categories |
| Projects | Cards, images, links, `data-category` filters |
| Blog | Articles (or remove section) |
| Contact | Email, location, social links, form action |

Replace Unsplash placeholder images with your own photos (e.g. in an `/assets` folder).

## Deploy to Vercel

1. Push this folder to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects a static site — no build command needed.
4. Click **Deploy**.

Alternatively, with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```

## Project structure

```
.
├── index.html      # Main portfolio page
├── vercel.json     # Vercel static site config
├── README.md
└── .gitignore
```
