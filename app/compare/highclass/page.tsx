import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "ハイクラスIT転職エージェント比較【2026年】年収800万円以上 | ミドルエンジニア転職ラボ",
  description:
    "年収800万円以上のハイクラスIT転職に強いエージェントを徹底比較。CTO/VPoE/EMなどの管理職求人、外資系IT企業の求人が豊富なエージェントを厳選して紹介します。",
};

const faqs = [
  { q: "ハイクラスIT転職の年収基準は？", a: "一般的に年収800万円以上がハイクラスと定義されます。CTO/VPoEなどの経営層では年収1,500万円以上、外資系ITでは年収2,000万円以上のポジションもあります。" },
  { q: "ハイクラスIT転職で求められるスキルは？", a: "技術力＋マネジメント力の両方が求められます。具体的にはアーキテクチャ設計、技術選定、チームビルディング、ステークホルダーマネジメント、事業理解力です。" },
  { q: "外資系ITと日系ITの年収差は？", a: "外資系ITは日系ITの1.5〜2倍の年収水準です。同じシニアエンジニアでも日系800万円→外資系1,200〜1,600万円という差があります。ただし英語力が必須です。" },
  { q: "ハイクラス転職の期間は？", a: "平均3〜6ヶ月です。ポジションが限定的なため、スカウト型エージェント（ビズリーチ等）に登録して長期戦で構えるのが基本戦略です。" },
  { q: "スカウト型とエージェント型のどちらが良い？", a: "両方併用がベストです。ビズリーチ等のスカウト型で受動的にオファーを受けつつ、レバテック等のエージェント型で能動的に求人を探す両面作戦が最も効果的です。" },
  { q: "ハイクラス転職でのエージェントの使い方は？", a: "3〜4社に登録し、各社の非公開求人を比較するのが基本です。1社だけではハイクラスのポジションは見つかりにくいため、複数の経路から情報を集めましょう。" },
];

const agents = [
  { rank: 1, name: "ビズリーチ", score: "4.8", jobs: "約100,000件", salary: "600万〜3,000万円", point: "ハイクラス転職No.1。CTO/VPoE/EMスカウトが豊富。外資系IT、コンサルの求人も充実。" },
  { rank: 2, name: "レバテックキャリア", score: "4.7", jobs: "約25,000件", salary: "400万〜1,500万円", point: "IT特化型のハイクラス求人。技術を理解したアドバイザーの年収交渉力が抜群。年収UP率80%。" },
  { rank: 3, name: "JACリクルートメント", score: "4.5", jobs: "約15,000件", salary: "600万〜2,500万円", point: "外資系・日系大手のハイクラス特化。40代の管理職転職で圧倒的実績。コンサルタントの質が高い。" },
  { rank: 4, name: "リクルートダイレクトスカウト", score: "4.3", jobs: "約80,000件", salary: "600万〜2,000万円", point: "リクルート系のハイクラス特化。スカウト型で待つだけ。質の高いヘッドハンターが多い。" },
  { rank: 5, name: "Geekly", score: "4.2", jobs: "約20,000件", salary: "400万〜1,200万円", point: "Web系のハイクラスに特化。メガベンチャーのVPoE/テックリード求人が充実。" },
];

export default function HighclassPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ハイクラスIT転職エージェント比較【2026年】年収800万円以上" description="年収800万円以上のハイクラスIT転職に強いエージェントを徹底比較します。" url="/compare/highclass/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ハイクラスIT転職エージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ハイクラスIT転職エージェント比較【2026年】年収800万円以上</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | ハイクラスIT転職に強いエージェント厳選5社</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">年収800万円以上のハイクラスIT転職では、通常のエージェントとは異なるアプローチが必要です。CTO/VPoE/EMなどの管理職ポジションは非公開で募集されることが多く、ハイクラス特化のサービスを利用しないと出会えない求人が大半です。</p>
          <p className="text-slate-600 leading-relaxed">本記事では、ハイクラスIT転職に最適なエージェント・スカウトサービスを厳選して比較します。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハイクラスITエージェント比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">順位</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">年収レンジ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">おすすめ度</th></tr></thead>
              <tbody>{agents.map((a, i) => (<tr key={i} className="hover:bg-slate-50"><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.rank}位</td><td className="px-3 py-3 border border-slate-200 font-medium">{a.name}</td><td className="px-3 py-3 border border-slate-200">{a.jobs}</td><td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{a.salary}</td><td className="px-3 py-3 border border-slate-200 font-bold">{a.score}/5.0</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年6月時点の概算。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの詳細</h2>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.rank}位. {a.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{a.point}</p>
                <div className="flex gap-4 text-xs text-slate-500"><span>求人数: {a.jobs}</span><span>年収レンジ: {a.salary}</span></div>
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
          <h2 className="text-xl font-bold mb-3">ハイクラスIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">年収800万円以上のポジションは非公開が多数。ハイクラス特化サービスへの登録が第一歩です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
              { name: "ビズリーチ vs レバテック比較", href: "/compare/bizreach-vs-levtech/" },
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
