# Manas Chauhan — Portfolio

This repository is a static, multi-page portfolio served with a small Node.js `server.js` for local development and easy deployment (for example, Vercel).

## What this repo contains

- Static HTML pages: `index.html`, `about.html`, `skills.html`, `projects.html`, `contact.html`, `maxasop-portfolio.html`, and `sitemap.html`.
- Static assets: `super-maxas.css`, `super-maxas.js`, `favicon.svg`, and files in `dist/` (if present).
- A minimal Node server: `server.js` (used for local serving).
- An API folder for serverless endpoints: `api/` (optional; used on Vercel deployments).

## Prerequisites

- Node.js (16+ recommended)
- npm (or yarn)

## Install and run locally

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

`package.json` exposes `start` and `dev` which both run `node server.js`.

## Deployment

This site is suitable for static hosting or serverless platforms. To deploy on Vercel, connect the repository and follow Vercel's import flow — the `api/` folder will be used for serverless functions and static files will be served from the root.

## Notes and maintenance

- The current `sitemap.xml` and `sitemap.html` list the main pages; if you add pages (for example `maxasop-portfolio.html`) keep both sitemap files in sync and update `lastmod` values.
- The site is intentionally simple: edit the HTML files directly to change content.

## Contributing

Feel free to open issues or PRs for fixes or content updates.

## License

MIT

---

Made with ❤️ by Manas Chauhan
