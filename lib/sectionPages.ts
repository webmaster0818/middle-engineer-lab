import fs from 'node:fs';
import path from 'node:path';

export type SectionPage = { href: string; title: string; description: string };

// 各ページの metadata から title / description を読む（ハブの一覧はディレクトリから自動生成）
function pick(src: string, key: string): string {
  // metadata ブロック内の title / description を優先し、定数参照（TITLE 等）も解決する
  const idx = src.indexOf('export const metadata');
  const scope = idx >= 0 ? src.slice(idx) : src;
  const lit = scope.match(new RegExp(`\\b${key}:\\s*(['"\`])([\\s\\S]*?)\\1`));
  const ref = scope.match(new RegExp(`\\b${key}:\\s*([A-Za-z_][A-Za-z0-9_]*)\\s*[,\\n]`));
  if (ref && (!lit || (ref.index ?? 0) < (lit.index ?? 0))) {
    const c = src.match(new RegExp(`const\\s+${ref[1]}\\s*=\\s*(['"\`])([\\s\\S]*?)\\1`));
    if (c) return c[2].trim();
  }
  return lit ? lit[2].trim() : '';
}

export function sectionPages(section: string): SectionPage[] {
  const dir = path.join(process.cwd(), 'app', section);
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(dir, d.name, 'page.tsx')))
    .map((d) => {
      const src = fs.readFileSync(path.join(dir, d.name, 'page.tsx'), 'utf8');
      const title = pick(src, 'title').split(/[|｜]/)[0].trim() || d.name;
      return { href: `/${section}/${d.name}/`, title, description: pick(src, 'description') };
    })
    .sort((a, b) => a.title.localeCompare(b.title, 'ja'));
}
