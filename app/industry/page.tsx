import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "業界別エンジニア転職ガイド一覧【全25業界】",
  description:
    "金融・製造・ゲーム・SaaS・フィンテック・Web3・セキュリティ・モビリティなど、ITエンジニアの主要な転職先業界を網羅。各業界で求められる技術・参入ルート・年収傾向と、30代40代の評価のされ方を解説します。",
};

const groups = [
  {
    label: "IT・Web・SaaS系",
    intro: "プロダクト開発とドメイン知識が両立する成長領域。モダン技術と事業理解の両輪が評価されます。",
    items: [
      { slug: "saas-industry", name: "SaaS業界" },
      { slug: "ai-industry", name: "AI業界（生成AI含む）" },
      { slug: "fintech", name: "フィンテック業界" },
      { slug: "web3", name: "Web3・ブロックチェーン業界" },
      { slug: "security-industry", name: "セキュリティ業界" },
      { slug: "hrtech", name: "HR Tech業界" },
      { slug: "edtech", name: "EdTech業界" },
      { slug: "ecommerce", name: "EC・eコマース業界" },
      { slug: "media", name: "メディア業界" },
      { slug: "gaming", name: "ゲーム業界" },
      { slug: "advertising", name: "広告業界" },
    ],
  },
  {
    label: "伝統産業×IT・DX",
    intro: "既存産業のデジタル化を担う領域。業務知識を持つミドルが業界の文脈を活かしやすい選択肢です。",
    items: [
      { slug: "finance", name: "金融業界" },
      { slug: "insurance", name: "保険業界" },
      { slug: "realestate", name: "不動産業界" },
      { slug: "manufacturing", name: "製造業" },
      { slug: "mobility", name: "モビリティ・自動車IT業界" },
      { slug: "logistics", name: "物流業界" },
      { slug: "retail", name: "小売業界" },
      { slug: "energy", name: "エネルギー業界" },
      { slug: "healthcare", name: "ヘルスケア業界" },
      { slug: "construction-dx", name: "建設DX業界" },
      { slug: "agriculture", name: "農業・アグリテック" },
      { slug: "travel", name: "旅行業界" },
      { slug: "space", name: "宇宙・宇宙開発IT業界" },
      { slug: "government", name: "官公庁・公共IT" },
    ],
  },
  {
    label: "業態を変える転職パターン",
    intro: "今いる業態から別の業態へ移るルート。よくある悩みに正面から答えます。",
    items: [
      { slug: "ses-exit", name: "SESから抜け出す転職" },
      { slug: "sier-to-web", name: "SIerからWeb系への転職" },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

export default function IndustryIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "業界別エンジニア転職ガイド一覧",
    description: "主要な転職先業界を業態別に分類した一覧ページ。",
    url: "https://middle-engineer.com/industry/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allItems.length,
      itemListElement: allItems.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/industry/${it.slug}/`,
        name: it.name,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="業界別エンジニア転職ガイド一覧【全25業界】"
        description="主要な転職先業界を業態別に分類した一覧ページ。"
        url="/industry/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "業界別ガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          業界別エンジニア転職ガイド一覧
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          同じエンジニア職でも、どの業界に身を置くかで求められる技術・年収水準・働き方は大きく変わります。本ページでは、SaaS・フィンテック・AI・Web3などの成長領域から、金融・製造・モビリティなどの伝統産業×IT、さらにSES脱出やSIerからWeb系への業態転換まで、主要な転職先業界を分類しました。各ページで求められる技術・参入ルート・年収傾向を、出典付きで解説しています。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["レバテック公表 年代別平均年収", "doda 決定年収レポート", "経済産業省 IT人材需給調査"]}
        />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜未出典の市場規模・成長率は記載していません。年収は公表値の参考レンジです。</p>

        {groups.map((g) => (
          <section key={g.label} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2">{g.label}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{g.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {g.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/industry/${it.slug}/`}
                  className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
              { name: "スキル別転職ガイド", href: "/skill/" },
              { name: "企業別転職ガイド", href: "/company/" },
              { name: "キャリアパス別ガイド", href: "/career/" },
              { name: "自分の市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((x, i) => (
              <Link key={i} href={x.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {x.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
