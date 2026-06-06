import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "リクルートエージェントIT vs doda IT【徹底比較】総合型2大巨頭 | ミドルエンジニア転職ラボ",
  description:
    "リクルートエージェントITとdoda ITを8項目で徹底比較。総合型2大巨頭の求人数、サポート体制、得意分野の違いを解説し、エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "リクルートエージェントとdodaの最大の違いは？", a: "リクルートエージェントは求人数No.1（約300,000件）とブランド力が強み。dodaは転職サイト機能の併用ができ、自分でも求人を探せる自由度の高さが特徴です。" },
  { q: "IT転職に強いのはどっち？", a: "IT特化度はどちらも総合型のため同程度ですが、リクルートエージェントは大手SIer・メーカー系ITの求人が多く、dodaはWeb系・DX関連の求人が充実している傾向です。" },
  { q: "サポートの質は？", a: "リクルートエージェントは実績に基づく面接対策が強み。dodaは書類テンプレートや自己分析ツールなどのコンテンツが充実しています。サポートの質はアドバイザー個人の力量にも大きく左右されます。" },
  { q: "IT特化型と併用すべき？", a: "はい、IT特化型（レバテックキャリアやGeekly）と総合型を1社ずつ登録するのが最もおすすめの組み合わせです。IT特化型で専門的な求人を、総合型で幅広い選択肢を確保しましょう。" },
  { q: "30代・40代にはどっち？", a: "どちらも全年代対応ですが、リクルートエージェントの方が40代の管理職求人が多い傾向。dodaは30代のキャリアアップ求人が充実しています。" },
  { q: "両方登録すべき？", a: "総合型2社を登録するより、どちらか1社＋IT特化型エージェントの組み合わせの方が効率的です。総合型は1社で十分な求人数を確保できます。" },
];

const comparison = [
  { item: "求人数", a: "約300,000件（全体）", b: "約200,000件（全体）" },
  { item: "転職サイト機能", a: "なし（エージェント専任）", b: "あり（自分でも検索可能）" },
  { item: "ブランド力", a: "業界No.1の知名度", b: "転職者満足度No.1" },
  { item: "IT求人の傾向", a: "SIer・メーカー系ITが多い", b: "Web系・DX関連が充実" },
  { item: "対象年代", a: "全年代", b: "全年代" },
  { item: "面接対策", a: "実績に基づく徹底指導", b: "自己分析ツール充実" },
  { item: "対応エリア", a: "全国（全国に拠点）", b: "全国（全国に拠点）" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function RecruitVsDodaPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="リクルートエージェントIT vs doda IT【徹底比較】総合型2大巨頭" description="リクルートエージェントITとdoda ITを8項目で徹底比較。総合型2大巨頭の違いを解説します。" url="/compare/recruit-vs-doda/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "リクルートエージェントIT vs doda IT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">リクルートエージェントIT vs doda IT【徹底比較】総合型2大巨頭</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 総合型エージェント2大巨頭を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">リクルートエージェントとdodaは日本最大級の総合型転職エージェントです。どちらもIT求人を豊富に保有していますが、サービスの特徴やIT求人の傾向に違いがあります。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、ITエンジニアの視点で8つの比較項目を解説します。なお、IT転職にはこれらの総合型に加えてIT特化型エージェントも併用することを強くおすすめします。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートエージェントIT</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">doda IT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはリクルートエージェントIT</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- 最大数の求人から選びたい人</li>
              <li>- SIer・メーカー系IT企業を志望する人</li>
              <li>- 面接対策を徹底的に受けたい人</li>
              <li>- 40代で管理職ポジションを探している人</li>
              <li>- 業界No.1ブランドの安心感を求める人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはdoda IT</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- 転職サイト機能も使って自分で求人を探したい人</li>
              <li>- Web系・DX関連の企業を志望する人</li>
              <li>- 自己分析ツールやコンテンツを活用したい人</li>
              <li>- 30代でキャリアアップを目指す人</li>
              <li>- エージェントとサイトを使い分けたい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT特化型エージェントとの併用がおすすめ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "総合型1社＋IT特化型2社が最適", desc: "リクルートまたはdodaのどちらか1社に加え、レバテックキャリアやGeeklyなどIT特化型を2社。計3社が理想の組み合わせです。" },
                { num: "2", title: "IT特化型は技術理解が深い", desc: "総合型のアドバイザーはIT業界の知識が浅い場合も。IT特化型なら技術スタックや市場動向を踏まえた的確な提案を受けられます。" },
                { num: "3", title: "非公開求人の重複が少ない", desc: "総合型とIT特化型では保有する非公開求人が大きく異なるため、組み合わせることで選択肢が最大化されます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">IT転職にはIT特化型エージェントも併用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">総合型1社＋IT特化型2社の計3社がベスト。まずはIT特化型のNo.1に登録しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs doda比較", href: "/compare/levtech-vs-doda/" },
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
