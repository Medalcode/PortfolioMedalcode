import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(file));
    } else {
      if (file.endsWith('.html')) results.push(file);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
let errors = 0;

console.log(`Scanning ${htmlFiles.length} HTML files for broken internal links...`);

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Regex simple para href="/..."
  const regex = /href="(\/[^"]*)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const link = match[1];
    // Ignorar assets (.css, .js, .png, etc) y rutas especiales
    if (link.startsWith('/_astro') || link.startsWith('/files') || link.startsWith('/images') || link.match(/\.(css|js|png|jpg|svg|ico|xml|txt|json|webmanifest)$/)) continue;

    // Remove query/hash
    const cleanLink = link.split('?')[0].split('#')[0];
    
    // Check if file exists
    // Case 1: /foo/bar -> dist/foo/bar.html OR dist/foo/bar/index.html
    const p1 = path.join(distDir, cleanLink + '.html');
    const p2 = path.join(distDir, cleanLink, 'index.html');
    const p3 = path.join(distDir, cleanLink); // if exact file like /robots.txt (covered by ignore but safe check)
    
    // Special case root /
    if (cleanLink === '/' && fs.existsSync(path.join(distDir, 'index.html'))) continue;

    if (!fs.existsSync(p1) && !fs.existsSync(p2) && !(fs.existsSync(p3) && fs.statSync(p3).isFile())) {
      console.error(`❌ BROKEN LINK in ${path.relative(distDir, file)}: ${link}`);
      // console.error(`   Checked: ${p1} \n            ${p2}`);
      errors++;
    }
  }
});

if (errors === 0) {
  console.log("✅ All internal links verified successfully!");
} else {
  console.error(`⚠️ Found ${errors} broken links.`);
  process.exit(1);
}
