Migration plan — Static → React (webapp)

Purpose
- Preserve this copy as the legacy reference. Port pages incrementally into a new React + Vite app at `/webapp`.

Pages mapping
- maxasop-portfolio.html  -> src/pages/Home.jsx
- about.html              -> src/pages/About.jsx
- skills.html             -> src/pages/Skills.jsx
- projects.html           -> src/pages/Projects.jsx
- contact.html            -> src/pages/Contact.jsx

Assets & shared code
- super-maxas.css         -> webapp/src/styles/super-maxas.css (import in main.jsx)
- super-maxas.js          -> convert to small utilities or React hooks (e.g., useNav, useReveal)
- server.js & package.json -> keep in root; webapp will have its own package.json

Steps (recommended)
1. Create `webapp` via Vite: `npx create-vite@latest webapp --template react`.
2. `cd webapp && npm install`.
3. Copy `legacy/super-maxas.css` to `webapp/src/styles/super-maxas.css` and import it in `src/main.jsx`.
4. Add `webapp/src/assets/` and copy pixel images for pixel-perfect rendering.
5. Create page components under `src/pages` using the legacy HTML as JSX starting points.
6. Add `react-router-dom` for routes and copy small interactive bits from `super-maxas.js` into React hooks or component effects.
7. Test on mobile, ensure `image-rendering: pixelated` and fixed sprite sizes for fidelity.

Notes
- Keep `legacy` intact until the React app fully replaces public routes.
- Prefer incremental porting: start with `Home` and one inner page, validate styling and interactions, then continue.
- Use `prefers-reduced-motion` and responsive breakpoints already present in the CSS.

If you want, I can scaffold the `webapp` next and copy the shared assets automatically.
