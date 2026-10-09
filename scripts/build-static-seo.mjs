// Post-build step: prerenders the React home page into dist/index.html and
// generates the programmatic SEO pages, hubs, sitemap.xml, llms.txt,
// llms-full.txt and 404.html from content/pseo/**/*.json.
//
// Usage: node scripts/build-static-seo.mjs            (after `vite build` + SSR build)
//        node scripts/build-static-seo.mjs --check    (validate content only)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const CONTENT = path.join(ROOT, 'content', 'pseo');

export const SITE_URL = 'https://kutral.github.io/Essara-FinanceTracker/';
export const BASE_PATH = '/Essara-FinanceTracker/';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=space.essara.app';
const WEB_URL = 'https://essara.space/';
const BUILD_DATE = new Date().toISOString().slice(0, 10);

export const CLUSTERS = {
  'upi-autopay': {
    dir: 'guides/upi-autopay',
    name: 'UPI AutoPay Guides',
    title: 'UPI AutoPay Guides: Find, Pause & Cancel Mandates',
    description:
      'Step-by-step guides to find, pause and cancel UPI AutoPay mandates in Google Pay, PhonePe, Paytm, BHIM and other UPI apps in India.',
    intro:
      'UPI AutoPay lets merchants pull recurring payments from your bank account after a one-time approval. These guides show where each UPI app keeps your mandates and how to pause or cancel them, so forgotten renewals stop draining your account.',
  },
  'cancel-subscriptions': {
    dir: 'guides/cancel',
    name: 'Cancel Subscription Guides',
    title: 'How to Cancel Subscriptions in India: Step-by-Step Guides',
    description:
      'Plain-English guides to cancel popular subscriptions in India — OTT, music, cloud storage, food delivery and AI tools — and stop the linked AutoPay.',
    intro:
      'Most subscriptions renew silently through UPI AutoPay, cards or app-store billing. Each guide covers where to cancel, what happens to the payment mandate, and how to confirm nothing renews again.',
  },
  learn: {
    dir: 'learn',
    name: 'Money Clarity Glossary',
    title: 'Learn: UPI AutoPay, Subscriptions & Money Leaks Explained',
    description:
      'Clear explanations of UPI AutoPay, e-mandates, RBI recurring payment rules, subscription creep, money leaks and simple budgeting methods for India.',
    intro:
      'Short, practical explainers on the ideas behind recurring payments and everyday money management in India — written to be quoted, shared and acted on.',
  },
  for: {
    dir: 'for',
    name: 'Essara For You',
    title: 'Who Essara Is For: Subscription Tracking by Use Case',
    description:
      'How students, families, freelancers, couples and iPhone users in India use a manual-first tracker like Essara to control subscriptions and spending.',
    intro:
      'Different lives leak money in different ways. These pages show how people in specific situations can use manual-first tracking to keep recurring payments under control.',
  },
};

// ---------- helpers ----------
const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const pageUrl = (p) => SITE_URL + p.dir + '/' + p.slug + '/';
const pageHref = (p) => BASE_PATH + p.dir + '/' + p.slug + '/';
const hubUrl = (c) => SITE_URL + CLUSTERS[c].dir + '/';
const hubHref = (c) => BASE_PATH + CLUSTERS[c].dir + '/';
const words = (p) =>
  [p.summary, ...(p.sections || []).flatMap((s) => [s.heading, ...(s.paragraphs || []), ...(s.list || [])]),
    ...(p.steps || []).flatMap((s) => [s.name, s.text]), ...(p.faqs || []).flatMap((f) => [f.q, f.a])]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;

