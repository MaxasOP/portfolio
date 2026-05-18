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
    '/': 'maxasop-portfolio.html',
    '/about': 'about.html',
    '/skills': 'skills.html',
    '/projects': 'projects.html',
    '/contact': 'contact.html',
    '/sitemap.xml': 'sitemap.xml',
    '/sitemap.html': 'sitemap.html',
    '/favicon.svg': 'favicon.svg',
    '/favicon.ico': 'favicon.svg',
    '/robots.txt': 'robots.txt'
  };

  const filename = map[urlPath] || 'maxasop-portfolio.html';
  const filePath = path.join(__dirname, filename);

  if (!fs.existsSync(filePath)) return res.status(404).send('Not found');
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.xml') return res.type('application/xml').sendFile(filePath);
  if (ext === '.svg') return res.type('image/svg+xml').sendFile(filePath);
  if (ext === '.txt') return res.type('text/plain').sendFile(filePath);
  return res.sendFile(filePath);
});

app.listen(PORT, () => console.log(`Local SSR test server listening on http://localhost:${PORT}`));
