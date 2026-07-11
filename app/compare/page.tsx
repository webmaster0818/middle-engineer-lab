import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/" },
  title: "転職エージェント比較ガイド一覧【目的別・2社比較】",
  description:
    "ITエンジニア向け転職エージェントの比較記事を一覧化。30代40代向け・ハイクラス・フリーランス・ゲーム/インフラ/AI特化などの目的別おすすめと、レバテックvsリクルートなどの2社直接比較を、出典付きで整理しています。",
};

const groups = [
  {
    label: "目的・属性別のおすすめ比較",
    intro: "「自分の状況」から選ぶための比較。年代・年収帯・働き方・経験で最適なエージェントが変わります。",
    items: [
      { slug: "agents", name: "総合おすすめエージェント比較" },
      { slug: "30s-agents", name: "30代向けエージェント比較" },
      { slug: "40s-agents", name: "40代向けエージェント比較" },
      { slug: "highclass", name: "ハイクラス向けエージェント比較" },
      { slug: "inexperienced", name: "未経験向けエージェント比較" },
      { slug: "women-agents", name: "女性エンジニア向けエージェント" },
      { slug: "speed", name: "スピード重視のエージェント比較" },
      { slug: "salary-ranking", name: "年収アップに強いエージェント" },
    ],
  },
  {
    label: "領域・タイプ別のおすすめ比較",
    intro: "「狙う領域・働き方」から選ぶための比較。専門特化のエージェントは領域知識で差が出ます。",
    items: [
      { slug: "scout-agents", name: "スカウト型サービス比較" },
      { slug: "freelance-agents", name: "フリーランスエージェント比較" },
      { slug: "remote-agents", name: "フルリモート向けエージェント" },
      { slug: "sier-agents", name: "SIer向けエージェント比較" },
      { slug: "megaventure-agents", name: "メガベンチャー向けエージェント" },
      { slug: "startup-agents", name: "スタートアップ向けエージェント" },
      { slug: "game-agents", name: "ゲーム業界向けエージェント" },
      { slug: "infra-agents", name: "インフラ・クラウド向けエージェント" },
      { slug: "ai-agents", name: "AI・機械学習向けエージェント" },
      { slug: "consulting-agents", name: "ITコンサル転職向けエージェント" },
    ],
  },
  {
    label: "エージェント2社の直接比較",
    intro: "候補を2社に絞ったときの「どっちがおすすめ」を、強み・弱み・向き不向きで即答します。",
    items: [
      { slug: "levtech-vs-recruit", name: "レバテックキャリア vs リクルートIT" },
      { slug: "levtech-vs-geekly", name: "レバテックキャリア vs Geekly" },
      { slug: "levtech-vs-doda", name: "レバテックキャリア vs doda" },
      { slug: "levtech-vs-mynavi", name: "レバテックキャリア vs マイナビIT" },
      { slug: "recruit-vs-doda", name: "リクルート vs doda" },
      { slug: "doda-vs-mynavi", name: "doda vs マイナビIT" },
      { slug: "geekly-vs-recruit", name: "Geekly vs リクルートIT" },
      { slug: "geekly-vs-green", name: "Geekly vs Green" },
      { slug: "geekly-vs-workport", name: "Geekly vs ワークポート" },
      { slug: "workport-vs-mynavi", name: "ワークポート vs マイナビIT" },
      { slug: "green-vs-wantedly", name: "Green vs Wantedly" },
      { slug: "type-vs-mynavi", name: "type転職 vs マイナビIT" },
      { slug: "type-it-vs-levtech", name: "type転職エージェントIT vs レバテック" },
      { slug: "bizreach-vs-levtech", name: "ビズリーチ vs レバテック" },
      { slug: "bizreach-vs-doda-x", name: "ビズリーチ vs doda X" },
      { slug: "bizreach-vs-recruit-direct-scout", name: "ビズリーチ vs ダイレクトスカウト" },
      { slug: "doda-x-vs-recruit-direct-scout", name: "doda X vs ダイレクトスカウト" },
      { slug: "jac-vs-bizreach", name: "JAC vs ビズリーチ" },
      { slug: "jac-vs-recruit-direct-scout", name: "JAC vs ダイレクトスカウト" },
      { slug: "findy-vs-forkwell", name: "Findy vs Forkwell" },
      { slug: "findy-vs-levtech", name: "Findy vs レバテック" },
      { slug: "paiza-vs-findy", name: "paiza転職 vs Findy" },
      { slug: "tenshoku-draft-vs-findy", name: "転職ドラフト vs Findy" },
      { slug: "levtech-freelance-vs-midworks", name: "レバテックフリーランス vs Midworks" },
      { slug: "levtech-freelance-vs-geechs", name: "レバテックフリーランス vs ギークス" },
      { slug: "itpro-vs-levtech-freelance", name: "ITプロパートナーズ vs レバテックフリーランス" },
      { slug: "midworks-vs-itpropartners", name: "Midworks vs ITプロパートナーズ" },
      { slug: "pe-bank-vs-levtech-freelance", name: "PE-BANK vs レバテックフリーランス" },
    ],
  },
];

const allItems = groups.flatMap((g) => g.items);

export default function CompareIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "転職エージェント比較ガイド一覧",
    description: "目的別おすすめと2社直接比較を分類した一覧ページ。",
    url: "https://middle-engineer.com/compare/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allItems.length,
      itemListElement: allItems.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/compare/${it.slug}/`,
        name: it.name,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="転職エージェント比較ガイド一覧【目的別・2社比較】"
        description="目的別おすすめと2社直接比較を分類した一覧ページ。"
        url="/compare/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "エージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント比較ガイド一覧
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          転職エージェントは「どれが一番か」ではなく「自分にどれが合うか」で選ぶのが正解です。本ページでは、年代・年収帯・働き方・狙う領域から選ぶ目的別のおすすめ比較と、候補を2社に絞ったときの直接比較を一覧にしました。各記事は公式公表情報をもとに、強み・弱み・向き不向きを出典付きで整理しています（複数社の併用が前提です）。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["各サービス公式サイト・公表値", "厚生労働省 job tag", "当サイトの各レビュー記事"]}
        />
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月｜各社の数値は公表値・出典付きの範囲のみ。非公開値は各記事で明記しています。</p>

        {groups.map((g) => (
          <section key={g.label} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2">{g.label}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{g.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {g.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/compare/${it.slug}/`}
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
              { name: "エージェントの評判・口コミ一覧", href: "/review/" },
              { name: "エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "複数エージェントの使い分け", href: "/knowledge/multiple-agents/" },
              { name: "転職サイトとエージェントの違い", href: "/knowledge/site-vs-agent/" },
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
