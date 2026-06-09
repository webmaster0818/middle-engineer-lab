import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://middle-engineer.com";

export const dynamic = "force-static";

// カテゴリ別の優先度・更新頻度
function meta(slug: string): { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] } {
  if (slug === "") return { priority: 1, changeFrequency: "daily" };
  const top = slug.split("/")[0];
  if (["compare", "review"].includes(top)) return { priority: 0.9, changeFrequency: "weekly" };
  if (["about", "privacy", "terms", "editorial", "faq"].includes(top)) return { priority: 0.3, changeFrequency: "monthly" };
  return { priority: 0.8, changeFrequency: "monthly" };
}

/**
 * app/ 配下で page.tsx を持つルート（ネスト含む）を再帰列挙し、自動で sitemap に反映する。
 * ページ追加・削除しても自動同期（手動メンテ不要）。output:'export' で out/sitemap.xml を生成。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const lastModified = new Date();
  const slugs = new Set<string>();

  function walk(dir: string, prefix: string) {
    let entries: fs.Dirent[] = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    // このディレクトリが page.tsx を持てばルートとして登録
    if (entries.some((e) => e.isFile() && e.name === "page.tsx")) {
      slugs.add(prefix);
    }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const name = e.name;
      if (name.startsWith("_") || name.startsWith("(") || name.startsWith(".") || name === "node_modules") continue;
      walk(path.join(dir, name), prefix ? `${prefix}/${name}` : name);
    }
  }
  walk(appDir, "");

  return Array.from(slugs)
    .sort()
    .map((slug) => {
      const { priority, changeFrequency } = meta(slug);
      return {
        url: slug ? `${BASE_URL}/${slug}/` : `${BASE_URL}/`,
        lastModified,
        changeFrequency,
        priority,
      };
    });
}
