import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "フリーランスエージェント比較【2026年】ITエンジニア向け | ミドルエンジニア転職ラボ",
  description:
    "ITエンジニア向けフリーランスエージェントを徹底比較。月額単価、手数料、案件数、フルリモート率を比較し、高単価案件を獲得する方法を解説します。",
};

const faqs = [
  { q: "フリーランスエンジニアの平均年収は？", a: "フリーランスITエンジニアの平均年収は約780万円です。月額単価60〜80万円が中央値で、上位層は月額100万円以上（年収1,200万円以上）を得ています。" },
  { q: "フリーランスと正社員のどちらが良い？", a: "収入を最大化したいならフリーランス、安定性を重視するなら正社員がおすすめです。30代で正社員経験を積み、スキルが固まった段階でフリーランスに転向するのが一般的なキャリアパスです。" },
  { q: "フリーランスエージェントの手数料は？", a: "一般的にエンド企業が支払う金額の10〜25%がマージン（手数料）です。マージン率を公開しているエージェント（レバテックフリーランスなど）を選ぶと安心です。" },
  { q: "フルリモート案件は多い？", a: "ITフリーランス案件のフルリモート率は約40%で、正社員よりも高い傾向です。特にWeb系・クラウド系のバックエンド/フロントエンド案件はフルリモート率が高いです。" },
  { q: "フリーランスのデメリットは？", a: "案件の空白期間リスク、確定申告の手間、社会保険の自己負担、ローン審査のハードルが主なデメリットです。エージェントを利用すれば案件の空白は最小限に抑えられます。" },
  { q: "フリーランスエージェントは何社登録すべき？", a: "2〜3社がおすすめです。案件の選択肢を広げつつ、管理しやすい社数に収めましょう。" },
];

const agents = [
  { rank: 1, name: "レバテックフリーランス", score: "4.8", cases: "約50,000件", unit: "60〜120万円/月", point: "フリーランスエージェントNo.1。案件数・単価ともにトップクラス。マージン率公開で透明性が高い。" },
  { rank: 2, name: "Midworks", score: "4.5", cases: "約10,000件", unit: "55〜100万円/月", point: "正社員並みの福利厚生が魅力。給与保証制度あり。安定性とフリーランスの高収入を両立。" },
  { rank: 3, name: "ITプロパートナーズ", score: "4.3", cases: "約5,000件", unit: "50〜90万円/月", point: "週2〜3日案件が充実。副業・複業向けにも対応。スタートアップ案件が多い。" },
  { rank: 4, name: "フォスターフリーランス", score: "4.2", cases: "約15,000件", unit: "55〜110万円/月", point: "25年以上の実績。高単価案件が多く、シニアエンジニア向け。直請け案件の比率が高い。" },
  { rank: 5, name: "PE-BANK", score: "4.0", cases: "約50,000件", unit: "50〜100万円/月", point: "マージン率8〜12%と業界最低水準。エンジニアの手取りを最大化。全国対応。" },
];

export default function FreelanceAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="フリーランスエージェント比較【2026年】ITエンジニア向け" description="ITエンジニア向けフリーランスエージェントを徹底比較。月額単価、案件数を比較します。" url="/compare/freelance-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "フリーランスエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">フリーランスエージェント比較【2026年】ITエンジニア向け</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | フリーランスITエンジニア向けエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">フリーランスITエンジニアの需要は年々拡大しており、正社員の1.5〜2倍の報酬を得られるケースも珍しくありません。エージェントを活用すれば案件獲得の手間を大幅に削減できます。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、ITエンジニア向けフリーランスエージェントを月額単価・案件数・サポート体制で比較します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスエージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">案件数</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">月額単価</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200">{a.cases}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.unit}</td><td className="px-3 py-3 border border-slate-200 font-bold">{a.score}/5.0</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.rank}位. {a.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{a.point}</p>
                <div className="flex gap-4 text-xs text-slate-500"><span>案件数: {a.cases}</span><span>単価: {a.unit}</span></div>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">フリーランスで収入を最大化しよう</h2>
          <p className="text-blue-100 text-sm mb-4">正社員の1.5〜2倍の報酬も可能。まずはフリーランスエージェントに登録して単価を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
