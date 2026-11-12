import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const outDir = "dist/spa";
const { entries, renderHead, sitemapXml, netlifyRedirects } = await import(
  pathToFileURL(join(process.cwd(), "dist/seo/prerender.js")).href
);

const template = readFileSync(join(outDir, "index.html"), "utf-8");
const titleTag = /<title>[\s\S]*?<\/title>/;
const htmlTag = /<html[^>]*>/;
if (!titleTag.test(template)) throw new Error("index.html has no <title> to replace");

// Untouched copy used as the SPA fallback for routes without a pre-rendered page.
writeFileSync(join(outDir, "app.html"), template);

for (const { page, locale, path } of entries) {
  const { head, htmlAttributes } = renderHead(page, locale);
  const html = template.replace(htmlTag, `<html ${htmlAttributes}>`).replace(titleTag, head);
  const file = path.endsWith("/") ? join(outDir, path, "index.html") : join(outDir, path.slice(1) + ".html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}
console.log(`prerendered ${entries.length} pages`);

writeFileSync(join(outDir, "sitemap.xml"), sitemapXml());
writeFileSync(join(outDir, "_redirects"), netlifyRedirects());

rmSync("dist/seo", { recursive: true, force: true });
