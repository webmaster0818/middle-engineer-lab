import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "技術スタック×企業年収 相関データ【2026年・有報43社】高年収の言語・技術は？";
const PAGE_DESC =
  "有価証券報告書の平均年収43社と各社の主要技術スタックを突き合わせた独自データ。Go・AWS・C++など、どの技術がどの年収帯の企業で使われているかを一覧化。使用言語からエンジニア転職先を逆引きできます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

// 有報年収(salary/company-ranking)と各社の主要技術スタック(company hub)を結合した独自データ。
// 年収は各社有価証券報告書の公表値（全従業員平均等・決算期付き）。技術スタックは公式採用ページ/技術ブログ準拠の主要傾向。
type Row = { rank: number; slug: string; name: string; salary: number; period: string; tech: string };
const companies: Row[] = [
  { rank: 1, slug: "keyence", name: "キーエンス", salary: 2039, period: "2025年3月期・全従業員平均", tech: "組込 / 画像処理 / 計測制御" },
  { rank: 2, slug: "tokyo-electron", name: "東京エレクトロン", salary: 1354, period: "2025年3月期・全従業員平均", tech: "装置制御 / 組込 / 画像処理 / AI" },
  { rank: 3, slug: "bandai-namco", name: "バンダイナムコ", salary: 1216, period: "2025年3月期", tech: "C++ / C# / Unreal Engine / Unity" },
  { rank: 4, slug: "mercari", name: "メルカリ", salary: 1176, period: "2025年6月期・全社員平均", tech: "Go / Kubernetes / GCP / Microservices" },
  { rank: 5, slug: "recruit", name: "リクルート", salary: 1145, period: "直近有報", tech: "Java / React / GCP / Python" },
  { rank: 6, slug: "fujifilm", name: "富士フイルム", salary: 1124, period: "2025年3月期・HD単体全従業員平均", tech: "医療画像AI / 画像処理 / データ" },
  { rank: 7, slug: "sony", name: "ソニーグループ", salary: 1118, period: "2025年3月期", tech: "Python / C++ / AWS / AI/ML" },
  { rank: 8, slug: "ntt", name: "NTT（日本電信電話）", salary: 1069, period: "2025年3月期", tech: "IOWN / AI / クラウド / ソフトウェア工学" },
  { rank: 9, slug: "kddi", name: "KDDI", salary: 1018, period: "2025年3月期・全社員平均", tech: "5G / クラウド / データ・AI" },
  { rank: 10, slug: "toyota", name: "トヨタ自動車", salary: 983, period: "2025年3月期", tech: "C++ / Python / ROS / AWS" },
  { rank: 11, slug: "nintendo", name: "任天堂", salary: 966, period: "2025年3月期", tech: "C++ / C# / Unity / 自社エンジン" },
  { rank: 12, slug: "nec", name: "NEC", salary: 963, period: "2025年3月期・単体全従業員", tech: "AI / 社会インフラ / クラウド / セキュリティ" },
  { rank: 13, slug: "hitachi", name: "日立製作所", salary: 961, period: "2025年3月期", tech: "Java / Python / Azure / IoT" },
  { rank: 14, slug: "panasonic", name: "パナソニック", salary: 956, period: "2025年3月期・HD", tech: "C++ / Python / AWS / Embedded" },
  { rank: 15, slug: "plaid", name: "プレイド", salary: 939, period: "直近有報", tech: "Go / TypeScript / GCP / BigQuery" },
  { rank: 16, slug: "capcom", name: "カプコン", salary: 918, period: "2025年3月期・単体全社員平均", tech: "C++ / 内製RE ENGINE" },
  { rank: 17, slug: "kadokawa", name: "KADOKAWA", salary: 885, period: "2025年3月期・単体", tech: "Scala / TypeScript / Go / Kotlin" },
  { rank: 18, slug: "line-yahoo", name: "LINEヤフー", salary: 884, period: "2025年3月期", tech: "Java / Kotlin / Spring / Kubernetes" },
  { rank: 19, slug: "gree", name: "グリー（GREE）", salary: 865, period: "2025年6月期・持株会社単体", tech: "PHP / Go / Unity / Swift / Kotlin" },
  { rank: 20, slug: "denso", name: "デンソー", salary: 863, period: "2025年3月期・全従業員平均", tech: "車載ソフト / SOA / 組込 / AI" },
  { rank: 21, slug: "visional", name: "ビジョナル/ビズリーチ", salary: 861, period: "直近有報", tech: "Scala / TypeScript / AWS / Kubernetes" },
  { rank: 22, slug: "ricoh", name: "リコー", salary: 860, period: "2025年3月期・全社員平均", tech: "組込み / クラウド / データ・AI" },
  { rank: 23, slug: "softbank", name: "ソフトバンク", salary: 849, period: "2025年3月期", tech: "Java / Python / AWS / AI/ML" },
  { rank: 24, slug: "omron", name: "オムロン", salary: 820, period: "2025年3月期・全従業員平均", tech: "FA制御 / 組込 / 画像処理AI" },
  { rank: 25, slug: "rakuten", name: "楽天グループ", salary: 820, period: "2024年12月期・全社員平均", tech: "Java / Spring / AWS / React" },
  { rank: 26, slug: "renesas", name: "ルネサスエレクトロニクス", salary: 809, period: "2024年12月期・全従業員平均", tech: "半導体設計 / HDL / EDA / 組込" },
  { rank: 27, slug: "murata", name: "村田製作所", salary: 803, period: "2025年3月期・全従業員平均", tech: "電子部品(MLCC) / 通信モジュール / 組込" },
  { rank: 28, slug: "mixi", name: "MIXI（ミクシィ）", salary: 791, period: "2025年3月期・単体", tech: "Go / Ruby / Swift / Kotlin / C++" },
  { rank: 29, slug: "sansan", name: "Sansan", salary: 780, period: "2025年5月期", tech: "Kotlin / TypeScript / AWS / ML" },
  { rank: 30, slug: "note", name: "note（ノート）", salary: 763, period: "2025年11月期・全社員平均", tech: "Ruby on Rails / Go / TypeScript" },
  { rank: 31, slug: "gungho", name: "ガンホー", salary: 750, period: "2024年12月期・単体全社員平均", tech: "Unity / C# / 大規模サーバー" },
  { rank: 32, slug: "raksul", name: "ラクスル（RAKSUL）", salary: 742, period: "2025年7月期・全社員平均", tech: "Ruby on Rails / TypeScript / Vue" },
  { rank: 33, slug: "moneyforward", name: "マネーフォワード", salary: 723, period: "2025年11月期", tech: "Ruby / Go / React / AWS" },
  { rank: 34, slug: "apple", name: "Apple Japan", salary: 700, period: "直近有報", tech: "Swift / Objective-C / C++ / ML" },
  { rank: 35, slug: "base", name: "BASE", salary: 700, period: "2024年12月期", tech: "PHP / Go / Next.js / AWS" },
  { rank: 36, slug: "gmo-internet", name: "GMOインターネットグループ", salary: 693, period: "2024年12月期・持株会社単体", tech: "Go / PHP / Java / TypeScript / AWS" },
  { rank: 37, slug: "kyocera", name: "京セラ", salary: 693, period: "2025年3月期・全従業員平均", tech: "電子部品 / 半導体 / 通信 / 組込" },
  { rank: 38, slug: "kaonavi", name: "カオナビ", salary: 690, period: "2025年3月期・全社員平均", tech: "PHP / Laravel / Go / React" },
  { rank: 39, slug: "freee", name: "freee", salary: 688, period: "2025年6月期", tech: "Ruby / React / GCP / Kubernetes" },
  { rank: 40, slug: "colopl", name: "コロプラ", salary: 681, period: "2025年9月期・単体", tech: "PHP(Laravel) / Go / Unity / Spanner" },
  { rank: 41, slug: "wantedly-inc", name: "ウォンテッドリー（Wantedly）", salary: 681, period: "直近有報", tech: "Ruby on Rails / Go / React" },
  { rank: 42, slug: "zozo", name: "ZOZO", salary: 656, period: "2025年3月期・全社員平均", tech: "Go / Kotlin / AWS / Microservices" },
  { rank: 43, slug: "timee", name: "タイミー（Timee）", salary: 594, period: "2024年10月期・全社員平均", tech: "Ruby on Rails / Go / Next.js" },
];

