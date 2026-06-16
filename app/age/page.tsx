import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "年齢別エンジニア転職ガイド一覧【30代・40代・50代】",
  description:
    "30代・40代・50代の年齢別にITエンジニアの転職市場の現実をまとめた一覧。各年齢で問われる強み・求人傾向・年収の考え方を、33歳〜48歳のピンポイント年齢まで公的データの出典付きで解説します。",
};

const groups = [
  {
    label: "30代",
    intro: "ポテンシャルと即戦力の両取りが効く層。年齢が上がるほど『軸の明確さ』と実務の証明が問われます。",
    items: [
      { slug: "30s", name: "30代のエンジニア転職" },
      { slug: "33", name: "33歳のエンジニア転職" },
      { slug: "35", name: "35歳のエンジニア転職" },
      { slug: "36", name: "36歳のエンジニア転職" },
      { slug: "38", name: "38歳のエンジニア転職" },
    ],
  },
  {
    label: "40代",
    intro: "即戦力・マネジメント・専門性が前提になる層。実務経験を役割に変えられるかが鍵です。",
    items: [
      { slug: "40s", name: "40代のエンジニア転職" },
      { slug: "42", name: "42歳のエンジニア転職" },
      { slug: "45", name: "45歳のエンジニア転職" },
      { slug: "48", name: "48歳のエンジニア転職" },
    ],
  },
  {
    label: "50代",
    intro: "管理職・高度専門・人脈が武器になる層。求人は絞られるため戦略の精度が重要です。",
    items: [
      { slug: "50s", name: "50代のエンジニア転職" },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

export default function AgeIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "年齢別エンジニア転職ガイド一覧",
    description: "30代・40代・50代の年齢別にエンジニア転職の現実をまとめた一覧ページ。",
    url: "https://middle-engineer.com/age/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allItems.length,
      itemListElement: allItems.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/age/${it.slug}/`,
        name: it.name,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="年齢別エンジニア転職ガイド一覧【30代・40代・50代】"
        description="30代・40代・50代の年齢別にエンジニア転職の現実をまとめた一覧ページ。"
        url="/age/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "年齢別ガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年齢別エンジニア転職ガイド一覧【30代・40代・50代】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          ITエンジニアの転職市場では、同じスキルでも年齢によって「何を期待されるか」が変わります。30代はポテンシャルと即戦力の両取り、40代は即戦力・マネジメント・専門性、50代は高度専門と人脈——という具合です。本ページでは年代別ガイドに加え、33歳〜48歳のピンポイント年齢ごとの現実も、公的データの出典付きで整理しています。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["レバテック公表 年代別平均年収", "厚生労働省 job tag", "doda 決定年収レポート"]}
        />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜各ページの年収は公表値の参考レンジで、個人の経歴・市況により変わります。</p>

        {groups.map((g) => (
          <section key={g.label} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2">{g.label}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{g.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {g.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/age/${it.slug}/`}
                  className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
                >
                  {it.name} →
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">あわせて読みたい</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "自分の市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" },
              { name: "年齢と転職（年齢差別の実態）", href: "/knowledge/age-discrimination/" },
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
              { name: "年収帯別ガイド", href: "/salary/" },
            ].map((x, i) => (
              <Link key={i} href={x.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {x.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