// ---------- load + validate ----------
export function loadPages() {
  const pages = [];
  const errors = [];
  if (!fs.existsSync(CONTENT)) return { pages, errors };
  for (const cluster of fs.readdirSync(CONTENT)) {
    const dir = path.join(CONTENT, cluster);
    if (!fs.statSync(dir).isDirectory()) continue;
    if (!CLUSTERS[cluster]) {
      errors.push(`unknown cluster folder: ${cluster}`);
      continue;
    }
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      const rel = `content/pseo/${cluster}/${file}`;
      let p;
      try {
        p = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      } catch (e) {
        errors.push(`${rel}: invalid JSON (${e.message})`);
        continue;
      }
      const err = (m) => errors.push(`${rel}: ${m}`);
      if (p.slug + '.json' !== file) err(`slug "${p.slug}" must match filename`);
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug || '')) err('slug must be kebab-case');
      if (p.cluster !== cluster) err(`cluster "${p.cluster}" must be "${cluster}"`);
      for (const k of ['title', 'metaDescription', 'h1', 'summary']) if (!p[k]) err(`missing ${k}`);
      if (p.title && p.title.length > 65) err(`title too long (${p.title.length} > 65)`);
      if (p.metaDescription && (p.metaDescription.length < 110 || p.metaDescription.length > 165))
        err(`metaDescription length ${p.metaDescription.length} not in 110-165`);
      if (!Array.isArray(p.sections) || p.sections.length < 2) err('need at least 2 sections');
      if (!Array.isArray(p.faqs) || p.faqs.length < 3) err('need at least 3 faqs');
      if (p.updated && !/^\d{4}-\d{2}-\d{2}$/.test(p.updated)) err('updated must be YYYY-MM-DD');
      for (const s of p.sources || []) if (!/^https:\/\//.test(s.url || '')) err(`bad source url ${s.url}`);
      const wc = words(p);
      if (wc < 450) err(`thin content: ${wc} words (min 450)`);
      if (/\b(SOC ?2|256-bit|bank sync|4\.8 ?★|1,?247)\b/i.test(JSON.stringify(p))) err('contains a banned claim (see content/FACTS.md)');
      p.dir = CLUSTERS[cluster].dir;
      p.wordCount = wc;
      pages.push(p);
    }
  }
  const slugs = new Set();
  for (const p of pages) {
    if (slugs.has(p.slug)) errors.push(`duplicate slug ${p.slug}`);
    slugs.add(p.slug);
  }
  const titles = new Map();
  for (const p of pages) {
    if (titles.has(p.title)) errors.push(`duplicate title "${p.title}" (${p.slug}, ${titles.get(p.title)})`);
    titles.set(p.title, p.slug);
  }
  for (const p of pages)
    for (const r of p.related || []) if (!slugs.has(r)) errors.push(`${p.slug}: related slug "${r}" does not exist`);
  pages.sort((a, b) => a.cluster.localeCompare(b.cluster) || a.slug.localeCompare(b.slug));
  return { pages, errors };
}

