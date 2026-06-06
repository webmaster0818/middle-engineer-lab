import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "40代におすすめIT転職エージェントランキング【2026年】 | ミドルエンジニア転職ラボ",
  description:
    "40代エンジニアにおすすめのIT転職エージェントをランキング形式で紹介。EM/CTO求人、ハイクラス特化、年収800万円以上の求人が豊富なエージェントを厳選して比較します。",
};

const faqs = [
  { q: "40代のIT転職は難しい？", a: "難しくなっていますが不可能ではありません。40代はマネジメント経験やアーキテクチャ設計力など高い専門性が求められます。IT特化型エージェントを利用すれば、40代の実績を正しく評価してくれる企業とマッチングできます。" },
  { q: "40代の転職で年収は上がる？", a: "IT特化型エージェントを利用した40代の約60%が年収UPに成功しています。EM/CTO/VPoEなどの管理職ポジションなら、年収1,000万円以上も十分可能です。" },
  { q: "40代で求められるスキルは？", a: "技術力に加えて、チームマネジメント、プロジェクト管理、ステークホルダー調整、技術選定・アーキテクチャ設計などが求められます。いわゆる「テックリード」「EM」「CTO」的な役割を担えるかが評価ポイントです。" },
  { q: "40代の転職活動の期間は？", a: "平均3〜6ヶ月と30代より長めです。ポジションが限定的なため、じっくり探す必要があります。ビズリーチ等のスカウト型に登録して待ちつつ、レバテックキャリア等で能動的に探す両面作戦がおすすめです。" },
  { q: "フリーランスという選択肢は？", a: "40代のフリーランスITエンジニアは増えています。月額単価80〜150万円が相場で、年収換算で960〜1,800万円。ただし安定性や福利厚生がないため、正社員とフリーランスの両方を検討することをおすすめします。" },
  { q: "何社くらいのエージェントに登録すべき？", a: "40代は3〜4社がおすすめ。ビズリーチ（スカウト型）+ レバテックキャリア（IT特化型）+ JACリクルートメント（ハイクラス）の3社が黄金パターンです。" },
];

const agents = [
  { rank: 1, name: "ビズリーチ", type: "ハイクラス", score: "4.8", jobs: "約100,000件", point: "40代のハイクラスIT転職No.1。CTO/VPoE/EMなどの経営層スカウトが豊富。年収800万円以上の求人が中心。", target: "40代全般" },
  { rank: 2, name: "レバテックキャリア", type: "IT特化型", score: "4.7", jobs: "約25,000件", point: "IT業界に特化した深い専門性。40代のシニアエンジニア・テックリード求人が充実。年収UP率80%。", target: "40代全般" },
  { rank: 3, name: "JACリクルートメント", type: "ハイクラス", score: "4.5", jobs: "約15,000件", point: "外資系IT・日系大手の管理職に強い。40代のハイクラス転職で豊富な実績。コンサルタントの質が高い。", target: "40代前半〜中盤" },
  { rank: 4, name: "doda（IT特化）", type: "総合型", score: "4.2", jobs: "約200,000件", point: "幅広い求人から40代向けを探せる。事業会社のCIO/情シス部長ポジションも。", target: "40代全般" },
  { rank: 5, name: "リクルートエージェント（IT）", type: "総合型", score: "4.0", jobs: "約300,000件", point: "最大の求人数で40代の選択肢を最大化。SIer・メーカー系の管理職求人が豊富。", target: "40代全般" },
];

export default function FortiesAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="40代におすすめIT転職エージェントランキング【2026年】" description="40代エンジニアにおすすめのIT転職エージェントをランキング形式で紹介。ハイクラス特化のエージェントを厳選比較します。" url="/compare/40s-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "40代におすすめエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">40代におすすめIT転職エージェントランキング【2026年】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 40代エンジニア向けエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">40代のIT転職は「ハイクラス×専門性」がキーワードです。技術力とマネジメント経験を活かし、CTO/VPoE/EMなどの経営層ポジションを狙える年代です。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、40代エンジニアのキャリアアップに最適なIT転職エージェントをランキング形式で紹介します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代向けITエージェント比較一覧</h2>
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
                <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800">{a.rank}位. {a.name}</h3><span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${a.type === "IT特化型" ? "bg-blue-100 text-blue-700" : a.type === "ハイクラス" ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"}`}>{a.type}</span></div>
                <p className="text-sm text-slate-600 mb-2">{a.point}</p>
                <div className="flex gap-4 text-xs text-slate-500"><span>求人数: {a.jobs}</span><span>おすすめ年代: {a.target}</span><span>料金: 無料</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代のおすすめ組み合わせ</h2>
          <div className="bg-blue-50 rounded-lg p-5">
            <h3 className="font-bold text-blue-800 mb-2">黄金パターン：ビズリーチ + レバテックキャリア + JACリクルートメント</h3>
            <p className="text-sm text-blue-700">ビズリーチでスカウトを待ちつつ、レバテックでIT特化の求人を能動的に探し、JACで外資系・管理職を狙う。3方向から最適なポジションを見つけ出します。</p>
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
          <h2 className="text-xl font-bold mb-3">40代のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">経験と実績が最も評価される40代。ハイクラス特化のエージェントで、CTO/VPoE/EMポジションを狙いましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "ビズリーチ vs レバテック比較", href: "/compare/bizreach-vs-levtech/" },
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
