// 各ページの dateModified を「実際の最終編集日」(git最終コミット日/未コミットは当日) から生成。
// 偽の一括鮮度更新でなく、実編集履歴に基づく正確な鮮度シグナルを付与する。
// 出力: components/page-dates.json = { "/company/kddi/": "2026-07-13", ... }
import { execSync } from "node:child_process";
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const TODAY = new Date().toISOString().slice(0, 10); // 実行日(=未コミット編集の鮮度)

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name === "page.tsx") acc.push(p);
  }
  return acc;
}

// 未コミット(=今回編集した)ファイル集合
const dirty = new Set(
  execSync("git status --porcelain", { encoding: "utf8" })
    .split("\n")
    .map((l) => l.slice(3).trim())
    .filter(Boolean)
);

const pages = walk("app");
const map = {};
for (const file of pages) {
  // route: app/company/kddi/page.tsx -> /company/kddi/ ; app/page.tsx -> /
  let route = file.replace(/^app/, "").replace(/\/page\.tsx$/, "");
  if (route === "") route = "/";
  if (!route.endsWith("/")) route += "/";
  if (route.includes("[")) continue; // 動的ルートは対象外(該当なし想定)
  let date;
  if (dirty.has(file)) {
    date = TODAY;
  } else {
    try {
      date = execSync(`git log -1 --format=%cs -- "${file}"`, { encoding: "utf8" }).trim();
    } catch {
      date = "";
    }
    if (!date) date = TODAY;
  }
  map[route] = date;
}

writeFileSync("components/page-dates.json", JSON.stringify(map, null, 0) + "\n");
console.log(`page-dates.json: ${Object.keys(map).length} ルートの実編集日を生成 (当日=${TODAY})`);