// ---------- shared page chrome ----------
const CSS = `
:root{color-scheme:dark;--bg:#000;--fg:#fff;--muted:rgba(255,255,255,.62);--dim:rgba(255,255,255,.4);--line:rgba(255,255,255,.1)}
*{box-sizing:border-box}html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.7 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit}
.serif{font-family:"Instrument Serif",Georgia,serif;font-style:italic;font-weight:400}
.wrap{max-width:780px;margin:0 auto;padding:0 20px}
.glass{background:rgba(255,255,255,.02);box-shadow:inset 0 1px 1px rgba(255,255,255,.1);border:1px solid var(--line);border-radius:22px}
header.top{position:sticky;top:0;z-index:5;padding:14px 16px;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
header.top .bar{max-width:1000px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
header.top a{text-decoration:none}
.brand{font-weight:600;font-size:18px}
.nav{display:flex;gap:16px;font-size:14px;color:var(--muted);flex-wrap:wrap}
.nav a:hover{color:#fff}
.btn{display:inline-block;padding:10px 20px;border-radius:999px;border:1px solid rgba(255,255,255,.25);text-decoration:none;font-size:14px;font-weight:500;background:rgba(255,255,255,.04)}
.btn:hover{background:rgba(255,255,255,.1)}
.btn.primary{background:#fff;color:#000;border-color:#fff}
nav.crumbs{font-size:13px;color:var(--dim);margin:28px 0 8px}
nav.crumbs a{text-decoration:none}nav.crumbs a:hover{color:#fff}
h1{font-size:clamp(32px,6vw,52px);line-height:1.1;letter-spacing:-.02em;margin:8px 0 16px;font-weight:500}
h2{font-size:clamp(22px,3.5vw,28px);line-height:1.25;letter-spacing:-.01em;margin:44px 0 12px;font-weight:500}
h3{font-size:18px;margin:24px 0 8px;font-weight:500}
p,li{color:var(--muted)}
.meta{font-size:13px;color:var(--dim)}
.answer{padding:20px 22px;margin:24px 0}
.answer strong{display:block;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--dim);margin-bottom:6px;font-weight:500}
.answer p{color:#fff;margin:0}
ol.steps{counter-reset:s;list-style:none;padding:0}
ol.steps li{counter-increment:s;position:relative;padding:14px 16px 14px 56px;margin:10px 0;border:1px solid var(--line);border-radius:16px}
ol.steps li::before{content:counter(s);position:absolute;left:16px;top:14px;width:26px;height:26px;border-radius:50%;background:#fff;color:#000;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center}
ol.steps b{color:#fff;display:block}
details{border-bottom:1px solid var(--line);padding:14px 0}
summary{cursor:pointer;color:#fff;font-weight:500}
.cta{padding:28px;margin:48px 0;text-align:center}
.cta h2{margin-top:0}
.cta .row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin:16px 0}
.card{display:block;padding:16px 18px;text-decoration:none}
.card:hover{background:rgba(255,255,255,.06)}
.card span{display:block;font-size:13px;color:var(--dim);margin-top:4px;line-height:1.5}
.sources{font-size:14px}
footer.site{margin-top:64px;padding:40px 20px;border-top:1px solid var(--line);text-align:center;font-size:13px;color:var(--dim)}
footer.site .links{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:12px}
footer.site a{text-decoration:none}footer.site a:hover{color:#fff}
`;

