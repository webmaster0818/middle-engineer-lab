import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ワークポート vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "ワークポートとマイナビIT AGENTを8項目で徹底比較。スピード対応vs丁寧サポートの違い、未経験対応、求人数を解説し、エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "ワークポートとマイナビIT AGENTの最大の違いは？", a: "ワークポートは対応スピードが業界最速クラスで未経験OK求人が豊富。マイナビIT AGENTは書類添削・面接対策が手厚く丁寧なサポートが特徴です。急ぎならワークポート、じっくりならマイナビです。" },
  { q: "未経験からIT転職するならどっち？", a: "どちらも未経験に対応していますが、ワークポートの方が未経験OK求人の数が多く、対応も迅速です。マイナビIT AGENTは未経験者への書類対策が丁寧で、準備に時間をかけたい人向きです。" },
  { q: "対応スピードはどっちが速い？", a: "ワークポートが圧倒的に速いです。登録翌日に求人紹介されることも珍しくありません。マイナビIT AGENTは丁寧なヒアリング後に求人紹介するため、初回面談まで数日かかることがあります。" },
  { q: "30代前半にはどっち？", a: "IT経験がある30代前半ならマイナビIT AGENTの専門的なサポートが効果的。IT業界は初めてorスピード重視ならワークポートがおすすめです。" },
  { q: "求人の質はどっちが高い？", a: "マイナビIT AGENTの方がIT特化型のため求人の質が安定しています。ワークポートは量が多い分、ピンキリの幅が広い傾向です。" },
  { q: "両方登録すべき？", a: "おすすめです。ワークポートのスピードで早期に求人を確保しつつ、マイナビの丁寧なサポートで面接対策を万全にする使い分けが効果的です。" },
];

const comparison = [
  { item: "求人数", a: "約70,000件", b: "約18,000件" },
  { item: "対応スピード", a: "業界最速クラス", b: "丁寧なため標準的" },
  { item: "サポート体制", a: "スピード重視の効率型", b: "手厚い個別サポート" },
  { item: "得意分野", a: "IT全般、未経験IT転職", b: "Web系、SIer、社内SE" },
  { item: "未経験対応", a: "未経験OK求人が豊富", b: "未経験者への丁寧なサポート" },
  { item: "対象年代", a: "20代〜30代", b: "20代〜30代前半" },
  { item: "対応エリア", a: "全国対応", b: "全国（主要都市に拠点）" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function WorkportVsMynaviPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ワークポート vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？" description="ワークポートとマイナビIT AGENTを8項目で徹底比較。スピードvs丁寧さの違いを解説します。" url="/compare/workport-vs-mynavi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ワークポート vs マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ワークポート vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | スピード型 vs 丁寧型を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">ワークポートとマイナビIT AGENTは「スピード」と「丁寧さ」という異なる強みを持つIT転職エージェントです。どちらも若手IT人材に人気ですが、サポートスタイルが大きく異なります。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、8つの比較項目で両社の違いを解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ワークポート</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはワークポート</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- とにかく早く転職したい人</li>
              <li>- 未経験からIT業界にキャリアチェンジしたい人</li>
              <li>- IT業界全般で幅広く求人を見たい人</li>
              <li>- 地方在住でIT転職を考えている人</li>
              <li>- たくさんの求人を見て比較検討したい人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはマイナビIT AGENT</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- 転職初心者で手厚いサポートが欲しい人</li>
              <li>- 書類添削・面接対策をじっくり受けたい人</li>
              <li>- IT特化の専門的なアドバイスが欲しい人</li>
              <li>- 質の高い求人を厳選して紹介してほしい人</li>
              <li>- 20代〜30代前半で初めてのIT転職の人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "スピード×丁寧さの両立", desc: "ワークポートで素早く求人を確保し、マイナビの丁寧な面接対策で内定率を上げる使い分けが効果的です。" },
                { num: "2", title: "量×質のバランス", desc: "ワークポートの豊富な求人数とマイナビの厳選された求人の質。両方を見て判断できます。" },
                { num: "3", title: "リスクヘッジ", desc: "片方のアドバイザーと合わなくても、もう一方で転職活動を継続できる安心感があります。" },
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
          <p className="text-blue-100 text-sm mb-4">ワークポートのスピード×マイナビの丁寧さ。両方無料で、転職成功率を最大化しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
              { name: "doda vs マイナビIT比較", href: "/compare/doda-vs-mynavi/" },
              { name: "未経験OKエージェント比較", href: "/compare/inexperienced/" },
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
