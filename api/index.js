const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const urlPath = (req.url || '/').split('?')[0];
    const map = {
      '/': 'maxasop-portfolio.html',
      '/index.html': 'maxasop-portfolio.html',
      '/about': 'about.html',
      '/about.html': 'about.html',
      '/skills': 'skills.html',
      '/skills.html': 'skills.html',
      '/projects': 'projects.html',
      '/projects.html': 'projects.html',
      '/contact': 'contact.html',
      '/contact.html': 'contact.html',
      '/sitemap.xml': 'sitemap.xml',
      '/sitemap.html': 'sitemap.html',
      '/favicon.svg': 'favicon.svg',
      '/favicon.ico': 'favicon.svg',
      '/robots.txt': 'robots.txt'
    };

    const filename = map[urlPath] || 'maxasop-portfolio.html';
    const filePath = path.join(process.cwd(), filename);

    if (!fs.existsSync(filePath)) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end(`Not found: ${filename}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const textTypes = ['.html', '.xml', '.txt', '.svg'];
    const contentType = textTypes.includes(ext) ? (ext === '.xml' ? 'application/xml' : ext === '.txt' ? 'text/plain' : ext === '.svg' ? 'image/svg+xml' : 'text/html; charset=utf-8') : 'application/octet-stream';

    const data = fs.readFileSync(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(data);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Server error');
  }
};