function shell({ title, description, canonical, body, ld = [], ogType = 'article' }) {
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<link rel="canonical" href="${canonical}" />
<link rel="alternate" hreflang="en-IN" href="${canonical}" />
<link rel="alternate" hreflang="x-default" href="${canonical}" />
<meta name="theme-color" content="#000000" />
<meta name="color-scheme" content="dark" />
<link rel="icon" href="${BASE_PATH}favicon.svg" type="image/svg+xml" />
<link rel="manifest" href="${BASE_PATH}site.webmanifest" />
<meta property="og:type" content="${ogType}" />
<meta property="og:site_name" content="Essara" />
<meta property="og:locale" content="en_IN" />
<meta property="og:url" content="${canonical}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:image" content="${SITE_URL}og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@essaraapp" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${SITE_URL}og-image.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<style>${CSS.trim()}</style>
${ld.map(jsonLd).join('\n')}
</head>
<body>
<header class="top"><div class="bar">
<a class="brand" href="${BASE_PATH}">Essara</a>
<nav class="nav" aria-label="Main">
${Object.keys(CLUSTERS).map((c) => `<a href="${hubHref(c)}">${esc(CLUSTERS[c].name)}</a>`).join('\n')}
</nav>
<a class="btn" href="${PLAY_URL}" rel="noopener">Get the app</a>
</div></header>
<main class="wrap">
${body}
</main>
<footer class="site">
<div class="links">
<a href="${BASE_PATH}">Home</a>
${Object.keys(CLUSTERS).map((c) => `<a href="${hubHref(c)}">${esc(CLUSTERS[c].name)}</a>`).join('\n')}
<a href="${WEB_URL}" rel="noopener">essara.space</a>
<a href="${WEB_URL}tools" rel="noopener">Free tools</a>
<a href="${WEB_URL}pricing" rel="noopener">Pricing</a>
<a href="${PLAY_URL}" rel="noopener">Google Play</a>
</div>
<p>Essara is a manual-first expense and subscription tracker for India. It never asks for your bank login.<br />Guides are for general information, not financial advice. © ${BUILD_DATE.slice(0, 4)} Essara.</p>
</footer>
</body>
</html>
`;
}

const ORG = {
  '@type': 'Organization',
  '@id': WEB_URL + '#organization',
  name: 'Essara',
  url: WEB_URL,
  logo: SITE_URL + 'icon-512.png',
  sameAs: [PLAY_URL, 'https://x.com/essaraapp'],
};

function crumbsLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  };
}
const crumbsHtml = (items) =>
  `<nav class="crumbs" aria-label="Breadcrumb">${items
    .map((it, i) => (i < items.length - 1 ? `<a href="${it.href}">${esc(it.name)}</a> / ` : `<span>${esc(it.name)}</span>`))
    .join('')}</nav>`;

function ctaHtml(p) {
  const tool = p.essaraTool;
  return `<section class="cta glass" aria-label="Try Essara">
<h2>Never miss a <span class="serif">renewal</span> again</h2>
<p>Essara is a manual-first tracker for subscriptions, UPI AutoPay mandates, bills and expenses. Add what renews, see the monthly and yearly cost, and get a clear view of money leaks — without connecting your bank.</p>
<div class="row">
<a class="btn primary" href="${PLAY_URL}" rel="noopener">Get Essara on Google Play</a>
<a class="btn" href="${WEB_URL}" rel="noopener">Open the web app</a>
${tool ? `<a class="btn" href="${esc(tool.url)}" rel="noopener">${esc(tool.label)}</a>` : ''}
</div>
</section>`;
}

function relatedFor(p, pages) {
  const bySlug = new Map(pages.map((x) => [x.slug, x]));
  const out = (p.related || []).map((s) => bySlug.get(s)).filter(Boolean);
  for (const x of pages) {
    if (out.length >= 6) break;
    if (x !== p && x.cluster === p.cluster && !out.includes(x)) out.push(x);
  }
  for (const x of pages) {
    if (out.length >= 8) break;
    if (x !== p && !out.includes(x)) out.push(x);
  }
  return out.slice(0, 8);
}

function renderPage(p, pages) {
  const c = CLUSTERS[p.cluster];
  const url = pageUrl(p);
  const updated = p.updated || BUILD_DATE;
  const crumbs = [
    { name: 'Home', url: SITE_URL, href: BASE_PATH },
    { name: c.name, url: hubUrl(p.cluster), href: hubHref(p.cluster) },
    { name: p.h1, url, href: pageHref(p) },
  ];
  const sections = (p.sections || [])
    .map((s) => {
      const id = s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const tag = s.ordered ? 'ol' : 'ul';
      return `<section aria-labelledby="${id}">
<h2 id="${id}">${esc(s.heading)}</h2>
${(s.paragraphs || []).map((t) => `<p>${esc(t)}</p>`).join('\n')}
${s.list && s.list.length ? `<${tag}>${s.list.map((li) => `<li>${esc(li)}</li>`).join('')}</${tag}>` : ''}
</section>`;
    })
    .join('\n');
  const steps = p.steps && p.steps.length
    ? `<section aria-labelledby="steps">
<h2 id="steps">${esc(p.stepsHeading || 'Step by step')}</h2>
<ol class="steps">${p.steps.map((s) => `<li><b>${esc(s.name)}</b>${esc(s.text)}</li>`).join('')}</ol>
</section>`
    : '';
  const faqs = `<section aria-labelledby="faq">
<h2 id="faq">Frequently asked questions</h2>
${p.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
</section>`;
  const related = relatedFor(p, pages);
  const relatedHtml = `<section aria-labelledby="related">
<h2 id="related">Related guides</h2>
<div class="grid">${related
    .map((r) => `<a class="card glass" href="${pageHref(r)}">${esc(r.h1)}<span>${esc(CLUSTERS[r.cluster].name)}</span></a>`)
    .join('')}</div>
</section>`;
  const sourcesHtml = p.sources && p.sources.length
    ? `<section class="sources" aria-labelledby="sources"><h2 id="sources">Sources</h2><ul>${p.sources
        .map((s) => `<li><a href="${esc(s.url)}" rel="noopener nofollow">${esc(s.label)}</a></li>`)
        .join('')}</ul></section>`
    : '';

  const body = `${crumbsHtml(crumbs)}
<article>
<h1>${esc(p.h1)}</h1>
<p class="meta">Updated <time datetime="${updated}">${updated}</time> · By the Essara team · ${Math.max(2, Math.round(p.wordCount / 220))} min read</p>
<div class="answer glass speakable-answer"><strong>Quick answer</strong><p>${esc(p.summary)}</p></div>
${steps}
${sections}
${ctaHtml(p)}
${faqs}
${sourcesHtml}
</article>
${relatedHtml}`;

  const article = {
    '@context': 'https://schema.org',
    '@type': p.cluster === 'learn' ? 'Article' : 'TechArticle',
    '@id': url + '#article',
    headline: p.h1,
    description: p.metaDescription,
    url,
    mainEntityOfPage: url,
    datePublished: p.published || updated,
    dateModified: updated,
    inLanguage: 'en-IN',
    image: SITE_URL + 'og-image.png',
    author: ORG,
    publisher: ORG,
    keywords: (p.keywords || []).join(', '),
    wordCount: p.wordCount,
    isPartOf: { '@type': 'WebSite', '@id': SITE_URL + '#website', name: 'Essara', url: SITE_URL },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-answer'] },
    ...(p.about ? { about: p.about.map((name) => ({ '@type': 'Thing', name })) } : {}),
  };
  const ld = [
    article,
    crumbsLd(crumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  if (p.steps && p.steps.length)
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: p.h1,
      description: p.summary,
      ...(p.totalTime ? { totalTime: p.totalTime } : {}),
      step: p.steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text, url: url + '#steps' })),
    });
  return shell({ title: p.title, description: p.metaDescription, canonical: url, body, ld });
}

function renderHub(cluster, pages) {
  const c = CLUSTERS[cluster];
  const list = pages.filter((p) => p.cluster === cluster);
  const url = hubUrl(cluster);
  const crumbs = [
    { name: 'Home', url: SITE_URL, href: BASE_PATH },
    { name: c.name, url, href: hubHref(cluster) },
  ];
  const others = Object.keys(CLUSTERS).filter((k) => k !== cluster);
  const body = `${crumbsHtml(crumbs)}
<h1>${esc(c.title)}</h1>
<p>${esc(c.intro)}</p>
<div class="grid">${list
    .map((p) => `<a class="card glass" href="${pageHref(p)}">${esc(p.h1)}<span>${esc(p.metaDescription)}</span></a>`)
    .join('')}</div>
<h2>More from Essara</h2>
<div class="grid">${others
    .map((k) => `<a class="card glass" href="${hubHref(k)}">${esc(CLUSTERS[k].name)}<span>${esc(CLUSTERS[k].description)}</span></a>`)
    .join('')}</div>
${ctaHtml({})}`;
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': url + '#collection',
      name: c.title,
      description: c.description,
      url,
      inLanguage: 'en-IN',
      publisher: ORG,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: list.length,
        itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: pageUrl(p), name: p.h1 })),
      },
    },
    crumbsLd(crumbs),
  ];
  return shell({ title: c.title, description: c.description, canonical: url, body, ld, ogType: 'website' });
}

function render404() {
  const body = `<h1>Page not <span class="serif">found</span></h1>
<p>The page you are looking for moved or never existed. Try one of these instead:</p>
<div class="grid">${Object.keys(CLUSTERS)
    .map((k) => `<a class="card glass" href="${hubHref(k)}">${esc(CLUSTERS[k].name)}<span>${esc(CLUSTERS[k].description)}</span></a>`)
    .join('')}</div>
${ctaHtml({})}`;
  return shell({ title: 'Page not found · Essara', description: 'This page does not exist. Browse Essara guides on UPI AutoPay, cancelling subscriptions and money clarity.', canonical: SITE_URL, body }).replace(
    '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />',
    '<meta name="robots" content="noindex, follow" />',
  );
}

function sitemap(pages) {
  const urls = [
    { loc: SITE_URL, lastmod: BUILD_DATE, priority: '1.0', changefreq: 'weekly' },
    ...Object.keys(CLUSTERS).map((k) => ({ loc: hubUrl(k), lastmod: BUILD_DATE, priority: '0.8', changefreq: 'weekly' })),
    ...pages.map((p) => ({ loc: pageUrl(p), lastmod: p.updated || BUILD_DATE, priority: '0.7', changefreq: 'monthly' })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${BASE_PATH}sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`)
  .join('\n')}
