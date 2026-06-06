import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "30代におすすめIT転職エージェントランキング【2026年】 | ミドルエンジニア転職ラボ",
  description:
    "30代エンジニアにおすすめのIT転職エージェントをランキング形式で紹介。年収UP実績、求人数、サポート体制を比較し、30代のキャリアアップに最適なエージェント選びを支援します。",
};

const faqs = [
  { q: "30代エンジニアが転職で年収UPするコツは？", a: "IT特化型エージェントを2社以上利用し、複数のオファーを比較することです。30代はスキル×マネジメント経験を活かせるポジションが多く、年収100万円以上UPも十分可能です。" },
  { q: "30代前半と後半で転職戦略は変わる？", a: "30代前半はスペシャリスト・ゼネラリスト両方の道があり選択肢が広い。30代後半はリーダー・マネージャー経験が重視され、年収も高めに設定されます。後半は求人が絞られるため、早めの行動が重要です。" },
  { q: "30代の転職で最も重視すべきことは？", a: "年収だけでなく「キャリアの方向性」を明確にすることです。技術を極めるスペシャリスト、チームを率いるマネージャー、事業を動かすプロダクトマネージャーなど、40代以降のキャリアを見据えた選択が重要です。" },
  { q: "30代でIT業界未経験からの転職は可能？", a: "30代前半までなら十分可能です。ワークポートやdodaなど未経験OK求人が多いエージェントを利用しましょう。ただし年齢が上がるほど難易度は上がるため、30代前半のうちに動くのがおすすめです。" },
  { q: "何社くらいのエージェントに登録すべき？", a: "3社がベストです。IT特化型2社（レバテックキャリア＋Geekly等）＋総合型1社（doda等）の組み合わせで、専門性と幅広さの両方をカバーできます。" },
  { q: "30代の転職で年収の目安は？", a: "30代前半で500〜700万円、30代後半で600〜900万円が目安です。マネジメント経験やクラウド・AI等の先端スキルがあれば、30代でも1,000万円以上の求人に手が届きます。" },
];

const agents = [
  { rank: 1, name: "レバテックキャリア", type: "IT特化型", score: "4.8", jobs: "約25,000件", point: "30代のIT転職で最もおすすめ。年収UP率80%、技術を理解したアドバイザー、ミドル層の転職実績が圧倒的。", target: "30代全般" },
  { rank: 2, name: "Geekly", type: "IT特化型", score: "4.6", jobs: "約20,000件", point: "Web系・ゲーム業界に強い。平均年収UP額76万円。30代のキャリアアップに最適なマッチング精度。", target: "30代前半〜中盤" },
  { rank: 3, name: "ビズリーチ", type: "ハイクラス", score: "4.5", jobs: "約100,000件", point: "年収600万円以上のハイクラス特化。30代後半〜のリーダー・マネージャーポジションが豊富。", target: "30代後半" },
  { rank: 4, name: "doda（IT特化）", type: "総合型", score: "4.3", jobs: "約200,000件", point: "圧倒的な求人数で幅広い選択肢。30代のキャリアチェンジにも対応。転職サイト機能も利用可能。", target: "30代全般" },
  { rank: 5, name: "マイナビIT AGENT", type: "IT特化型", score: "4.2", jobs: "約18,000件", point: "丁寧なサポートが特徴。30代前半で初めての転職に最適。書類添削・面接対策が手厚い。", target: "30代前半" },
];

export default function ThirtiesAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="30代におすすめIT転職エージェントランキング【2026年】" description="30代エンジニアにおすすめのIT転職エージェントをランキング形式で紹介。年収UP実績、サポート体制を比較します。" url="/compare/30s-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "30代におすすめエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">30代におすすめIT転職エージェントランキング【2026年】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 30代エンジニア向けエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">30代はITエンジニアのキャリアにおいて最も重要な転換期です。スペシャリストかマネージャーか、方向性を決める時期であり、転職によって年収とキャリアを大きく伸ばせるチャンスでもあります。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、30代エンジニアに最適なIT転職エージェントをランキング形式で紹介します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代向けITエージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200"><span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-blue-100 text-blue-700" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span></td><td className="px-3 py-3 border border-slate-200">{a.jobs}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.score}/5.0</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年6月時点の概算。評価は当サイト独自の調査に基づきます。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800">{a.rank}位. {a.name}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-blue-100 text-blue-700" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{a.point}</p>
                <div className="flex gap-4 text-xs text-slate-500"><span>求人数: {a.jobs}</span><span>おすすめ年代: {a.target}</span><span>料金: 無料</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代のおすすめ組み合わせパターン</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代前半（年収500〜700万円狙い）</h3>
              <p className="text-sm text-blue-700">レバテックキャリア + Geekly + doda の3社。IT特化型で年収交渉力が高い2社＋総合型で幅広くカバー。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代後半（年収700〜1,000万円狙い）</h3>
              <p className="text-sm text-blue-700">レバテックキャリア + ビズリーチ + Geekly の3社。ハイクラス求人とIT特化型の組み合わせで最大の年収UPを狙う。</p>
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
          <h2 className="text-xl font-bold mb-3">30代は転職のゴールデンタイム</h2>
          <p className="text-blue-100 text-sm mb-4">スキルと経験が揃う30代こそ、年収UPとキャリアアップの最大のチャンス。まずは無料登録から始めましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "年収UPランキング", href: "/compare/salary-ranking/" },
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
