import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "doda IT vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "doda ITとマイナビIT AGENTを8項目で徹底比較。求人数、サポート体制、得意分野の違いを解説し、エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "doda ITとマイナビIT AGENTの最大の違いは？", a: "dodaは総合型の圧倒的な求人数（約200,000件）が強み。マイナビIT AGENTはIT特化型で丁寧な個別サポートが特徴です。量のdoda、質のマイナビという構図です。" },
  { q: "求人数はどちらが多い？", a: "dodaが圧倒的に多く約200,000件（全体）。マイナビIT AGENTは約18,000件ですが、IT業界に特化しているため、ITに限定すれば質の高い求人が揃っています。" },
  { q: "サポートが手厚いのはどっち？", a: "マイナビIT AGENTの方がサポートが手厚いです。書類添削、面接対策が丁寧で、初めての転職でも安心。dodaは求人数重視のため、1人あたりのサポート密度はマイナビに劣る傾向です。" },
  { q: "30代エンジニアにはどっち？", a: "IT業界内で転職するなら専門性の高いマイナビIT AGENT、IT以外も含めて幅広く検討したいならdodaがおすすめです。迷ったら両方登録してアドバイザーの質を比較しましょう。" },
  { q: "転職サイト機能はある？", a: "dodaは転職サイト機能を併用でき、自分でも求人検索・応募が可能です。マイナビIT AGENTはエージェント専任型で、アドバイザー経由での応募がメインです。" },
  { q: "両方登録すべき？", a: "おすすめです。dodaの豊富な求人数とマイナビの丁寧なサポートを組み合わせることで、効率的かつ安心な転職活動ができます。" },
];

const comparison = [
  { item: "求人数", a: "約200,000件（全体）", b: "約18,000件（IT特化）" },
  { item: "サービスタイプ", a: "総合型（IT部門あり）", b: "IT特化型" },
  { item: "サポート体制", a: "標準的なサポート", b: "手厚い個別サポート" },
  { item: "得意分野", a: "IT含む全業種を幅広くカバー", b: "Web系、SIer、社内SE" },
  { item: "対象年代", a: "全年代", b: "20代〜30代前半" },
  { item: "転職サイト機能", a: "あり（自分でも検索可能）", b: "なし（エージェント専任）" },
  { item: "対応エリア", a: "全国（全国に拠点）", b: "全国（主要都市に拠点）" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function DodaVsMynaviPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="doda IT vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？" description="doda ITとマイナビIT AGENTを8項目で徹底比較。求人数、サポート体制の違いを解説します。" url="/compare/doda-vs-mynavi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "doda IT vs マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">doda IT vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 総合型 vs IT特化型を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">dodaとマイナビIT AGENTは、それぞれ「求人数の多さ」と「サポートの手厚さ」で支持されるエージェントです。総合型と特化型の違いを理解し、自分に合ったサービスを選びましょう。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、8つの比較項目で両社の違いを詳しく解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">doda IT</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">doda ITの強み</h3>
              <p className="text-sm text-blue-700">圧倒的な求人数で幅広い選択肢。転職サイト機能を併用して自分でも求人検索可能。大手企業・事業会社のDX部門求人が豊富。全国に拠点があり地方にも強い。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENTの強み</h3>
              <p className="text-sm text-slate-600">IT業界に特化した手厚いサポート。書類添削・面接対策が丁寧。20代〜30代前半の若手IT人材の転職で圧倒的な実績。初めての転職でも安心。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはdoda IT</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- たくさんの求人から自分で選びたい人</li>
              <li>- IT以外の業界も視野に入れている人</li>
              <li>- 転職サイト機能も使いたい人</li>
              <li>- 大手企業・事業会社のDX部門を志望する人</li>
              <li>- 地方在住でIT転職を考えている人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはマイナビIT AGENT</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- 初めての転職で手厚いサポートが欲しい人</li>
              <li>- 書類添削・面接対策を丁寧に受けたい人</li>
              <li>- 20代〜30代前半の若手エンジニア</li>
              <li>- IT業界内で確実にキャリアアップしたい人</li>
              <li>- アドバイザーとじっくり相談しながら進めたい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "量×質のバランス", desc: "dodaの豊富な求人量とマイナビの手厚いサポートの質、両方のメリットを享受できます。" },
                { num: "2", title: "検索×提案の両軸", desc: "dodaで自分でも求人を検索しつつ、マイナビのアドバイザーからの提案も受ける。見落としを防げます。" },
                { num: "3", title: "複数のオファーで交渉力UP", desc: "2社からの内定を比較し、最も有利な条件を引き出せます。" },
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">dodaの求人数×マイナビの手厚さ。両方無料で、効率的な転職活動を実現しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs doda比較", href: "/compare/levtech-vs-doda/" },
              { name: "レバテック vs マイナビIT比較", href: "/compare/levtech-vs-mynavi/" },
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
