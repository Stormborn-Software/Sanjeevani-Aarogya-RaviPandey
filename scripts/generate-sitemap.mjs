import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

// Configure your site URL via env var
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

// Static routes
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/sitemap',
];

// Dynamic service slugs (keep in sync with src/pages/services/[id].js)
const serviceSlugs = [
  'vitiligo',
  'psoriasis',
  'skin-disease',
  'knee-pain',
  'piles',
  'infertility',
  'womens-health',
];

const now = new Date().toISOString();

function buildUrl(loc, priority = 0.7, changefreq = 'monthly') {
  const url = new URL(loc, siteUrl).toString();
  return `\n  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function generate() {
  const urls = [];

  // Static
  staticRoutes.forEach((path) => urls.push(buildUrl(path, path === '/' ? 1.0 : 0.8, 'weekly')));

  // Services
  serviceSlugs.forEach((slug) => urls.push(buildUrl(`/services/${slug}`, 0.8, 'monthly')));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.join('') +
    `\n</urlset>\n`;

  const outPath = join(process.cwd(), 'public', 'sitemap.xml');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, xml, 'utf8');

  // robots.txt
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${new URL('/sitemap.xml', siteUrl).toString()}`,
    '',
  ].join('\n');
  const robotsPath = join(process.cwd(), 'public', 'robots.txt');
  writeFileSync(robotsPath, robots, 'utf8');

  // eslint-disable-next-line no-console
  console.log(`Generated sitemap.xml and robots.txt with base ${siteUrl}`);
}

generate();
