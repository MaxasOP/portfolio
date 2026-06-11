const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (css, js, images) directly
app.use(express.static(path.join(__dirname)));

// Fallback handler to mimic serverless SSR routing
app.get('*', (req, res) => {
  const urlPath = req.path || '/';
  const map = {
    '/': 'index.html',
    '/about': 'about.html',
    '/skills': 'skills.html',
    '/projects': 'projects.html',
    '/contact': 'contact.html',
    '/sitemap.xml': 'sitemap.xml',
    '/sitemap.html': 'sitemap.html',
    '/site.webmanifest': 'site.webmanifest',
    '/favicon.svg': 'favicon.svg',
    '/favicon.ico': 'favicon.ico',
    '/favicon.png': 'favicon.png',
    '/favicon-16x16.png': 'favicon-16x16.png',
    '/favicon-32x32.png': 'favicon-32x32.png',
    '/apple-touch-icon.png': 'apple-touch-icon.png',
    '/android-chrome-192x192.png': 'android-chrome-192x192.png',
    '/android-chrome-512x512.png': 'android-chrome-512x512.png',
    '/robots.txt': 'robots.txt'
  };

  const filename = map[urlPath] || 'index.html';
  const filePath = path.join(__dirname, filename);

  if (!fs.existsSync(filePath)) return res.status(404).send('Not found');
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.xml') return res.type('application/xml').sendFile(filePath);
  if (ext === '.webmanifest') return res.type('application/manifest+json').sendFile(filePath);
  if (ext === '.svg') return res.type('image/svg+xml').sendFile(filePath);
  if (ext === '.txt') return res.type('text/plain').sendFile(filePath);
  return res.sendFile(filePath);
});

app.listen(PORT, () => console.log(`Local SSR test server listening on http://localhost:${PORT}`));