</urlset>
`;
}

function llms(pages, full) {
  const headerPath = path.join(ROOT, 'content', 'llms-header.md');
  const header = fs.existsSync(headerPath) ? fs.readFileSync(headerPath, 'utf8').trim() : '# Essara';
  const parts = [header, ''];
  for (const k of Object.keys(CLUSTERS)) {
    const list = pages.filter((p) => p.cluster === k);
    if (!list.length) continue;
    parts.push(`## ${CLUSTERS[k].name}`, '', `- [${CLUSTERS[k].title}](${hubUrl(k)}): ${CLUSTERS[k].description}`);
    for (const p of list) parts.push(`- [${p.h1}](${pageUrl(p)}): ${p.summary}`);
    parts.push('');
  }
  if (full) {
    parts.push('---', '', '# Full guide text', '');
    for (const p of pages) {
      parts.push(`## ${p.h1}`, '', `URL: ${pageUrl(p)}`, `Updated: ${p.updated || BUILD_DATE}`, '', `**Quick answer:** ${p.summary}`, '');
      if (p.steps && p.steps.length) {
        parts.push(`### ${p.stepsHeading || 'Step by step'}`, '');
        p.steps.forEach((s, i) => parts.push(`${i + 1}. **${s.name}** — ${s.text}`));
        parts.push('');
      }
      for (const s of p.sections || []) {
        parts.push(`### ${s.heading}`, '', ...(s.paragraphs || []).flatMap((t) => [t, '']));
        if (s.list) parts.push(...s.list.map((li, i) => (s.ordered ? `${i + 1}. ${li}` : `- ${li}`)), '');
      }
      parts.push('### FAQ', '');
      for (const f of p.faqs) parts.push(`**${f.q}**`, '', f.a, '');
    }
  }
  return parts.join('\n').trim() + '\n';
}

