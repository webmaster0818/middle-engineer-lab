import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Geekly vs ワークポート【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "Geeklyとワークポートを8項目で徹底比較。Web特化vs幅広いIT対応の違い、求人数、サポート体制を解説し、エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "Geeklyとワークポートの最大の違いは？", a: "Geeklyはweb系・ゲーム業界に特化しマッチング精度が高い一方、ワークポートはIT業界全般を幅広くカバーし、未経験者からのIT転職にも強いです。経験者の専門転職ならGeekly、幅広く探すならワークポートです。" },
  { q: "未経験からIT転職するならどっち？", a: "未経験からのIT転職にはワークポートが断然おすすめです。未経験OK求人が豊富で、IT転職専門のコンシェルジュが手厚くサポート。Geeklyは基本的に経験者向けのサービスです。" },
  { q: "年収UPしやすいのはどっち？", a: "IT経験者ならGeekly（平均年収UP額76万円）が有利。ワークポートは未経験からのキャリアチェンジや、経験浅めのエンジニアの年収UPに強い傾向です。" },
  { q: "対応スピードはどっちが速い？", a: "ワークポートの対応スピードは業界最速クラスで、登録翌日に求人紹介されることも。Geeklyも平均2〜3週間で内定と速いですが、初動の速さではワークポートが上回ります。" },
  { q: "30代エンジニアにはどっち？", a: "Web系・ゲーム業界志望の30代にはGeekly、IT業界全般で広く探したい30代にはワークポートがおすすめ。迷ったら両方登録が最善です。" },
  { q: "両方登録するメリットは？", a: "Geeklyの高いマッチング精度×ワークポートの幅広い求人数で、専門性と選択肢の両方を確保できます。どちらも無料なのでリスクゼロです。" },
];

const comparison = [
  { item: "求人数", a: "約20,000件", b: "約70,000件" },
  { item: "年収UP実績", a: "平均年収UP額76万円", b: "スピード内定に強み" },
  { item: "得意分野", a: "Web系、ゲーム業界、メガベンチャー", b: "IT全般、未経験IT転職" },
  { item: "対象年代", a: "30代中心", b: "20代〜30代" },
  { item: "未経験対応", a: "経験者向け", b: "未経験OK求人が豊富" },
  { item: "対応スピード", a: "速い（内定まで平均2〜3週間）", b: "業界最速クラス" },
  { item: "対応エリア", a: "東京・大阪中心", b: "全国対応" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function GeeklyVsWorkportPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Geekly vs ワークポート【徹底比較】どっちを選ぶべき？" description="Geeklyとワークポートを8項目で徹底比較。Web特化vs幅広いIT対応の違いを解説します。" url="/compare/geekly-vs-workport/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Geekly vs ワークポート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Geekly vs ワークポート【徹底比較】どっちを選ぶべき？</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | IT特化型エージェント2社を比較</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">Web系特化のGeeklyと、IT業界全般を幅広くカバーするワークポート。どちらもIT転職に定評がありますが、得意分野とターゲット層に明確な違いがあります。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、8つの比較項目で両社の違いを解説し、あなたに最適なエージェント選びを支援します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">ワークポート</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geeklyの強み</h3>
              <p className="text-sm text-blue-700">Web系・ゲーム業界のマッチング精度が業界トップ。平均年収UP額76万円の実績。メガベンチャーとのパイプが太く、非公開求人の質が高い。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ワークポートの強み</h3>
              <p className="text-sm text-slate-600">IT業界全般を幅広くカバー。未経験からのIT転職に強い。対応スピードが業界最速クラス。全国対応で地方の求人も充実。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはGeekly</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- Web系・ゲーム業界に特化して転職したい人</li>
              <li>- 年収UPを最優先に考える経験者</li>
              <li>- メガベンチャーで働きたい人</li>
              <li>- マッチング精度の高さを重視する人</li>
              <li>- 東京・大阪エリアで転職する人</li>
            </ul>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはワークポート</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- 未経験からIT業界にキャリアチェンジしたい人</li>
              <li>- IT業界全般で幅広く求人を見たい人</li>
              <li>- とにかくスピーディに転職したい人</li>
              <li>- 地方在住でIT転職を考えている人</li>
              <li>- SIer、インフラ、テストなども視野に入れたい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "専門性×幅広さの掛け合わせ", desc: "GeeklyでWeb系の深い求人を、ワークポートで幅広い選択肢を確保。両方の良いとこ取りができます。" },
                { num: "2", title: "スピード×精度の両立", desc: "ワークポートの初動の速さとGeeklyのマッチング精度を組み合わせ、最短で最適な転職を実現。" },
                { num: "3", title: "非公開求人の幅が広がる", desc: "2社の非公開求人は重複が少なく、登録するだけで選択肢が大幅に増えます。" },
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
          <p className="text-blue-100 text-sm mb-4">Geeklyの高精度マッチング×ワークポートのスピード感。両方無料で最強の転職活動を。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Geekly vs Green比較", href: "/compare/geekly-vs-green/" },
              { name: "ワークポート vs マイナビIT比較", href: "/compare/workport-vs-mynavi/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "未経験OKエージェント比較", href: "/compare/inexperienced/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
