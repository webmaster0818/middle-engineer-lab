import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ビズリーチ vs レバテックキャリア【徹底比較】ハイクラスIT転職 | ミドルエンジニア転職ラボ",
  description:
    "ビズリーチとレバテックキャリアを8項目で徹底比較。ハイクラス×スカウト型vsIT特化型の違い、年収800万円以上の求人、サポート体制を解説します。",
};

const faqs = [
  { q: "ビズリーチとレバテックキャリアの最大の違いは？", a: "ビズリーチはスカウト型プラットフォームで年収600万円以上のハイクラス全般に強い。レバテックキャリアはIT業界に特化したエージェントで、技術面での深い理解が強みです。ハイクラス×ITなら両方使うのが最善です。" },
  { q: "年収800万円以上を狙うならどっち？", a: "年収800万円以上のハイクラスIT求人はビズリーチが圧倒的に多いです。ただしレバテックキャリアはIT企業との太いパイプを活かした年収交渉力が高く、実際の年収UP額では遜色ない場合も多いです。" },
  { q: "スカウト型とエージェント型の違いは？", a: "ビズリーチ（スカウト型）はプロフィールを登録して企業やヘッドハンターからのスカウトを待つスタイル。レバテック（エージェント型）は専任アドバイザーが求人を提案。能動的に動くならレバテック、受動的に待つならビズリーチが向いています。" },
  { q: "40代のIT転職にはどっち？", a: "40代にはどちらも強力です。ビズリーチはCTO/VPoE/EMなどの管理職スカウトが豊富。レバテックキャリアはIT業界内での40代のキャリアパスに精通したアドバイザーが対応。両方登録が理想です。" },
  { q: "ビズリーチは有料プランが必要？", a: "無料プランでも企業からのプラチナスカウトは受け取れます。ただし全てのスカウトを閲覧するにはプレミアムプラン（月額5,478円）が必要です。まずは無料で始め、スカウトの質を見てから判断するのがおすすめです。" },
  { q: "両方登録するメリットは？", a: "ビズリーチでハイクラスのスカウトを受けつつ、レバテックで能動的にIT特化求人を探す。受動×能動の組み合わせで、最大限の選択肢を確保できます。" },
];

const comparison = [
  { item: "サービスタイプ", a: "スカウト型プラットフォーム", b: "IT特化型エージェント" },
  { item: "求人数", a: "約100,000件（全業種）", b: "約25,000件（IT特化）" },
  { item: "年収帯", a: "600万円以上がメイン", b: "400万〜1,000万円" },
  { item: "得意分野", a: "ハイクラス全般（IT含む）", b: "IT業界全般に特化" },
  { item: "対象年代", a: "35歳〜45歳", b: "30代〜40代全般" },
  { item: "サポート体制", a: "ヘッドハンター経由", b: "専任アドバイザー" },
  { item: "IT理解度", a: "ヘッドハンター次第", b: "IT業界出身者が多い" },
  { item: "料金", a: "基本無料（プレミアム月額5,478円）", b: "完全無料" },
];

export default function BizreachVsLevtechPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ビズリーチ vs レバテックキャリア【徹底比較】ハイクラスIT転職" description="ビズリーチとレバテックキャリアを8項目で徹底比較。ハイクラスIT転職に最適なサービスを解説します。" url="/compare/bizreach-vs-levtech/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ビズリーチ vs レバテックキャリア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ビズリーチ vs レバテックキャリア【徹底比較】ハイクラスIT転職</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ハイクラスIT転職の2大サービスを比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">年収800万円以上のハイクラスIT転職を目指すなら、ビズリーチとレバテックキャリアは外せない2大サービスです。スカウト型×エージェント型というタイプの違いを理解し、効果的に使い分けましょう。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、8つの比較項目を通じて両社の違いを解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ビズリーチ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ビズリーチの強み</h3>
              <p className="text-sm text-blue-700">ハイクラス求人数が圧倒的。CTO/VPoE/EMなどの経営層ポジションのスカウトが豊富。外資系ITやコンサルとの接点が多い。プロフィール登録だけで待てる手軽さ。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリアの強み</h3>
              <p className="text-sm text-slate-600">IT業界に特化した深い専門性。技術を理解したアドバイザーによる的確な求人提案。年収UP率80%の高い年収交渉力。完全無料で追加料金なし。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはビズリーチ</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- 年収800万円以上のハイクラス転職を狙う人</li>
              <li>- CTO/VPoE/EMなどの経営層ポジションを目指す人</li>
              <li>- 外資系IT企業やコンサルに興味がある人</li>
              <li>- プロフィールを登録して待つスタイルが好きな人</li>
              <li>- 市場価値を知りたい（スカウトの質で判断可能）</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはレバテックキャリア</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- IT業界内で確実にキャリアアップしたい人</li>
              <li>- 技術面を理解したアドバイザーに相談したい人</li>
              <li>- 年収交渉をプロに任せたい人</li>
              <li>- 完全無料でサービスを利用したい人</li>
              <li>- 能動的にIT特化の求人を探したい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "受動×能動で漏れなく", desc: "ビズリーチでスカウトを待ちながら、レバテックで能動的に求人を探す。2つのアプローチで最大限の機会を確保。" },
                { num: "2", title: "ハイクラス×IT特化の掛け合わせ", desc: "ビズリーチのハイクラス求人とレバテックのIT専門求人で、年収もキャリアも妥協しない転職を実現。" },
                { num: "3", title: "年収交渉で有利に", desc: "ビズリーチのスカウト年収とレバテックの提示年収を比較し、最も有利な条件で内定を獲得できます。" },
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
          <h2 className="text-xl font-bold mb-3">ハイクラスIT転職なら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">ビズリーチのスカウト×レバテックのIT特化。年収800万円以上を目指すなら、両方活用しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
