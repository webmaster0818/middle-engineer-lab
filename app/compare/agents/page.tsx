import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "IT転職エージェント10社徹底比較【2026年最新】料金・特徴・口コミ",
  description:
    "IT・Webエンジニアにおすすめの転職エージェント10社を徹底比較。料金、求人数、特徴、口コミ評価を一覧表で比較し、30代・40代エンジニアに最適なエージェントを紹介します。",
};

const faqs = [
  {
    q: "転職エージェントの利用に費用はかかる？",
    a: "全て無料です。転職エージェントは採用企業から成功報酬を受け取るビジネスモデルのため、求職者は面談、求人紹介、書類添削、面接対策、年収交渉まで一切費用がかかりません。",
  },
  {
    q: "IT特化型と総合型、どちらがおすすめ？",
    a: "エンジニアの転職にはIT特化型がおすすめです。技術トレンドや年収相場に精通したアドバイザーが多く、マッチングの精度が高いです。IT特化型2社+総合型1社の組み合わせがベストです。",
  },
  {
    q: "何社くらい登録すべき？",
    a: "3社がベストです。1社だけでは求人の幅が狭く、4社以上だと管理が煩雑になります。IT特化型2社+総合型1社の組み合わせで、効率的に転職活動を進めましょう。",
  },
  {
    q: "30代エンジニアにおすすめのエージェントは？",
    a: "レバテックキャリア（IT特化でNo.1）、Geekly（Web/ゲーム系に強い）、doda（求人数が多い総合型）の3社がおすすめです。年収600万〜800万円の求人が豊富です。",
  },
  {
    q: "40代エンジニアにおすすめのエージェントは？",
    a: "ビズリーチ（ハイクラス特化）、レバテックキャリア（IT特化でシニア求人あり）、JACリクルートメント（外資・管理職に強い）の3社がおすすめです。年収800万円以上のハイクラス求人に強いエージェントを選びましょう。",
  },
  {
    q: "エージェントの担当者と合わない場合は？",
    a: "遠慮なく担当変更を依頼しましょう。各社の問い合わせ窓口に連絡すれば対応してもらえます。担当者との相性は転職成功に直結するため、我慢せず変更を求めるのが正解です。",
  },
];

const agents = [
  { name: "レバテックキャリア", type: "IT特化型", jobs: "約25,000件", strength: "ITエンジニア転職No.1。技術に精通したアドバイザー。年収UP率80%。", target: "30代〜40代全般", rating: "4.5" },
  { name: "Geekly", type: "IT特化型", jobs: "約20,000件", strength: "Web・ゲーム業界に強い。マッチング精度が高い。平均年収UP額76万円。", target: "30代中心", rating: "4.3" },
  { name: "ビズリーチ", type: "ハイクラス", jobs: "約100,000件", strength: "年収600万円以上のハイクラス特化。スカウト型で効率的。", target: "35歳〜45歳", rating: "4.4" },
  { name: "マイナビIT AGENT", type: "IT特化型", jobs: "約18,000件", strength: "20代〜30代前半に強い。丁寧なサポートが特徴。", target: "25歳〜35歳", rating: "4.2" },
  { name: "ワークポート", type: "IT特化型", jobs: "約70,000件", strength: "未経験IT転職に強い。対応スピードが速い。", target: "20代〜30代", rating: "4.0" },
  { name: "doda(IT特化)", type: "総合型", jobs: "約200,000件", strength: "求人数No.1。大手企業の求人が豊富。", target: "全年代", rating: "4.1" },
  { name: "リクルートエージェントIT", type: "総合型", jobs: "約300,000件", strength: "最大手の安心感。全国の求人をカバー。", target: "全年代", rating: "4.0" },
  { name: "type転職エージェント", type: "IT特化型", jobs: "約10,000件", strength: "一都三県のIT転職に特化。71%が年収UP。", target: "30代中心", rating: "4.1" },
  { name: "Green", type: "IT特化型", jobs: "約30,000件", strength: "IT/Web業界特化の求人サイト。カジュアル面談可能。", target: "25歳〜40歳", rating: "3.9" },
  { name: "paiza転職", type: "IT特化型", jobs: "約5,000件", strength: "コーディングテストでスキルを証明。実力主義の転職。", target: "全年代", rating: "3.8" },
];

export default function CompareAgentsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="IT転職エージェント10社徹底比較【2026年最新】料金・特徴・口コミ"
        description="IT・Webエンジニアにおすすめの転職エージェント10社を徹底比較。料金、求人数、特徴、口コミ評価を一覧表で比較し、30代・40代エンジニアに最適なエージェントを紹介します。"
        url="/compare/agents/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エージェント比較" },
          { name: "IT転職エージェント10社比較" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          IT転職エージェント10社徹底比較【2026年最新】料金・特徴・口コミ
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | IT転職エージェント10社を徹底比較
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            IT・Webエンジニアの転職を成功させるためには、自分に合ったエージェント選びが重要です。本記事では、主要IT転職エージェント10社の料金、求人数、特徴、口コミを一覧で比較します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            全エージェントの利用は無料です。IT特化型2社+総合型1社の計3社を登録するのがおすすめです。
          </p>
        </section>

        {/* 比較表 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT転職エージェント10社 比較一覧</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">対象年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">評価</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{agent.name}</td>
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        agent.type === "IT特化型" ? "bg-blue-100 text-blue-700" :
                        agent.type === "ハイクラス" ? "bg-purple-100 text-purple-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {agent.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200">{agent.jobs}</td>
                    <td className="px-3 py-3 border border-slate-200">{agent.target}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{agent.rating}/5.0</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は2026年4月時点の概算。非公開求人を含む場合があります。評価は当サイト独自の調査に基づきます。</p>
        </section>

        {/* 各社詳細 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エージェントの特徴と口コミ</h2>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800">{i + 1}. {agent.name}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    agent.type === "IT特化型" ? "bg-blue-100 text-blue-700" :
                    agent.type === "ハイクラス" ? "bg-purple-100 text-purple-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {agent.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{agent.strength}</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>求人数: {agent.jobs}</span>
                  <span>対象: {agent.target}</span>
                  <span>料金: 無料</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 組み合わせパターン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代・目的別おすすめの組み合わせ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代エンジニア（年収UP狙い）</h3>
              <p className="text-sm text-blue-700">
                レバテックキャリア + Geekly + doda の3社。IT特化型で年収交渉力が高い2社と、求人数の多い総合型で幅広くカバー。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代エンジニア（ハイクラス）</h3>
              <p className="text-sm text-blue-700">
                ビズリーチ + レバテックキャリア + JACリクルートメント の3社。ハイクラス求人に特化した組み合わせで、年収800万円以上を狙う。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">未経験からのIT転職</h3>
              <p className="text-sm text-blue-700">
                ワークポート + マイナビIT AGENT + doda の3社。未経験者向けの求人が多いエージェントを中心に、幅広く応募先を確保。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">まずはIT特化型エージェントに登録しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            どのエージェントにするか迷ったら、まずはレバテックキャリアに登録するのがおすすめです。無料で市場価値の診断も受けられます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "転職エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/" },
              { name: "お役立ちガイド一覧", href: "/knowledge/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
