# Md Abir — Portfolio

A responsive, accessible portfolio for a data and AI engineer and product builder. The site uses semantic HTML, custom CSS, and vanilla JavaScript, with no build step or framework dependency.

## Local preview

Run a static server from the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

Project links use the `.html` paths so they also work with Python's basic local server. Vercel's `cleanUrls` setting redirects these to the extension-free canonical URLs in production.

## Project structure

```text
.
├── index.html              # Main portfolio
├── article.html            # Article reader retained for future publishing
├── work/
│   ├── ryogas.html         # RyoGas case study
│   └── friends-and-fund.html
├── css/
│   └── styles.css          # Design system and responsive layouts
├── js/
│   ├── portfolio-data.js   # Article and project source data
│   ├── render.js           # Retained content-rendering helper
│   └── main.js             # Navigation and reveal behavior
├── assets/                 # Profile image, logos, and favicon
├── BRAND_GUIDELINES.md     # Personal visual and writing system
├── brand-tokens.json       # Machine-readable brand tokens
├── AGENTS.md               # Instructions for AI and coding agents
├── robots.txt              # Crawler access and sitemap location
├── sitemap.xml             # Canonical indexable URLs
├── llms.txt                # Experimental machine-readable site summary
└── vercel.json             # Static Vercel configuration
```

## Content updates

The homepage content is written directly in `index.html` so search engines, accessibility tools, and browsers without JavaScript receive the complete page. Keep `js/portfolio-data.js` aligned when the same project facts are used by the article reader or future tooling.

Each shipped project has a static page in `work/`. When adding an indexable page, give it a unique title, description, canonical URL, one H1, accurate JSON-LD, and a standard HTML link from an existing page. Add the canonical URL to `sitemap.xml` with an honest modification date.

`article.html` is currently `noindex` because its content and metadata are selected in the browser from a query parameter. Publish finished articles as static pages before adding them to the sitemap.

## Verification

Run JavaScript syntax checks after editing:

```bash
node --check js/portfolio-data.js
node --check js/render.js
node --check js/main.js
```

Also validate `sitemap.xml`, `vercel.json`, local links, and embedded JSON-LD after SEO changes. Preview the homepage and both case studies at desktop and mobile widths before deployment.

After deployment, verify the canonical domain in Google Search Console and Bing Webmaster Tools, submit `sitemap.xml`, and inspect each URL. `llms.txt` is supplemental and is not a substitute for crawlable pages, original content, or reputable links.

The site is ready for static deployment on Vercel. No build command is required.
