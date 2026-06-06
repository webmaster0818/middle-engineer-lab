import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "未経験OKのIT転職エージェント比較【2026年】 | ミドルエンジニア転職ラボ",
  description:
    "未経験からIT業界に転職できるエージェントを徹底比較。研修付き求人、ポテンシャル採用、サポート体制を比較し、キャリアチェンジに最適なエージェントを紹介します。",
};

const faqs = [
  { q: "未経験からIT業界に転職できる？", a: "可能です。IT人材不足は深刻で、2026年時点で約40万人の人材が不足しています。未経験者向けの研修付き求人やポテンシャル採用の枠が拡大しており、20代〜30代前半なら十分にチャンスがあります。" },
  { q: "未経験の場合の年収は？", a: "未経験入社の初年度年収は300〜400万円が目安です。ただしIT業界は昇給ペースが速く、2〜3年の経験を積めば500万円以上に到達する人も多いです。" },
  { q: "プログラミングスクールに通うべき？", a: "必須ではありませんが、基礎知識があると選考で有利です。オンラインの無料教材（Progate、paizaラーニング等）で基礎を学んでからエージェントに相談するのが効率的です。" },
  { q: "未経験で狙いやすい職種は？", a: "インフラエンジニア（CCNA等の資格で差別化可能）、テストエンジニア（論理的思考力があればOK）、ヘルプデスク（コミュニケーション力重視）が入りやすいです。" },
  { q: "30代でも未経験IT転職は可能？", a: "30代前半までなら可能性があります。30代後半以降は難易度が上がるため、プログラミングスクールでの事前学習や、ITに近い職種（PMO補佐、IT営業等）から入るのがおすすめです。" },
  { q: "未経験向けエージェントの選び方は？", a: "未経験OK求人の数、研修体制、キャリアアドバイザーのサポート密度を比較しましょう。ワークポートやdodaなど未経験対応に強いエージェントを2〜3社登録するのがおすすめです。" },
];

const agents = [
  { rank: 1, name: "ワークポート", score: "4.7", jobs: "約70,000件", point: "未経験IT転職No.1。対応スピードが速く、IT業界専門のコンシェルジュが手厚くサポート。全国対応。" },
  { rank: 2, name: "マイナビIT AGENT", score: "4.5", jobs: "約18,000件", point: "丁寧なサポートで転職初心者に最適。書類添削・面接対策が充実。未経験者向けの求人も豊富。" },
  { rank: 3, name: "doda（IT特化）", score: "4.3", jobs: "約200,000件", point: "圧倒的な求人数で未経験OK求人も多数。転職サイト機能で自分でも検索可能。研修付き求人も。" },
  { rank: 4, name: "リクルートエージェント（IT）", score: "4.1", jobs: "約300,000件", point: "最大の求人数。大手企業の未経験者向けIT職種も保有。面接対策の質が高い。" },
  { rank: 5, name: "type転職エージェント", score: "4.0", jobs: "約10,000件", point: "一都三県の未経験IT転職に強い。71%が年収UP。少数精鋭で丁寧なサポート。" },
];

export default function InexperiencedPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="未経験OKのIT転職エージェント比較【2026年】" description="未経験からIT業界に転職できるエージェントを徹底比較。研修付き求人、サポート体制を紹介します。" url="/compare/inexperienced/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "未経験OKエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">未経験OKのIT転職エージェント比較【2026年】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 未経験からのIT転職を完全サポート</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">IT業界は深刻な人材不足が続いており、未経験者の採用に積極的な企業が増えています。研修付き求人やポテンシャル採用を活用すれば、異業種からのキャリアチェンジも十分に可能です。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、未経験からのIT転職に強いエージェントを比較し、成功のコツを解説します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験IT転職エージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200">{a.jobs}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.score}/5.0</td></tr>))}</tbody>
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
                <div className="flex gap-4 text-xs text-slate-500"><span>求人数: {a.jobs}</span><span>料金: 無料</span></div>
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
          <h2 className="text-xl font-bold mb-3">未経験からIT業界へチャレンジしよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT人材不足の今がチャンス。未経験OK求人に強いエージェントに登録して、キャリアチェンジを始めましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
              { name: "ワークポート vs マイナビIT比較", href: "/compare/workport-vs-mynavi/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
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