async function prerenderHome() {
  const indexPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(SSR_ENTRY)) {
    console.warn('[seo] dist-ssr/entry-server.js missing — skipping home prerender');
    return;
  }
  const { render } = await import(pathToFileURL(SSR_ENTRY).href);
  const html = fs.readFileSync(indexPath, 'utf8');
  const appHtml = render();
  if (!html.includes('<div id="root"></div>')) throw new Error('dist/index.html has no empty #root to fill');
  fs.writeFileSync(indexPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  console.log(`[seo] prerendered home page (${appHtml.length} chars of HTML)`);
}

async function main() {
  const { pages, errors } = loadPages();
  if (errors.length) {
    console.error('[seo] content errors:\n  ' + errors.join('\n  '));
    process.exit(1);
  }
  console.log(`[seo] ${pages.length} PSEO pages valid (${pages.reduce((n, p) => n + p.wordCount, 0)} words)`);
  if (process.argv.includes('--check')) return;
  if (!fs.existsSync(path.join(DIST, 'index.html'))) throw new Error('run vite build first');

  await prerenderHome();
  const write = (rel, data) => {
    const file = path.join(DIST, rel);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, data);
  };
  for (const p of pages) write(`${p.dir}/${p.slug}/index.html`, renderPage(p, pages));
  for (const k of Object.keys(CLUSTERS)) write(`${CLUSTERS[k].dir}/index.html`, renderHub(k, pages));
  write('404.html', render404());
  write('sitemap.xml', sitemap(pages));
  write('llms.txt', llms(pages, false));
  write('llms-full.txt', llms(pages, true));
  fs.rmSync(path.join(ROOT, 'dist-ssr'), { recursive: true, force: true });
  console.log(`[seo] wrote ${pages.length} pages, ${Object.keys(CLUSTERS).length} hubs, sitemap.xml, llms.txt, llms-full.txt, 404.html`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
