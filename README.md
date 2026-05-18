Manas Chauhan — Portfolio (MPA / simple SSR)

This repository contains a small multi-page portfolio with a lightweight serverless handler for Vercel and a local test server.

Quick start (local):

1. Install dependencies:

```bash
npm install
```

2. Run the local test server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

Vercel deployment:

- The `vercel.json` rewrites route requests to `/api/index.js`, letting the serverless function serve the appropriate HTML page.
- Keep static assets in the project root so they are served directly.

Files added:

- `api/index.js` — Vercel serverless handler that maps routes to HTML files.
- `server.js` — Express-based local test server.
- `package.json` — scripts and dependency for local testing.
- `README.md` — this file.

Notes:

- For production, consider serving static assets from a CDN and adding caching headers in the serverless handler.
- If you want automatic deploy previews, configure Vercel as usual — this setup works with the default Node.js runtime.