// 主要技術ごとに「使用企業数・平均年収・企業例」を集計
const TECHS = [
  "Go", "AWS", "TypeScript", "C++", "Python", "Java", "React", "Kotlin",
  "Ruby on Rails", "Unity", "Kubernetes", "GCP", "PHP", "組込", "AI",
];
function norm(t: string) {
  // 表記ゆれ吸収（Ruby on Rails / Ruby、AI/ML / AI など）
  return t;
}
const techAgg = TECHS.map((tech) => {
  const hit = companies.filter((c) => {
    const parts = c.tech.split("/").map((s) => s.trim());
    if (tech === "Ruby on Rails") return parts.some((p) => p.includes("Rails"));
    if (tech === "AI") return parts.some((p) => p === "AI" || p.includes("AI/ML") || p.includes("画像処理AI") || p.includes("データ・AI"));
    if (tech === "組込") return parts.some((p) => p.includes("組込") || p === "Embedded");
    return parts.some((p) => p === tech || p.startsWith(tech + " ") || p === tech);
  });
  const avg = hit.length ? Math.round(hit.reduce((s, c) => s + c.salary, 0) / hit.length) : 0;
  return { tech, count: hit.length, avg, examples: hit.slice(0, 4).map((c) => c.name) };
}).filter((t) => t.count >= 2).sort((a, b) => b.avg - a.avg);

export default function TechStackSalaryPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: "https://middle-engineer.com/salary/tech-stack-salary/",
    creator: { "@type": "Organization", name: "CareeHUB for Mid Engineer" },
    temporalCoverage: "2024/2025（各社決算期）",
  };
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/salary/tech-stack-salary/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年収データ", href: "/salary/company-ranking/" }, { name: "技術スタック×年収" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">技術スタック×企業年収 相関データ【有報43社】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          有価証券報告書の平均年収（公表値）43社と、各社の主要技術スタックを突き合わせた<strong>独自データ</strong>です。「自分が使っている言語・技術は、どの年収帯の企業で使われているのか」を逆引きでき、転職先の方向性を考える材料になります。年収は全社平均（職種・等級で差があります）である点にご注意ください。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["各社 有価証券報告書（平均年収・決算期付き）", "各社公式採用ページ・技術ブログ（主要技術スタック）"]} />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜年収は有報の全従業員平均等でエンジニア職の提示額とは異なります。技術スタックは各社の主要傾向です。</p>

        {/* 技術別の平均年収 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要技術別・平均年収（掲載43社内の集計）</h2>
          <p className="text-sm text-slate-600 mb-4">各技術を主要スタックに挙げる企業の、有報平均年収の単純平均です（同一企業が複数技術に重複計上されます）。サンプルは本ページ掲載の43社内。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">技術</th>
                  <th className="border border-slate-200 p-2 text-left">掲載企業数</th>
                  <th className="border border-slate-200 p-2 text-left">平均年収（有報）</th>
                  <th className="border border-slate-200 p-2 text-left">企業例</th>
                </tr>
              </thead>
              <tbody>
                {techAgg.map((t) => (
                  <tr key={t.tech}>
                    <td className="border border-slate-200 p-2 font-bold">{t.tech}</td>
                    <td className="border border-slate-200 p-2">{t.count}社</td>
                    <td className="border border-slate-200 p-2 font-bold text-petrol-deep">約{t.avg.toLocaleString()}万円</td>
                    <td className="border border-slate-200 p-2 text-xs">{t.examples.join("・")} ほか</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※組込・画像処理など製造業の技術は、メーカーの高い全社平均年収を反映して高めに出ます。Web系言語（Ruby on Rails等）はスタートアップ・SaaSが多く全社平均は中位ですが、エンジニア職の提示年収は別途高いケースがあります。あくまで「有報の全社平均×主要技術」の相関で、因果ではありません。</p>
        </section>

        {/* 企業別 年収×技術 一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業別 有報年収×技術スタック 一覧（43社）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-2 text-left">#</th>
                  <th className="border border-slate-200 p-2 text-left">企業</th>
                  <th className="border border-slate-200 p-2 text-left">平均年収</th>
                  <th className="border border-slate-200 p-2 text-left">主要技術スタック</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.slug}>
                    <td className="border border-slate-200 p-2">{c.rank}</td>
                    <td className="border border-slate-200 p-2 font-bold whitespace-nowrap"><Link href={`/company/${c.slug}/`} className="text-petrol hover:underline">{c.name}</Link></td>
                    <td className="border border-slate-200 p-2 font-bold text-petrol-deep whitespace-nowrap">{c.salary.toLocaleString()}万円<span className="block text-[10px] font-normal text-slate-400">{c.period}</span></td>
                    <td className="border border-slate-200 p-2 text-xs">{c.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：各社有価証券報告書（平均年収・決算期は表内に明記）、各社公式採用ページ・技術ブログ（技術スタック）。2026年6月集計。</p>
        </section>

        {/* 読み解き */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データの読み解き方（30・40代の転職視点）</h2>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5">
            <li><strong>「使用言語から逆引き」する</strong>：自分の主力技術（例：Go、AWS、C++）を上の表で探し、その技術を採用する企業群を転職先候補にできます。Go・AWSはWeb系メガベンチャー〜大手まで幅広く、選択肢が多い技術です。</li>
            <li><strong>製造業の組込・画像処理は全社平均が高い</strong>：キーエンス・東京エレクトロン等のメーカーは全社平均年収が突出します。ただしこれは営業含む全社員平均で、エンジニア職単体の水準とは異なります。</li>
            <li><strong>Web系言語は「全社平均」では中位に見える</strong>：Ruby on Rails・PHP等はSaaS・スタートアップが多く全社平均は中位ですが、エンジニアの提示年収は別途高いことがあります。全社平均＝エンジニア年収ではない点に注意。</li>
            <li><strong>年代視点</strong>：30・40代は「現在の技術スタックが活きる企業」を選ぶと即戦力評価されやすく、年齢のハードルが下がります。まず使用技術で候補を絞るのが効率的です。</li>
          </ul>
        </section>

        {/* 関連 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連データ・ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/salary/company-ranking/" className="text-petrol hover:underline">→ 企業年収ランキング（有報43社）</Link>
            <Link href="/salary/job-type-salary/" className="text-petrol hover:underline">→ 職種別 年収ランキング</Link>
            <Link href="/skill/" className="text-petrol hover:underline">→ スキル別の転職戦略</Link>
            <Link href="/company/" className="text-petrol hover:underline">→ 企業別 転職ガイド一覧</Link>
            <Link href="/cert/" className="text-petrol hover:underline">→ 資格別 転職ガイド</Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">使用技術を活かせる企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントに無料相談して、あなたの技術スタックが評価される求人を紹介してもらいましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
      </article>
    </>
  );
}
